import React from "react";

const EducationalSection = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        💡 Learn About Phishing and Stay Safe
      </h2>

      <div className="section">
        <h3>Latest Phishing Techniques</h3>
        <p>
          Phishing attacks are constantly evolving. Some of the latest phishing
          techniques include:
        </p>
        <ul>
          <li>
            <strong>Spearfishing:</strong> Targeting specific individuals or
            organizations using personalized information.
          </li>
          <li>
            <strong>Whaling:</strong> A form of phishing targeted at high-level
            executives or important figures.
          </li>
          <li>
            <strong>Vishing:</strong> Phishing over the phone or voice calls to
            trick victims into revealing sensitive information.
          </li>
          <li>
            <strong>Smishing:</strong> Phishing through SMS or text messages to
            gain access to sensitive data.
          </li>
        </ul>
      </div>

      <div className="section mt-4">
        <h3>How to Recognize Phishing Attacks</h3>
        <p>Here are some common signs of phishing emails or messages:</p>
        <ul>
          <li>
            Suspicious or generic greetings, like "Dear user" instead of a
            specific name.
          </li>
          <li>
            Unexpected attachments or links. Always check the URL before
            clicking.
          </li>
          <li>
            Urgency or threats, such as "Immediate action required!" or "Your
            account will be locked if you don’t respond."{" "}
          </li>
          <li>Misspellings or grammatical errors in the message content.</li>
        </ul>
      </div>

      {/* Tips for Securing Personal Information */}
      <div className="section mt-4">
        <h3>Tips for Securing Your Personal Information</h3>
        <ul>
          <li>
            <strong>Use Two-Factor Authentication (2FA):</strong> Always enable
            2FA for your accounts whenever possible.
          </li>
          <li>
            <strong>Regularly Update Passwords:</strong> Change passwords for
            your important accounts regularly.
          </li>
          <li>
            <strong>Be Cautious with Links and Attachments:</strong> Always
            verify the source before clicking on any links or downloading
            attachments.
          </li>
          <li>
            <strong>Check the URL:</strong> Ensure the URL is legitimate and
            uses "https://" before entering sensitive information.
          </li>
        </ul>
      </div>

      {/* Educational Videos Section */}
      <div className="section mt-4">
        <h3>Educational Videos</h3>
        <p>
          Watch the following short videos to learn more about phishing attacks
          and how to stay safe:
        </p>
        <div className="videos">
          <div className="video">
            <h4>Phishing Awareness</h4>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/GZc-CpV5Z1k"
              title="Phishing Awareness"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video mt-3">
            <h4>How to Avoid Phishing Scams</h4>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/s8GfuRRi7GU"
              title="How to Avoid Phishing Scams"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalSection;
