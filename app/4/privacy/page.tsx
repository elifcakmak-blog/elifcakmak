"use client";

import TermsNav from '../../0/0-termsnav/termsnav';
import './privacy.css';
import Footer from '../../0/0-footer/footer';
import CustomCursor from '../../0/0-cursor/page'; // Custom Cursor Import

export default function PrivacyPolicy() {
  return (
    <div>
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <TermsNav />
    <div className="privacy-container">
      

      <img src="../page-titles/privacy.svg" alt="Privacy Policy" className="privacy-image" />

      <div className="privacy-card">
        <p>
          <strong>Effective Date:</strong> 12/17/2024
        </p>
        <p>
          At <strong>Muslim Success Path</strong>, <strong>Effortless Works</strong>, and <strong>Effortless Quest</strong> (collectively referred to as &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), your privacy is our priority. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our websites and services.
        </p>

        <h3>Information We Collect</h3>
        <h4>Personal Information:</h4>
        <p>
          We collect names and email addresses solely for our newsletter. You may request to have this information removed at any time. We do not collect phone numbers, or usage data directly, but Etsy, Fiverr, and Notion may collect such data as part of their platform operations.
        </p>
        <h4>Non-Personal Information:</h4>
        <p>
          We do not collect browser type, IP address, device information, or usage statistics directly, but Etsy, Fiverr, and Notion may collect such data as part of their platform operations.
        </p>

        <h3>How We Use Your Information</h3>
          <ul>
            <li>To facilitate transactions through Etsy and Notion for products and Fiverr for services.</li>
            <li>We do not directly use personal information to improve our websites or customer service. However, Etsy, Fiverr, and Notion may collect and use such data to enhance their own platforms, customer service, and marketing strategies.</li>
            <li>To send updates, newsletters, or promotional materials from Effortless Works, Elif Cakmak, Muslim Success Path, or Effortless Quest (with your consent).</li>
          </ul>

        <h3>Sharing Your Information</h3>
        <p>
          We do not sell or share your personal information with anyone. Etsy, Fiverr, and Notion may follow different rules when it comes to your data and interaction with third parties. We only use data as part of essential service integrations (e.g., Etsy, Fiverr, and Notion).
        </p>

        <h3>Cookies</h3>
        <p>
          We do not use cookies directly on our websites. However, Etsy, Fiverr, and Notion may use cookies as part of their platform operations to enhance user experience, track interactions, and improve services.
        </p>

        <h3>Your Rights</h3>
        <p>
          Access, update, or delete your personal information by contacting us at <a href="mailto:support@effortless.quest">support@effortless.quest</a>.
        </p>
      </div>

      
    </div>
    {/* Footer */}
    <Footer />
    </div>
  );
}
