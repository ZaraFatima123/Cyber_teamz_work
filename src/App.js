import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Phishing from "./Phishing"; // Import the Phishing component
import Navbar from "./Navbar";
// import phish from "./phish"; 

function App() {
  return (
    <div>
      <Navbar />
      <Phishing />
      {/* <phish /> */}
    </div>
  );
}

export default App;
