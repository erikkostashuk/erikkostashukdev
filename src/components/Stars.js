import React, { useMemo } from 'react';

const Stars = ({ isDay }) => {
  const stars = useMemo(() => {
    return Array.from({ length: 100 }, (_, index) => {
      return (
        <div
          key={index}
          className="star"
          style={{
            top: `${Math.random() * 80}vh`,
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        ></div>
      );
    });
  }, []);

  return <div className="star-container" style={{ display: isDay ? 'none' : 'block' }}>{stars}</div>;
};

export default Stars;
