import React, { useState } from 'react'
import styles from "./MobileTabScience.module.css"
import Modal from '../../ModalSciencePage/Modal';

const MobileTabScience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [modalImage, setModalImage] = useState('/images/modalImgBrunoMd (1).webp');
  const [modalTitle, setModalTitle] = useState('Royal Collagen Peptides');
  const [modalsubTitle, setModalsubTitle] = useState('The Science of Beauty');

  const handleOpenModal = () => {
    const selectedTab = tabData[activeTab];
    setModalImage(selectedTab.modalimage);
    setModalTitle(selectedTab.title);
    setModalsubTitle(selectedTab.subTitle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const handleRadioChange = (index) => {
    setActiveIndex(index);
  };
  // Data for the tabs
  const tabData = [
    {
      title: 'Royal Collagen Peptides',
      subTitle: "The Science of Beauty",
      tabImage: 'images/Tab1.png',
      videoSrc: 'images/Science-BlurV.gif',
      modalimage: "/images/modalImgBrunoMd (1).webp",
      content: [
        { heading: 'YOUTHFUL SKIN, HAIR & NAILS', description: 'Stimulates collagen production in fibroblasts to help reduce wrinkles and promote growth and health of hair and nails.' },
        { heading: 'JOINTS AND CARTILAGE', description: 'Stimulates collagen production in chondrocytes to support joint and collagen function' },
        { heading: 'STRONGER BONES', description: 'Stimulates collagen production in osteoblasts & reduces bone fractures in women by 75%' },
        { heading: 'REDUCES INFLAMMATION & BOOSTS IMMUNITY', description: 'Contains natural vitamin C and Red Orange Complex with over 278% daily recommended value of Vitamin C.' },
      ],
      buyButton: 'Buy Now',
    },
    {
      title: 'CholestQ10 60 v-caps',
      subTitle: "The Science of Heart Health",
      tabImage: 'images/Tab2.png',
      videoSrc: 'images/Science-BluRV1.gif',
      modalimage: "/images/modalImgBrunoMd2.webp",
      content: [
        { heading: 'SUPPORT CARDIOVASCULAR HEALTH', description: 'Clinically-proven ingredients help support healthy cholesterol levels.' },
        { heading: 'FATTY LIPIDS', description: 'Clinically-proven ingredients inhibit the creation of fatty lipids in the liver.' },
        { heading: 'OXIDATIVE DAMAGE AND COQ10', description: 'Clinically-proven ingredients help protect mitochondrial DNA against oxidative damage that can lead to heart disease and significantly boost CoQ10 116% over baseline' },
        { heading: 'VEGAN-FRIENDLY', description: 'All ingredients in CholestQ10 are certified vegan, including the capsules.' },
      ],
      buyButton: 'Buy Now',
    },
    {
      title: 'Riboflam 90 v-caps',
      subTitle: 'The Science of Longevity',
      tabImage: 'images/Tab3.png',
      videoSrc: 'images/Science-BlurV2.gif',
      modalimage: "/images/modalImgBrunoMd3.webp",
      content: [
        { heading: 'EXERCISE PAIN RELIEF', description: 'Clinically-proven ingredients help relieve post-exercise pain naturally' },
        { heading: 'IMMUNITY', description: 'Stimulates overall immune health, which is directly linked to your body’s ability to fight inflammation and work better, and longer' },
        { heading: 'MULTISYSTEM HEALTH', description: 'Clinically-proven ingredients help maintain a healthy heart and vascular system, help manage bad cholesterol levels by increasing bile production, which traps cholesterol for elimination, help reduce inflammation in the gut, improve colon health and decrease gas and bloating, and balance gut flora' },
        { heading: 'MENTAL HEALTH', description: 'Clinically-proven ingredients support mental clarity, focus, and cognition' },
      ],
      buyButton: 'Buy Now',
    },
    {
      title: 'Bluerex Vision 60 softgels',
      subTitle: 'The Science of Sight',
      tabImage: 'images/Tab4.png',
      videoSrc: 'images/Science-BluRV33.gif',
      modalimage: "/images/modalImgBrunoMd4.webp",
      content: [
        { heading: 'SHIELDS THE FRONT OF THE EYE', description: 'Protects the front of the eye, and lens, and strengthens ciliary muscles' },
        { heading: 'SHIELDS THE BACK OF THE EYE', description: 'Protects the retina from blue light damage and oxidative stress' },
        { heading: 'CLINICALLY PROVEN INGREDIENTS', description: 'Ingredients that deliver clinically proven results to ease symptoms of CVS (Computer Vision Syndrome)' },
        { heading: 'ANTIOXIDANT PROTECTION', description: 'Protects the eye from damaging free radicals' },
      ],
      buyButton: 'Buy Now',
    },
  ];

  return (
    <div className={styles.MobTab}>
      <div className={styles.humanTabMain}>
        <div className={styles.bottelTab}>
          {tabData.slice(0, 2).map((tab, index) => (
            <div
              key={index}
              className={`${styles.TabClick} ${activeTab === index ? styles[`activeTab${index + 1}`] : ''}`}
              onClick={() => setActiveTab(index)}
            >
              <div className={`${styles.tabImgDiv} ${activeTab === index ? styles[`activeTab${index + 1}`] : ''}`}>
                <img src={tab.tabImage} alt="" />
              </div>
              <div className={styles.TabImgTitle}>
                <h1>{tab.title}</h1>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottelTab2}>
          {tabData.slice(2).map((tab, index) => (
            <div
              key={index + 2}
              className={`${styles.TabClick} ${activeTab === index + 2 ? styles[`activeTab${index + 3}`] : ''}`}
              onClick={() => setActiveTab(index + 2)}
            >
              <div className={`${styles.tabImgDiv} ${activeTab === index + 2 ? styles[`activeTab${index + 3}`] : ''}`}>
                <img src={tab.tabImage} alt="" />
              </div>
              <div className={styles.TabImgTitle}>
                <h1>{tab.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottelDecribtion}>
        <div className={styles.TabingDetailsDiv}>
          <div className={styles.TabimgHuman}>

            <img src={tabData[activeTab].videoSrc} alt="Active Tab GIF" className={styles.gifImage} />
          </div>
          <div className={styles.humanDecribtionDiv}>
            {tabData[activeTab].content.map((item, index) => (
              <div key={index} className={styles.humanDecribtion}>
                <h1>{item.heading}</h1>
                <p>{item.description}</p>
                <div className={`${styles.tabHR} ${styles[`tabHR${activeTab + 1}`]}`}></div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.mobBuybtn}>
          <button onClick={handleOpenModal}>{tabData[activeTab].buyButton}</button>
        </div>
      </div>
      <Modal show={isModalOpen} onClose={handleCloseModal}>
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
                    onChange={() => handleRadioChange(0)} />
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
    </div>
  )
}

export default MobileTabScience
