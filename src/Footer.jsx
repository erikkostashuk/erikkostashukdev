import { useEffect, useState } from 'react';
import './Footer.css';

const WEATHER_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=43.65&longitude=-79.38&current=temperature_2m,weather_code,is_day';
const WEATHER_REFRESH_MS = 15 * 60 * 1000;
const REPO_URL = 'https://github.com/erikkostashuk/erikkostashukdev';
const TEXT_PRESENTATION = '\uFE0E';

const torontoTime = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: '2-digit',
  timeZone: 'America/Toronto'
});

const describeWeather = (code, isDay) => {
  if (code <= 1) return [isDay ? '☀' : '☾', 'Clear'];
  if (code <= 3) return ['☁', 'Cloudy'];
  if (code <= 48) return ['☁', 'Foggy'];
  if (code <= 67) return ['☂', 'Rain'];
  if (code <= 77) return ['❄', 'Snow'];
  if (code <= 82) return ['☂', 'Rain'];
  if (code <= 86) return ['❄', 'Snow'];
  return ['⚡', 'Thunderstorms'];
};

const Footer = () => {
  const [now, setNow] = useState(() => new Date());
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    let timeout;
    const schedule = () => {
      timeout = setTimeout(() => {
        setNow(new Date());
        schedule();
      }, 60000 - (Date.now() % 60000));
    };
    schedule();
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const load = () =>
      fetch(WEATHER_URL, { signal: controller.signal })
        .then((res) => (res.ok ? res.json() : Promise.reject(new Error(res.statusText))))
        .then(({ current }) => {
          if (typeof current?.temperature_2m === 'number') setWeather(current);
        })
        .catch(() => {});
    load();
    const interval = setInterval(load, WEATHER_REFRESH_MS);
    return () => {
      clearInterval(interval);
      controller.abort();
    };
  }, []);

  const [symbol, condition] = weather ? describeWeather(weather.weather_code, weather.is_day) : [];

  return (
    <footer className="footer">
      Toronto · <time dateTime={now.toISOString()}>{torontoTime.format(now)}</time>
      {weather && (
        <>
          {' · '}
          <a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer" title="Weather data by Open-Meteo.com">
            {Math.round(weather.temperature_2m)}°C{' '}
            <span className="footer-symbol" role="img" aria-label={condition}>
              {symbol}
              {TEXT_PRESENTATION}
            </span>
          </a>
        </>
      )}
      {' · '}
      <a href={REPO_URL} target="_blank" rel="noopener noreferrer">View source</a>
    </footer>
  );
};

export default Footer;
