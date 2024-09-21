import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Links from './components/Links';
import Moon from './components/Moon';
import Raindrops from './components/Raindrops';
import Stars from './components/Stars';
import YouTubePlayer from './components/YouTubePlayer';

function App() {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="app">
      <YouTubePlayer isMuted={isMuted} />
      <button className="audio-control" onClick={toggleMute}>
        {isMuted ? '🔇' : '♪'}
      </button>
      <Moon />
      <Raindrops />
      <Stars />
      <Header />
      <Links />
      <div className="grass"></div>
    </div>
  );
}

export default App;
