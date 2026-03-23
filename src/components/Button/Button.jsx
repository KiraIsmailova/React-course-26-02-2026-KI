import styles from './Button.module.css';
import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';

export const Button = ({ children, ...restProps }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <button
      className={classNames(styles.button, {
        [styles.buttonDark]: isDark,
      })}
      {...restProps}
    >
      {children}
    </button>
  );
};
