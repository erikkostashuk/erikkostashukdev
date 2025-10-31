import React from 'react';

const Header = ({ isDay }) => {
  return (
    <div className="header">
      <h1>Erik Kostashuk</h1>
      <h3>Software Developer at <a href="https://www.ssense.com" target="_blank" rel="noopener noreferrer" className="inline-link">SSENSE</a></h3>
      <h3>Located in Toronto, Canada 🇨🇦</h3>
      <h3>Building <a href="https://www.geoclip.fun/" target="_blank" rel="noopener noreferrer" className="inline-link">GeoClip.fun</a>, a video-powered geography guessing game</h3>
    </div>
  );
};

export default Header;
