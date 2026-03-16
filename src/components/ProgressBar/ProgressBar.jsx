import { useEffect, useState } from 'react';
import styles from './ProgressBar.module.css';

export const ProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setScrollWidth(`${percent}%`);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={styles['progress-bar']}
      style={{ width: scrollWidth }}
    ></div>
  );
};
