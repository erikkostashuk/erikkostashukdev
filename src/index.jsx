import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// A note for anyone who opens the browser console. DevTools can't use the page's web fonts, so the
// serif falls back to Times; the white background keeps it black on white in dark-mode DevTools too
const note = "font-family: 'Old Standard TT', 'Times New Roman', Times, Georgia, serif; color: #171717; background: #fff;";
console.log(
  '%cHi, I’m Erik! Thanks for poking around.%c\n%cCurious how this site works? https://github.com/erikkostashuk/erikkostashukdev\nSay hi: erikkostashuk@gmail.com',
  `${note} font-size: 18px; padding: 10px 14px;`,
  '',
  `${note} font-size: 13px; line-height: 1.8; padding: 4px 14px;`
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);