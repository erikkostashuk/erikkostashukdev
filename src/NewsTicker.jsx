import { useEffect, useRef, useState } from 'react';
import './NewsTicker.css';

const FEED_URL = 'https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=30';
const PIXELS_PER_SECOND = 50;

const toStory = (hit) => ({
  id: hit.objectID,
  title: hit.title,
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
      .catch(() => {});
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    const observer = new ResizeObserver(() => {
      track.style.setProperty('--ticker-duration', `${track.scrollWidth / 2 / PIXELS_PER_SECOND}s`);
    });
    observer.observe(track);
    return () => observer.disconnect();
  }, [stories]);

  if (stories.length === 0) return null;

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
