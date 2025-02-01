import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; 
import "leaflet/dist/leaflet.css"; 
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/phishing_trends"); // Replace with real API
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

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
    common_domains: [
      { domain: "example.com", count: 50 },
      { domain: "phishingsite1.com", count: 120 },
      { domain: "fakebank.com", count: 80 },
    ],
  };

  const handleRegionFilterChange = (event) => {
    setRegionFilter(event.target.value);
  };

  // Chart data for phishing types
  const phishingTypesData = {
    labels: phishingData.phishing_types.map((item) => item.type),
    datasets: [
      {
        label: "Phishing Types",
        data: phishingData.phishing_types.map((item) => item.count),
        backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56", "#4bc0c0"],
        borderColor: "#ffffff",
        borderWidth: 1,
      },
    ],
  };



  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">📊 Phishing Data Insights</h2>

      {/* Region Filter */}
      <div className="mb-4">
        <label>Filter by Region:</label>
        <select onChange={handleRegionFilterChange} value={regionFilter}>
          <option value="All Regions">All Regions</option>
          {phishingData.geographical_data.map((region, index) => (
            <option key={index} value={region.region}>
              {region.region}
            </option>
          ))}
        </select>
      </div>

      <h5>Phishing Trends by Region</h5>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={2}
        style={{ height: "400px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {phishingData.geographical_data
          .filter(
            (region) =>
              regionFilter === "All Regions" || region.region === regionFilter
          )
          .map((region, index) => (
            <Marker key={index} position={[region.lat, region.lng]}>
              <Popup>
                {region.region}: {region.count} phishing attacks
              </Popup>
            </Marker>
          ))}
      </MapContainer>

      <h5>Phishing Types Distribution</h5>
      <Bar data={phishingTypesData} options={{ responsive: true }} />

    </div>
  );
};

export default Analytics;
