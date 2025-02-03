import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom"; 

const EducationalSection = () => {
  const navigate = useNavigate();
  const handleStartQuiz = () => {
    navigate("/quiz"); 
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg mb-5" style={{ borderRadius: "15px" }}>
        <h2
          className="text-center mb-4"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          💡 Learn About Phishing and Stay Safe
        </h2>
        <p className="text-center" style={{ fontSize: "1.1rem" }}>
          Phishing is one of the most common forms of cybercrime, where
          malicious actors attempt to steal sensitive information. This quiz
          will test your knowledge on how to recognize phishing attempts and
          protect yourself. Solving this quiz is an important step to stay
          secure in today's digital world.
        </p>
      </div>

      <div
        className="card p-4 shadow-lg mb-5"
        style={{ borderRadius: "15px", background: "#f5f5f5" }}
      >
        <h3 className="text-center mb-3" style={{ fontWeight: "bold" }}>
          Solve this Quiz to Learn More About Cybercrime!
        </h3>
        <p
          className="text-center"
          style={{ fontSize: "1.1rem", color: "#555" }}
        >
          Want to know how cybercriminals use phishing to steal your data? Take
          the quiz to test your knowledge and learn the latest techniques to
          stay safe from these threats. The more you know, the better prepared
          you'll be!
        </p>
        <div className="d-flex justify-content-center mt-4">
          <button
            className="btn btn-lg btn-info shadow-lg rounded-pill px-5 py-3"
            onClick={handleStartQuiz}
            style={{
              fontSize: "1.1rem",
              fontWeight: "bold",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            Take the Quiz Now
          </button>
        </div>
      </div>

      <div className="card p-4 shadow-lg mb-4" style={{ borderRadius: "15px" }}>
        <h3 className="text-center mb-3" style={{ fontWeight: "bold" }}>
          Latest Phishing Techniques
        </h3>
        <p>
          Phishing attacks are constantly evolving. Some of the latest phishing
          techniques include:
        </p>
        <ul style={{ fontSize: "1.1rem" }}>
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

      <div className="card p-4 shadow-lg mb-4" style={{ borderRadius: "15px" }}>
        <h3 className="text-center mb-3" style={{ fontWeight: "bold" }}>
          Tips for Securing Your Personal Information
        </h3>
        <ul style={{ fontSize: "1.1rem" }}>
          <li>
            <strong>Use Two-Factor Authentication (2FA):</strong> Always enable
            2FA for your accounts.
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

      <div className="card p-4 shadow-lg mb-5" style={{ borderRadius: "15px" }}>
        <h3 className="text-center mb-4" style={{ fontWeight: "bold" }}>
          Educational Videos
        </h3>
        <p className="text-center" style={{ fontSize: "1.1rem" }}>
          Watch these short videos to learn more about phishing attacks and how
          to stay safe:
        </p>
        <div className="row">
          <div className="col-md-6 mb-3">
            <h4 className="text-center">Phishing Awareness</h4>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/GZc-CpV5Z1k"
              title="Phishing Awareness"
              frameBorder="0"
              allowFullScreen
              style={{ borderRadius: "10px" }}
            ></iframe>
          </div>
          <div className="col-md-6 mb-3">
            <h4 className="text-center">How to Avoid Phishing Scams</h4>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/s8GfuRRi7GU"
              title="How to Avoid Phishing Scams"
              frameBorder="0"
              allowFullScreen
              style={{ borderRadius: "10px" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalSection;
