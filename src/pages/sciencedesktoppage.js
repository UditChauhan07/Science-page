import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from '../styles/sciencedesktop.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';



const Sciencedesktoppage = () => {
  return (
    <div className={styles.leptop}>
      <Carousel fade={true} interval={10000} controls={false} pause={false} className={styles.carousel}>

        {/* First Slide */}
        <Carousel.Item>
          <div className={styles.carouselMain}>
            <img

              src="/images/heroSlide1.png"
              alt="First slide"
            />
          </div>

          <Carousel.Caption className={styles.imgcotent}>
            <div className={styles.heroImgContent}>
              <h3>1st slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>

          </Carousel.Caption>
        </Carousel.Item>

        {/* Second Slide */}
        <Carousel.Item>
          <div className={styles.carouselMain}>
            <img

              src="/images/heroSlide1.png"
              alt="Second slide"
            />
          </div>
          <Carousel.Caption>
            <div className={styles.heroImgContent}>
              <h3>2nd slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Third Slide */}
        <Carousel.Item>
          <div className={styles.carouselMain}>
            <img

              src="/images/heroSlide1.png"
              alt="Second slide"
            />
          </div>
          <Carousel.Caption>
            <div className={styles.heroImgContent}>
              <h3>3th slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Fourth Slide */}
        <Carousel.Item>
          <div className={styles.carouselMain}>
            <img

              src="/images/heroSlide1.png"
              alt="Second slide"
            />
          </div>
          <Carousel.Caption>
            <div className={styles.heroImgContent}>
              <h3>Second slide label</h3>
              <p>4th ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Fifth Slide */}
        <Carousel.Item>
          <div className={styles.carouselMain}>
            <img

              src="/images/heroSlide1.png"
              alt="Second slide"
            />
          </div>
          <Carousel.Caption>
            <div className={styles.heroImgContent}>
              <h3>5th slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className={`container ${styles.customContainer}`}>

      </div>
    </div>

  );
}

export default Sciencedesktoppage;
