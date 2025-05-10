import React from 'react';
import './App.css';
import Background from './assets/Background.png'; // Import the image

function App() {
  return (
    <div className="app-container">
      <img src={Background} alt="Background" />
    </div>
  );
}

export default App;
