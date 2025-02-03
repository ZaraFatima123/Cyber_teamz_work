import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MapContainer,
  TileLayer,
  Popup,
  CircleMarker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaMapMarkerAlt, FaFilter } from "react-icons/fa"; 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Plot from 'react-plotly.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const [data, setData] = useState(null);
  const [regionFilter, setRegionFilter] = useState("All Regions");
   const [dataCounts, setDataCounts] = useState({
     phishing: 0,
     benign: 0,
     defacement: 0,
   });
   const [recentUrls, setRecentUrls] = useState([]);
   const [loading, setLoading] = useState(true);
   const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/phishing_trends"); 
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

    useEffect(() => {
      fetch("/output.json") 
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
          setJsonData(data); 
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }, []);

    const downloadJsonFile = () => {
      const blob = new Blob([JSON.stringify(jsonData, null, 2)], {
        type: "application/json",
      });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "output.json";
      link.click();
    };

    if (loading) {
      return (
        <div style={{ textAlign: "center", padding: "20px" }}>
          Loading analytics...
        </div>
      );
    }
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
  const phishingData = data || {
    geographical_data: [
      { region: "North America", count: 150, lat: 37.7749, lng: -122.4194 },
      { region: "Europe", count: 250, lat: 48.8566, lng: 2.3522 },
      { region: "Asia", count: 120, lat: 34.0522, lng: 118.2437 },
      { region: "Africa", count: 80, lat: -1.286389, lng: 36.817223 },
      { region: "South America", count: 60, lat: -23.55052, lng: -46.633308 },
    ],
    phishing_types: [
      { type: "Email Phishing", count: 180 },
      { type: "Social Media Phishing", count: 100 },
      { type: "SMS Phishing", count: 70 },
      { type: "Website Phishing", count: 50 },
    ],
  };

  const handleRegionFilterChange = (event) => {
    setRegionFilter(event.target.value);
  };


  const getColor = (count) => {
    if (count > 200) return "red"; 
    if (count > 100) return "orange"; 
    return "green";
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">
        📊 Phishing Data Insights
      </h2>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center">
          <FaFilter className="me-2 text-info" />
          <label>Filter by Region:</label>
        </div>
        <div>
          <select
            className="form-select w-auto"
            onChange={handleRegionFilterChange}
            value={regionFilter}
          >
            <option value="All Regions">All Regions</option>
            {phishingData.geographical_data.map((region, index) => (
              <option key={index} value={region.region}>
                {region.region}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="card shadow-lg mb-4" style={{ borderRadius: "15px" }}>
        <h5 className="text-center mb-3">
          <FaMapMarkerAlt className="me-2 text-success" />
          Phishing Trends by Region
        </h5>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={2}
          style={{ height: "400px", borderRadius: "15px" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {phishingData.geographical_data
            .filter(
              (region) =>
                regionFilter === "All Regions" || region.region === regionFilter
            )
            .map((region, index) => (
              <CircleMarker
                key={index}
                center={[region.lat, region.lng]}
                radius={region.count / 10}
                pathOptions={{
                  fillColor: getColor(region.count),
                  color: getColor(region.count),
                }}
              >
                <Popup>
                  {region.region}: {region.count} phishing attacks
                </Popup>
              </CircleMarker>
            ))}
        </MapContainer>

        <div className="mt-4">
          <p>
            The map above visualizes phishing attack distribution across
            different regions. Regions with higher counts are marked in **red**,
            indicating high-risk zones. **Green** regions have fewer phishing
            attacks, showing lower risk.
          </p>
        </div>
      </div>
      <div style={styles.container}>
        <h1 style={styles.header}>URL Analytics Overview</h1>

        {/* Explanation of Categories */}
        <div style={styles.infoBox}>
          <h3 style={styles.infoHeader}>What do the categories mean?</h3>
          <ul style={styles.infoList}>
            <li>
              <strong>Phishing:</strong> A fraudulent attempt to obtain
              sensitive information such as usernames, passwords, and credit
              card details by disguising as a trustworthy entity via emails,
              websites, etc.
            </li>
            <li>
              <strong>Benign:</strong> URLs that are not malicious or harmful.
              These are safe websites without any security threats or risks.
            </li>
            <li>
              <strong>Defacement:</strong> Malicious modification of a website's
              content, often resulting in a change of the website's appearance
              or the display of inappropriate content.
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
              <li
                key={index}
                style={{ color: styles.categoryColors[item.category] }}
              >
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
