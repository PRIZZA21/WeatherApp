// src/components/SetThresholds.js
import React, { useState } from 'react';
import { setThresholds } from '../api';

const SetThresholds = () => {
  const [city, setCity] = useState('');
  const [temperatureThreshold, setTemperatureThreshold] = useState('');
  const [weatherConditions, setWeatherConditions] = useState('');
  const [consecutiveUpdates, setConsecutiveUpdates] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const thresholds = {
      city,
      temperatureThreshold: parseFloat(temperatureThreshold),
      weatherConditions: weatherConditions.split(',').map(cond => cond.trim()),
      consecutiveUpdates: parseInt(consecutiveUpdates, 10)
    };

    try {
      await setThresholds(thresholds);
      setMessage('Thresholds set successfully');
    } catch (error) {
      setMessage('Error setting thresholds');
      console.error('Error setting thresholds:', error);
    }
  };

  return (
    <div>
      <h2>Set Thresholds for a City</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>City:</label>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
        </div>
        <div>
          <label>Temperature Threshold:</label>
          <input type="number" value={temperatureThreshold} onChange={(e) => setTemperatureThreshold(e.target.value)} required />
        </div>
        <div>
          <label>Weather Conditions (comma-separated):</label>
          <input type="text" value={weatherConditions} onChange={(e) => setWeatherConditions(e.target.value)} required />
        </div>
        <div>
          <label>Consecutive Updates:</label>
          <input type="number" value={consecutiveUpdates} onChange={(e) => setConsecutiveUpdates(e.target.value)} required />
        </div>
        <button type="submit">Set Thresholds</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SetThresholds;
