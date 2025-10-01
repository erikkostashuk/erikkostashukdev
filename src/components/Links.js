import React from 'react';

const Links = ({ isDay }) => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Erik_Kostashuk_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="links">
      <a href="https://github.com/erikkostashuk" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://linkedin.com/in/erikkostashuk" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="mailto:erikkostashuk@gmail.com" target="_blank" rel="noopener noreferrer">Contact Me</a>
      <button onClick={handleResumeDownload} className="resume-button">Resume</button>
    </div>
  );
};

export default Links;
