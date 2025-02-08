import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import {
  FaGraduationCap,
  FaShieldAlt,
  FaVideo,
  FaBullhorn,
  FaCheckCircle,
} from "react-icons/fa";
import "./EducationalSection.css"; 
import EducationImage from "../assets/undraw_education_3vwh.svg";

const EducationalSection = () => {
  const navigate = useNavigate();
  const handleStartQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div className="container mt-5">
      {/* Heading and Image Section */}
      <div className="row align-items-center">
        <div className="col-md-7 text-center text-md-left">
          <h1 className="main-heading">
            Learn How to Protect Yourself from Phishing Scams
          </h1>
          <p className="intro-text">
            Phishing scams are increasingly sophisticated. This page will guide
            you through identifying phishing attempts, understanding common
            phishing techniques, and offer some quiz related to cyber security.
          </p>
        </div>
        <div className="col-md-4 text-center text-md-right">
          <div className="svg-container">
            <img
              src={EducationImage}
              alt="Education Illustration"
              className="img-fluid rounded img-resize"
            />
          </div>
        </div>
      </div>

     
      <div className="row justify-content-center">
        {/* Card 1: Phishing Awareness */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card card-custom card-phishing">
            <div className="card-body text-center p-5">
              <FaShieldAlt
                size={60}
                style={{ color: "#f39c12" }}
                className="card-icon"
              />
              <h2 className="card-title mt-3">
                <strong>Defend Against Phishing Scams</strong>
              </h2>
              <p className="card-text mt-3">
                Phishing scams are designed to steal your sensitive data. Learn
                how to recognize and avoid them before they compromise your
                security.
              </p>
              <ul className="mt-2">
                <li>
                  <FaBullhorn /> Unsolicited emails or messages from unknown
                  senders
                </li>
                <li>
                  <FaBullhorn /> Urgent requests to update personal information
                </li>
                <li>
                  <FaBullhorn /> Suspicious URLs that don’t match official
                  websites
                </li>
              </ul>
              <p className="mt-3">
                Always verify the source before providing any personal details.
                If something feels off, trust your instincts and avoid clicking
                on links.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Phishing Techniques */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card card-custom card-techniques">
            <div className="card-body p-5 text-center">
              <FaGraduationCap
                size={60}
                style={{ color: "#e67e22" }}
                className="card-icon"
              />
              <h3 className="card-title text-center">
                <strong>Unmask Advanced Phishing Techniques</strong>
              </h3>
              <p>
                Phishing attacks have evolved over time, and cybercriminals are
                using more advanced techniques. Understanding these techniques
                is key to avoiding falling victim.
              </p>
              <ul>
                <li>
                  <FaBullhorn /> <strong>Spearfishing</strong>: Personalized
                  attacks using information gathered from social media to target
                  individuals.
                </li>
                <li>
                  <FaBullhorn /> <strong>Whaling</strong>: A more targeted form
                  of phishing aimed at high-profile individuals like executives
                  or government officials.
                </li>
                <li>
                  <FaBullhorn /> <strong>Vishing</strong>: Fraudulent phone
                  calls designed to manipulate victims into sharing sensitive
                  information.
                </li>
                <li>
                  <FaBullhorn /> <strong>Smishing</strong>: Phishing attacks via
                  SMS or text messages with malicious links or requests for
                  personal information.
                </li>
              </ul>
              <p className="mt-3">
                Remember to stay cautious on all platforms. Cybercriminals can
                use any channel to attempt a phishing attack.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Secure Personal Information */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card card-custom card-security">
            <div className="card-body p-5 text-center">
              <FaCheckCircle
                size={60}
                style={{ color: "#2ecc71" }}
                className="card-icon"
              />
              <h3 className="card-title text-center">
                <strong>Protect Your Personal Information</strong>
              </h3>
              <p>
                Take proactive steps to safeguard your personal data. Security
                is about being cautious and implementing the right measures.
              </p>
              <ul>
                <li>
                  <FaBullhorn />{" "}
                  <strong>Enable Two-Factor Authentication (2FA)</strong>:
                  Adding an extra layer of security to your accounts.
                </li>
                <li>
                  <FaBullhorn /> <strong>Use Strong, Unique Passwords</strong>:
                  Avoid using the same password across multiple accounts and
                  make them complex.
                </li>
                <li>
                  <FaBullhorn />{" "}
                  <strong>Be Cautious with Links and Attachments</strong>: Never
                  open suspicious attachments or click on unknown links.
                </li>
                <li>
                  <FaBullhorn /> <strong>Always Verify URLs</strong>: Ensure
                  that URLs are legitimate and that websites are secured (look
                  for HTTPS).
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 4: Educational Videos */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card card-custom card-videos">
            <div className="card-body p-5 text-center">
              <FaVideo
                size={60}
                style={{ color: "#8e44ad" }}
                className="card-icon"
              />
              <h3 className="card-title text-center">
                <strong>Watch & Learn: Phishing Awareness</strong>
              </h3>
              <p className="text-center mt-3">
                Explore these videos to deepen your understanding of phishing
                scams and learn how to avoid them.
              </p>
              <div className="row">
                <div className="col-6 mb-4">
                  <h4 className="text-center">Phishing Awareness</h4>
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/GZc-CpV5Z1k"
                    title="Phishing Awareness"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="col-6 mb-4">
                  <h4 className="text-center">How to Avoid Phishing</h4>
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/s8GfuRRi7GU"
                    title="How to Avoid Phishing"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <button
                className="btn btn-primary btn-sm shadow-lg rounded-pill mt-3"
                onClick={() => window.open("https://www.youtube.com")}
              >
                Watch More Videos
              </button>
            </div>
          </div>
        </div>

        {/* Card 5: Quiz */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card card-custom card-quiz">
            <div className="card-body text-center p-5">
              <FaBullhorn
                size={60}
                style={{ color: "#2980b9" }}
                className="card-icon"
              />
              <h3 className="card-title mt-3">
                <strong>Test Your Knowledge on Phishing</strong>
              </h3>
              <p className="card-text mt-3">
                Challenge yourself with this quiz and see how well you
                understand phishing scams.
              </p>
              <button
                className="btn btn-primary btn-lg shadow-lg rounded-pill mt-4"
                onClick={handleStartQuiz}
              >
                Start the Quiz Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalSection;
