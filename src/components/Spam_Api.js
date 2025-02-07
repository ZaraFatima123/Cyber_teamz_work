import { useState } from "react";
import axios from "axios";
import "./Spam.css"; // Import CSS

const Spam_Api = () => {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkSpamEmail = async () => {
    setLoading(true);
    setResult(null);

    const options = {
      method: "POST",
      url: "https://spam-email-checker.p.rapidapi.com/api/v1/main/libs/checkmailspamdomain",
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "", // Your API Key
        "X-RapidAPI-Host": "",
      },
      data: { email }, // Send email in the request body
    };

    try {
      const response = await axios.request(options);
      console.log("API Response:", response.data); // Log the full response for debugging

      const { isValid, isTempEmail } = response.data;

      // Debugging logs
      console.log("isValid:", isValid, "isTempEmail:", isTempEmail);

      // Check validity and temporary email status
      if (isValid === false) {
        setResult({ message: "Invalid Email Address!", type: "error" });
      } else if (isTempEmail === true) {
        setResult({ message: "This is a Temporary Email and not suitable for use.!", type: "temp" });
      } else {
        setResult({ message: "The email address is valid, secure, and not flagged as spam.", type: "safe" });
      }
    } catch (error) {
      setResult({ message: "Error checking email. Try again!", type: "error" });
    }

    setLoading(false);
  };

  return (
    <div className="spam-container">
      <h2 className="spam-heading">Spam Email Detector</h2>

      <div className="spam-form">
        <label className="spam-label">Enter Email:</label>
        <input
          type="email"
          placeholder="example@example.com"
          className="spam-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="check-button" onClick={checkSpamEmail} disabled={loading}>
          {loading ? "Checking..." : "Check"}
        </button>
      </div>

      {result && (
        <p className={`result-message ${result.type}`}>
          <strong>{result.message}</strong>
        </p>
      )}
    </div>
  );
};

export default Spam_Api;
