import React from "react";
import {
  FaShieldAlt,
  FaLock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChartLine,
  FaPlug,
  FaGraduationCap,
  FaGlobe,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Purpose() {
  return (
    <div className="container mt-5" id="purpose">
      <div
        className="card p-5 shadow-lg rounded-xl"
        style={{ backgroundColor: "#2b2b3a", color: "#ffffff" }}
      >
        <h2
          className="mb-4 text-center"
          style={{ color: "#0dcaf0", fontSize: "2rem", fontWeight: "600" }}
        >
          <FaGlobe className="me-2" /> Protect Your Digital World with Smart
          Securer
        </h2>

        <p
          className="px-3 text-center"
          style={{ fontSize: "1.1rem", color: "#cccccc" }}
        >
          Stay ahead of cyber threats with Smart Securer, providing essential
          tools and resources to safeguard your digital space. From URL scanning
          to comprehensive education, we've got you covered.
        </p>

        <hr className="bg-light my-4" />

        <div className="row text-center mt-4">
          <div className="col-md-4 mb-4">
            <div className="d-flex flex-column align-items-center">
              <FaShieldAlt size={50} className="text-warning mb-3" />
              <h5 className="text-white mb-2">URL Scan</h5>
              <p className="text-light">
                Quickly scan URLs for potential threats and vulnerabilities to
                avoid malicious sites.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="d-flex flex-column align-items-center">
              <FaEnvelope size={50} className="text-danger mb-3" />
              <h5 className="text-white mb-2">Mail Check</h5>
              <p className="text-light">
                Verify email safety and detect potential phishing attempts or
                spam before you open suspicious messages.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="d-flex flex-column align-items-center">
              <FaMapMarkerAlt size={50} className="text-primary mb-3" />
              <h5 className="text-white mb-2">Maps & Graphs</h5>
              <p className="text-light">
                Visualize security data with maps and graphs to track and
                analyze cyber threats across regions and timeframes.
              </p>
            </div>
          </div>
        </div>

        <div className="row text-center mt-4">
          <div className="col-md-4 mb-4">
            <div className="d-flex flex-column align-items-center">
              <FaPlug size={50} className="text-success mb-3" />
              <h5 className="text-white mb-2">Extension</h5>
              <p className="text-light">
                Install the Smart Securer extension to enhance your browsing
                security and detect threats in real-time.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="d-flex flex-column align-items-center">
              <FaGraduationCap size={50} className="text-info mb-3" />
              <h5 className="text-white mb-2">Education</h5>
              <p className="text-light">
                Learn essential cybersecurity principles, techniques, and tools
                through interactive tutorials and resources.
              </p>
            </div>
          </div>

          {/* Security Campaign */}
          <div className="col-md-4 mb-4">
            <div className="d-flex flex-column align-items-center">
              <FaShieldAlt size={50} className="text-warning mb-3" />
              <h5 className="text-white mb-2">Security Campaign</h5>
              <p className="text-light">
                Join our global security campaign to raise awareness about cyber
                threats and how to protect against them.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <Link to="/analytics">
            <button className="btn btn-primary btn-lg px-5 py-3 rounded-pill">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Purpose;
