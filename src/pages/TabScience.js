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


  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const slides = [
    {
      image: "/images/humantab.png",
      text1: "YOUTHFUL SKIN, HAIR & NAILS",
      dec: "Stimulates collagen production in fibroblasts to help reduce wrinkles and promote growth and health of hair and nails.",
      text2: " JOINTS AND CARTILAGE",
      dec2: "Stimulates collagen production in chondrocytes to support joint and collagen function",
      text3: "STRONGER BONES",
      dec3: "Stimulates collagen production in osteoblasts & reduces bone fractures in women by 75%",
      text4: "REDUCES INFLAMMATION & BOOSTS IMMUNITY",
      dec4: "Contains natural vitamin C and Red Orange Complex with over 278% daily recommended value of Vitamin C.",
      className: "SliderText",
      className2: "yelloDotsBlink2",
      className3: "yelloDotsBlink3",
      className4: "yelloDotsBlink4",
      className5: "yelloDotsBlink5",
      className6: "yelloDotsBlink6",
    },
    {
      image: "/images/humantab.png",
      text1: " SUPPORT CARDIOVASCULAR HEALTH",
      dec: "Clinically-proven ingredients help support healthy cholesterol levels",
      text2: "FATTY LIPIDS",
      dec2: "Clinically-proven ingredients inhibit the creation of fatty lipids in the liver",
      text3: "OXIDATIVE DAMAGE AND COQ10",
      dec3: "Clinically-proven ingredients help protect mitochondrial DNA against oxidative damage that can lead to heart disease and significantly boost CoQ10 116% over baseline",
      text4: "VEGAN-FRIENDLY",
      dec4: "All ingredients in CholestQ10 are certified vegan, including the capsules",
      className: "SliderText1",
      className2: "greenDotsBlink2",
      className3: "greenDotsBlink3",
      className4: "greenDotsBlink4",
      className5: "greenDotsBlink5",
      className6: "greenDotsBlink6",
    },
    {
      image: "/images/humantab.png",
      text1: "EXERCISE PAIN RELIEF",
      dec: "Clinically-proven ingredients help relieve post-exercise pain naturally",
      text2: "IMMUNITY",
      dec2: "Stimulates overall immune health, which is directly linked to your body’s ability to fight inflammation and work better, and longer",
      text3: "MULTISYSTEM HEALTH",
      dec3: "Clinically-proven ingredients help maintain a healthy heart and vascular system, help manage bad cholesterol levels by increasing bile production, which traps cholesterol for elimination, help reduce inflammation in the gut, improve colon health and decrease gas and bloating, and balance gut flora",
      text4: "MENTAL HEALTH",
      dec4: "Clinically-proven ingredients support mental clarity, focus, and cognition",
      className: "SliderText2",
      className2: "orangeDotsBlink2",
      className3: "orangeDotsBlink3",
      className4: "orangeDotsBlink4",
      className5: "orangeDotsBlink5",
      className6: "orangeDotsBlink6",

    },
    {
      image: "/images/humantab.png",
      text1: " SHIELDS THE FRONT OF THE EYE",
      dec: "Protects the front of the eye, and lens, and strengthens ciliary muscles",
      text2: " SHIELDS THE BACK OF THE EYE",
      dec2: "Protects the retina from blue light damage and oxidative stress",
      text3: "CLINICALLY PROVEN INGREDIENTS",
      dec3: "Ingredients that deliver clinically proven results to ease symptoms of CVS (Computer Vision Syndrome)",
      text4: " ANTIOXIDANT PROTECTION",
      dec4: "Protects the eye from damaging free radicals",
      className: "SliderText3",
      className2: "skyDotsBlink2",
      className3: "skyDotsBlink3",
      className4: "skyDotsBlink4",
      className5: "skyDotsBlink5",
      className6: "skyDotsBlink6",
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
            <div className={styles.modalImgTitle}>
          <p>Save an additional 10% use HEART at checkout</p>
          </div>
          <div className={styles.modalContentData}>
            <div className={styles.brunoImgModal}>
              <img src='/images/modalImgBrunoMd.png'/>
              </div>
            <div className={styles.modaltitle}>
              <h6>Royal Collagen Peptides</h6>
              <p>The Science of Beauty</p>
            </div>
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
      <div className={styles.tabMain} >
        <div className={`container ${styles.customContainer}`}>
          <div className={styles.humanTab}>
            <div className={currentIndex === 0 ? styles.tabdiv : styles.tabdiv33} onClick={() => handleClick(0)}>
              <div className={styles.yellodiv}
              >
                <div className={styles.yellodivContent}>
                  <div className={styles.medImg}>
                    <img src='/images/medBottel0.png' alt='' />
                  </div>
                  <div className={styles.medContent}>
                    <h6>Royal Collagen Peptides</h6>
                    <b>Bruno MD</b>
                    <p>5 IN 1 Skin, Hair, Nail, Joint & Bone Health</p>
                    <div className={styles.BuyBtn}>
                      <div className={styles.medcoloryellow}></div>
                      <div><button onClick={handleShow}>Buy Now</button></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>


            <div className={currentIndex === 1 ? styles.tabdiv2 : styles.tabdiv33} onClick={() => handleClick(1)}>
              <div className={styles.greendiv} >
                <div className={styles.yellodivContent}>
                  <div className={styles.medImg}>
                    <img src='/images/medBottel1.png' alt='' />
                  </div>
                  <div className={styles.medContent}>
                    <h6>CholestQ10 60 v-caps </h6>
                    <b>Bruno MD</b>
                    <p>5 IN 1 Heart, Liver, HDL, LDL,TG</p>
                    <div className={styles.BuyBtn}>
                      <div className={styles.medcolorGreen}></div>
                      <div><button onClick={handleShow}>Buy Now</button></div>
                    </div>

                  </div>

                </div>
              </div>

            </div>
            <div className={currentIndex === 2 ? styles.tabdiv3 : styles.tabdiv33} onClick={() => handleClick(2)}>
              <div>
                <div className={styles.yellodivContent}>
                  <div className={styles.medImg}>
                    <img src='/images/medBottel2.png' alt='' />
                  </div>
                  <div className={styles.medContent}>
                    <h6>Riboflam 90 v-caps</h6>
                    <b>Bruno MD</b>
                    <p>5 IN 1 Mental, Cardio, Liver, Digestive</p>
                    <div className={styles.BuyBtn}>
                      <div className={styles.medcolorOrange}></div>
                      <div><button onClick={handleShow}>Buy Now</button></div>
                    </div>

                  </div>

                </div>
              </div>

            </div>
            <div className={currentIndex === 3 ? styles.tabdiv4 : styles.tabdiv33} onClick={() => handleClick(3)}>
              <div className={styles.skyBluediv} >
                <div className={styles.yellodivContent}>
                  <div className={styles.medImg}>
                    <img src='/images/medBottel3.png' alt='' />
                  </div>
                  <div className={styles.medContent}>
                    <h6>Bluerex vision 60 softgels </h6>
                    <b>Bruno MD</b>
                    <p>5 IN 1 Blue Light & Macula Shield,360° Eye Health, Computer Vision Syndrome</p>
                    <div className={styles.BuyBtn}>
                      <div className={styles.medcolorSky}></div>
                      <div><button onClick={handleShow}>Buy Now</button></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.humanImg}>
            <div className={styles.dotsDiv}>
              <span className={styles[slides[currentIndex].className2]}></span>
              <span className={styles[slides[currentIndex].className3]}></span>
              <span className={styles[slides[currentIndex].className4]}></span>
              <span className={styles[slides[currentIndex].className5]}></span>
              <span className={styles[slides[currentIndex].className6]}></span>
            </div>
            <div>
              <img src={slides[currentIndex].image} alt="Main Slide" />
            </div>
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
      </div>
      {/* Human Tab Section End */}
    </div>
  )
}

export default TabScience
