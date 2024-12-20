"use client"; // Add this directive at the top

import { useState, ChangeEvent, FormEvent } from "react";
import Navigation from "../../0/0-navigation/navigation";
import CustomCursor from "../../0/0-cursor/page"
import Footer from '../../0/0-footer/footer'

export default function Subscribe() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage("");
    setError("");

    const { name, email } = formData;

    if (!name || !email) {
      setError("Both name and email are required.");
      return;
    }

    try {
      const response = await fetch("/api/addContact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || "Successfully subscribed!");
        setFormData({ name: "", email: "" }); // Reset form
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    }
  };

  return (
    <div>
      {/* Import Navigation */}
      <CustomCursor />

      {/* Import Navigation */}
      <Navigation />

    <div style={{ maxWidth: "400px", margin: "auto", padding: "2rem" }}>
      <h1>Subscribe to our Newsletter</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="name" style={{ display: "block", marginBottom: ".5rem" }}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: ".5rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: ".5rem" }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: ".5rem" }}
          />
        </div>
        <button type="submit" style={{ padding: ".5rem 1rem", background: "#0070f3", color: "#fff", border: "none", cursor: "pointer" }}>
          Subscribe
        </button>
      </form>
      {message && <p style={{ color: "green", marginTop: "1rem" }}>{message}</p>}
      {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
    </div>
    <Footer />
    </div>
  );
}
