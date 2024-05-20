// components/SliderTabs.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import styles from './PracticeTab.module.css'

const SliderTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveTab(next)
  };

  const tabs = [
    { title: 'Tab 1', content: 'Content for Tab 1' },
    { title: 'Tab 2', content: 'Content for Tab 2' },
    { title: 'Tab 3', content: 'Content for Tab 3' },
  ];

  return (
    <div>
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${styles.tab} ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <Slider {...settings}>
        {tabs.map((tab, index) => (
          <div key={index} className="slide">
            <h2>{tab.title}</h2>
            <p>{tab.content}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderTabs;
