import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState("");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = !darkMode ? "#121212" : "#ffffff";
    document.body.style.color = !darkMode ? "#ffffff" : "#000000";
  };

  const checkPwned = async () => {
    if (!email) return alert("Please enter an email.");
    const apiUrl = `https://haveibeenpwned.com/api/v3/breachedaccount/${email}`;
    const headers = {
      "User-Agent": "PhishingDetect",
      "hibp-api-key": "YOUR_API_KEY",
    };

    try {
      const response = await fetch(apiUrl, { headers });
      if (response.ok) {
        const data = await response.json();
        alert(
          `Your email has been found in the following breaches: ${data
            .map((breach) => breach.Name)
            .join(", ")}`
        );
      } else {
        alert("No breaches found for this email.");
      }
    } catch (error) {
      console.error("Error checking email:", error);
      alert("Error checking email.");
    }
  };

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg ${
          darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
        }`}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            style={{ color: darkMode ? "white" : "black" }}
          >
            Phishing Detect
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  style={{ color: darkMode ? "white" : "black" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/analytics"
                  style={{ color: darkMode ? "white" : "black" }}
                >
                  Analytics
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/smartcheck"
                  style={{ color: darkMode ? "white" : "black" }}
                >
                  Smart Check
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/login"
                  style={{ color: darkMode ? "white" : "black" }}
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/security-campaign"
                  style={{ color: darkMode ? "white" : "black" }}
                >
                  Security Campaign
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/am-i-pawned"
                  style={{ color: darkMode ? "white" : "black" }}
                >
                  Am I pawned
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch my-3">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="darkModeSwitch"
                onClick={toggleDarkMode}
              />
              <label
                className={`form-check-label ${
                  darkMode ? "text-light" : "text-dark"
                }`}
                htmlFor="darkModeSwitch"
                style={{ color: darkMode ? "yellow" : "black" }}
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
