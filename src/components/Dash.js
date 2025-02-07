// import React, { useState } from "react";
// import axios from "axios";
// import { Container, Form, Button, Card, Spinner, Alert, ProgressBar } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Dash.css"; // Custom CSS for better styling

// const Dash = () => {
//   const [url, setUrl] = useState("");
//   const [report, setReport] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const API_KEY = "678a5e468b5df3c10554817b7daa17d70ce3aa9452e73217be933c118246fcaf"; // Replace with your actual API key

//   const handleScanUrl = async () => {
//     if (!url) {
//       setError("Please enter a URL!");
//       return;
//     }

//     setLoading(true);
//     setReport(null);
//     setError("");

//     try {
//       const formData = new URLSearchParams();
//       formData.append("url", url);

//       const submitResponse = await axios.post(
//         "https://www.virustotal.com/api/v3/urls",
//         formData,
//         { headers: { "x-apikey": API_KEY, "Content-Type": "application/x-www-form-urlencoded" } }
//       );

//       const analysisId = submitResponse.data.data.id;
//       const reportResponse = await axios.get(
//         `https://www.virustotal.com/api/v3/analyses/${analysisId}`,
//         { headers: { "x-apikey": API_KEY } }
//       );

//       setReport(reportResponse.data);
//     } catch (error) {
//       setError("Failed to fetch report. Check API key or try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container className="mt-5 pt-4">
//       <Card className="shadow-lg p-4 dash-card">
//         <h2 className="text-center mb-4 dash-title">🔍 Smart URL Scanner</h2>
//         <p className="text-center mb-4 dash-subtitle">Analyze URLs for threats in real-time.</p>

//         <Form>
//           <Form.Group className="mb-4">
//             <Form.Label className="dash-label">Enter URL</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="https://example.com"
//               value={url}
//               onChange={(e) => setUrl(e.target.value)}
//               className="dash-input"
//             />
//           </Form.Group>

//           <div className="text-center">
//             <Button variant="primary" onClick={handleScanUrl} disabled={loading} className="dash-button">
//               {loading ? <><Spinner animation="border" size="sm" className="me-2" />Scanning...</> : "Scan URL"}
//             </Button>
//           </div>
//         </Form>

//         {error && <Alert variant="danger" className="mt-4 dash-alert">{error}</Alert>}

//         {report && report.data.attributes.stats && (
//           <Card className="mt-4 p-3 dash-report-card">
//             <h4 className="dash-report-title text-center">🔎 URL Analysis Report</h4>

//             {/* Key Metrics in Cards */}
//             <div className="d-flex justify-content-around mt-3">
//               <Card className="metric-card shadow-sm p-3 text-center">
//                 <h5 className="text-danger">Malicious</h5>
//                 <h3>{report.data.attributes.stats.malicious ?? "0"}</h3>
//               </Card>
//               <Card className="metric-card shadow-sm p-3 text-center">
//                 <h5 className="text-success">Harmless</h5>
//                 <h3>{report.data.attributes.stats.harmless ?? "0"}</h3>
//               </Card>
//               <Card className="metric-card shadow-sm p-3 text-center">
//                 <h5 className="text-warning">Suspicious</h5>
//                 <h3>{report.data.attributes.stats.suspicious ?? "0"}</h3>
//               </Card>
//             </div>

//             {/* Progress Bars for Visual Representation */}
//             <div className="mt-4">
//               <h5>🛡️ Threat Breakdown</h5>

//               <div className="mb-3">
//                 <strong className="text-danger">Malicious</strong>
//                 <ProgressBar variant="danger" now={report.data.attributes.stats.malicious * 10} />
//               </div>

//               <div className="mb-3">
//                 <strong className="text-success">Harmless</strong>
//                 <ProgressBar variant="success" now={report.data.attributes.stats.harmless * 10} />
//               </div>

