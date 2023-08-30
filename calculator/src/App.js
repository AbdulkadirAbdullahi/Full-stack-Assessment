import React, { useState, useEffect } from 'react';
import './App.css';
import CalculatorForm from './components/CalculatorForm';
import CalculatorHistory from './components/CalculatorHistory';

function App() {
  const [history, setHistory] = useState([]);
  const API_BASE_URL = 'http://localhost:5000/api';
  useEffect(() => {
    fetch(`${API_BASE_URL}/history`)
      .then(response => response.json())
      .then(data => setHistory(data))
      .catch(error => console.error('Error fetching history:', error));
  }, []);

  const handleSubmit = (calculation) => {
    fetch(`${API_BASE_URL}/calculate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(calculation)
    })
    .then(response => response.json())
    .then(data => {
      // Update the history with the calculated result
      setHistory([...history, { ...calculation, result: data.result }]);
    })
    .catch(error => console.error('Error calculating:', error));
  };

  return (
    <div className="App">
      <div className="container">
      <CalculatorForm onSubmit={handleSubmit} />
      <CalculatorHistory history={history} />
      </div>
    </div>
  );
}

export default App;
