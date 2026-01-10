"use client";

import TermsNav from '../../0/0-termsnav/termsnav';
import './terms.css';
import Footer from '../../0/0-footer/footer';
import CustomCursor from '../../0/0-cursor/page'; // Custom Cursor Import

export default function TermsOfService() {
  return (
    <div>
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <TermsNav />
    <div className="terms-container">
      

      <img src="../page-titles/terms.svg" alt="Terms and Service" className="terms-image" />

      <div className="terms-card">
        <p>
          <strong>Effective Date:</strong> 12/17/2024
        </p>
        <p>
          By accessing or using any services or websites under <strong>Effortless Quest</strong>, <strong>Effortless Works</strong>, <strong>Muslim Success Path</strong>, and <strong>Elif Çakmak</strong>  you agree to the following Terms of Service:
        </p>

        <h3> Intro </h3>
        <p>
          <strong>Effortless Quest</strong>, <strong>Effortless Works</strong>, <strong>Muslim Success Path</strong>, and <strong>Elif Çakmak</strong> are collectively referred to as &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;.
        </p>

        <h3>Use of the Websites</h3>
        <p>
          You must be at least 18 years old to purchase our products or use our services.
        </p>
        <p>
          Unauthorized use, including hacking or disrupting the sites, is prohibited.
        </p>

        <h3>Purchases and Transactions</h3>
        <p>
          All product transactions are conducted via Etsy and Notion, and service transactions are conducted via Fiverr. By purchasing through these platforms, you agree to their terms and policies.
        </p>

        <h3>User Content</h3>
        <p>
          You are responsible for any content you upload or share on our platforms.
        </p>
        <p>
          We reserve the right to remove content that violates our policies.
        </p>

        <h3>Limitation of Liability</h3>
        <p>
          We are not liable for damages arising from the use of our sites, products, or services.
        </p>

        <h3>Changes to Terms</h3>
        <p>
          We reserve the right to modify these terms at any time. Changes will be posted on this page.
        </p>
      </div>

      
    </div>
    {/* Footer */}
    <Footer />
    </div>
  );
}
