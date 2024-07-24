import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import styles from '../styles/sciencedesktop.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import TabScience from '@/pages/TabScience';

const Sciencedesktoppage = () => {
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

  return (
    <div className={styles.leptop}>
      <Carousel fade={true} interval={9000000} controls={false} pause={false} className={styles.carousel}>

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
              <p>When a company makes a claim, it should be transparent and verifiable. Because we are both a pharmacological company and a nutritional.</p>
              <div className={styles.ancorLink}>
                <button><a href="">Read More</a></button>
              </div>
            </div>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      <div className={styles.RectangleDiv}>
        <div className={styles.Rectangle1}><img src='/images/Rectangle1.png' /></div>
        <div className={styles.Rectangle2}><img src='/images/Rectangle2.png' /></div>

      </div>

      <div className={`container ${styles.brunoDecription}`}>
        <h1>A prescription to thrive <b>Bruno MD</b></h1>
        <p>Lorem Ipsum &apos;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard</p>

      </div>
      <div className={styles.PhytoVideoTag}>
        <video width="100%" height="100%" loop autoPlay muted controls>
          <source src="/images/Science Masthead web.mp4" type="video/mp4" />
          <source src="/images/Science Masthead web.mp4" type="video/ogg" />
        </video>
      </div>
      <div className={`container ${styles.brunoDecription2}`}>
        <h1>A prescription to thrive <b>Bruno MD</b></h1>
        <p>Powering the Human Machine Explore the benefits of targeted natural ingredients</p>

      </div>

      <div className={styles.imgRotation}>
        <img src='/images/rotaionImg1.png' />
      </div>
      {/* Human Tab Section Start */}
      <TabScience />
      {/* Human Tab Section End */}
      <div className={styles.imgRotation2}>
        <img src='/images/rotaionImg1.png' />
      </div>
      <div className={`container ${styles.brunoDecription3}`}>
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
                <h3>Phytosome technology is a <br /> <b>Form of Biomimicry</b> </h3>
                <div className={styles.pcontent}>
                  <p>Phytosome technology is a form of biomimicry. Our bodies have evolved to view beneficial plant-based polyphenols as useless or dangerous.</p>
                  <p> For this reason, nutrients such as curcumin are blocked by your gut before they can enter your bloodstream. </p>
                  <p>No matter how much curcumin you take, the benefits are limited without Phytosome technology. Phytosome uses biomimicry to wrap polyphenols in a fatty lipid, like a delivery truck.With the curcumin molecule hidden inside, the lipid can pass through the gut and into your bloodstream with 3000% more bioavailability. Phytosome sets the new standard in prescription-grade natural ingredients. </p>
                </div>
              </div>
            </div>

            <div className={styles.slide2Img}>
              <img src="/images/slideImg2b.png" alt='' />
            </div>
          </div>
          <div className={styles.slideData}>
            <div className={styles.contentbackdiv}>
              <div className={styles.slideContent}>
                <h3>The phospholipid shell in <br /> <b>Phytosomes Mimics</b> </h3>
                <div className={styles.pcontent}>
                  <p>The phospholipid shell in phytosomes mimics the natural structure of cell membranes, which enables them to bypass the digestive and hepatic barriers by selectively releasing their active compounds into the bloodstream.</p>
                  <p>This enhances their therapeutic value and decreases the amount required to deliver therapeutic effects.</p>
                  <p>Phytosome technology has been used to deliver a wide range of active ingredients, including antioxidants, anti-inflammatory compounds, vitamins, and minerals.</p>
                </div>
              </div>
            </div>

            <div className={styles.slide2Img}>
              <img src="/images/slideImg2c.png" alt='' />
            </div>
          </div>

        </Slider>
        <div className={styles.bothButton}>
          <div className={styles.LeftBtn}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none" className={styles.svgIcon} onClick={goToPrev} >
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
        <div className={`container ${styles.SliderDiv3}`}>
          <Slider ref={c => (slider2 = c)}{...settings}>
            <div className={styles.slider3data}>
              <div className={styles.sliderContent}>
                <h6>For healthy skin, hair & bones</h6>
                <div className={styles.forscrollbar}>
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
            <div className={styles.slider3data}>
              <div className={styles.sliderContent}>
                <h6>For healthy cholesterol levels</h6>
                <div className={styles.forscrollbar}>
                  <p className={styles.Pcontent}>Heart disease is one of the leading causes of death globally, so keeping cholesterol levels in check is crucial for preventing these serious health issues.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}>The clinically proven, natural ingredients in CholestQ10® are delivered with Phytosome® Technology. Phytosome delivers usually hard-to-absorb ingredients into your bloodstream with up to 3000% more bioavailability.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}>Coenzyme Q10 Phytosome® promotes healthy aging, heart & cardiovascular health, brain health, and all activities involving energetic expenditure.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}>Royal Collagen Peptides increase collagen levels throughout the body by stimulating new collagen production at any age to restore cartilage, increase bone density, and strengthen bones.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}> Cardoon contains active biophenols and flavonoids from an endemic variety of Cardoon leaf inhibit the creation of.</p>
                </div>

              </div>
              <div className={styles.sliderContentIMG}>
                <img src='/images/BrunoPharmaSlider2.png' alt='' />
              </div>
              <div className={styles.sliderContent3}>
                <div>
                  <h3>CholestQ10</h3>
                  <h5>The Science of Heart Health</h5>
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
                <h6>For a healthy inflammatory response</h6>
                <div className={styles.forscrollbar}>
                  <p className={styles.Pcontent}>For a healthy inflammatory response Inflammation is a leading cause of disease. Like high blood pressure, inflammation is a silent killer. Unlike high blood pressure, inflammation is often best managed without pharmacological intervention. Nature is the best medicine to put inflammation in check.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}>The clinically proven, natural ingredients in Riboflam® are delivered with Phytosome® Technology. Phytosome delivers usually hard-to-absorb ingredients into your bloodstream with up to 3000% more bioavailability.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}>Natural Astaxanthin Extract is harvested from algae and is proven to be the most potent antioxidant in nature. Astaxanthin’s superpower is reducing inflammation system-wide, which helps balance immune response</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}>Boswellia Serra Phytosome, commonly known as Indian Frankincense, and Echinacea Angustifolia Phytosome are both proven to create a balanced inflammation response. Native Americans have used Echinacea as an anti-inflammatory for centuries.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}>Nucleoflam Proprietary Nucleotides & Nucleosides Yeast Extract Complex are involved in the development and functioning of immune cells and contribute to the growth and repair of the intestinal lining, which can help with intestinal inflammation.</p>
                </div>

              </div>
              <div className={styles.sliderContentIMG}>
                <img src='/images/BrunoPharmaSlider3.png' alt='' />
              </div>
              <div className={styles.sliderContent3}>
                <div>
                  <h3>Riboflam </h3>
                  <h5>The Science of Longevity</h5>
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
                <h6>For a lifetime of 360° vision care</h6>
                <div className={styles.forscrollbar}>
                  <p className={styles.Pcontent}>For a lifetime of 360° vision care Eye strain, Dry Eyes, Headaches & General Fatigue are all signs of Computer Vision Syndrome. Ingredients in Bluerex Vision® are clinically proven to help alleviate symptoms of digital overexposure and protect your eyes from harmful blue light before it can damage the retina.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}>The clinically proven, natural ingredients in Bluerex Vision® are delivered with Phytosome® Technology. Phytosome delivers usually hard-to-absorb ingredients into your bloodstream with up to 3000% more bioavailability.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}>Astaxanthin&apos;s potent anti-inflammatory properties alleviate oxidative stress in the front of the eye and help reduce eye fatigue and strain, common symptoms of computer vision syndrome.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}>Royal Collagen Peptides increase collagen levels throughout the body by stimulating new collagen production at any age to restore cartilage, increase bone density, and strengthen bones.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}>Lutein & Zeaxanthin increase the macular pigments that filter harmful blue light before it can damage your retina. They are also antioxidants that protect the eyes against free radicals, improving visual performance and reducing the progression of certain eye conditions as we age.</p>
                </div>

              </div>
              <div className={styles.sliderContentIMG}>
                <img src='/images/BrunoPharmaSlider4.png' alt='' />
              </div>
              <div className={styles.sliderContent3}>
                <div>
                  <h3>Blurex </h3>
                  <h5>The Science of Sight</h5>
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
