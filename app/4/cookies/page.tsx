"use client";

import TermsNav from '../../0/0-termsnav/termsnav';
import './cookies.css';
import Footer from '../../0/0-footer/footer';
import CustomCursor from '../../0/0-cursor/page'; // Cursor Import

export default function CookiePolicy() {
  return (
    <div>
      {/* Import Cursor */}
      <CustomCursor /> 

      {/* Import Navigation */}
      <TermsNav /> 
    <div className="cookie-policy-container">
      
      

      <img src={"../page-titles/cookies.svg"} alt="Cookie Policy" className="cookies-image" />

      <div className="cookie-policy-card">
        <p>
          <strong>Effective Date:</strong> 12/17/2024
        </p>

        <h3> Intro </h3>
        <p>
          <strong>Effortless Quest</strong>, <strong>Effortless Works</strong>, <strong>EasyFlow Media</strong>, and <strong>Elif Çakmak</strong> are collectively referred to as &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;.
        </p>

        <h3>What Are Cookies?</h3>
        <p>
          Cookies are small data files stored on your device to remember preferences and improve website functionality.
        </p>

        <h3>Third-Party Cookies</h3>
        <p>
          While we do not use cookies on our sites, Etsy, Notion, and Fiverr may collect cookies to track your activity, serve relevant advertisements, and improve user experience when interacting with their services.
        </p>

        <h3>Managing Cookies</h3>
        <p>
          You can control cookies through your browser settings. Disabling cookies may affect the functionality of websites you visit, including third-party services like Etsy, Notion, and Fiverr.
        </p>
      </div>

      
      
    </div>
    {/* Footer */}
    <Footer />
    </div>
  );
}
