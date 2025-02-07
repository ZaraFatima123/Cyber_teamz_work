import React, { useState } from "react";
import "./BreachChecker.css"; // Import the CSS file for styling


function BreachChecker() {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState("");
  const [emailStatus, setEmailStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    fetch("/output_cyber.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Check if data is correctly fetched
        // Match the domain (case insensitive)
        const foundBreach = data.filter(
          (breach) => breach.Domain.toLowerCase() === domain.toLowerCase()
        );

        if (foundBreach.length > 0) {
          setResult(
            <table className="breach-table">
              <thead>
                <tr>
                  <th>Breach Incident</th>
                  <th>Breach Date</th>
                  <th>Pwned Accounts</th>
                </tr>
              </thead>
              <tbody>
                {foundBreach.map((breach, index) => (
                  <tr key={index}>
                    <td>
                      <strong>{breach.Name}</strong>
                    </td>
                    <td>
                      <strong>{breach.BreachDate}</strong>
                    </td>
                    <td>
                      <strong>{breach.PwnCount}</strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          );
          setEmailStatus("pwned");
        } else {
          setResult(
            <p>
              <strong>✅ No breaches found for the website {domain}.</strong>
            </p>
          );
          setEmailStatus("safe");
        }
      })
      .catch((error) => {
        console.error("Error fetching the JSON data:", error);
        setResult(
          <p>
            <strong>❌ An error occurred while fetching data. Please try again.</strong>
          </p>
        );
        setEmailStatus("error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="breach-checker-container">
      <h1 className="breach-checker-heading">Is the Website in Breach?</h1>
      <form onSubmit={handleSubmit} className="domain-form">
        <label htmlFor="domain" className="domain-label">
          Enter website domain (e.g., 000webhost.com):
        </label>
        <input
          type="text"
          id="domain"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          className="domain-input"
          required
          placeholder="example.com"
        />
        <button type="submit" className="submit-button" disabled={isLoading}>
          {isLoading ? "Checking..." : "Check"}
        </button>
      </form>

      {result && (
        <div className={`result-message ${emailStatus}`}>
          {result}
        </div>
      )}
    </div>
  );
}

export default BreachChecker;
