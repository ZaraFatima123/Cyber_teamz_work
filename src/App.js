import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dash from "./components/Dash";
import Analytics from "./components/Analytics";
import SecurityAwarenessCampaign from "./components/SecurityAwarenessCampaign";
import Pwned from "./components/Pwned";
import CyberSecurityQuiz from "./components/CyberSecurityQuiz";
import EducationalSection from "./components/EducationalSection";
// import Login from "./components/Login";
import Spam_Api from "./components/Spam_Api";
import BreachChecker from "./components/BreachChecker";
// import CyberMap from "./components/CyberMap";
import Crime from "./components/Crime";
import ForumCard from "./components/ForumCard";
import ForumPostDetails from "./components/ForumPostDetails";
import Forums from "./components/Forums";
import Naa from "./components/Naa";
import Home from "./components/Home";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <Router>
      <div id="content-to-translate">
        <div style={styles.wrapper}>
          <Naa activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="container mt-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/smartcheck" element={<EducationalSection />} />
              {/* <Route path="/login" element={<Login />} /> */}
              <Route
                path="/security-campaign"
                element={<SecurityAwarenessCampaign />}
              />
              <Route path="/am-i-pawned" element={<Pwned />} />
              <Route path="/spam" element={<Spam_Api />} />
              <Route path="/quiz" element={<CyberSecurityQuiz />} />
              <Route path="/breach" element={<BreachChecker />} />
              {/* <Route path="/cyber" element={<CyberMap />} /> */}
              <Route path="/cyber" element={<Crime />} />
              <Route path="/forumcard" element={<ForumCard />} />
              <Route path="/forumpostdetails" element={<ForumPostDetails />} />
              <Route path="/forums" element={<Forums />} />
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
