"use client";

import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <section className="footer-card-container">
      <div className="footer h-70 py-8 rounded-lg shadow-lg">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-3 gap-8 mt-[-10px]">
            {/* Elif Çakmak Links */}
            <div className="footer-card elif-card p-6 shadow-md rounded-md text-center">
              <h3 className="text-2xl font-bold">Elif Çakmak</h3>
              <a href="/1-about" className="footer-link">About</a>
              <a href="/1-podcast" className="footer-link">Podcast</a>
              <a href="/1-apps" className="footer-link">Apps</a>
              <a href="/1-books" className="footer-link">Books</a>
              <a href="/1-roadmap" className="footer-link">Road Map</a>
              <a href="/1-newsletter" className="footer-link">Newsletter</a>
            </div>

            {/* Effortless Works Links */}
            <div className="footer-card effortless-card p-6 shadow-md rounded-md text-center">
              <h3 className="text-2xl font-bold">Effortless Works</h3>
              <a 
                href="https://www.effortlessworks.elifcakmak.blog/products" 
                className="footer-link" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                Products
              </a>
              <a 
                href="https://www.effortlessworks.elifcakmak.blog/services" 
                className="footer-link"
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                Services
              </a>
              <a 
                href="https://www.effortlessworks.elifcakmak.blog/courses" 
                className="footer-link"
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                Courses
              </a>
              <a 
                href="https://www.effortlessworks.elifcakmak.blog/info" 
                className="footer-link"
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                Info
              </a>
              <a 
                href="https://www.effortlessworks.elifcakmak.blog/contact" 
                className="footer-link"
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                Contact
              </a>
            </div>


            {/* Social Media Links */}
            <div className="footer-card easyflow-card p-6 shadow-md rounded-md text-center">
              <h3 className="text-2xl font-bold">EasyFlow Media</h3>
              <div className="social-icons-container">
                <a href="https://www.facebook.com/profile.php?id=61569395896969" target="_blank" rel="noopener noreferrer">
                  <img src="/facebook.svg" alt="Facebook" className="social-icon" />
                </a>
                <a href="https://www.instagram.com/easyflow.media" target="_blank" rel="noopener noreferrer">
                  <img src="/instagram.svg" alt="Instagram" className="social-icon" />
                </a>
                <a href="https://www.tiktok.com/@easyflow.media" target="_blank" rel="noopener noreferrer">
                  <img src="/tiktok.svg" alt="TikTok" className="social-icon" />
                </a>
                <a href="https://www.youtube.com/@EasyFlow-Media" target="_blank" rel="noopener noreferrer">
                  <img src="/youtube.svg" alt="YouTube" className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/elif-cakmak/" target="_blank" rel="noopener noreferrer">
                  <img src="/linkedin.svg" alt="LinkedIn" className="social-icon" />
                </a>
                <a href="https://x.com/EasyFlow_Media" target="_blank" rel="noopener noreferrer">
                  <img src="/twitter.svg" alt="Twitter" className="social-icon" />
                </a>
              </div>
            </div>
          </div>

          {/* Policy Links */}
          <div className="footer-links mt-8">
            <a href="/4-privacy" className="footer-link">Privacy Policy</a>
            <a href="/4-terms" className="footer-link">Terms of Service</a>
            <a href="/4-return" className="footer-link">Return Policy</a>
            <a href="/4-cookies" className="footer-link">Cookie Policy</a>
            <a href="/4-disclaimer" className="footer-link">Disclaimer</a>
          </div>

          {/* Copyright */}
          <div className="text-center mt-4 footer-copyright">
            <p>&copy; 2024 Elif Çakmak, EasyFlow Media, Effortless Works. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
