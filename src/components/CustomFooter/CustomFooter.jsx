import styles from './CustomFooter.module.css';
import image from '../../../public/main-logo.png';

export const CustomFooter = () => {
  return (
    <footer className={styles.customFooter}>
      <div className={styles.footerInner}>
        <img src={image} />
        <ul className={styles.footerList}>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
          <li>item 5</li>
          <li>item 6</li>
        </ul>
      </div>
    </footer>
  );
};
