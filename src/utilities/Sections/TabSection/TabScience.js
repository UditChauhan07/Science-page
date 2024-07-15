import React, {useState} from 'react'
import styles from '../../../styles/scienceHuman.module.css';
function TabScience() {


  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "/images/yellowdot.webp",
      text1: "Hair + Skin",
      text2: "Bones",
      text3: "Nails",
      text4: "Gut",
      text5: "Tendons",
      className: "SliderText",
    },
    {
      image: "/images/GreenDot.webp",
      text1: "Heart",
      text2: "Liver",
      text3: "HDL",
      text4: "LDL",
      text5: "TG",
      className: "SliderText1",
    },
    {
      image: "/images/redDot.webp",
      text1: "Mental Health",
      text2: "Cardio Health",
      text3: "Liver Health",
      text4: "Digestive Health",
      text5: "Immunity Health",
      className: "SliderText2",
    },
    {
      image: "/images/blueDot.webp",
      text1: "Blue Light & Macula Shield",
      text2: "360° Eye Health",
      text3: "Computer Vision Syndrome",
      text4: "Focus & Recovery Dry Eye",
      text5: "Reduce  Eye Strain",
      className: "SliderText3",
    },
  ];

  const thumbnails = [
    "/images/royalSlider1.webp",
    "/images/royalSlider2.webp",
    "/images/royalSlider3.webp",
    "/images/royalSlider4.webp",
  ];

  const handleClickThumbnail = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div>
      
      <div className={styles.sliderContainer}>
            <div className={styles.mainSlider}>
              {/* Render the current slide based on currentIndex */}
              <img src={slides[currentIndex].image} alt="Main Slide" />
              <div className={styles[slides[currentIndex].className]}>
                {/* Render the text of the current slide */}
                <h4>{slides[currentIndex].text1}</h4>
                <h4>{slides[currentIndex].text2}</h4>
                <h4>{slides[currentIndex].text3}</h4>
                <h4>{slides[currentIndex].text4}</h4>
                <h4>{slides[currentIndex].text5}</h4>
              </div>
            </div>
            <div className={styles.thumbnailSlider}>
              {/* Map through thumbnails array to render thumbnails */}
              {thumbnails.map((thumbnail, index) => (
                <img
                  key={index}
                  src={thumbnail}
                  alt={`Thumbnail ${index}`}
                  className={index === currentIndex ? "active" : ""}
                  onClick={() => handleClickThumbnail(index)}
                />
              ))}
            </div>
          </div>
    </div>
  )
}

export default TabScience
