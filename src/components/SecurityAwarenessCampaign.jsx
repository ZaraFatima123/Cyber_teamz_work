import React from "react";

const SecurityAwarenessCampaign = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🔐 Security Awareness Campaign</h2>

      <div className="section mb-4">
        <h3>Join Our Security Awareness Campaign</h3>
        <p>
          Help us raise awareness about phishing and online security. Download
          our free resources, spread the word, and share phishing prevention
          tips on social media.
        </p>
      </div>

      <div className="section mb-4">
        <h3>Share Phishing Prevention Tips on Social Media</h3>
        <p>
          Spread awareness by sharing these phishing prevention tips on your
          social media profiles. Use the buttons below to share:
        </p>
        <div className="social-share">
          <a
            href="https://twitter.com/intent/tweet?text=Phishing%20is%20a%20serious%20threat.%20Learn%20how%20to%20protect%20yourself%20by%20downloading%20free%20resources%20here!%20#PhishingPrevention"
            target="_blank"
            className="btn btn-primary"
            rel="noopener noreferrer"
          >
            Share on Twitter
          </a>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://your-website.com"
            target="_blank"
            className="btn btn-primary mx-3"
            rel="noopener noreferrer"
          >
            Share on Facebook
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https://your-website.com"
            target="_blank"
            className="btn btn-primary"
            rel="noopener noreferrer"
          >
            Share on LinkedIn
          </a>
        </div>
      </div>

      {/* Need Help? Contact Us */}
      <div className="section mb-4">
        <h3>📞 Need Help? Contact Us</h3>
        <p>
          If you suspect a phishing attack or need assistance, reach out to the
          helpline numbers below:
        </p>
        <ul>
          <li>
            <strong>Cyber Crime Helpline:</strong> 155260 (India)
          </li>
          <li>
            <strong>National Consumer Helpline:</strong> 1800-11-4000
          </li>
          <li>
            <strong>Email Support:</strong>{" "}
            <a href="mailto:support@cybersafe.com">support@cybersafe.com</a>
          </li>
          <li>
            <strong>Report Online:</strong>{" "}
            <a
              href="https://www.cybercrime.gov.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.cybercrime.gov.in
            </a>
          </li>
        </ul>
      </div>
    </div> 
  );
};

export default SecurityAwarenessCampaign;
