import React from 'react';

const Raindrops = () => {
  const raindrops = Array.from({ length: 50 }, (_, index) => {
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

  return <div className="rain-container">{raindrops}</div>;
};

export default Raindrops;