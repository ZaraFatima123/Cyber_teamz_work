import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Phishing from "./components/Phishing";
import Analytics from "./components/Analytics";
import EducationalSection from "./components/EducationalSection";
import Login from "./components/Login";
import SecurityAwarenessCampaign from "./components/SecurityAwarenessCampaign";
import AmIPwned from "./components/AmIPwned";
import CyberSecurityQuiz from "./components/CyberSecurityQuiz";

function App() {

  return (
    <Router>
      <div id="content-to-translate">
        <div style={styles.wrapper}>
          <Navbar />
          <div className="container mt-5">
            <Routes>
              <Route path="/" element={<Phishing />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/smartcheck" element={<EducationalSection />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/security-campaign"
                element={<SecurityAwarenessCampaign />}
              />
              <Route path="/am-i-pawned" element={<AmIPwned />} />
              <Route path="/quiz" element={<CyberSecurityQuiz />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

const styles = {
  wrapper: {
    backgroundColor: "#1e1e2f",
    minHeight: "100vh",
    color: "#fff",
  },
};

export default App;
