import '../styles/PrivacyPolicy.css';

import React, { useEffect } from 'react';
import { Shield, Mail, FileText, Clock } from 'lucide-react';
import BackToHomeButton from './BackToHomeButton';

const PrivacyPolicy = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);

  return (
    <div className="PrivacyPolicy">
      <div className="PrivacyPolicyContainer">
        <div className="PrivacyPolicyHeader">
          <div className="PrivacyPolicyIcon">
            <Shield size={48} />
          </div>
          <h1 className="PrivacyPolicyTitle">Privacy Policy</h1>
          <p className="PrivacyPolicyLastUpdated">
            <Clock size={16} />
            Last updated: July 2025
          </p>
        </div>

        <div className="PrivacyPolicyContent">
          <section className="PrivacySection">
            <h2>Our Commitment to Your Privacy</h2>
            <p>
              At Mastermind Family Offices, we respect your privacy and are committed to protecting 
              your personal information. This privacy policy explains how we handle your personal 
              information when you use our website and contact us through our contact form.
            </p>
          </section>

          <section className="PrivacySection">
            <h2>
              <FileText size={20} />
              Information We Collect
            </h2>
            <p>When you fill out our contact form, we collect the following information:</p>
            <ul>
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Net Worth</li>
              <li>Tax jurisdiction</li  >
              <li>Investment amount</li>
              <li>Your financial goals and objectives</li>
            </ul>
            <p>
              We do not collect any other personal information unless you voluntarily provide it 
              in your message.
            </p>
          </section>

          <section className="PrivacySection">
            <h2>How We Use Your Information</h2>
            <p>
              We use the information you provide solely to respond to your inquiry and discuss 
              potential financial services opportunities. Specifically, we use your data to:
            </p>
            <ul>
              <li>Evaluate your eligibility for our exclusive services</li>
              <li>Provide information about our family office services</li>
              <li>Schedule consultations or meetings if requested</li>
              <li>Conduct due diligence as required by financial regulations</li>
            </ul>
            <p>
              <strong>We do not use this information for marketing purposes</strong> beyond 
              responding to your initial inquiry.
            </p>
          </section>

          <section className="PrivacySection">
            <h2>How We Store and Protect Your Data</h2>
            <p>
              When you submit our contact form, your information is processed through secure 
              third-party services and stored in our secure client management systems. We take 
              comprehensive steps to keep this data secure, including:
            </p>
            <ul>
              <li>Using enterprise-grade encryption for data transmission and storage</li>
              <li>Limiting access to authorized personnel only</li>
              <li>Regular security audits and compliance reviews</li>
              <li>Secure backup and disaster recovery procedures</li>
            </ul>
            <p>
              We retain your contact information only as long as necessary to respond to your 
              inquiry and maintain business records, typically no longer than 7 years in accordance 
              with financial services regulations.
            </p>
          </section>

          <section className="PrivacySection">
            <h2>Sharing Your Information</h2>
            <p>
              <strong>We do not share, sell, or rent your personal information to third parties.</strong> 
              Your information remains confidential and is used exclusively for business communication 
              between you and Mastermind Family Offices.
            </p>
            <p>
              The only exceptions would be if required by law, financial regulations, or to protect 
              our legal rights. In such cases, we would notify you if legally permitted to do so.
            </p>
          </section>

          <section className="PrivacySection">
            <h2>Legal Basis for Processing</h2>
            <p>
              We process your personal information based on your consent, which you provide by 
              voluntarily filling out and submitting our contact form. Additionally, we may process 
              your information for legitimate business interests and regulatory compliance requirements 
              in the financial services industry.
            </p>
          </section>

          <section className="PrivacySection">
            <h2>Your Rights</h2>
            <p>You have the following rights regarding your personal data:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal data we have about you</li>
              <li><strong>Deletion:</strong> Request that we delete your personal information</li>
              <li><strong>Correction:</strong> Request that we correct any inaccurate information</li>
              <li><strong>Withdrawal:</strong> Withdraw your consent for us to contact you</li>
              <li><strong>Portability:</strong> Request your data in a portable format</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the information below.
            </p>
          </section>

          <section className="PrivacySection">
            <h2>
              <Mail size={20} />
              Contact Us
            </h2>
            <p>
              If you have any questions about this privacy policy or would like to exercise 
              your data rights, please contact us at:
            </p>
            <div className="PrivacyContactInfo">
              <p>
                <strong>Email: </strong> 
                <a href="mailto:privacy@mastermindfo.com">
                  privacy@mmfos.com
                </a>
              </p>
              <p>
                <strong>Subject Line:</strong> Privacy Policy Inquiry
              </p>
            </div>
          </section>

          <section className="PrivacySection">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time to reflect changes in our 
              practices or applicable regulations. Any changes will be posted on this page with 
              an updated "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </section>
        </div>
      </div>
      <BackToHomeButton />
    </div>
  );
};

export default PrivacyPolicy;