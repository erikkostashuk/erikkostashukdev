import React, { useEffect, useRef, useState } from 'react';
import './NewsTicker.css';

const FEED_URL = 'https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=30';
const SPEED = 50; // pixels per second

const toStory = (hit) => ({
  id: hit.objectID,
  title: hit.title,
  // Ask HN posts have no external url; anything that isn't http(s) is not trusted
  url: /^https?:\/\//.test(hit.url) ? hit.url : `https://news.ycombinator.com/item?id=${hit.objectID}`,
});

const Headlines = ({ stories, hidden }) => (
  <ul className="ticker-list" aria-hidden={hidden || undefined}>
    {stories.map((story) => (
      <li key={story.id}>
        <a href={story.url} target="_blank" rel="noopener noreferrer" tabIndex={hidden ? -1 : undefined}>
          {story.title}
        </a>
      </li>
    ))}
  </ul>
);

const NewsTicker = () => {
  const [stories, setStories] = useState([]);
  const trackRef = useRef(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(FEED_URL, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(res.statusText))))
      .then(({ hits }) => setStories(hits.filter((hit) => hit.title).map(toStory)))
      // The ticker is decorative: if the feed is unavailable it simply doesn't render
      .catch(() => {});
    return () => controller.abort();
  }, []);

  // Scale the loop duration to the content width so the speed stays constant
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    const observer = new ResizeObserver(() => {
      track.style.setProperty('--ticker-duration', `${track.scrollWidth / 2 / SPEED}s`);
    });
    observer.observe(track);
    return () => observer.disconnect();
  }, [stories]);

  if (stories.length === 0) return null;

  // The list is rendered twice so the loop is seamless; the copy is hidden from assistive tech
  return (
    <aside className="ticker" aria-label="Tech headlines from Hacker News">
      <div className="ticker-track" ref={trackRef}>
        <Headlines stories={stories} />
        <Headlines stories={stories} hidden />
      </div>
    </aside>
  );
};

export default NewsTicker;
