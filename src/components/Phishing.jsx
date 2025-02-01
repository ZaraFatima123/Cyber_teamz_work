import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Phishing = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkUrl = async () => {
    setLoading(true);
    setResult(null);

    const apiUrl = "https://virustotaldimasv1.p.rapidapi.com/getDomainReport";
    const options = {
      method: "POST",
      headers: {
        "X-RapidAPI-Host": "xxx",
        "X-RapidAPI-Key": "xxx",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ domain: url }),
    };

    try {
      const response = await fetch(apiUrl, options);
      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({ error: "Failed to fetch data" });
    }
    setLoading(false);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🔍 Phishing URL Detector</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className="btn btn-primary" onClick={checkUrl}>
          Check URL
        </button>
      </div>

      {loading && <p className="text-center text-warning">Checking...</p>}

      {result && (
        <div className="card mt-3">
          <div className="card-body">
            {result.error ? (
              <p className="text-danger">{result.error}</p>
            ) : (
              <>
                <h5 className="card-title">Result:</h5>
                <p>
                  <strong>URL:</strong> {url}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  {result.status === "Safe" ? (
                    <span className="text-success">Safe ✅</span>
                  ) : (
                    <span className="text-danger">Malicious ❌</span>
                  )}
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Phishing;
