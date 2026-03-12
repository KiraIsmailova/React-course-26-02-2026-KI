import { useState } from 'react';
import { Counter } from '../counter/Counter';
import './RestaurantsPage.css';
import { Restaurant } from '../restaurant/restaurant';

export const RestaurantsPage = ({ items }) => {
  const [activeTabId, setActiveTabId] = useState(items[0].id);
  if (!items) {
    return <div>Данные ресторанов еще не загружены</div>;
  }

  const handleClick = (id) => {
    if (id === activeTabId) return;
    setActiveTabId(id);
  };

  const activeContent = items.find((item) => item.id === activeTabId);

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {items.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleClick(tab.id)}
            className={`tab-button ${activeTabId === tab.id ? 'active' : ''}`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        <div className="content-inner">
          <h3>Меню:</h3>
          <Restaurant key={activeContent.id} restaurant={activeContent} />
        </div>
      </div>
    </div>
  );
};
