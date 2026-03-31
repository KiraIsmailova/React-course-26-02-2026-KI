import styles from './CustomHeader.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { AuthButton } from '../AuthButton/AuthButton';
import { useNavigate } from 'react-router';

export const CustomHeader = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <header className={styles['customHeader']}>
      <div className={styles['headerInner']}>
        <div className={styles['headerLogo']} onClick={() => navigate('/')}>
          <img src="../../../public/main-logo.png" />
        </div>
        <button onClick={toggleTheme} className={styles.toggleBtn}>
          {isDark ? '☀️ Переключить на светлую' : '🌙 Переключить на темную'}
        </button>
        <AuthButton />
      </div>
    </header>
  );
};
