import styles from './CustomHeader.module.css';

export const CustomHeader = () => {
  return (
    <header className={styles['customHeader']}>
      <div className={styles['headerInner']}>
        <p className={styles['headerLogo']}>It will be logo</p>
        <ul className={styles['headerList']}>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </div>
    </header>
  );
};
