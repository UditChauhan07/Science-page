import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import styles from '../styles/sciencedesktop.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import { IoIosArrowRoundBack } from "react-icons/io";
// import TabScience from '../utilities/Sections/TabSection/TabScience'


const Sciencedesktoppage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "/images/humanImg.png",
      text1: "Hair + Skin",
      dec: "Revitalize from Root to Tip: Medically Backed Solutions for Hair and Skin Health. Discover the Science Behind Your Glow!",
      text2: "Bones",
      dec2: "Strong bones for a life in motion. Build your strength, embrace your vitality.",
      text3: "Gut",
      dec3: "Strong bones for a life in motion. Build your strength, embrace your vitality.",
      text4: "Tendons",
      dec4: "Strong bones for a life in motion. Build your strength, embrace your vitality."

      // className: "SliderText",
    },
    {
      image: "/images/humanImg.png",
      text1: "Heart",
      dec: "orem Ipsum is simply dummy text of the printing and typesetting industry.",
      text2: "Liver",
      dec2: "orem Ipsum is simply dummy text of the printing and typesetting industry.",
      text3: "HDL",
      dec3: "orem Ipsum is simply dummy text of the printing and typesetting industry.",
      text4: "LDL",
      dec4: "orem Ipsum is simply dummy text of the printing and typesetting industry.",
      // className: "SliderText1",
    },
    {
      image: "/images/humanImg.png",
      text1: "Mental Health",
      dec: "orem Ipsum is simply dummy text of the printing and typesetting industry.",
      text2: "Cardio Health",
      dec2: "orem Ipsum is simply dummy text of the printing and typesetting industry.",
      text3: "Liver Health",
      dec3: "orem Ipsum is simply dummy text of the printing and typesetting industry.",
      text4: "Digestive Health",
      dec4: "orem Ipsum is simply dummy text of the printing and typesetting industry.",
      // className: "SliderText2",
    },
    {
      image: "/images/humanImg.png",
      text1: "Blue Light & Macula Shield",
      dec: "orem Ipsum is simply dummy text of the printing and typesetting industry.",
      text2: "360° Eye Health",
      dec2: "orem Ipsum is simply dummy text of the printing and typesetting industry.",
      text3: "Computer Vision Syndrome",
      dec3: "orem Ipsum is simply dummy text of the printing and typesetting industry.",
      text4: "Focus & Recovery Dry Eye",
      dec4: "orem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  const settings = {
    dots: false, // Hide dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  // .......Slider 1st Function Start.///

  const goToPrev = () => {
    slider.slickPrev();
  };
  const goToNext = () => {
    slider.slickNext();
  };
  let slider;
  // .......Slider 1st Function End.///

  // .......Slider 2nd Function Start..///
  const goToPrev2 = () => {
    slider2.slickPrev();
  };
  const goToNext2 = () => {
    slider2.slickNext();
  };
  let slider2;
  // .......Slider 2nd Function End.///

  // human Tab function///
  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.leptop}>
      <Carousel fade={true} interval={100000000} controls={false} pause={false} className={styles.carousel}>

        {/* First Slide */}
        <Carousel.Item>
          <div className={styles.carouselMain}>
            <img
              src="/images/heroSlide1.png"
              alt="First slide"
            />
          </div>

          <Carousel.Caption className={styles.imgcotent}>
            <div className={`container ${styles.heroImgContent}`}>
              <h3>Science </h3>
              <h5>A Human Endeavor.</h5>
              <p>Bruno MD is committed to furthering our understanding of the power of natural substances to improve human health and longevity.</p>
              <div className={styles.ancorLink}>
                <button><a href="">Read More</a></button>
              </div>
            </div>

          </Carousel.Caption>
        </Carousel.Item>

        {/* Second Slide */}
        <Carousel.Item>
          <div className={styles.carouselMain}>
            <img

              src="/images/heroSlide2.png"
              alt="First slide"
            />
          </div>

          <Carousel.Caption className={styles.imgcotent}>
            <div className={`container ${styles.heroImgContent}`}>
              <h3>Science </h3>
              <h5>A Human Endeavor.</h5>
              <p>Bruno MD is committed to furthering our understanding of the power of natural substances to improve human health and longevity.</p>
              <div className={styles.ancorLink}>
                <button><a href="">Read More</a></button>
              </div>
            </div>

          </Carousel.Caption>
        </Carousel.Item>

        {/* Third Slide */}
        <Carousel.Item>
          <div className={styles.carouselMain}>
            <img

              src="/images/heroSlide3.png"
              alt="First slide"
            />
          </div>

          <Carousel.Caption className={styles.imgcotent}>
            <div className={`container ${styles.heroImgContent}`}>
              <h3>Science </h3>
              <h5>A Human Endeavor.</h5>
              <p>Bruno MD is committed to furthering our understanding of the power of natural substances to improve human health and longevity.</p>
              <div className={styles.ancorLink}>
                <button><a href="">Read More</a></button>
              </div>
            </div>

          </Carousel.Caption>
        </Carousel.Item>
        {/* Fourth Slide */}
        <Carousel.Item>
          <div className={styles.carouselMain}>
            <img

              src="/images/heroSlide4.png"
              alt="First slide"
            />
          </div>

          <Carousel.Caption className={styles.imgcotent}>
            <div className={`container ${styles.heroImgContent}`}>
              <h3>Science </h3>
              <h5>A Human Endeavor.</h5>
              <p>Bruno MD is committed to furthering our understanding of the power of natural substances to improve human health and longevity.</p>
              <div className={styles.ancorLink}>
                <button><a href="">Read More</a></button>
              </div>
            </div>

          </Carousel.Caption>
        </Carousel.Item>
        {/* Fifth Slide */}
        <Carousel.Item>
          <div className={styles.carouselMain}>
            <img
              src="/images/heroSlide5.png"
              alt="First slide"
            />
          </div>

          <Carousel.Caption className={styles.imgcotent}>
            <div className={`container ${styles.heroImgContent}`}>
              <h3>Science </h3>
              <h5>A Human Endeavor.</h5>
              <p>Bruno MD is committed to furthering our understanding of the power of natural substances to improve human health and longevity.</p>
              <div className={styles.ancorLink}>
                <button><a href="">Read More</a></button>
              </div>
            </div>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className={`container ${styles.brunoDecription}`}>
        <h1>A prescription to thrive <b>Bruno MD</b></h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>

      </div>
      <div className={styles.PhytoVideoTag}>
        <video width="100%" height="100%" loop autoPlay muted>
          <source src="/images/Science Masthead web.mp4" type="video/mp4" />
          <source src="/images/Science Masthead web.mp4" type="video/ogg" />
        </video>
      </div>
      <div className={`container ${styles.brunoDecription}`}>
        <h1>A prescription to thrive <b>Bruno MD</b></h1>
        <p>Powering the Human Machine Explore the benefits of targeted natural ingredients</p>

      </div>
      {/* Human Tab Section Start */}

      {/* <TabScience /> */}


      <div className={`container ${styles.customContainer}`}>
        <div className={styles.humanTab}>
          <div className={styles.tabdiv}>
            <div className={styles.yellodiv} onClick={() => handleClick(0)}>
              <div className={styles.yellodivContent}>
                <div className={styles.medImg}>
                  <img src='/Images/medImg.png' />
                </div>
                <div className={styles.medContent}>
                  <h6>Royal Collagen Peptides <b>Bruno MD</b></h6>
                  <p>5 IN 1 Skin, Hair, Nail, Joint & Bone Health</p>
                  <div className={styles.medcoloryellow}></div>
                </div>

              </div>
            </div>
            <button className={styles.butNowBTN}>
              <spn className={styles.spanBtn}>Buy&nbsp; Now</spn>
            </button>
          </div>
          <div className={styles.tabdiv}>
            <div className={styles.greendiv} onClick={() => handleClick(1)}>
              <div className={styles.yellodivContent}>
                <div className={styles.medImg}>
                  <img src='/Images/medImg2.png' />
                </div>
                <div className={styles.medContent}>
                  <h6>Royal Collagen Peptides <b>Bruno MD</b></h6>
                  <p>5 IN 1 Skin, Hair, Nail, Joint & Bone Health</p>
                  <div className={styles.medcolorGreen}></div>
                </div>

              </div>
            </div>
            <button className={styles.butNowBTN}>
              <spn className={styles.spanBtn}>Buy&nbsp; Now</spn>
            </button>
          </div>
          <div className={styles.tabdiv}>
            <div className={styles.orangediv} onClick={() => handleClick(2)}>
              <div className={styles.yellodivContent}>
                <div className={styles.medImg}>
                  <img src='/Images/medImg3.png' />
                </div>
                <div className={styles.medContent}>
                  <h6>Royal Collagen Peptides <b>Bruno MD</b></h6>
                  <p>5 IN 1 Skin, Hair, Nail, Joint & Bone Health</p>
                  <div className={styles.medcolorOrange}></div>
                </div>

              </div>
            </div>
            <button className={styles.butNowBTN}>
              <spn className={styles.spanBtn}>Buy&nbsp; Now</spn>
            </button>
          </div>
          <div className={styles.tabdiv}>
            <div className={styles.skyBluediv} onClick={() => handleClick(3)}>
              <div className={styles.yellodivContent}>
                <div className={styles.medImg}>
                  <img src='/Images/medImg4.png' />
                </div>
                <div className={styles.medContent}>
                  <h6>Royal Collagen Peptides <b>Bruno MD</b></h6>
                  <p>5 IN 1 Skin, Hair, Nail, Joint & Bone Health</p>
                  <div className={styles.medcolorSky}></div>
                </div>

              </div>
            </div>
            <button className={styles.butNowBTN}>
              <spn className={styles.spanBtn}>Buy&nbsp; Now</spn>
            </button>
          </div>
        </div>
        <div className={styles.humanImg}>
          <img src={slides[currentIndex].image} alt="Main Slide" />
        </div>
        <div className={styles.humanContent}>
          <div className={styles.HumanDetails}>
            <div className={styles.leftLine}></div>
            <div className={styles.humanText}>
              <h6>{slides[currentIndex].text1}</h6>
              <p>{slides[currentIndex].dec}</p>
            </div>
          </div>
          <div className={styles.HumanDetails}>
            <div className={styles.leftLine}></div>
            <div className={styles.humanText}>
              <h6>{slides[currentIndex].text2}</h6>
              <p>{slides[currentIndex].dec2}</p>
            </div>
          </div>
        
          <div className={styles.HumanDetails}>
            <div className={styles.leftLine}></div>
            <div className={styles.humanText}>
              <h6>{slides[currentIndex].text3}</h6>
              <p>{slides[currentIndex].dec3}</p>
            </div>
          </div>
          <div className={styles.HumanDetails}>
            <div className={styles.leftLine}></div>
            <div className={styles.humanText}>
              <h6>{slides[currentIndex].text4}</h6>
              <p>{slides[currentIndex].dec4}</p>
            </div>
          </div>

        </div>
      </div>





      {/* Human Tab Section End */}

      <div className={`container ${styles.brunoDecription}`}>
        <h1>A prescription to thrive <b>Bruno MD</b></h1>
        <p>Phytosome® Technology 3000% higher bioavailability </p>

      </div>

      <div className={`container ${styles.SliderDiv2}`}>
        <Slider ref={c => (slider = c)} {...settings}>
          <div className={styles.slideData}>
            <div className={styles.contentbackdiv}>
              <div className={styles.slideContent} >
                <h3>The Process of <br /> <b>Phytosome Formation</b> </h3>
                <div className={styles.pcontent} >
                  <p>The process of phytosome formation involves the covalent binding of one or more plant constituents with phospholipids. This process helps to protect the plant extract from degradation and increases its stability.</p>
                  <p> The phospholipid coating also enables the extract to bypass the digestive system's harsh environment and be more easily absorbed by the body's cells. Once the phytosome is ingested, the phospholipid coating is broken down, releasing the plant extract into the bloodstream.</p>
                  <p>The phospholipids themselves can have beneficial effects, such as supporting liver function and improving the skin's barrier function. Overall, phytosome technology</p>
                </div>

              </div>
            </div>

            <div className={styles.slide2Img}>
              <img src="/images/slideImg2.png" alt='' />
            </div>
          </div>
          <div className={styles.slideData}>
            <div className={styles.contentbackdiv}>
              <div className={styles.slideContent}>
                <h3>The Process of <br /> <b>Phytosome Formation</b> </h3>
                <div className={styles.pcontent}>
                  <p>The process of phytosome formation involves the covalent binding of one or more plant constituents with phospholipids. This process helps to protect the plant extract from degradation and increases its stability.</p>
                  <p> The phospholipid coating also enables the extract to bypass the digestive system's harsh environment and be more easily absorbed by the body's cells. Once the phytosome is ingested, the phospholipid coating is broken down, releasing the plant extract into the bloodstream.</p>
                  <p>The phospholipids themselves can have beneficial effects, such as supporting liver function and improving the skin's barrier function. Overall, phytosome technology</p>
                </div>
              </div>
            </div>

            <div className={styles.slide2Img}>
              <img src="/images/slideImg2.png" alt='' />
            </div>
          </div>

        </Slider>
        <div className={styles.bothButton}>
          <div className={styles.LeftBtn}>
            <div>
              <img src='/Images/ArrowLeft.png' onClick={goToPrev}></img>
            </div>

          </div>
          <div className={styles.RightBtn}>
            <div>
              <img src='/Images/ArrowRight.png' onClick={goToNext}></img>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.nextCarousel}>
        <div className={` ${styles.SliderDiv3}`}>
          <Slider ref={c => (slider2 = c)}{...settings}>
            <div className={styles.slider3data}>
              <div className={styles.sliderContent}>
                <h6>For healthy skin, hair & bones</h6>
                <p className={styles.Pcontent}>Bruno MD Royal Collagen Peptides are clinically proven to help produce new collagen at any age by stimulating your body’s own endogenous collagen production.</p>
                <hr className={styles.blackHr} />
                <p className={styles.Pcontent}>Unlike standard collagen peptides, Bruno MD® uses patented technology to precisely cut collagen peptides that specifically target cartilage growth, firmer skin, and stronger bones.</p>
                <hr className={styles.blackHr} />
                <p className={styles.Pcontent}>Natural Vitamin C Clinical studies prove that skin health is significantly improved when Royal Collagen Peptides are combined with natural vitamin C. Vitamin C is crucial for the formation (biosynthesis) of collagen.</p>
                <hr className={styles.blackHr} />
                <p className={styles.Pcontent}>Royal Collagen Peptides increase collagen levels throughout the body by stimulating new collagen production at any age to restore cartilage, increase bone density, and strengthen bones.</p>
                <hr className={styles.blackHr} />
                <p className={styles.Pcontent}>Red Orange Complex maximizes collagen formation and strengthens immunity with 400% of the daily recommended value of Vitamin C. Dense flavonoids, anthocyanins, and phenolic compounds help prevent collagen degradation.</p>
              </div>
              <div className={styles.sliderContentIMG}>
                <img src='/images/BrunoPharmaSlider.png' />
              </div>
              <div className={styles.sliderContent3}>
                <div>
                  <h3>Royal Collagen Peptides</h3>
                  <h5>The Science of Beauty</h5>
                </div>
                <div className={styles.roundeddiv}>
                  <div className={styles.round}><p>Natural Vitamin C</p></div>
                  <div className={styles.round}><p>Royal Collagen Peptides</p></div>
                </div>
                <div className={styles.roundeddiv2}>
                  <div className={styles.round2}><p>Red Orange Complex</p></div>
                  <div className={styles.round2}><p>Bovine Source collagen</p></div>
                </div>
                <hr className={styles.blackHr2} />
                <div className={styles.btnDivBuy}>
                  <div className={styles.roundBtn}><p>Buy Now</p></div>
                </div>
              </div>
            </div>
            <div className={styles.slider3data}>
              <div className={styles.sliderContent}>
                <h6>For healthy skin, hair & bones</h6>
                <div className={styles.allPtext}>
                  <p className={styles.Pcontent}>Bruno MD Royal Collagen Peptides are clinically proven to help produce new collagen at any age by stimulating your body’s own endogenous collagen production.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}>Unlike standard collagen peptides, Bruno MD® uses patented technology to precisely cut collagen peptides that specifically target cartilage growth, firmer skin, and stronger bones.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}>Natural Vitamin C Clinical studies prove that skin health is significantly improved when Royal Collagen Peptides are combined with natural vitamin C. Vitamin C is crucial for the formation (biosynthesis) of collagen.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}>Royal Collagen Peptides increase collagen levels throughout the body by stimulating new collagen production at any age to restore cartilage, increase bone density, and strengthen bones.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}>Red Orange Complex maximizes collagen formation and strengthens immunity with 400% of the daily recommended value of Vitamin C. Dense flavonoids, anthocyanins, and phenolic compounds help prevent collagen degradation.</p>
                </div>

              </div>
              <div className={styles.sliderContentIMG}>
                <img src='/images/BrunoPharmaSlider.png' />
              </div>
              <div className={styles.sliderContent3}>
                <div>
                  <h3>Royal Collagen Peptides</h3>
                  <h5>The Science of Beauty</h5>
                </div>
                <div className={styles.roundeddiv}>
                  <div className={styles.round}><p>Natural Vitamin C</p></div>
                  <div className={styles.round}><p>Royal Collagen Peptides</p></div>
                </div>
                <div className={styles.roundeddiv2}>
                  <div className={styles.round2}><p>Red Orange Complex</p></div>
                  <div className={styles.round2}><p>Bovine Source collagen</p></div>
                </div>
                <hr className={styles.blackHr2} />
                <div className={styles.btnDivBuy}>
                  <div className={styles.roundBtn}><p>Buy Now</p></div>
                </div>
              </div>
            </div>

          </Slider>
          <div className={styles.bothButton}>
            <div className={styles.LeftBtn}>
              <div>
                <img src='/Images/ArrowLeft.png' onClick={goToPrev2}></img>
              </div>

            </div>
            <div className={styles.RightBtn}>
              <div>
                <img src='/Images/ArrowRight.png' onClick={goToNext2}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
// Custom component for Previous Arrow
const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} ${styles.customPrevArrow}`} onClick={onClick}>
      Custom Left Button
    </div>
  );
};
const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} ${styles.customPrevArrow}`} onClick={onClick}>
      Custom Right Button
    </div>
  );
};
export default Sciencedesktoppage;
