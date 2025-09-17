import React from 'react';

const Moon = ({ isDay }) => {
  return (
    <a href="https://erikkostashuk.dev" rel="noopener noreferrer">
      <div className={`moon ${isDay ? 'sun' : ''}`}></div>
    </a>
  );
};

export default Moon;
