import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { TextField, Button, Container, Typography, CircularProgress, Snackbar, Paper, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Plot from 'react-plotly.js';

// Custom theme
const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
});

const Crime = () => {
  const [data, setData] = useState([]);
  const [city, setCity] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const crimeColors = {
    "Personal Revenge": '#1f77b4', "Anger": '#ff7f0e', "Fraud": '#2ca02c',
    "Extortion": '#d62728', "Causing Disrepute": '#9467bd', "Prank": '#8c564b',
    "Sexual Exploitation": '#e377c2', "Disrupt Public Service": '#7f7f7f',
    "Sale purchase illegal drugs": '#bcbd22', "Developing own business": '#17becf',
    "Spreading Piracy": '#aec7e8', "Psycho or Pervert": '#ffbb78',
    "Steal Information": '#98df8a', "Abetment to Suicide": '#ff9896', "Others": '#c5b0d5',
  };

  useEffect(() => {
    setLoading(true);
    fetch('/output_cyber_crime.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading data:', error);
        setLoading(false);
      });
  }, []);

  const handleSearch = async () => {
    if (!city) {
      setMessage('Please enter a city name.');
      setOpenSnackbar(true);
      return;
    }
    setLoading(true);
    const foundCity = data.find((item) => item.City.toLowerCase() === city.toLowerCase());
    if (foundCity) {
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(foundCity.City)}`);
        const result = await response.json();
        if (result.length > 0) {
          setFilteredData([{ ...foundCity, lat: parseFloat(result[0].lat), lon: parseFloat(result[0].lon) }]);
          setMessage('');
        } else {
          setMessage('City coordinates not found!');
          setOpenSnackbar(true);
          setFilteredData([]);
        }
      } catch (error) {
        console.error('Error fetching coordinates:', error);
        setMessage('Error fetching coordinates!');
        setOpenSnackbar(true);
        setFilteredData([]);
      }
    } else {
      setMessage('City not found!');
      setOpenSnackbar(true);
      setFilteredData([]);
    }
    setLoading(false);
  };

  const getPieChartData = (cityData) => {
    const filteredCrimeTypes = Object.keys(crimeColors).filter(crime => cityData[crime] > 0);
    return [{
      labels: filteredCrimeTypes,
      values: filteredCrimeTypes.map(crime => cityData[crime]),
      type: 'pie',
      hole: 0.4,
      marker: { colors: filteredCrimeTypes.map(crime => crimeColors[crime]) },
      textinfo: 'label+percent',
    }];
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h3" align="center" gutterBottom style={{ marginTop: '20px' }}>
          Cyber Crime Analytics Map
        </Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ marginBottom: '20px' }}>
          <Grid item>
            <TextField 
              label="Enter City Name" 
              variant="outlined" 
              value={city} 
              onChange={(e) => setCity(e.target.value)} 
              InputProps={{
                style: { backgroundColor: 'white' } // White background for the text field
              }}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleSearch} disabled={loading}>
              {loading ? <CircularProgress size={24} /> : 'Search'}
            </Button>
          </Grid>
        </Grid>
        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
          <MuiAlert onClose={() => setOpenSnackbar(false)} severity="error" elevation={6} variant="filled">
            {message}
          </MuiAlert>
        </Snackbar>
        <Paper elevation={3} style={{ height: '80vh', width: '100%' }}>
          <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '100%', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
            {filteredData.length > 0 && filteredData.map((cityData, idx) => (
              <Marker key={idx} position={[cityData.lat, cityData.lon]}>
                <Popup>
                  <Typography variant="h5">{cityData.City}</Typography>
                  <TableContainer component={Paper}>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Crime Type</TableCell>
                          <TableCell>Count</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {Object.keys(crimeColors).filter(crime => cityData[crime] > 0).map((crime) => (
                          <TableRow key={crime}>
                            <TableCell>{crime}</TableCell>
                            <TableCell>{cityData[crime]}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Plot data={getPieChartData(cityData)} layout={{ title: `${cityData.City} Crime Statistics`, height: 300, width: 350 }} />
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Crime;
