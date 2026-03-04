// app/api/subscribe/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email } = await req.json();

    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }

    const CLOSE_API_KEY = process.env.CLOSE_API_KEY;

    if (!CLOSE_API_KEY) {
      console.error("CLOSE_API_KEY is missing!");
      return NextResponse.json({ message: "Server configuration error" }, { status: 500 });
    }

    // 🔹 Encode API key for Basic Auth
    const authHeader = "Basic " + Buffer.from(`${CLOSE_API_KEY}:`).toString("base64");

    // 1️⃣ Create the Contact
    const contactResponse = await fetch("https://api.close.com/api/v1/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": authHeader,
      },
      body: JSON.stringify({
        name: `${firstName || ""} ${lastName || ""}`.trim(),
        emails: [{ email, type: "office" }],
      }),
    });

    const contactData = await contactResponse.json();

    if (!contactResponse.ok) {
      console.error("Failed to create contact:", {
        status: contactResponse.status,
        body: contactData,
      });

      if (contactData.error && contactData.error.includes("already exists")) {
        return NextResponse.json({ message: "You’re already signed up for our newsletter!" }, { status: 200 });
      }

      return NextResponse.json(
        { message: contactData.error || "Something went wrong. Please try again later." },
        { status: contactResponse.status }
      );
    }

    const contactId = contactData.id;

    // 2️⃣ Create the Lead associated with the Contact
    const leadResponse = await fetch("https://api.close.com/api/v1/lead/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": authHeader,
      },
      body: JSON.stringify({
        name: `Newsletter Signup - ${firstName} ${lastName}`,
        contacts: [{ id: contactId }],
        tags: ["Newsletter"], // optional tag
        status: "New Muslim Success Path Subscriber!",  // use your desired status
      }),
    });

    const leadData = await leadResponse.json();

    if (!leadResponse.ok) {
      console.error("Failed to create lead:", {
        status: leadResponse.status,
        body: leadData,
      });

      // ✅ Friendly message if contact already has a lead
      if (leadData['field-errors']?.contacts) {
        return NextResponse.json(
          { message: "You’re already signed up for our newsletter!" },
          { status: 200 }
        );
      }

      // Any other errors
      return NextResponse.json(
        { message: "Something went wrong. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Successfully subscribed!" }, { status: 200 });

  } catch (error) {
    console.error("CLOSE CRM ERROR (catch block):", error);
    return NextResponse.json({ message: "Something went wrong. Please try again later." }, { status: 500 });
  }
}