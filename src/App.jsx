import React from 'react';
import Footer from './Footer';
import MusicButton from './MusicButton';
import NewsTicker from './NewsTicker';
import './App.css';

const Header = () => (
  <header className="header">
    <h1>Hi, I’m Erik!</h1>
    <p>
      I’m a Software Developer in Toronto,
      currently at <a href="https://www.dialogue.co/" target="_blank" rel="noopener noreferrer">Dialogue</a> and
      previously at <a href="https://www.ssense.com" target="_blank" rel="noopener noreferrer">SSENSE</a>.
      I love building robust, scalable backend systems, especially in TypeScript and Python.
      You can reach me through the links below.
    </p>
  </header>
);

const Links = () => (
  <nav className="links" aria-label="Links">
    <ul>
      <li><a href="https://github.com/erikkostashuk" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      <li><a href="https://linkedin.com/in/erikkostashuk" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      <li><a href="mailto:erikkostashuk@gmail.com">Email</a></li>
      <li><a href="/resume.pdf" download="Erik_Kostashuk_Resume.pdf">Resume</a></li>
    </ul>
  </nav>
);

const SideProjects = () => {
  const projects = [
    { name: 'GeoClip.fun', description: 'A real-time video-powered geography guessing game', url: 'https://www.geoclip.fun/' },
    { name: 'Quick Volume', description: 'Control individual Chrome tab volumes, boost beyond 100%', url: 'https://chromewebstore.google.com/detail/quick-volume/cnakfhhojlpnmnemfpndiligghlgjiij?authuser=0&hl=en' },
    { name: 'Full Page Screenshot', description: 'Capture full-page screenshots with automatic scrolling and stitching', url: 'https://chromewebstore.google.com/detail/full-page-screenshot/bmfpkmjapdkpgdbbnjneadbcclnakcen?authuser=0&hl=en' },
    { name: 'Simple Pomodoro', description: 'A straightforward Pomodoro timer for productivity', url: 'https://chromewebstore.google.com/detail/simple-pomodoro/bebgodohjfbcakianhmhjgopmepekcnk?authuser=0&hl=en' },
    { name: 'Quick Paste', description: 'A lightweight clipboard history manager for macOS', url: 'https://quickpaste.netlify.app/' },
    { name: 'AutoClicker for Mac', description: 'A simple autoclicker application for macOS with a modern UI', url: 'https://github.com/erikkostashuk/autoclicker-for-mac' },
    { name: 'NIBBIT', description: 'An arcade maze-chase game playable in the browser', url: 'https://nibbit.vercel.app/' },
    { name: 'Pong', description: 'Single-player Pong against an AI opponent on an HTML5 canvas', url: 'https://pong-amber-one.vercel.app/' },
    { name: 'Linkfile', description: 'An open-source link-in-bio page configured from a single JSON file', url: 'https://linkfile.vercel.app/' },
    { name: 'GitChronicle', description: 'An open-source tool that turns a Git repository into a cinematic recap and engineering dashboard', url: 'https://gitchronicle-tptb.onrender.com/' }
  ];

  return (
    <section className="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading">Things I’ve built for fun</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.name}>
            <a className="project" href={project.url} target="_blank" rel="noopener noreferrer">
              <span className="project-name">
                {project.name}
                <span className="project-arrow" aria-hidden="true">↗</span>
              </span>
              <span className="project-description">{project.description}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

function App() {
  return (
    <>
      <main className="app">
        <Header />
        <Links />
        <SideProjects />
      </main>
      <Footer />
      <NewsTicker />
      <MusicButton />
    </>
  );
}

export default App;
