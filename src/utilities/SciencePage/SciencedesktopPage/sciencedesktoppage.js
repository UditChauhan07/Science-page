
import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import styles from './sciencedesktop.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import slidesData from '../../../../json/science-carousel.json'
import TabScience from '../ScienceTab/DesktopTab/TabScience';
import ScienceSlider2 from '@/utilities/SciencePage/SliderPage/ScienceSlider2';
import SciencesSlider from '@/utilities/SciencePage/SliderPage/SciencesSlider';
import ScienceNewVideo from '@/utilities/SciencePage/ScienceVideo/ScienceNewVideo';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Modal from '../ModalSciencePage/Modal';
import TendoActive from '../tenoactive/TendoActive';


const Sciencedesktoppage = () => {
  const carouselRef = useRef(null);

  const [activeSlideIndex, setActiveSlideIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleShow = (index) => {
    setActiveSlideIndex(index);
    setIsModalOpen(true);
  };


  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (

    <div className={styles.leptop}>

      {/* Custom Modal */}
      {isModalOpen && (
        <Modal show={isModalOpen} onClose={handleCloseModal}>
         <div className={styles.modalHeader}>
            <h1>{slidesData[activeSlideIndex]?.title}</h1>
            <h2>{slidesData[activeSlideIndex]?.subtitle}</h2>
          </div>
          <div className={styles.modalBody}>
            <p>{slidesData[activeSlideIndex]?.readmore}</p>
            <p>{slidesData[activeSlideIndex]?.readmore2}</p>
            <p>{slidesData[activeSlideIndex]?.readmore3}</p>
            <p>{slidesData[activeSlideIndex]?.readmore4}</p>
            <p>{slidesData[activeSlideIndex]?.readmore5}</p>
            <p>{slidesData[activeSlideIndex]?.readmore6}</p>
          </div>
        </Modal>
      )}
      {/* End of Custom Modal */}
      <div className={styles.carouselContainer}>

      <Carousel fade={true} interval={4000} controls={false} pause={false} className={styles.carousel} ref={carouselRef}>
          {slidesData.map((slide, index) => (
            <Carousel.Item key={index}>
              <div className={styles.carouselMain}>
                <img src={slide.image} alt={`Slide ${index + 1}`} />
              </div>
              <Carousel.Caption className={styles.imgcotent}>
                <div className={`container ${styles.heroImgContent}`}>
                  <h1>{slide.title}</h1>
                  <h2>{slide.subtitle}</h2>
                  <p>{slide.content}</p>
                  {slide.readmore && (
                    <div className={styles.ancorLink}>
                      <button onClick={() => handleShow(index)}>Read More</button>
                    </div>
                  )}
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className={styles.carouselBtnDiv}>
        <button
          className={`${styles.carouselControl} ${styles.carouselControlLeft}`}
          onClick={handlePrev}
        >
         <i className={styles.LeftArrow}><FaAngleLeft /></i> 
        </button>
        <button
          className={`${styles.carouselControl} ${styles.carouselControlRight}`}
          onClick={handleNext}>

         <i className={styles.RightArrow}><FaAngleRight /></i> 
        </button>
        </div>
      </div>
      <div className={styles.RectangleDiv}>
        <div className={styles.Rectangle1}><img src='/images/Rectangle1.webp' /></div>
        <div className={styles.Rectangle2}><img src='/images/Rectangle2.webp' /></div>
      </div>
      {/*  */}


      {/* Science Video Page Start */}
      <ScienceNewVideo />
      {/* Science Video Page Start */}


      {/* Human Tab Section Start */}
      {/* <TabScience /> */}
      {/* Human Tab Section End */}

      {/* Human Tab Section Start */}
<TendoActive/>
      {/* Human Tab Section End */}


      {/* Science Slider 1  Start*/}
      <SciencesSlider />
      {/* Science Slider 1  End*/}


      {/* Science Slider 2 Start */}
      <ScienceSlider2 />
      {/* Science Slider 2 Start */}

  

    </div>

  );
}

export default Sciencedesktoppage;
