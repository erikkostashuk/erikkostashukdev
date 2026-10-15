import React, { useRef, useState } from 'react';
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

  const toggle = () => {
    const audio = audioRef.current;
    setClicked(true);
    if (audio.paused) {
      audio.volume = VOLUME;
      // Rejects if the file can't load; the button just stays off
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  };

  return (
    <>
      <button
        type="button"
        className={clicked ? 'music' : 'music music-bounce'}
        aria-label="Lofi music"
        aria-pressed={playing}
        title={playing ? 'Pause music' : 'Play music'}
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
