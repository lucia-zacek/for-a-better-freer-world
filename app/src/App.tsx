import React from 'react';
import Welcome from './welcome';
import "./styles.scss";
import ParticlesBackground from './particles/ParticlesBackground';

function App() {
  return (
    <div className="app-container">
      <ParticlesBackground />
      <Welcome />
    </div>
  );
}

export default App;
