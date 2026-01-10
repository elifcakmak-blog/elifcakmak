"use client";

import TermsNav from '../../0/0-termsnav/termsnav';
import './return.css';
import Footer from '../../0/0-footer/footer';
import CustomCursor from '../../0/0-cursor/page'; // Cursor Import

export default function ReturnPolicy() {
  return (
    <div>
       {/* Import Cursor */}
       <CustomCursor /> 

        {/* Import Navigation */}
        <TermsNav /> 
    <div className="return-policy-container">
      
     

      <img src={"../page-titles/returns.svg"} alt="Return Policy" className="return-image" />

      <div className="return-policy-card">
        <p>
          <strong>Effective Date:</strong> 12/17/2024
        </p>

        <p>
          We strive to ensure your satisfaction with every purchase from <strong>Effortless Quest</strong>, <strong>Effortless Works</strong>, <strong>Muslim Success Path</strong>, and <strong>Elif Çakmak</strong>. If you&apos;re not satisfied, we&apos;re here to help.
        </p>

        <h3>Intro</h3>
        <p>
          <strong>Effortless Quest</strong>, <strong>Effortless Works</strong>, <strong>Muslim Success Path</strong>, and <strong>Elif Çakmak</strong> are collectively referred to as &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;.
        </p>


        <h3>Purchases Through Etsy</h3>
        <p>
          For products sold on Etsy, the return and refund policies are governed by Etsy&apos;s platform policies. Please refer to our Etsy shop for specific terms.
        </p>

        <h3>Purchases Through Notion</h3>
        <p>
          For products sold on Notion, the return and refund policies are governed by Notion&apos;s platform policies. Please refer to our Notion shop for specific terms.
        </p>

        <h3>Services Through Fiverr</h3>
        <p>
          Refunds for services booked through Fiverr will adhere to Fiverr&apos;s platform policies. Please review the terms on Fiverr for resolution.
        </p>

        <h3>Contact for Assistance</h3>
        <p>
          If you have any questions, contact us at <a href="mailto:effortlessworks@effortless.quest">support@effortless.quest</a>.
        </p>
      </div>

      
      
    </div>
    {/* Footer */}
    <Footer />
    </div>
  );
}
