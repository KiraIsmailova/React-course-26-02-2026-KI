import styles from './CustomHeader.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';

export const CustomHeader = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={styles['customHeader']}>
      <div className={styles['headerInner']}>
        <p className={styles['headerLogo']}>It will be logo</p>

        <button onClick={toggleTheme} className={styles.toggleBtn}>
          {isDark ? '☀️ Переключить на светлую' : '🌙 Переключить на темную'}
        </button>
        <ul className={styles['headerList']}>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </div>
    </header>
  );
};
