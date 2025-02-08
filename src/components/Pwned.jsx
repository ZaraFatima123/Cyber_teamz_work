// AmIPwned.jsx
import React, { useState } from "react";

const AmIPwned = () => {
  const [email, setEmail] = useState("");
  const [isPwned, setIsPwned] = useState(false);
  const [pwnedMessage, setPwnedMessage] = useState("");

  const checkPwned = async () => {
    if (!email) {
      alert("Please enter an email.");
      return;
    }

    const apiUrl = `https://haveibeenpwned.com/api/v3/breachedaccount/${email}`;
    const headers = {
      "User-Agent": "PhishingDetect",
      "hibp-api-key": "xxx", 
    };

    try {
      const response = await fetch(apiUrl, { headers });
      if (response.ok) {
        const data = await response.json();
        setIsPwned(true);
        setPwnedMessage(
          `Your email has been found in the following breaches: ${data
            .map((breach) => breach.Name)
            .join(", ")}`
        );
      } else if (response.status === 404) {
        setIsPwned(false);
        setPwnedMessage("No breaches found for this email.");
      } else {
        setIsPwned(false);
        setPwnedMessage("Error checking email.");
      }
    } catch (error) {
      console.error("Error checking email:", error);
      setIsPwned(false);
      setPwnedMessage("Error checking email.");
    }
  };

  return (
      <div className="container mt-4">
        <h3>Check If Your Email Has Been Pwned</h3>
        <div className="input-group mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn btn-primary" onClick={checkPwned}>
            Check Email
          </button>
        </div>
        {pwnedMessage && (
          <div
            className={`alert ${isPwned ? "alert-danger" : "alert-success"}`}
          >
            {pwnedMessage}
          </div>
        )}
      </div>
  );
};

export default AmIPwned;
