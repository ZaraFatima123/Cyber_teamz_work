import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = ({ activeTab, setActiveTab }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#ffffff" : "#121212";
    document.body.style.color = darkMode ? "#000000" : "#ffffff";
  };

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      setTimeout(() => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,es,fr,de,it,hi",
              layout:
                window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            "google_translate_element"
          );
        }
      }, 500);
    };

    const scriptId = "google-translate-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onerror = () =>
        console.error("Google Translate script failed to load");
      document.body.appendChild(script);
    }

    return () => {
      const script = document.getElementById(scriptId);
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Phishing Detect
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li
              className={`nav-item ${
                activeTab === "home" && "active-nav-link"
              }`}
            >
              <Link
                className="nav-link"
                to="/"
                onClick={() => setActiveTab("home")}
              >
                Home
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeTab === "analytics" && "active-nav-link"
              }`}
            >
              <Link
                className="nav-link"
                to="/analytics"
                onClick={() => setActiveTab("analytics")}
              >
                Analytics
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeTab === "smartcheck" && "active-nav-link"
              }`}
            >
              <Link
                className="nav-link"
                to="/smartcheck"
                onClick={() => setActiveTab("smartcheck")}
              >
                Smart Check
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeTab === "security-campaign" && "active-nav-link"
              }`}
            >
              <Link
                className="nav-link"
                to="/security-campaign"
                onClick={() => setActiveTab("security-campaign")}
              >
                Security Campaign
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeTab === "am-i-pawned" && "active-nav-link"
              }`}
            >
              <Link
                className="nav-link"
                to="/am-i-pawned"
                onClick={() => setActiveTab("am-i-pawned")}
              >
                Am I Pwned?
              </Link>
            </li>
          </ul>
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

              {/* Google Translate Widget Inside Settings */}
              <div className="mt-3">
                <h6>Language Preferences</h6>
                <div id="google_translate_element"></div>
              </div>

              {/* Account Dropdown */}
              <div className="dropdown">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  id="accountDropdown"
                  data-bs-toggle="dropdown"
                >
                  Account Options
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="accountDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <button className="dropdown-item" data-bs-dismiss="modal">
                      Close
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
