import React, { useEffect, useRef } from 'react';

const YouTubePlayer = ({ isMuted }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    window.onYouTubeIframeAPIReady = function() {
      playerRef.current = new window.YT.Player('yt-player', {
        videoId: 'f02mOEt11OQ',
        events: {
          onReady: onPlayerReady,
        },
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: 'f02mOEt11OQ',
          mute: 1,
        },
      });
    };

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }, []);

  useEffect(() => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.mute();
      } else {
        playerRef.current.unMute();
      }
    }
  }, [isMuted]);

  const onPlayerReady = (event) => {
    event.target.playVideo();
  };

  return <div id="yt-player" className="youtube-player"></div>;
};

export default YouTubePlayer;
