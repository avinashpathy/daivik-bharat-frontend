// TermsAndConditions.js
import React from "react";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <div className="terms-content">
        <h1 className="terms-main-title">Terms and Conditions</h1>

        <div className="terms-section">
          <p className="terms-intro">
            Please read these Terms and Conditions ("Terms", "Terms and
            Conditions") carefully before using the www.daivikbharat.in website.
          </p>

          <p>
            Your access to and use of the Service is conditioned on your
            acceptance of and compliance with these Terms. These Terms apply to
            all visitors, users and others who access or use the Service.
          </p>

          <p>
            By accessing or using the Service you agree to be bound by these
            Terms. If you disagree with any part of the terms then you may not
            access the Service.
          </p>
        </div>

        <div className="terms-section">
          <h2>Links To Other Websites</h2>
          <p>
            Our Service may contain links to third-party web sites or services
            that are not owned or controlled by Daivik Bharat.
          </p>
          <p>
            Daivik Bharat has no control over, and assumes no responsibility
            for, the content, privacy policies, or practices of any third party
            web sites or services. You further acknowledge and agree that Daivik
            Bharat shall not be responsible or liable, directly or indirectly,
            for any damage or loss caused or alleged to be caused by or in
            connection with use of or reliance on any such content, goods or
            services available on or through any such web sites or services.
          </p>
          <p>
            We strongly advise you to read the terms and conditions and privacy
            policies of any third-party web sites or services that you visit.
          </p>
        </div>

        <div className="terms-section">
          <h2>Changes</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material we will try to
            provide at least 30 days notice prior to any new terms taking
            effect. What constitutes a material change will be determined at our
            sole discretion.
          </p>
          <p>
            By continuing to access or use our Service after those revisions
            become effective, you agree to be bound by the revised terms. If you
            do not agree to the new terms, please stop using the Service.
          </p>
        </div>

        <div className="terms-section">
          <h2>Contact</h2>
          <p>If you have any questions about these Terms, please contact us.</p>
          <p className="contact-email">
            Email:{" "}
            <a href="mailto:daivikbharat1@gmail.com">daivikbharat1@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
