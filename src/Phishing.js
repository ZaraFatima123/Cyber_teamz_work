// // import React, { useState } from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";

// // const Phishing = () => {
// //   const [url, setUrl] = useState("");
// //   const [result, setResult] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   const checkUrl = async () => {
// //     setLoading(true);
// //     setResult(null);

// //     const options = {
// //       method: "GET",
// //       headers: {
// //         "X-RapidAPI-Host": "malicious-scanner.p.rapidapi.com",
// //         "X-RapidAPI-Key": "a92c93ca0cmshc5770db2fbf6f4ap175e16jsn7a1b438feb3a",
// //       },
// //     };

// //     try {
// //         // const url = "https://malicious-scanner.p.rapidapi.com/rapid/url?url=https%3A%2F%2Fvryjm.page.link%2FjS6a'; "
// //         const response = await fetch(
// //           `https://malicious-scanner.p.rapidapi.com/rapid/url?url=${encodedUrl}`,
// //           options
// //         );
        
          
// //       const data = await response.json();
// //       setResult(data);
// //     } catch (error) {
// //       console.error("Error fetching data:", error);
// //       setResult({ error: "Failed to fetch data" });
// //     }
// //     setLoading(false);
// //   };

// //   return (
// //     <div className="container mt-5">
// //       <h2 className="text-center mb-4">🔍 Phishing URL Detector</h2>
// //       <div className="input-group mb-3">
// //         <input
// //           type="text"
// //           className="form-control"
// //           placeholder="Enter a URL..."
// //           value={url}
// //           onChange={(e) => setUrl(e.target.value)}
// //         />
// //         <button className="btn btn-primary" onClick={checkUrl}>
// //           Check URL
// //         </button>
// //       </div>

// //       {loading && <p className="text-center text-warning">Checking...</p>}

// //       {result && (
// //         <div className="card mt-3">
// //           <div className="card-body">
// //             {result.error ? (
// //               <p className="text-danger">{result.error}</p>
// //             ) : (
// //               <>
// //                 <h5 className="card-title">Result:</h5>
// //                 <p>
// //                   <strong>URL:</strong> {url}
// //                 </p>
// //                 <p>
// //                   <strong>Status:</strong>{" "}
// //                   {result.safety ? (
// //                     <span className="text-success">Safe ✅</span>
// //                   ) : (
// //                     <span className="text-danger">Malicious ❌</span>
// //                   )}
// //                 </p>
// //               </>
// //             )}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Phishing;

// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Phishing = () => {
//   const [url, setUrl] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const checkUrl = async () => {
//     setLoading(true);
//     setResult(null);

//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Host": "malicious-scanner.p.rapidapi.com",
//         "X-RapidAPI-Key": "a92c93ca0cmshc5770db2fbf6f4ap175e16jsn7a1b438feb3a",
//       },
//     };

//     try {
//       // Ensure that the URL input by the user is encoded properly
//       const encodedUrl = encodeURIComponent(url);

//       // Construct the URL with the encoded user input
//       const response = await fetch(
//         `https://malicious-scanner.p.rapidapi.com/rapid/url?url=${encodedUrl}`,
//         options
//       );

//       const data = await response.json();

//       console.log("API Response:", data); // Log the full API response for debugging
//       setResult(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setResult({ error: "Failed to fetch data" });
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">🔍 Phishing URL Detector</h2>
//       <div className="input-group mb-3">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Enter a URL..."
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//         />
//         <button className="btn btn-primary" onClick={checkUrl}>
//           Check URL
//         </button>
//       </div>

//       {loading && <p className="text-center text-warning">Checking...</p>}

//       {result && (
//         <div className="card mt-3">
//           <div className="card-body">
//             {result.error ? (
//               <p className="text-danger">{result.error}</p>
//             ) : (
//               <>
//                 <h5 className="card-title">Result:</h5>
//                 <p>
//                   <strong>URL:</strong> {url}
//                 </p>
//                 {/* Use the correct field for safety, depending on the API response */}
//                 <p>
//                   <strong>Status:</strong>{" "}
//                   {result.safety ? (
//                     <span className="text-success">Safe ✅</span>
//                   ) : (
//                     <span className="text-danger">Malicious ❌</span>
//                   )}
//                 </p>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Phishing;


import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Phishing = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkUrl = async () => {
    setLoading(true);
    setResult(null);

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "malicious-scanner.p.rapidapi.com",
        "X-RapidAPI-Key": "a92c93ca0cmshc5770db2fbf6f4ap175e16jsn7a1b438feb3a",
      },
    };

    try {
      // Ensure that the URL input by the user is encoded properly
      const encodedUrl = encodeURIComponent(url);

      // Construct the URL with the encoded user input
      const response = await fetch(
        `https://malicious-scanner.p.rapidapi.com/rapid/url?url=${encodedUrl}`,
        options
      );

      const data = await response.json();
      console.log("API Response:", data); // Log the full API response for debugging
      setResult(data.data); // Update result with the 'data' field from the response
    } catch (error) {
      console.error("Error fetching data:", error);
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
                {/* Use the correct field for safety, based on the API response */}
                <p>
                  <strong>Status:</strong>{" "}
                  {result.status === "Safe" ? (
                    <span className="text-success">Safe ✅</span>
                  ) : (
                    <span className="text-danger">Malicious ❌</span>
                  )}
                </p>
                {/* Optionally display the message if needed */}
                {result.message && <p><strong>Message:</strong> {result.message}</p>}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Phishing;






