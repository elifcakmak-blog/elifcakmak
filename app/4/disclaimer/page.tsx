"use client";

import TermsNav from '../../0/0-termsnav/termsnav';
import './disclaimer.css';
import Footer from '../../0/0-footer/footer';
import CustomCursor from '../../0/0-cursor/page'; // Cursor Import

export default function DisclaimerPolicy() {
  return (
    <div>
      {/* Import Cursor */}
      <CustomCursor /> 

      {/* Import Navigation */}
      <TermsNav /> 
    <div className="disclaimer-policy-container">
      
      

      <img src={"../page-titles/disclaimer.svg"} alt="Disclaimer Policy" className="disclaimer-image" />

      <div className="disclaimer-policy-card">
        <p>
          <strong>Effective Date:</strong> 12/17/2024
        </p>

        <h3>Intro</h3>
          <p>
            <strong>Muslim Success path</strong>, <strong>Effortless Works</strong>, <strong>Effortless Quest</strong> are collectively referred to as &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;.
          </p>


        <h3>No Guarantees</h3>
        <p>
          While we aim for the highest level of accuracy and reliability in all our content, products, and services, we cannot guarantee their completeness or reliability.
        </p>

        <h3>Third-Party Platforms</h3>
        <p>
          Purchases and services conducted through Etsy, Notion, and Fiverr are subject to their respective terms and policies. We are not responsible for their platform-specific issues.
        </p>

        <h3>External Links</h3>
        <p>
          We may link to third-party websites, but we are not responsible for their content or policies. We are only responsible for our own posts and content on these platforms.
        </p>

        <h3>No Liability</h3>
        <p>
          We are not liable for any losses or damages resulting from the use of our websites, services, or purchases of our products.
        </p>
      </div>

     
      
    </div>
     {/* Footer */}
     <Footer />
    </div>
  );
}
