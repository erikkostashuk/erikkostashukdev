import React from 'react';
import './App.css';

const Header = () => (
  <header>
    <h1>Erik Kostashuk</h1>
    <p>
      Software Developer at <a href="https://www.dialogue.co/" target="_blank" rel="noopener noreferrer">Dialogue</a>.
    </p>
    <p>
      Previously at <a href="https://www.ssense.com" target="_blank" rel="noopener noreferrer">SSENSE</a>.
    </p>
    <p>Located in Toronto.</p>
  </header>
);

const Links = () => (
  <section>
    <h2>Links</h2>
    <ul>
      <li><a href="https://github.com/erikkostashuk" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      <li><a href="https://linkedin.com/in/erikkostashuk" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      <li><a href="mailto:erikkostashuk@gmail.com" target="_blank" rel="noopener noreferrer">Contact Me</a></li>
      <li><a href="/resume.pdf" download="Erik_Kostashuk_Resume.pdf">Resume</a></li>
    </ul>
  </section>
);

const SideProjects = () => {
  const projects = [
    { name: 'GeoClip.fun', description: 'A real-time video-powered geography guessing game', url: 'https://www.geoclip.fun/' },
    { name: 'Quick Volume', description: 'Control individual Chrome tab volumes, boost beyond 100%', url: 'https://chromewebstore.google.com/detail/quick-volume/cnakfhhojlpnmnemfpndiligghlgjiij?authuser=0&hl=en' },
    { name: 'Full Page Screenshot', description: 'Capture full-page screenshots with automatic scrolling and stitching', url: 'https://chromewebstore.google.com/detail/full-page-screenshot/bmfpkmjapdkpgdbbnjneadbcclnakcen?authuser=0&hl=en' },
    { name: 'Simple Pomodoro', description: 'A straightforward Pomodoro timer for productivity', url: 'https://chromewebstore.google.com/detail/simple-pomodoro/bebgodohjfbcakianhmhjgopmepekcnk?authuser=0&hl=en' },
    { name: 'Quick Paste', description: 'A lightweight clipboard history manager for macOS', url: 'https://quickpaste.netlify.app/' },
    { name: 'AutoClicker for Mac', description: 'A simple autoclicker application for MacOS with a modern UI', url: 'https://github.com/erikkostashuk/autoclicker-for-mac' },
    { name: 'NIBBIT', description: 'An arcade maze-chase game playable in the browser', url: 'https://nibbit.vercel.app/' },
    { name: 'Pong', description: 'Single-player Pong against an AI opponent on an HTML5 canvas', url: 'https://pong-amber-one.vercel.app/' },
    { name: 'Linkfile', description: 'An open-source link-in-bio page configured from a single JSON file', url: 'https://linkfile.vercel.app/' }
  ];

  return (
    <section>
      <h2>Side Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a> - {project.description}
          </li>
        ))}
      </ul>
    </section>
  );
};

function App() {
  return (
    <div className="app">
      <Header />
      <Links />
      <SideProjects />
    </div>
  );
}

export default App;
