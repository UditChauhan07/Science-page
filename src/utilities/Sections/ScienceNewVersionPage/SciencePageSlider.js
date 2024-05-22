import React, { Component,useState ,useRef  } from "react";
import Slider from "react-slick";
import styles from "./styles.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Endeavor from '../../../pages/Endeavor'
import SciencePage from './SciencePage'

import ScienceVideoPage from './ScienceVideoPage'


function SciencePageSlider() {
  const [isVisible, setIsVisible] = useState(true);
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);


  const goToSlide = (index) => {
    console.log("indexaa",index);
    setActiveIndex(index);
    setActiveTab(index);
  };


  const handleClick = (index) => {
    console.log("index",index);
    setIsVisible(!isVisible);
    setIsSliderVisible(!isSliderVisible);
    goToSlide(index);
  };

  const handleBack = () => {
    setIsVisible(!isVisible);
    setIsSliderVisible(!isSliderVisible);
  };



  const settings = {
    className: "center",
    centerMode: true,
    speed: 300,
    arrows: false,
    dots: false,
     autoplaySpeed:1500,
    autoplay:true,
    infinite: true,
    centerPadding: "40px ",
        slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,

        
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  

  return (
    <div>
     {isVisible &&<div>
      <SciencePage></SciencePage>
    
       
      <div className={styles.pageSlider}>
       <div className="slider-container">
          <Slider {...settings}>
            <div className={styles.startSlider} onClick={() => handleClick(1)}>
           
                <img src="/images/doctor.webp" />
                <h3>Science: a human endeavor.</h3>
        
            </div>

            <div className={styles.startSlider} onClick={() => handleClick(2)}>
              <img src="/images/jungle.webp" />
              <h3>Understand the world.</h3>
            </div>

            <div className={styles.startSlider} onClick={() => handleClick(3)}>
              <img src="/images/BlueZone.webp" />
              <h3>Blue Zone Longevity.</h3>
            </div>

            <div className={styles.startSlider} onClick={() => handleClick(4)}>
              <img src="/images/Fruitsss.webp" />
              <h3>Farm to Table.</h3>
            </div>

            <div className={styles.startSlider} onClick={() => handleClick(5)}>
              <img src="/images/GrapesGirl.webp" />
              <h3>Nature, Meet Pharma.</h3>
            </div>
          </Slider>
        </div>
        </div>
        <ScienceVideoPage></ScienceVideoPage>
        </div>}
 {isSliderVisible &&
   <div data-index1={activeIndex}>
     <h2 className='ArrowControl'  onClick={() => handleBack()}><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 1024 1024" class="icon" version="1.1"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000"/></svg></h2>
   <Endeavor index={activeIndex}></Endeavor>
  </div>}

     

      
    </div>
  );
}

export default SciencePageSlider;
