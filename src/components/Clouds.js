import React, { useState, useEffect, useMemo } from 'react';

const Clouds = ({ isDay }) => {
  const [clouds, setClouds] = useState([]);

  const generateCloud = (id) => {
    const baseSize = 80 + Math.random() * 40; // Random size between 80-120px
    const top = 5 + Math.random() * 40; // Random top position between 5-45% of viewport
    const duration = 30 + Math.random() * 30; // Random duration between 30-60 seconds
    const delay = Math.random() * 5; // Random start delay up to 5 seconds
    const cloudType = Math.floor(Math.random() * 3); // 3 different cloud shapes

    return {
      id,
      baseSize,
      top,
      duration,
      delay,
      opacity: 0.6 + Math.random() * 0.3, // Random opacity between 0.6-0.9
      cloudType
    };
  };

  useEffect(() => {
    if (!isDay) {
      setClouds([]);
      return;
    }

    // Generate initial clouds entering from the left at various stages
    const initialClouds = Array.from({ length: 6 }, (_, i) => {
      const cloud = generateCloud(i);
      // Position clouds at different stages of their journey from left to right
      const progress = (i / 5) * 0.8; // Spread them across 80% of the screen
      const screenPosition = progress * 100; // Convert to percentage

      return {
        ...cloud,
        // Use negative delay to make them start mid-animation
        delay: -progress * cloud.duration
      };
    });
    setClouds(initialClouds);

    // Add new clouds periodically
    const cloudInterval = setInterval(() => {
      setClouds(prev => {
        // Remove clouds that have moved off screen
        const filtered = prev.filter(cloud => {
          const cloudElement = document.getElementById(`cloud-${cloud.id}`);
          return cloudElement && cloudElement.getBoundingClientRect().right > 0;
        });

        // Add new cloud if we have less than 8 clouds
        if (filtered.length < 8) {
          return [...filtered, generateCloud(Date.now())];
        }
        return filtered;
      });
    }, 3000);

    return () => clearInterval(cloudInterval);
  }, [isDay]);

  const renderCloudParts = (cloud) => {
    const s = cloud.baseSize;

    if (cloud.cloudType === 0) {
      // Puffy cumulus cloud
      return (
        <>
          <div className="cloud-part" style={{ width: `${s * 0.6}px`, height: `${s * 0.6}px`, top: '0', left: `${s * 0.1}px` }}></div>
          <div className="cloud-part" style={{ width: `${s * 0.5}px`, height: `${s * 0.5}px`, top: `${s * -0.1}px`, left: `${s * 0.3}px` }}></div>
          <div className="cloud-part" style={{ width: `${s * 0.4}px`, height: `${s * 0.4}px`, top: `${s * 0.05}px`, left: `${s * 0.55}px` }}></div>
          <div className="cloud-part" style={{ width: `${s * 0.45}px`, height: `${s * 0.45}px`, top: `${s * 0.1}px`, left: `${s * -0.05}px` }}></div>
          <div className="cloud-part" style={{ width: `${s * 0.35}px`, height: `${s * 0.35}px`, top: `${s * 0.15}px`, left: `${s * 0.75}px` }}></div>
          <div className="cloud-part" style={{ width: `${s * 0.3}px`, height: `${s * 0.3}px`, top: `${s * 0.2}px`, left: `${s * 0.25}px` }}></div>
        </>
      );
    } else if (cloud.cloudType === 1) {
      // Wide stratocumulus cloud
      return (
        <>
          <div className="cloud-part" style={{ width: `${s * 0.5}px`, height: `${s * 0.5}px`, top: `${s * -0.1}px`, left: `${s * 0.05}px` }}></div>
          <div className="cloud-part" style={{ width: `${s * 0.4}px`, height: `${s * 0.4}px`, top: `${s * -0.05}px`, left: `${s * 0.35}px` }}></div>
          <div className="cloud-part" style={{ width: `${s * 0.45}px`, height: `${s * 0.45}px`, top: `${s * -0.08}px`, left: `${s * 0.6}px` }}></div>
          <div className="cloud-part" style={{ width: `${s * 0.4}px`, height: `${s * 0.4}px`, top: `${s * -0.05}px`, left: `${s * 0.85}px` }}></div>
          <div className="cloud-part" style={{ width: `${s * 0.35}px`, height: `${s * 0.35}px`, top: `${s * -0.02}px`, left: `${s * 1.1}px` }}></div>
        </>
      );
    } else {
      // Tall cumulonimbus-style cloud
      return (
        <>
          <div className="cloud-part" style={{ width: `${s * 0.7}px`, height: `${s * 0.7}px`, top: `${s * 0.1}px`, left: `${s * 0.15}px` }}></div>
          <div className="cloud-part" style={{ width: `${s * 0.5}px`, height: `${s * 0.5}px`, top: '0', left: `${s * 0.05}px` }}></div>
          <div className="cloud-part" style={{ width: `${s * 0.4}px`, height: `${s * 0.4}px`, top: `${s * 0.05}px`, left: `${s * 0.45}px` }}></div>
          <div className="cloud-part" style={{ width: `${s * 0.3}px`, height: `${s * 0.3}px`, top: `${s * 0.2}px`, left: `${s * -0.05}px` }}></div>
          <div className="cloud-part" style={{ width: `${s * 0.35}px`, height: `${s * 0.35}px`, top: `${s * 0.15}px`, left: `${s * 0.65}px` }}></div>
          <div className="cloud-part" style={{ width: `${s * 0.25}px`, height: `${s * 0.25}px`, top: `${s * 0.35}px`, left: `${s * 0.2}px` }}></div>
          <div className="cloud-part" style={{ width: `${s * 0.2}px`, height: `${s * 0.2}px`, top: `${s * 0.4}px`, left: `${s * 0.45}px` }}></div>
        </>
      );
    }
  };

  const getCloudDimensions = (cloud) => {
    if (cloud.cloudType === 0) {
      return { width: `${cloud.baseSize * 1.2}px`, height: `${cloud.baseSize * 0.6}px` };
    } else if (cloud.cloudType === 1) {
      return { width: `${cloud.baseSize * 1.5}px`, height: `${cloud.baseSize * 0.4}px` };
    } else {
      return { width: `${cloud.baseSize}px`, height: `${cloud.baseSize * 0.8}px` };
    }
  };

  return (
    <div className="cloud-container" style={{ display: isDay ? 'block' : 'none' }}>
      {clouds.map(cloud => {
        const dimensions = getCloudDimensions(cloud);
        const leftPosition = `-${cloud.baseSize}px`;

        return (
          <div
            key={cloud.id}
            id={`cloud-${cloud.id}`}
            className="cloud"
            style={{
              width: dimensions.width,
              height: dimensions.height,
              top: `${cloud.top}%`,
              left: leftPosition,
              opacity: cloud.opacity,
              animation: `float ${cloud.duration}s linear ${cloud.delay}s infinite`,
            }}
          >
            {renderCloudParts(cloud)}
          </div>
        );
      })}
    </div>
  );
};

export default Clouds;