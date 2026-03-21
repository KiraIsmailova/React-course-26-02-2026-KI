import styles from './Button.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';

export const Button = ({ children, ...restProps }) => {
  const { isDark } = useContext(ThemeContext);

  const className = `${styles.button} ${isDark ? styles.buttonDark : ''}`;

  return (
    <button className={className} {...restProps}>
      {children}
    </button>
  );
};
