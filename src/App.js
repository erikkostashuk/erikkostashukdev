import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // State to control audio muting
  const [isMuted, setIsMuted] = useState(true);
  const [player, setPlayer] = useState(null);

  // Load the YouTube IFrame API
  useEffect(() => {
    // Called when the YouTube player is ready
    const onPlayerReady = (event) => {
      if (isMuted) {
        event.target.mute();
      } else {
        event.target.unMute();
      }
      event.target.playVideo();
    };

    // This function creates an <iframe> (and YouTube player) after the API code downloads
    window.onYouTubeIframeAPIReady = function() {
      const ytPlayer = new window.YT.Player('yt-player', {
        videoId: 'f02mOEt11OQ', // Replace with your YouTube video ID
        events: {
          onReady: onPlayerReady,
        },
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: 'f02mOEt11OQ', // Needed for looping
          mute: 1,
        },
      });
      setPlayer(ytPlayer);
    };

    // Load YouTube API script
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }, [isMuted]); // Add isMuted to the dependency array

  // Toggle mute state
  const toggleMute = () => {
    if (player) {
      if (isMuted) {
        player.unMute();
      } else {
        player.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  // Generate raindrop elements with random colors
  const raindrops = Array.from({ length: 50 }, (_, index) => {
    // Randomly assign a class for color
    const raindropClass = Math.random() < 0.5 ? 'raindrop light-blue' : 'raindrop lighter-blue';
    return (
      <div
        key={index}
        className={raindropClass}
        style={{
          left: `${Math.random() * 100}vw`,
          animationDuration: `${0.5 + Math.random() * 1.5}s`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      ></div>
    );
  });

  // Generate star elements
  const stars = Array.from({ length: 100 }, (_, index) => {
    return (
      <div
        key={index}
        className="star"
        style={{
          top: `${Math.random() * 80}vh`, // Ensure stars are not too low in the sky
          left: `${Math.random() * 100}vw`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      ></div>
    );
  });

  return (
    <div className="app">
      {/* YouTube player */}
      <div id="yt-player" className="youtube-player"></div>

      {/* Button to toggle audio mute */}
      <button className="audio-control" onClick={toggleMute}>
        {isMuted ? '🔇' : '♪'}
      </button>

      {/* Moon element as a link */}
      <a href="https://erikkostashuk.dev" target="_blank" rel="noopener noreferrer">
        <div className="moon"></div>
      </a>

      <div className="rain-container">
        {raindrops}
      </div>
      
      {/* Stars container */}
      <div className="star-container">
        {stars}
      </div>

      <div className="header">
        <h1>Erik Kostashuk</h1>
        <h3>Software Developer</h3>
        <h3>Located in Toronto, Canada 🇨🇦</h3>
      </div>
      <div className="links">
        <a href="https://github.com/erikkostashuk" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/erikkostashuk" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>

      {/* Grass element */}
      <div className="grass"></div>
    </div>
  );
}

export default App;
