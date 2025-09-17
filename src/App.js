import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Links from './components/Links';
import Moon from './components/Moon';
import Raindrops from './components/Raindrops';
import Stars from './components/Stars';
import YouTubePlayer from './components/YouTubePlayer';
import Campfire from './components/Campfire';
import Clouds from './components/Clouds';
import Barn from './components/Barn';
import Windmill from './components/Windmill';

function App() {
  const [isMuted, setIsMuted] = useState(true);
  const [isDay, setIsDay] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleDayNight = () => {
    setIsDay(!isDay);
  };

  return (
    <div className={`app ${isDay ? 'day' : 'night'}`}>
      <YouTubePlayer isMuted={isMuted} />
      <button className="audio-control" onClick={toggleMute}>
        {isMuted ? '🔇' : '♪'}
      </button>
      <Moon isDay={isDay} />
      <Clouds isDay={isDay} />
      <Raindrops isDay={isDay} />
      <Stars isDay={isDay} />
      <Header isDay={isDay} />
      <Links isDay={isDay} />
      <Barn />
      <Windmill />
      <Campfire isDay={isDay} />
      <button className="theme-control" onClick={toggleDayNight}>
        {isDay ? '🌙' : '☀️'}
      </button>
      <div className="grass"></div>
    </div>
  );
}

export default App;
