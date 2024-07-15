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
      <Carousel fade={true} interval={3000} controls={false} pause={false} className={styles.carousel}>

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
              <h3>Nature</h3>
              <h5>Understand the world.</h5>
              <p>Polyphenols are compounds in many plant-based foods, such as fruits, vegetables, tea, and wine. They are antioxidants.</p>
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
              <h3>Lifestyle</h3>
              <h5>Blue Zone Longevity.</h5>
              <p>Many pharmacological companies are scaled international conglomerates. The names of these companies are familiar and, unfortunately.</p>
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
              <h3>Rituals</h3>
              <h5>Farm to Table.</h5>
              <p>If you take supplements, you should be aware that the ingredients you consume, such as Vitamin C or E, are often produced in a lab.</p>
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
              <h3>Proven</h3>
              <h5>Nature,Meet Pharma.</h5>
              <p>When a company makes a claim, it should be transparent and verifiable. Because we are both a pharmacological company and a nutritional </p>
              <div className={styles.ancorLink}>
                <button><a href="">Read More</a></button>
              </div>
            </div>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className={`container ${styles.brunoDecription}`}>
        <h1>A prescription to thrive <b>Bruno MD</b></h1>
        <p>Lorem Ipsum &apos;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard</p>

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
                  <img src='/images/medImg.png' alt='' />
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
          <div className={styles.tabdiv2}>
            <div className={styles.greendiv} onClick={() => handleClick(1)}>
              <div className={styles.yellodivContent}>
                <div className={styles.medImg}>
                  <img src='/images/medImg2.png' alt='' />
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
          <div className={styles.tabdiv3}>
            <div className={styles.orangediv} onClick={() => handleClick(2)}>
              <div className={styles.yellodivContent}>
                <div className={styles.medImg}>
                  <img src='/images/medImg3.png' alt='' />
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
          <div className={styles.tabdiv4}>
            <div className={styles.skyBluediv} onClick={() => handleClick(3)}>
              <div className={styles.yellodivContent}>
                <div className={styles.medImg}>
                  <img src='/images/medImg4.png' alt='' />
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
                  <p> The phospholipid coating also enables the extract to bypass the digestive system &apos;s harsh environment and be more easily absorbed by the body&apos;s cells. Once the phytosome is ingested, the phospholipid coating is broken down, releasing the plant extract into the bloodstream.</p>
                  <p>The phospholipids themselves can have beneficial effects, such as supporting liver function and improving the skin&apos;s barrier function. Overall, phytosome technology</p>
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
                  <p> The phospholipid coating also enables the extract to bypass the digestive system&apos;s harsh environment and be more easily absorbed by the body&apos;s cells. Once the phytosome is ingested, the phospholipid coating is broken down, releasing the plant extract into the bloodstream.</p>
                  <p>The phospholipids themselves can have beneficial effects, such as supporting liver function and improving the skin&apos;s barrier function. Overall, phytosome technology</p>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none" className={styles.svgIcon}  onClick={goToPrev} >
                  <path d="M15.166 26L45.4994 26" stroke="#7F7F7F" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M4.69127 26.2144L13.9557 31.773C14.4889 32.093 15.1673 31.7089 15.1673 31.087L15.1673 20.913C15.1673 20.2911 14.4889 19.907 13.9557 20.227L4.69127 25.7856C4.52944 25.8827 4.52944 26.1173 4.69127 26.2144Z" fill="#7F7F7F" />
                </svg>

            </div>

          </div>
          <div className={styles.RightBtn}>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none" onClick={goToNext}>
                  <path d="M36.834 26H6.50065" stroke="#7F7F7F" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M47.3087 25.7856L38.0443 20.227C37.5111 19.907 36.8327 20.2911 36.8327 20.913V31.087C36.8327 31.7089 37.5111 32.093 38.0443 31.773L47.3087 26.2144C47.4706 26.1173 47.4706 25.8827 47.3087 25.7856Z" fill="#7F7F7F" />
                </svg>
             
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
                <p className={styles.Pcontent}>Bruno MD Royal Collagen Peptides are clinically proven to help produce new collagen at any age by stimulating your body&apos;s own endogenous collagen production.</p>
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
                <img src='/images/BrunoPharmaSlider.png' alt='' />
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
                  <p className={styles.Pcontent}>Bruno MD Royal Collagen Peptides are clinically proven to help produce new collagen at any age by stimulating your body&apos;s own endogenous collagen production.</p>
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
                <img src='/images/BrunoPharmaSlider.png' alt='' />
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
          <div className={styles.bothButton2}>
            <div className={styles.LeftBtn}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none" className={styles.svgIcon} onClick={goToPrev2}>
                  <path d="M15.166 26L45.4994 26" stroke="#7F7F7F" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M4.69127 26.2144L13.9557 31.773C14.4889 32.093 15.1673 31.7089 15.1673 31.087L15.1673 20.913C15.1673 20.2911 14.4889 19.907 13.9557 20.227L4.69127 25.7856C4.52944 25.8827 4.52944 26.1173 4.69127 26.2144Z" fill="#7F7F7F" />
                </svg>
                {/* <img src='/Images/ArrowLeft.png' onClick={goToPrev2} alt='' /> */}
              </div>

            </div>
            <div className={styles.RightBtn}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none" onClick={goToNext2}>
                  <path d="M36.834 26H6.50065" stroke="#7F7F7F" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M47.3087 25.7856L38.0443 20.227C37.5111 19.907 36.8327 20.2911 36.8327 20.913V31.087C36.8327 31.7089 37.5111 32.093 38.0443 31.773L47.3087 26.2144C47.4706 26.1173 47.4706 25.8827 47.3087 25.7856Z" fill="#7F7F7F" />
                </svg>
                {/* <img src='/Images/ArrowRight.png' onClick={goToNext2} alt=''/> */}
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
