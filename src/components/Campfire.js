import React from 'react';

const Campfire = () => {
  return (
    <div className="campfire-container">
      <div className="campfire">
        <div className="wood"></div>
        <div className="wood wood2"></div>
        <div className="wood wood3"></div>
        <div className="fire">
          <div className="flame flame1"></div>
          <div className="flame flame2"></div>
          <div className="flame flame3"></div>
          <div className="embers"></div>
        </div>
        <div className="glow"></div>
      </div>
    </div>
  );
};

export default Campfire;