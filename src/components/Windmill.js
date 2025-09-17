import React from 'react';

const Windmill = () => {
  return (
    <div className="windmill-container">
      <div className="windmill">
        <div className="windmill-tower"></div>
        <div className="windmill-blades">
          <div className="blade blade1"></div>
          <div className="blade blade2"></div>
          <div className="blade blade3"></div>
          <div className="blade blade4"></div>
        </div>
        <div className="windmill-cap"></div>
      </div>
    </div>
  );
};

export default Windmill;