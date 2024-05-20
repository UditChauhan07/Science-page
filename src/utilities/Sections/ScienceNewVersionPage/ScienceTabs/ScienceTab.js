import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './ScienceTab.module.css';
import Phytosome from '../../../../pages/science-phytosome'; 
import ScienceClinical from '../../../../pages/science-clinical';
import ScienceHuman from '../../../../pages/science-human';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();

  const tabs = [
    { img: '/images/greeneffect.png' },
    { img: '/images/DoctrwithTube.png' },
    { img: '/images/Swing.png' },
  ];
  const tabContent = [
    <Phytosome key="phytosome" />,
    <ScienceClinical key="scienceClinical" />,
    <ScienceHuman key="scienceHuman" />,
  ];

  useEffect(() => {
    if (router.query.tab) {
      const tabIndex = parseInt(router.query.tab, 10);
      if (!isNaN(tabIndex) && tabIndex >= 0 && tabIndex < tabs.length) {
        setActiveTab(tabIndex);
      }
    }
  }, [router.query.tab]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handlePrevClick = () => {
    setActiveTab((prev) => (prev > 0 ? prev - 1 : tabs.length - 1));
  };

  const handleNextClick = () => {
    setActiveTab((prev) => (prev < tabs.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabsControler}>
        <div className={styles.tabsControler11}>
          <div className={styles.tabsControler1}>
            <button className={`${styles.arrow} ${styles.leftArrow}`} onClick={handlePrevClick}>
              ⮜
            </button>
            <div className={styles.tabs}>
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`${styles.tab} ${activeTab === index ? styles.active : ''}`}
                  onClick={() => handleTabClick(index)}
                >
                  <img src={tab.img} alt={tab.name} className={styles.tabImage} />
                  <span>{tab.name}</span>
                </div>
              ))}
            </div>
            <button className={`${styles.arrow} ${styles.rightArrow}`} onClick={handleNextClick}>
              ⮞
            </button>
            <div className={styles.activeTabIndicator} style={{ left: `${styles.activeTab * 25}%` }} />
          </div>
        </div>
      </div>
      <div className={styles.tabContent}>
        {tabContent[activeTab]}
      </div>
    </div>
  );
};
Tabs.hideLayout = true;
export default Tabs;