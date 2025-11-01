import React, { useState, useEffect, useRef } from 'react';

const Airplane = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [trailSegments, setTrailSegments] = useState([]);
  const airplaneRef = useRef(null);
  const trailIntervalRef = useRef(null);

  useEffect(() => {
    const airplaneInterval = setInterval(() => {
      setIsVisible(true);
      setTrailSegments([]);

      setTimeout(() => {
        setIsVisible(false);
      }, 15000);
    }, 25000);

    setIsVisible(true);

    return () => {
      clearInterval(airplaneInterval);
      if (trailIntervalRef.current) {
        clearInterval(trailIntervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let lastPosition = null;
      trailIntervalRef.current = setInterval(() => {
        if (airplaneRef.current) {
          const rect = airplaneRef.current.getBoundingClientRect();
          const currentPosition = {
            x: rect.left,
            y: rect.top + rect.height / 2
          };

          if (lastPosition) {
            const newSegment = {
              id: Date.now(),
              startX: lastPosition.x,
              startY: lastPosition.y,
              endX: currentPosition.x,
              endY: currentPosition.y,
              opacity: 0.8,
              width: Math.random() * 20 + 30
            };

            setTrailSegments(prev => {
              const updated = [...prev, newSegment].slice(-8);

              return updated.map((segment, index) => ({
                ...segment,
                opacity: Math.max(0, 0.8 - (index / updated.length) * 0.8)
              }));
            });
          }

          lastPosition = currentPosition;
        }
      }, 200);
    } else {
      const fadeInterval = setInterval(() => {
        setTrailSegments(prev => {
          const updated = prev.map(segment => ({
            ...segment,
            opacity: Math.max(0, segment.opacity - 0.02)
          })).filter(segment => segment.opacity > 0);

          if (updated.length === 0) {
            clearInterval(fadeInterval);
          }

          return updated;
        });
      }, 100);

      if (trailIntervalRef.current) {
        clearInterval(trailIntervalRef.current);
      }
    }

    return () => {
      if (trailIntervalRef.current) {
        clearInterval(trailIntervalRef.current);
      }
    };
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <div
          ref={airplaneRef}
          className="airplane"
        >
          <div className="airplane-cloud"></div>
        </div>
      )}

      <div className="trail-container">
        {trailSegments.map(segment => (
          <div
            key={segment.id}
            className="trail-segment"
            style={{
              position: 'fixed',
              left: `${segment.endX}px`,
              top: `${segment.endY}px`,
              width: `${segment.width}px`,
              height: '8px',
              opacity: segment.opacity,
              transform: 'translate(-100%, -50%)',
              background: 'linear-gradient(to left, transparent, rgba(255,255,255,0.8), transparent)'
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Airplane;