//               <div className="mb-3">
//                 <strong className="text-warning">Suspicious</strong>
//                 <ProgressBar variant="warning" now={report.data.attributes.stats.suspicious * 10} />
//               </div>
//             </div>
//           </Card>
//         )}
//       </Card>
//     </Container>
//   );
// };

// export default Dash;

import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Card, Spinner, Alert, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dash.css";

const Dash = () => {
  const [url, setUrl] = useState("");
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const API_KEY = "678a5e468b5df3c10554817b7daa17d70ce3aa9452e73217be933c118246fcaf"; // Replace with your actual API key

  const handleScanUrl = async () => {
    if (!url) {
      setError("Please enter a URL!");
      return;
    }

    setLoading(true);
    setReport(null);
    setError("");

    try {
      const formData = new URLSearchParams();
      formData.append("url", url);

      const submitResponse = await axios.post(
        "https://www.virustotal.com/api/v3/urls",
        formData,
        { headers: { "x-apikey": API_KEY, "Content-Type": "application/x-www-form-urlencoded" } }
      );

      const analysisId = submitResponse.data.data.id;
      const reportResponse = await axios.get(
        `https://www.virustotal.com/api/v3/analyses/${analysisId}`,
        { headers: { "x-apikey": API_KEY } }
      );

      setReport(reportResponse.data);
    } catch (error) {
      setError("Failed to fetch report. Check API key or try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5 pt-4">
      <Card className="shadow-lg p-4 dash-card">
        <h2 className="text-center mb-4 dash-title">🔍 Smart URL Scanner</h2>
        <p className="text-center mb-4 dash-subtitle">Analyze URLs for threats in real-time.</p>

        <Form>
          <Form.Group className="mb-4">
            <Form.Label className="dash-label">Enter URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="dash-input"
            />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" onClick={handleScanUrl} disabled={loading} className="dash-button">
              {loading ? <><Spinner animation="border" size="sm" className="me-2" />Scanning...</> : "Scan URL"}
            </Button>
          </div>
        </Form>

        {error && (
          <Alert variant="danger" className="mt-4 dash-alert">
            ⚠️ {error}
          </Alert>
        )}

        {report && report.data.attributes.stats && (
          <Card className="mt-4 p-3 dash-report-card">
            <h4 className="dash-report-title text-center">🔎 URL Analysis Report</h4>

            {/* Key Metrics in Cards */}
            <div className="d-flex justify-content-around mt-3 flex-wrap">
              <Card className="metric-card shadow-sm p-3 text-center mb-3">
                <h5 className="text-danger">Malicious</h5>
                <h3>{report.data.attributes.stats.malicious ?? "0"}</h3>
              </Card>
              <Card className="metric-card shadow-sm p-3 text-center mb-3">
                <h5 className="text-success">Harmless</h5>
                <h3>{report.data.attributes.stats.harmless ?? "0"}</h3>
              </Card>
              <Card className="metric-card shadow-sm p-3 text-center mb-3">
                <h5 className="text-warning">Suspicious</h5>
                <h3>{report.data.attributes.stats.suspicious ?? "0"}</h3>
              </Card>
            </div>

            {/* Progress Bars for Visual Representation */}
            <div className="mt-4">
              <h5>🛡️ Threat Breakdown</h5>

              <div className="mb-3">
                <strong className="text-danger">Malicious</strong>
                <ProgressBar
                  variant="danger"
                  now={report.data.attributes.stats.malicious * 10}
                  animated
                  className="progress-bar-custom"
                />
              </div>

              <div className="mb-3">
                <strong className="text-success">Harmless</strong>
                <ProgressBar
                  variant="success"
                  now={report.data.attributes.stats.harmless * 10}
                  animated
                  className="progress-bar-custom"
                />
              </div>

              <div className="mb-3">
                <strong className="text-warning">Suspicious</strong>
                <ProgressBar
                  variant="warning"
                  now={report.data.attributes.stats.suspicious * 10}
                  animated
                  className="progress-bar-custom"
                />
              </div>
            </div>
          </Card>
        )}
      </Card>
    </Container>
  );
};

export default Dash;
