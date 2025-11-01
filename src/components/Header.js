import React, { useState, useEffect } from 'react';

const fullText = 'Hello! My name is Erik, nice to meet you!';
const mistakePoints = [18, 35];

const Header = ({ isDay }) => {
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;

    const handleTyping = () => {
      if (isDeleting) {
        setDisplayText(prev => prev.substring(0, prev.length - 1));
        setTypingSpeed(100);
        setIsDeleting(false);
        setCharIndex(charIndex + 1);
      } else if (mistakePoints.includes(charIndex)) {
        setDisplayText(fullText.substring(0, charIndex) + 'x');
        setTypingSpeed(300);
        setIsDeleting(true);
      } else if (charIndex < fullText.length) {
        setDisplayText(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        setTypingSpeed(150);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, typingSpeed]);

  return (
    <div className="header">
      <h1 className="typewriter-dynamic">
        {displayText}
        <span className="cursor">|</span>
      </h1>
      <h3>Currently I am a Software Developer at <a href="https://www.ssense.com" target="_blank" rel="noopener noreferrer" className="inline-link">SSENSE</a> where I build scalable backend systems to power luxury e-commerce</h3>
      <h3>I am Located in Toronto, Canada 🇨🇦</h3>
      <p className="scroll-hint">Check out my links below!</p>
    </div>
  );
};

export default Header;
