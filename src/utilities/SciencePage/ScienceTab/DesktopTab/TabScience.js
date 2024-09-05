import React, { useState } from 'react'
import styles from './TabScience.module.css'
import Modal from '../../ModalSciencePage/Modal';
import MobileTabScience from '../MobileTab/MobileTabScience';
import slides from '../../../../../json/science-desktop-tab'
function TabScience() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [modalImage, setModalImage] = useState('/images/modalImgBrunoMd (1).webp');
  const [modalTitle, setModalTitle] = useState('Royal Collagen Peptides');
  const [modalsubTitle, setModalsubTitle] = useState('The Science of Beauty');


  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };



  const handleRadioChange = (index) => {
    setActiveIndex(index);
  };


  const handleClick = (index) => {
    setCurrentIndex(index);
  }


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleShow = (imageSrc, title, subTitle) => {
    setModalImage(imageSrc);
    setModalTitle(title);
    setModalsubTitle(subTitle)
    setIsModalOpen(true);
  };

  return (
    <div>
      {/* Custom Modal Start */}

      {isModalOpen && (
        <Modal show={isModalOpen}
          onClose={handleCloseModal}>
          <div className={styles.mainModalDiv}>

            <div className={styles.modalImg}>
              <div className={styles.modalContentData}>
                <div className={styles.brunoImgModal}>
                  <img src={modalImage} alt='' />
                </div>
                <div className={styles.modaltitle}>
                  <h6>{modalTitle}</h6>
                  <p>{modalsubTitle}</p>
                </div>
              </div>
            </div>

            <div className={styles.modalContent}>
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
                    <label className={`accordion-button ${styles.accordianButton}`} htmlFor="section1">
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
                        <div className={styles.cutomMainDiv}>
                          <div className={styles.customSelectnew}>
                            <div className={styles.qty}>Qty:</div>
                            <select className={styles.selectDivnew} >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="3">4</option>
                              <option value="3">5</option>
                              <option value="3">6</option>
                              <option value="3">7</option>
                              <option value="3">8</option>
                              <option value="3">9</option>
                              <option value="3">10</option>
                            </select>

                          </div>
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
                          <div className={styles.cutomMainDiv}>
                            <div className={styles.customSelectnew}>
                              <div className={styles.qty}>Qty:</div>
                              <select className={styles.selectDivnew} >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="3">4</option>
                                <option value="3">5</option>
                                <option value="3">6</option>
                                <option value="3">7</option>
                                <option value="3">8</option>
                                <option value="3">9</option>
                                <option value="3">10</option>
                              </select>
                            </div>
                            <p className={styles.unit}>1 Unit</p>
                          </div>

                          <div className={styles.customSelect3}>
                            <select className={styles.selectDiv3} >
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
      )}

      {/* Custom Modal  End */}

      {/*..... Human  Desktop Tab Section Start .....*/}

      <div className={`container ${styles.brunoDecription2}`}>
        <div className={styles.bruno3000}>
          <h1> Phytosome® Technology </h1>
          <p> 3000% higher bioavailability</p>
        </div>
      </div>
      <div className={styles.imgRotation}>
        <img src='/images/rotaionImg1.webp' />
      </div>
      <div className={styles.tabMain} >
        <div className={`container ${styles.customContainer}`}>
          <div className={styles.humanTab}>
            <div className={currentIndex === 0 ? styles.tabdiv : styles.tabdiv33} onClick={() => handleClick(0)}>
              <div className={styles.yellodiv}
              >
                <div className={styles.yellodivContent}>
                  <div className={styles.medImg}>
                    <img src='/images/medBottel0.webp' alt='' />
                  </div>
                  <div className={styles.medContent}>
                    <h6>Royal Collagen Peptides</h6>
                    <b>Bruno MD</b>
                    <div className={styles.box}>
                      <p className={`${styles.tooltip2} ${styles.purpolTooltip}`}> 5-in-1 Skin, Hair, Nail, Joint & Bone Health
                        <span>5-in-1 Skin, Hair, Nail, Joint & Bone Health</span>
                      </p>
                    </div>
                    <div className={styles.BuyBtn}>
                      <div className={styles.medcoloryellow}></div>
                      <div><button onClick={() => handleShow('/images/modalImgBrunoMd (1).webp', 'Royal Collagen Peptides', 'The Science of Beauty')}>Buy Now</button></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>


            <div className={currentIndex === 1 ? styles.tabdiv2 : styles.tabdiv33} onClick={() => handleClick(1)}>
              <div className={styles.greendiv} >
                <div className={styles.yellodivContent}>
                  <div className={styles.medImg}>
                    <img src='/images/medBottel1.webp' alt='' />
                  </div>
                  <div className={styles.medContent}>
                    <h6>CholestQ10 60 v-caps</h6>
                    <b>Bruno MD</b>
                    <div className={styles.box}>
                      <p className={`${styles.tooltip2} ${styles.blueTooltip}`}> Complete heart, liver, & cholesterol care (HDL, LDL, TG)
                        <span>Complete heart, liver, & cholesterol care (HDL, LDL, TG)</span>
                      </p>
                    </div>

                    <div className={styles.BuyBtn}>
                      <div className={styles.medcolorGreen}></div>
                      <div><button onClick={() => handleShow('/images/modalImgBrunoMd2.webp', 'CholestQ10 60 v-caps', 'The Science of Heart Health')}>Buy Now</button></div>
                    </div>

                  </div>

                </div>
              </div>

            </div>
            <div className={currentIndex === 2 ? styles.tabdiv3 : styles.tabdiv33} onClick={() => handleClick(2)}>
              <div>
                <div className={styles.yellodivContent}>
                  <div className={styles.medImg}>
                    <img src='/images/medBottel2.webp' alt='' />
                  </div>
                  <div className={styles.medContent}>
                    <h6>Riboflam 90 v-caps</h6>
                    <b>Bruno MD</b>
                    <div className={styles.box}>
                      <p className={`${styles.tooltip2} ${styles.orangeTooltip}`}> Immunity + inflammation, cardio, liver, digestive health
                        <span>Immunity + inflammation, cardio, liver, digestive health</span>
                      </p>
                    </div>
                    <div className={styles.BuyBtn}>
                      <div className={styles.medcolorOrange}></div>
                      <div><button onClick={() => handleShow('/images/modalImgBrunoMd3.webp', 'Riboflam 90 v-caps', 'The Science of Longevity')}>Buy Now</button></div>
                    </div>

                  </div>

                </div>
              </div>

            </div>
            <div className={currentIndex === 3 ? styles.tabdiv4 : styles.tabdiv33} onClick={() => handleClick(3)}>
              <div className={styles.skyBluediv} >
                <div className={styles.yellodivContent}>
                  <div className={styles.medImg}>
                    <img src='/images/medBottel3.webp' alt='' />
                  </div>
                  <div className={styles.medContent}>
                    <h6>Bluerex Vision 60 softgels </h6>
                    <b>Bruno MD</b>
                    <div className={styles.box}>
                      <p className={`${styles.tooltip2} ${styles.skyTooltip}`}> Dry eye, Computer Vision Syndrome, macular health, blue light shield
                        <span>Dry eye, Computer Vision Syndrome, macular health, blue light shield</span>
                      </p>
                    </div>

                    <div className={styles.BuyBtn}>
                      <div className={styles.medcolorSky}></div>
                      <div><button onClick={() => handleShow('/images/modalImgBrunoMd4.webp', 'Bluerex Vision 60 softgels', 'The Science of Sight')}>Buy Now</button></div>
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
      <div className={styles.imgRotation2}>
        <img src='/images/rotaionImg1.webp' />
      </div>
      {/*..... MoblieTab Section Component Start .....*/}
      <MobileTabScience />
      {/*..... MoblieTab Section Component Start .....*/}

    </div>
  )
}

export default TabScience
