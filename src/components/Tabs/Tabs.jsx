import { useState } from 'react';
import styles from './Tabs.module.css';

export const Tabs = ({ items, renderContent }) => {
  const [activeTabId, setActiveTabId] = useState(items[0].id);

  if (!items || items.length === 0) {
    return <div>Нет данных для отображения</div>;
  }
  const handleClick = (id) => {
    if (id === activeTabId) return;
    setActiveTabId(id);
  };

  const activeContent = items.find((item) => item.id === activeTabId);

  return (
    <div className={styles['tabs-container']}>
      <div className={styles['tabs-header']}>
        {items.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleClick(tab.id)}
            className={`${styles['tab-button']} ${activeTabId === tab.id ? styles['active'] : ''}`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className={styles['tabs-content']}>
        <div className={styles['content-inner']}>
          {activeContent && renderContent(activeContent)}
        </div>
      </div>
    </div>
  );
};
