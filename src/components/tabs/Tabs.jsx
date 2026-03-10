import { useState } from 'react';
import { Counter } from '../counter/Counter';
import './tabs.css';

export const Tabs = ({ items }) => {
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
          {activeContent.menu && activeContent.menu.length > 0 ? (
            <ul>
              {activeContent.menu.map((itemMenu) => (
                <li key={itemMenu.id}>
                  {itemMenu.name}
                  <Counter />
                </li>
              ))}
            </ul>
          ) : (
            <p>Меню скоро появится</p>
          )}

          <h3>Отзывы:</h3>
          {activeContent.reviews && activeContent.reviews.length > 0 ? (
            <ul>
              {activeContent.reviews.map((itemReview) => (
                <li key={itemReview.id}>{itemReview.text}</li>
              ))}
            </ul>
          ) : (
            <p>Отзывы скоро появятся</p>
          )}
        </div>
      </div>
    </div>
  );
};
