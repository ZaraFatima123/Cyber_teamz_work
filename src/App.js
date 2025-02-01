import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Phishing from "./components/Phishing";
import Navbar from "./components/Navbar";
import Analytics from "./components/Analytics";
import EducationalSection from "./components/EducationalSection";
import Login from "./components/Login";
import SecurityAwarenessCampaign from "./components/SecurityAwarenessCampaign"; // Import SecurityAwarenessCampaign
import AmIPwned from "./components/AmIPwned";


function App() {
  return (
      <Router>
        <Navbar />
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<Phishing />} /> {/* VirusTotal API-based phishing detection */}
            <Route path="/analytics" element={<Analytics />} /> {/* Analytics page */}
            <Route path="/smartcheck" element={<EducationalSection />} /> {/* Educational Section */}
            <Route path="/login" element={<Login />} /> {/* Login page */}
            <Route path="/security-campaign" element={<SecurityAwarenessCampaign />} /> {/* Security awareness campaign */}
            <Route path="/am-i-pawned" element={<AmIPwned />}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
