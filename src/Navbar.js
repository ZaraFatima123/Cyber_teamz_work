import React, { useState } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Toggle the background color of the body dynamically
    document.body.style.backgroundColor = !darkMode ? '#121212' : '#ffffff'; // Dark mode background color
    // Change text color when dark mode is toggled
    document.body.style.color = !darkMode ? '#ffffff' : '#000000'; // White text for dark mode, black for light mode
  };

  return (
    <div>
      {/* Navbar with conditional classes */}
      <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: darkMode ? 'white' : 'black' }}>Phishing Detect</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{ color: darkMode ? 'white' : 'black' }}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: darkMode ? 'white' : 'black' }}>Analytics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: darkMode ? 'white' : 'black' }}>Get a Smart Check</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: darkMode ? 'white' : 'black' }}>Am I Pwned</a>
              </li>
            </ul>

            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}

            {/* Dark Mode Toggle Switch */}
            <div className="form-check form-switch my-3">
              <input className="form-check-input" type="checkbox" role="switch" id="darkModeSwitch" onClick={toggleDarkMode} />
              <label 
                className={`form-check-label ${darkMode ? 'text-light' : 'text-dark'}`} 
                htmlFor="darkModeSwitch"
                style={{ color: darkMode ? 'yellow' : 'black' }}
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
