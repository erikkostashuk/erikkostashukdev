import React, { useCallback, useEffect, useRef, useState } from 'react';
import './MusicButton.css';

// "Good Night - Lofi Cozy Chill Music" by FASSounds, from Pixabay
// (Pixabay Content License: free to use, no attribution required)
const TRACK_URL = '/lofi.m4a';
const VOLUME = 0.5;

const NoteIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
  </svg>
);

const MusicButton = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [clicked, setClicked] = useState(false);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    setClicked(true);
    if (audio.paused) {
      audio.volume = VOLUME;
      // Rejects if the file can't load; the button just stays off
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, []);

  // Pressing M toggles the music too, unless it's part of a browser shortcut or typed into a field
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key.toLowerCase() !== 'm' || event.repeat || event.defaultPrevented) return;
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const { tagName, isContentEditable } = event.target;
      if (isContentEditable || tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT') return;
      toggle();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [toggle]);

  return (
    <>
      <button
        type="button"
        className={clicked ? 'music' : 'music music-bounce'}
        aria-label="Lofi music"
        aria-pressed={playing}
        aria-keyshortcuts="M"
        title={playing ? 'Pause music (M)' : 'Play music (M)'}
        onClick={toggle}
      >
        <NoteIcon />
      </button>
      {/* State follows the element, so pausing from the OS media controls stays in sync */}
      <audio
        ref={audioRef}
        src={TRACK_URL}
        loop
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
    </>
  );
};

export default MusicButton;
