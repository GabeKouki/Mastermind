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
            Effective date: September 1, 2025
          </p>
        </div>

        <div className="PrivacyPolicyContent">
          <section className="PrivacySection">
            <h2>Who We Are</h2>
            <p>
              Mastermind Virtual Family Office LLC (“Mastermind VFO,” “MMVFO,” “we,” “our,” “us”)
              provides family office and concierge services. We are not a certified public accounting
              firm, registered investment adviser, or licensed insurance agency. Instead, we may
              introduce you to or coordinate with affiliated companies or trusted third parties
              (collectively, “Affiliates”) that provide CPA, investment advisory, insurance, or related
              services.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, share, and protect your information in
              compliance with U.S. federal and state privacy requirements and financial industry
              standards.
            </p>
          </section>

          <section className="PrivacySection">
            <h2>
              <FileText size={20} />
              Information We Collect
            </h2>
            <p>We collect information directly from you, from your communications with us, and from website interactions. Categories include:</p>
            <ul>
              <li><strong>Identifiers:</strong> name, address, email, phone number, date of birth</li>
              <li><strong>Financial data:</strong> income, assets, liabilities, net worth, investment goals, tax jurisdiction, account details</li>
              <li><strong>Insurance data:</strong> application forms, claims history, policy needs</li>
              <li><strong>Professional information:</strong> employment, business interests, and affiliations</li>
              <li><strong>Communications data:</strong> SMS/text, emails, phone call logs, and form submissions</li>
              <li><strong>Technical information:</strong> IP address, browser/device data, usage patterns, cookies</li>
              <li><strong>Sensitive personal information (SPI):</strong> government IDs (SSN, driver’s license), account numbers, health-related data for insurance (only when provided)</li>
            </ul>
          </section>

          <section className="PrivacySection">
            <h2>How We Use Your Information</h2>
            <p>We use your information for legitimate business purposes, including:</p>
            <ul>
              <li>Responding to inquiries and requests</li>
              <li>Evaluating eligibility for services offered by our Affiliates</li>
              <li>Facilitating introductions and sharing information with Affiliates</li>
              <li>Conducting due diligence for compliance, anti-money laundering (AML), and know-your-customer (KYC) requirements</li>
              <li>Providing family office coordination services</li>
              <li>Communicating about services and events (with appropriate consent)</li>
              <li>Meeting legal and regulatory obligations</li>
              <li>Protecting against fraud and security threats</li>
            </ul>
            <p>We do not use or disclose your information for unrelated purposes without notice and, where required, consent.</p>
          </section>

          <section className="PrivacySection">
            <h2>Sharing Your Information</h2>
            <p>We may disclose your personal information as follows:</p>
            <ul>
              <li><strong>Affiliates:</strong> CPAs, investment advisers, insurance agencies, or other licensed professionals, for the purpose of providing requested services</li>
              <li><strong>Service providers:</strong> IT, hosting, CRM, analytics, compliance, and administrative vendors under strict confidentiality</li>
              <li><strong>Regulators and legal authorities:</strong> where required by law, regulation, subpoena, or court order</li>
              <li><strong>Professional advisors:</strong> auditors, attorneys, or consultants</li>
            </ul>
            <p><strong>We do not sell or rent your personal information to third parties.</strong></p>
            <p><strong>SMS Consent:</strong> SMS consent is not shared with third parties or affiliates.</p>
          </section>

          <section className="PrivacySection">
            <h2>Marketing & Communications</h2>
            <ul>
              <li>
                <strong>Email:</strong> We comply with CAN-SPAM. Marketing emails include our mailing address and a functional unsubscribe link. Transactional/service emails may continue where legally permitted.
              </li>
              <li>
                <strong>SMS/Text:</strong> If you opt in, message frequency may vary. Msg &amp; data rates may apply. Reply STOP to cancel, HELP for help. SMS consent is not required to purchase services. SMS consent is not shared with third parties or affiliates.
              </li>
              <li>
                <strong>Phone/Voicemail:</strong> Calls may be recorded for compliance and quality assurance.
              </li>
            </ul>
          </section>

          <section className="PrivacySection">
            <h2>Data Security</h2>
            <p>We maintain a written Information Security Program with administrative, technical, and physical safeguards designed to:</p>
            <ul>
              <li>Encrypt data at rest and in transit</li>
              <li>Restrict access to authorized personnel only</li>
              <li>Conduct periodic risk assessments, audits, and penetration testing</li>
              <li>Maintain backup, disaster recovery, and incident response protocols</li>
              <li>Comply with FTC Safeguards, SEC/FINRA Reg S-P and Reg S-ID, IRS Publication 4557, and NAIC cybersecurity standards where applicable</li>
            </ul>
          </section>

          <section className="PrivacySection">
            <h2>Data Retention</h2>
            <p>We retain information only as long as necessary to:</p>
            <ul>
              <li>Fulfill the purposes described in this policy</li>
              <li>Comply with regulatory recordkeeping requirements (e.g., SEC/FINRA, IRS, NAIC)</li>
              <li>Resolve disputes and enforce agreements</li>
            </ul>
            <p>Typical retention: 5–7 years, unless a longer period is legally required.</p>
          </section>

          <section className="PrivacySection">
            <h2>Legal Basis for Processing</h2>
            <p>We process personal data on the following grounds:</p>
            <ul>
              <li><strong>Consent:</strong> When you voluntarily provide information or opt into communications</li>
              <li><strong>Contractual necessity:</strong> To facilitate services requested through our Affiliates</li>
              <li><strong>Legal obligation:</strong> Compliance with financial, tax, and insurance regulations</li>
              <li><strong>Legitimate interests:</strong> Operating, securing, and improving our business</li>
            </ul>
          </section>

          <section className="PrivacySection">
            <h2>State Privacy Rights</h2>
            <p>
              Residents of states with privacy laws (CA, CO, CT, VA, TX, FL, and others) may have rights including:
            </p>
            <ul>
              <li><strong>Access/Know</strong> what data we hold</li>
              <li><strong>Correction</strong> of inaccuracies</li>
              <li><strong>Deletion</strong> of personal information (with exceptions)</li>
              <li><strong>Portability</strong> (receive a copy in a usable format)</li>
              <li><strong>Opt-out</strong> of targeted advertising or sale/sharing of personal data (we do not sell/share for these purposes)</li>
              <li><strong>Limit use of sensitive personal information</strong> (we do not use SPI for advertising)</li>
            </ul>
            <p>
              Requests can be submitted via <a href="mailto:privacy@mmvfo.com">privacy@mmvfo.com</a> or our web form at <a href="https://mmvfo.com/privacy-request" target="_blank" rel="noreferrer">mmvfo.com/privacy-request</a>. We honor Global Privacy Control (GPC) signals where applicable.
            </p>
          </section>

          <section className="PrivacySection">
            <h2>Cookies &amp; Online Tracking</h2>
            <p>
              We use cookies and analytics tools to improve our site. You may manage cookies via your browser or our cookie banner. We do not use cookies to sell/share data for cross-context advertising.
            </p>
          </section>

          <section className="PrivacySection">
            <h2>Children’s Privacy</h2>
            <p>
              Our services are intended for adults. We do not knowingly collect information from individuals under 13.
            </p>
          </section>

          <section className="PrivacySection">
            <h2>Your Choices</h2>
            <ul>
              <li><strong>Email:</strong> Use unsubscribe links or contact us</li>
              <li><strong>SMS:</strong> Reply STOP to cancel</li>
              <li><strong>Data requests:</strong> Email <a href="mailto:privacy@mmvfo.com">privacy@mmvfo.com</a> or use our web form</li>
              <li><strong>Authorized agents:</strong> You may use an agent to submit requests, subject to verification</li>
            </ul>
            <p>We will not discriminate against you for exercising your rights.</p>
          </section>

          <section className="PrivacySection">
            <h2>
              <Mail size={20} />
              Contact Us
            </h2>
            <div className="PrivacyContactInfo">
              <p>
                <strong>Mastermind Virtual Family Office LLC</strong>
              </p>
              <p>
                <strong>Email: </strong>
                <a href="mailto:privacy@mmvfo.com">privacy@mmvfo.com</a>
              </p>
            </div>
          </section>

          <section className="PrivacySection">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this policy periodically. Updates will be posted at
              {' '}
              <a href="https://mmvfo.com/privacy-policy" target="_blank" rel="noreferrer">mmvfo.com/privacy-policy</a>
              {' '}
              with a revised “Effective Date.”
            </p>
          </section>

          <section className="PrivacySection">
            <h2>Placement &amp; Accessibility</h2>
            <ul>
              <li>A link to this Privacy Policy appears in the footer of every page on <em>mmvfo.com</em>.</li>
              <li>A link is placed next to consent language on all forms that collect personal information, especially where SMS consent is requested.</li>
              <li>Accessible to all users, including those with disabilities, per ADA/WCAG standards.</li>
            </ul>
          </section>
        </div>
      </div>

      <BackToHomeButton />
    </div>
  );
};

export default PrivacyPolicy;
