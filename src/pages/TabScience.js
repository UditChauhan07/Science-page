import React, { useState } from 'react'
import styles from '../styles/sciencedesktop.module.css'
import Modal from 'react-bootstrap/Modal';
function TabScience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const [selectedOption, setSelectedOption] = useState("1");
  const [selectedOption2, setSelectedOption2] = useState("1");
  const [selectedDay, setSelectedDay] = useState("30 Day");
  const [isVisible, setIsVisible] = useState(false);

  
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  // Function For Quantity Change Start //
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  // Function For Quantity Change End //

  // Function For Quantity Change Start //
  const handleSelectChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };
  // Function For Quantity Change End //
  // Function For Day Change Start //
  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };
  // Function For Day Change End //


  const handleRadioChange = (index) => {
    setActiveIndex(index);
  };


const handleClick=(index)=>{
  setCurrentIndex(index);
}

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const slides = [
    {
      image: "/images/yellowDots.png",
      text1: "Hair + Skin",
      dec: "Revitalize from Root to Tip: Medically Backed Solutions for Hair and Skin Health. Discover the Science Behind Your Glow!",
      text2: "Bones",
      dec2: "Strong bones for a life in motion. Build your strength, embrace your vitality.",
      text3: "Gut",
      dec3: "Strong bones for a life in motion. Build your strength, embrace your vitality.",
      text4: "Tendons",
      dec4: "Strong bones for a life in motion. Build your strength, embrace your vitality.",
      className: "SliderText",


    },
    {
      image: "/images/greenDots.png",
      text1: "Heart",
      dec: "orem Ipsum is simply dummy text of the printing and typesetting industry.",
      text2: "Liver",
      dec2: "orem Ipsum is simply dummy text of the printing and typesetting industry.",
      text3: "HDL",
      dec3: "orem Ipsum is simply dummy text of the printing and typesetting industry.",
      text4: "LDL",
      dec4: "orem Ipsum is simply dummy text of the printing and typesetting industry.",
      className: "SliderText1",
    },
    {
      image: "/images/orangeDots.png",
      text1: "Mental Health",
      dec: "orem Ipsum is simply dummy text of the printing and typesetting industry.",
      text2: "Cardio Health",
      dec2: "orem Ipsum is simply dummy text of the printing and typesetting industry.",
      text3: "Liver Health",
      dec3: "orem Ipsum is simply dummy text of the printing and typesetting industry.",
      text4: "Digestive Health",
      dec4: "orem Ipsum is simply dummy text of the printing and typesetting industry.",
      className: "SliderText2",
    },
    {
      image: "/images/skyDots.png",
      text1: "Blue Light & Macula Shield",
      dec: "orem Ipsum is simply dummy text of the printing and typesetting industry.",
      text2: "360° Eye Health",
      dec2: "orem Ipsum is simply dummy text of the printing and typesetting industry.",
      text3: "Computer Vision Syndrome",
      dec3: "orem Ipsum is simply dummy text of the printing and typesetting industry.",
      text4: "Focus & Recovery Dry Eye",
      dec4: "orem Ipsum is simply dummy text of the printing and typesetting industry.",
      className: "SliderText3",
    },
  ];
  return (
    <div>
      {/* Modal start */}

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
        <Modal.Header closeButton>

        </Modal.Header>
        <div className={styles.mainModalDiv}>
          <div className={styles.modalImg}>
            <div><img src='/images/modalimg.png' /></div>
            <div className={styles.medTitle}>
              <h3>Royal Collagen Peptides</h3>
              <p>The Science of Beauty</p>
            </div>
          </div>

          <div className={styles.modalContent}>
            {/* <span className={styles.close} >&times;</span> */}

            <div className={`accordion ${styles.Accordian}`}>
              <div className="accordion-item">
                <div className={`${styles.Accordian1} ${activeIndex === 0 ? styles.active : ''}`}>
                  <input
                    type="radio"
                    id="section1"
                    name="accordion"
                    checked={activeIndex === 0}
                    onChange={() => handleRadioChange(0)}
                  />
                  <label className="accordion-button" htmlFor="section1">
                    ONE-TIME PURCHASE
                    <div className={styles.price}>
                      <span className={styles.dollar}>$</span>
                      <span className={styles.mainPrice}>58</span>
                      <span className={styles.cents}>.00</span>

                    </div>
                  </label>

                </div>
                {activeIndex === 0 && (
                  <div className={`accordion-content ${styles.accordionContent}`}>
                    <div className={styles.stocDiv}>
                      <h6 className={styles.stock}>In Stock.</h6>
                      <div className={styles.customSelect}>
                        <select className={styles.selectDiv} value={selectedOption} onChange={handleSelectChange}>
                          <option value="1" className={styles.qty}>
                            Qty:1
                          </option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                        <p className={styles.unit}>1 Unit</p>
                      </div>
                      <div className={styles.addCartButton}><div>ADD TO CART</div> </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="accordion-item">
                <div className={`${styles.Accordian2} ${activeIndex === 1 ? styles.active2 : ''}`}>
                  <input
                    className={styles.radioButton}
                    type="radio"
                    id="section2"
                    name="accordion"
                    checked={activeIndex === 1}
                    onChange={() => handleRadioChange(1)}
                  />
                  <label className="accordion-button" htmlFor="section2">  SUBSCRIBE & SAVE 20%
                    <div className={styles.price}>
                      <span className={styles.dollar}>$</span>
                      <span className={styles.mainPrice}>47</span>
                      <span className={styles.cents}>.00</span>
                      <span className={styles.offprice}>$58.98</span>
                    </div>
                  </label>
                </div>
                {activeIndex === 1 && (
                  <div className={`accordion-content ${styles.accordionContent}`}>
                    <div className={styles.saveContent}>
                      <div className={styles.stocDiv2}>
                        <div className={styles.save}>Save $11.80</div>
                        <div className={styles.savetext}>with Subscription</div>
                      </div>
                      <div className={styles.sectionbar2}>
                        <div>Don&apos;t miss this opportunity to save <b>20%</b> on this order and all future subscribe and save orders.</div>
                        <ul>
                          <li>No Fees</li>
                          <li>Cancel anytime</li>
                        </ul>
                      </div>
                      <div className={styles.sectionbar3}>
                        <div className={styles.LearnbText} onClick={toggleVisibility} >Learn more
                        </div>
                        <div className={`${styles.UpArrow} ${isVisible ? styles.rotate90 : ''}`} onClick={toggleVisibility}>
                          <svg class="flickity-button-icon" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg>
                        </div>
                      </div>
                      {isVisible && (
                        <div>
                          <p className={styles.desclimerText}>
                            There is no commitment and no minimum to buy. Please note
                            exact shipment times may vary. To customize future
                            shipments and changes, access your account in the Bruno MD
                            portal, or email customer care department at{' '}
                            <a href="mailto:customercare@brunopharma.com">
                              customercare@brunopharma.com
                            </a>
                            .
                          </p>
                          <div className={styles.sectionbar4}>
                            <div className={styles.informatonText}>
                              <p>HOW SUBSCRIBE & SAVE WORKS</p>
                            </div>
                            <div>
                              <img className={styles.infoBtn} src="//cdn.shopify.com/s/files/1/0021/0573/7291/t/172/assets/information-button.svg?v=6467211743660140745" height="20" width="20" alt="Information button" />
                            </div>
                          </div>
                        </div>
                      )}
                      <div className={styles.stocDiv3}>
                        <h6 className={styles.stock2}>In Stock.</h6>
                        <div className={styles.customSelect2}>
                          <select className={styles.selectDiv2} value={selectedOption2} onChange={handleSelectChange2}>
                            <option value="1">Qty: 1</option>
                            <option value="2">Qty: 2</option>
                            <option value="3">Qty: 3</option>
                          </select>
                          <p className={styles.unit}>1 Unit</p>
                        </div>

                        <div className={styles.customSelect3}>
                          <select className={styles.selectDiv3} value={selectedDay} onChange={handleDayChange}>
                            <option value="30 Day">30 Day</option>
                            <option value="60 Day">60 Day</option>
                            <option value="90 Day">90 Day</option>
                          </select>
                        </div>
                        <div className={styles.addCartButton}><div>SUBSCRIBE</div> </div>
                      </div>

                    </div>

                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </Modal>
      {/* Modale Open */}

      {/* Human Tab Section Start */}
      <div className={`container ${styles.customContainer}`}>
        <div className={styles.humanTab}>
          <div className={currentIndex === 0 ? styles.tabdiv : styles.tabdiv33} onClick={() => handleClick(0)}>
            <div className={styles.yellodiv} 
            >
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
            <button className={styles.butNowBTN} onClick={handleShow}>
              <span className={styles.spanBtn} >Buy&nbsp; Now</span>
            </button>
          </div>


          <div className={currentIndex === 1 ? styles.tabdiv2 : styles.tabdiv33}  onClick={() => handleClick(1)}>
            <div className={styles.greendiv} >
              <div className={styles.yellodivContent}>
                <div className={styles.medImg}>
                  <img src='/images/medImg2.png' alt='' />
                </div>
                <div className={styles.medContent}>
                  <h6>Royal Collagen Peptides <b>Bruno MD</b></h6>
                  <p>5 IN 1 Heart, Liver, HDL, LDL,TG</p>
                  <div className={styles.medcolorGreen}></div>
                </div>

              </div>
            </div>
            <button className={styles.butNowBTN} onClick={handleShow}>
              <span className={styles.spanBtn} >Buy&nbsp; Now</span>
            </button>
          </div>
          <div className={currentIndex === 2 ? styles.tabdiv3 : styles.tabdiv33} onClick={() => handleClick(2)}>
            <div>
              <div className={styles.yellodivContent}>
                <div className={styles.medImg}>
                  <img src='/images/medImg3.png' alt='' />
                </div>
                <div className={styles.medContent}>
                  <h6>Royal Collagen Peptides <b>Bruno MD</b></h6>
                  <p>5 IN 1 Mental, Cardio, Liver, Digestive</p>
                  <div className={styles.medcolorOrange}></div>
                </div>

              </div>
            </div>
            <button className={styles.butNowBTN} onClick={handleShow}>
              <span className={styles.spanBtn} >Buy&nbsp; Now</span>
            </button>
          </div>
          <div className={currentIndex === 3 ? styles.tabdiv4 : styles.tabdiv33} onClick={() => handleClick(3)}>
            <div className={styles.skyBluediv} >
              <div className={styles.yellodivContent}>
                <div className={styles.medImg}>
                  <img src='/images/medImg4.png' alt='' />
                </div>
                <div className={styles.medContent}>
                  <h6>Royal Collagen Peptides <b>Bruno MD</b></h6>
                  <p>5 IN 1 Blue Light & Macula Shield,360° Eye Health, Computer Vision Syndrome</p>
                  <div className={styles.medcolorSky}></div>
                </div>

              </div>
            </div>
            <button className={styles.butNowBTN} onClick={handleShow}>
              <span className={styles.spanBtn} >Buy&nbsp; Now</span>
            </button>
          </div>
        </div>
        <div className={styles.humanImg}>
          <div className={styles.dotsDiv}>
            <span></span>
          </div>
          <img src={slides[currentIndex].image} alt="Main Slide" />
        </div>
        <div className={styles.humanContent}>
          <div className={styles.HumanDetails}>

            <div className={styles[slides[currentIndex].className]}></div>
            <div className={styles.humanText}>
              <h6>{slides[currentIndex].text1}</h6>
              <p>{slides[currentIndex].dec}</p>
            </div>
          </div>
          <div className={styles.HumanDetails}>
            <div className={styles[slides[currentIndex].className]}></div>
            <div className={styles.humanText}>
              <h6>{slides[currentIndex].text2}</h6>
              <p>{slides[currentIndex].dec2}</p>
            </div>
          </div>

          <div className={styles.HumanDetails}>
            <div className={styles[slides[currentIndex].className]}></div>
            <div className={styles.humanText}>
              <h6>{slides[currentIndex].text3}</h6>
              <p>{slides[currentIndex].dec3}</p>
            </div>
          </div>
          <div className={styles.HumanDetails}>
            <div className={styles[slides[currentIndex].className]}></div>
            <div className={styles.humanText}>
              <h6>{slides[currentIndex].text4}</h6>
              <p>{slides[currentIndex].dec4}</p>
            </div>
          </div>

        </div>
      </div>
      {/* Human Tab Section End */}
    </div>
  )
}

export default TabScience
