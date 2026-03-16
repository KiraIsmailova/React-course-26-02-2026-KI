import styles from './CustomHeader.module.css';

export const CustomHeader = () => {
  return (
    <header className={styles['custom-header']}>
      <div className={styles['header-inner']}>
        <p className={styles['header-logo']}>It will be logo</p>
        <ul className={styles['header-list']}>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </div>
    </header>
  );
};
