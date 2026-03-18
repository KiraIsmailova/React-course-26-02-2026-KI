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
    <div className={styles['tabsContainer']}>
      <div className={styles['tabsHeader']}>
        {items.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleClick(tab.id)}
            className={`${styles['tabButton']} ${activeTabId === tab.id ? styles['active'] : ''}`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className={styles['tabsContent']}>
        <div className={styles['contentInner']}>
          {activeContent && renderContent(activeContent)}
        </div>
      </div>
    </div>
  );
};
