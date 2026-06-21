import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // State to store the message from Spring Boot
  const [data, setData] = useState(null);
  // State to handle loading status
  const [loading, setLoading] = useState(true);
  // State to handle any connection errors
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from your Spring Boot API endpoint
    fetch('http://localhost:8080/api/hello')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parses the JSON map we sent from Java
      })
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
        setError(err.message);
        setLoading(false);
      });
  }, []); // Empty array means this runs once when the component loads

  return (
    <div className="app-container">
      <h1>Spring Boot + React Setup</h1>
      <hr />
      
      <div className="card">
        <h3>Backend Status:</h3>
        
        {loading && <p className="loading">Fetching data from Spring Boot...</p>}
        
        {error && (
          <p className="error">
            ❌ Error: Could not connect to backend. Is your Spring Boot app running on port 8080?
          </p>
        )}
        
        {data && (
          <div className="success-box">
            <p className="success-tag">Connected Successfully!</p>
            {/* 'message' matches the key we created in the Java HashMap */}
            <h2>"{data.message}"</h2> 
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
