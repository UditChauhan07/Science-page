import React, {useState} from "react";
import styles from "../styles/scienceHuman.module.css";
import Link from "next/link";

const ScienceHuman = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "/images/yellowdot.png",
      text1: "Hair + Skin",
      text2: "Bones",
      text3: "Nails",
      text4: "Gut",
      text5: "Tendons",
      className: "SliderText",
    },
    {
      image: "/images/GreenDot.png",
      text1: "Heart",
      text2: "Liver",
      text3: "HDL",
      text4: "LDL",
      text5: "TG",
      className: "SliderText1",
    },
    {
      image: "/images/redDot.png",
      text1: "Mental Health",
      text2: "Cardio Health",
      text3: "Liver Health",
      text4: "Digestive Health",
      text5: "Immunity Health",
      className: "SliderText2",
    },
    {
      image: "/images/blueDot.png",
      text1: "Blue Light & Macula Shield",
      text2: "360° Eye Health",
      text3: "Computer Vision Syndrome",
      text4: "Focus & Recovery Dry Eye",
      text5: "Reduce  Eye Strain",
      className: "SliderText3",
    },
  ];

  const thumbnails = [
    "/images/royalSlider1.png",
    "/images/royalSlider2.png",
    "/images/royalSlider3.png",
    "/images/royalSlider4.png",
  ];

  const handleClickThumbnail = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div>
      <div>
        <div className={styles.arrowTop}></div>
        <div className={styles.TopBruno}>
          <div className={styles.PhytoVideoTag}>
            <video width="100%" height="100%" loop autoPlay muted>
              <source src="/images/ScienceHuman.mp4" type="video/mp4" />
              <source src="/images/ScienceHuman.mp4" type="video/ogg" />
            </video>
          </div>

          <div className={styles.videoContent}>
            <div className={styles.backgroundShadow}>
              <h1>Bruno MD</h1>
              <p>A prescription to thrive</p>
              <h5>
                Powering the Human Machine Explore the benefits of targeted
                natural ingredients
              </h5>
            </div>

            {/* <div className={styles.imageDiv}>
              <Link href="/science-phytosome">
                <div className={` ${styles.imageMain} ${styles.imageMain1} `}>
                  <img src="/images/greeneffect.png" />
                </div>
              </Link>

              <Link href="/science-clinical">
                <div className={` ${styles.imageMain} ${styles.imageMain2} `}>
                  <img src="/images/DoctrwithTube.png" />
                </div>
              </Link>
              <Link href="/science-human">
                <div className={` ${styles.imageMain} ${styles.imageMain3} `}>
                  <img src="/images/Swing.png" />
                </div>
              </Link>
            </div> */}
          </div>

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
      </div>
    </div>
  );
};
ScienceHuman.hideLayout = true;
export default ScienceHuman;
