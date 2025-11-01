import React from 'react';

const SideProjects = ({ isDay }) => {
  const projects = [
    {
      name: 'GeoClip.fun',
      description: 'A real-time video-powered geography guessing game',
      url: 'https://www.geoclip.fun/'
    },
    {
      name: 'Quick Volume',
      description: 'Control individual Chrome tab volumes, boost beyond 100%',
      url: 'https://chromewebstore.google.com/detail/quick-volume/cnakfhhojlpnmnemfpndiligghlgjiij?authuser=0&hl=en'
    },
    {
      name: 'Full Page Screenshot',
      description: 'Capture full-page screenshots with automatic scrolling and stitching',
      url: 'https://chromewebstore.google.com/detail/full-page-screenshot/bmfpkmjapdkpgdbbnjneadbcclnakcen?authuser=0&hl=en'
    },
    {
      name: 'Simple Pomodoro',
      description: 'A straightforward Pomodoro timer for productivity',
      url: 'https://chromewebstore.google.com/detail/simple-pomodoro/bebgodohjfbcakianhmhjgopmepekcnk?authuser=0&hl=en'
    },
    {
      name: 'Quick Paste',
      description: 'A lightweight clipboard history manager for macOS',
      url: 'https://quickpaste.netlify.app/'
    },
    {
      name: 'AutoClicker for Mac',
      description: 'A simple autoclicker application for MacOS with a modern UI',
      url: 'https://github.com/erikkostashuk/autoclicker-for-mac'
    }
  ];

  return (
    <div className="side-projects">
      <h3 className="side-projects-title">Side Projects</h3>
      <ul className="projects-list">
        {projects.map((project, index) => (
          <li key={index} className="project-item">
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-name">{project.name}</a>
            <span className="project-separator"> - </span>
            <span className="project-description">{project.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideProjects;
