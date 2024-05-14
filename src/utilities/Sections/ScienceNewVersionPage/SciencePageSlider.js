import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./styles.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

function SciencePageSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    slidesToShow: 1,
    speed: 300,
    arrows: false,
    dots: false,
    infinite: false,
    centerPadding: "40px ",
    slidesToShow: 1,
    speed: 500,
  };

  return (
    <div>
      <div className={styles.pageSlider}>
        <div className="slider-container">
          <Slider {...settings}>
            <div className={styles.startSlider}>
              <Link href="/Endeavor">
                <img src="/images/doctor.png" />
                <h3>Science: a human endeavor.</h3>
              </Link>
            </div>

            <div className={styles.startSlider}>
              <img src="/images/jungle.png" />
              <h3>Understand the world.</h3>
            </div>

            <div className={styles.startSlider}>
              <img src="/images/BlueZone.png" />
              <h3>Blue Zone Longevity.</h3>
            </div>

            <div className={styles.startSlider}>
              <img src="/images/Fruitsss.png" />
              <h3>Farm to Table.</h3>
            </div>

            <div className={styles.startSlider}>
              <img src="/images/GrapesGirl.png" />
              <h3>Nature, Meet Pharma.</h3>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default SciencePageSlider;
