import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";

const Analytics = () => {
  const [dataCounts, setDataCounts] = useState({ phishing: 0, benign: 0, defacement: 0 });
  const [recentUrls, setRecentUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [jsonData, setJsonData] = useState([]); // Store the fetched data

  useEffect(() => {
    fetch("/output.json") // Change this to your actual file path
      .then((response) => response.json())
      .then((data) => {
        const counts = { phishing: 0, benign: 0, defacement: 0 };
        const recent = [];

        data.forEach((item) => {
          if (item.type) {
            const category = item.type.trim();
            counts[category] = (counts[category] || 0) + 1;
            if (recent.length < 5) {
              recent.push({ url: item.url, category });
            }
          }
        });

        setDataCounts(counts);
        setRecentUrls(recent);
        setJsonData(data); // Store the fetched JSON data
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const downloadJsonFile = () => {
    const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "output.json";
    link.click();
  };

  if (loading) {
    return <div style={{ textAlign: "center", padding: "20px" }}>Loading analytics...</div>;
  }

  // Data for Plotly Graphs
  const barData = {
    type: "bar",
    x: ["Phishing", "Benign", "Defacement"],
    y: [dataCounts.phishing, dataCounts.benign, dataCounts.defacement],
    marker: {
      color: ["#FF5733", "#28A745", "#FFC107"],
    },
  };

  const pieData = {
    type: "pie",
    labels: ["Phishing", "Benign", "Defacement"],
    values: [dataCounts.phishing, dataCounts.benign, dataCounts.defacement],
    marker: {
      colors: ["#FF5733", "#28A745", "#FFC107"],
    },
  };

  const lineData = {
    type: "scatter",
    mode: "lines+markers",
    x: ["Phishing", "Benign", "Defacement"],
    y: [dataCounts.phishing, dataCounts.benign, dataCounts.defacement],
    line: { color: "#FF5733" },
    marker: { size: 8 },
  };

  const layout = {
    title: "URL Analytics Overview",
    showlegend: true,
    xaxis: { title: "Categories" },
    yaxis: { title: "Count" },
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "rgba(0,0,0,0)",
    font: { color: "#fff" },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>URL Analytics Overview</h1>

      {/* Explanation of Categories */}
      <div style={styles.infoBox}>
        <h3 style={styles.infoHeader}>What do the categories mean?</h3>
        <ul style={styles.infoList}>
          <li>
            <strong>Phishing:</strong> A fraudulent attempt to obtain sensitive information such as usernames, passwords, and credit card details by disguising as a trustworthy entity via emails, websites, etc.
          </li>
          <li>
            <strong>Benign:</strong> URLs that are not malicious or harmful. These are safe websites without any security threats or risks.
          </li>
          <li>
            <strong>Defacement:</strong> Malicious modification of a website's content, often resulting in a change of the website's appearance or the display of inappropriate content.
          </li>
        </ul>
      </div>

      <div style={styles.gridContainer}>
        {/* Bar Graph */}
        <div style={styles.chartContainer}>
          <h2 style={styles.chartTitle}>Bar Graph</h2>
          <Plot data={[barData]} layout={layout} style={styles.plot} />
        </div>

        {/* Pie Chart */}
        <div style={styles.chartContainer}>
          <h2 style={styles.chartTitle}>Pie Chart</h2>
          <Plot data={[pieData]} layout={layout} style={styles.plot} />
        </div>

        {/* Line Graph */}
        <div style={styles.chartContainer}>
          <h2 style={styles.chartTitle}>Line Graph</h2>
          <Plot data={[lineData]} layout={layout} style={styles.plot} />
        </div>
      </div>

      {/* Recent URLs */}
      <div style={styles.recentUrls}>
        <h2 style={styles.chartTitle}>Recent URLs</h2>
        <ul style={styles.urlList}>
          {recentUrls.map((item, index) => (
            <li key={index} style={{ color: styles.categoryColors[item.category] }}>
              {item.url} ({item.category})
            </li>
          ))}
        </ul>
      </div>

      {/* Download Button */}
      <div style={styles.downloadContainer}>
        <button onClick={downloadJsonFile} style={styles.downloadButton}>
          Download Our Data (output.json)
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "#1e1e2f",
    padding: "20px",
    minHeight: "100vh",
    textAlign: "center",
    color: "#fff",
  },
  header: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "30px",
  },
  infoBox: {
    backgroundColor: "#2a2a3f",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    marginBottom: "30px",
  },
  infoHeader: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "10px",
  },
  infoList: {
    textAlign: "left",
    color: "#fff",
    listStyleType: "none",
    padding: "0",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginBottom: "30px",
  },
  chartContainer: {
    backgroundColor: "#2a2a3f",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
    ":hover": {
      transform: "scale(1.05)",
    },
  },
  chartTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "15px",
  },
  plot: {
    width: "100%",
    height: "300px",
  },
  recentUrls: {
    backgroundColor: "#2a2a3f",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  urlList: {
    listStyleType: "none",
    padding: "0",
  },
  categoryColors: {
    phishing: "#FF5733",
    benign: "#28A745",
    defacement: "#FFC107",
  },
  downloadContainer: {
    marginTop: "30px",
  },
  downloadButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
};

export default Analytics;
