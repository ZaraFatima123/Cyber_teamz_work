import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

const Naa = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#ffffff" : "#121212";
    document.body.style.color = darkMode ? "#000000" : "#ffffff";
  };

  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        if (window.google?.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,es,fr,de,it,hi,ta,ar,ur",
              layout:
                window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            "google_translate_element"
          );
        }
      };
    }

    const scriptId = "google-translate-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Smart Securers
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/url-checker">
                Url Checker
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                id="urlCheckersDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Email Checkers
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="urlCheckersDropdown"
              >
                <li>
                  <Link className="dropdown-item" to="/breach">
                    Breach Checker
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/spam">
                    Am I Spammed?
                  </Link>
                </li>
              </ul>
            </li>

            {/* Dropdown for Analytics & Map */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                id="analyticsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Analytics & Map
              </Link>
              <ul className="dropdown-menu" aria-labelledby="analyticsDropdown">
                <li>
                  <Link className="dropdown-item" to="/analytics">
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/cyber">
                    Cyber Threat Map
                  </Link>
                </li>
              </ul>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/smartcheck">
                Smart Check
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/security-campaign">
                Security Campaign
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/forums">
                CyberSecurity Forums
              </Link>
            </li>
          </ul>

          {/* User Settings Button */}
          <button
            className="btn btn-outline-secondary ms-3"
            data-bs-toggle="modal"
            data-bs-target="#settingsModal"
          >
            <FaUserCircle size={24} />
          </button>
        </div>
      </div>

      {/* Settings Modal */}
      <div
        className="modal fade"
        id="settingsModal"
        tabIndex="-1"
        aria-labelledby="settingsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div
            className={`modal-content p-3 ${
              darkMode ? "bg-dark text-white" : "bg-light text-dark"
            }`}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="settingsModalLabel">
                Settings
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex flex-column gap-3">
              {/* Dark Mode Toggle */}
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="darkModeSwitch"
                  onChange={toggleDarkMode}
                  checked={darkMode}
                />
                <label className="form-check-label" htmlFor="darkModeSwitch">
                  {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </label>
              </div>

              {/* Google Translate Widget */}
              <div className="mt-3">
                <h6>Language Preferences</h6>
                <div id="google_translate_element"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Naa;
