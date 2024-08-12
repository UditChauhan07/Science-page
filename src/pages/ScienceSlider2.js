import React, { useState } from 'react'

// import styles from '../styles/sciencedesktop.module.css'

import styles from "../styles/ScienceSlider2.module.css"

import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
const ScienceSlider2 = () => {
    const [selectedKeyword, setSelectedKeyword] = useState('');
    const [show2, setShow2] = useState();
    const [activeIndex, setActiveIndex] = useState(1);
    const [isVisible, setIsVisible] = useState(false);
    const [modalImage2, setModalImage2] = useState('/images/modalImgBrunoMd (1).webp');
    const [modalTitle2, setModalTitle2] = useState('Royal Collagen Peptides');
    const [modalsubTitle2, setModalsubTitle2] = useState('The Science of Beauty');
    const handleMouseEnter = (keyword, sectionId) => {
        setSelectedKeyword(keyword);
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    const handleRadioChange = (index) => {
        setActiveIndex(index);
    };
    const handleClose2 = () => setShow2(false);
    const hanldeShow2 = (imageSrc2, title2, subTitle2) => {
        setModalImage2(imageSrc2);
        setModalTitle2(title2);
        setModalsubTitle2(subTitle2)
        setShow2(true)
    }
    // .......Slider 2nd Function Start..///
    const goToPrev2 = () => {
        slider2.slickPrev();
    };
    const goToNext2 = () => {
        slider2.slickNext();
    };
    let slider2;
    // .......Slider 2nd Function End.///
    const settings = {
        dots: false, // Hide dots
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };
    return (
        <div>
            <div className={styles.nextCarousel}>
                <div className={styles.bothButton2Main}>
                    <div className={styles.bothButton2}>
                        <div className={styles.LeftBtn}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none" className={styles.svgIcon} onClick={goToPrev2}>
                                    <path d="M15.166 26L45.4994 26" stroke="#7F7F7F" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4.69127 26.2144L13.9557 31.773C14.4889 32.093 15.1673 31.7089 15.1673 31.087L15.1673 20.913C15.1673 20.2911 14.4889 19.907 13.9557 20.227L4.69127 25.7856C4.52944 25.8827 4.52944 26.1173 4.69127 26.2144Z" fill="#7F7F7F" />
                                </svg>
                            </div>

                        </div>
                        <div className={styles.RightBtn}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none" onClick={goToNext2}>
                                    <path d="M36.834 26H6.50065" stroke="#7F7F7F" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M47.3087 25.7856L38.0443 20.227C37.5111 19.907 36.8327 20.2911 36.8327 20.913V31.087C36.8327 31.7089 37.5111 32.093 38.0443 31.773L47.3087 26.2144C47.4706 26.1173 47.4706 25.8827 47.3087 25.7856Z" fill="#7F7F7F" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`container ${styles.SliderDiv3}`}>
                    <div className={`container ${styles.brunoDecription4}`}>
                        <h1>Clinical Studies</h1>
                        <p>Natural Ingredients, clinically proven results</p>

                    </div>
                    {/* Modal start */}
                    <Modal show={show2} onHide={handleClose2} backdrop="static" keyboard={false} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
                        <Modal.Header closeButton>

                        </Modal.Header>
                        <div className={styles.mainModalDiv}>

                            <div className={styles.modalImg}>
                                <div className={styles.modalContentData}>
                                    <div className={styles.brunoImgModal}>
                                        <img src={modalImage2} alt='' />
                                    </div>
                                    <div className={styles.modaltitle}>
                                        <h6>{modalTitle2}</h6>
                                        <p>{modalsubTitle2}</p>
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
                                                            <div className={styles.qty}>QTY:</div>
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
                    {/* Modale Open */}


                    <Slider ref={c => (slider2 = c)}{...settings}>
                        <div className={`container ${styles.slider3data}`}>
                            <div className={styles.sliderContent}>
                                <h6>For Healthy Skin, Hair & Bones</h6>
                                <div className={styles.forscrollbar}>
                                    <p className={styles.Pcontent}><b >Bruno MD Royal Collagen Peptides</b> are clinically proven to help produce new collagen at any age by stimulating your body’s own endogenous collagen production.Unlike standard collagen peptides, Bruno MD® uses patented technology to precisely cut collagen peptides that specifically target cartilage growth, firmer skin, and stronger bones.</p>
                                    <hr className={styles.blackHr} />
                                    <p className={styles.Pcontent} id="page-2">
                                        <b className={selectedKeyword === 'Natural' ? styles.highlightedHeading : ''}>Natural Vitamin C</b>
                                        Clinical studies prove that skin health is significantly improved when Royal Collagen Peptides are combined with natural vitamin C. Vitamin C is crucial for the formation (biosynthesis) of collagen.</p>
                                    <hr className={styles.blackHr} />
                                    <p className={styles.Pcontent} id="page-1">
                                        <b className={selectedKeyword === 'Royal Collagen' ? styles.highlightedHeading : ''}>Royal Collagen Peptides</b>
                                        increase collagen levels throughout the body by stimulating new collagen production at any age to restore cartilage, increase bone density, and strengthen bones</p>
                                    <hr className={styles.blackHr} />
                                    <p className={styles.Pcontent} id="page-3">
                                        <b className={selectedKeyword === 'Red Orange' ? styles.highlightedHeading : ''}>Red Orange Complex</b>
                                        maximizes collagen formation and strengthens immunity with 400% of the daily recommended value of Vitamin C. Dense flavonoids, anthocyanins, and phenolic compounds help prevent collagen degradation.</p>
                                    <hr className={styles.blackHr} />
                                    <p className={styles.Pcontent} id="page-4">
                                        <b className={selectedKeyword === 'Bovine' ? styles.highlightedHeading : ''}>Bovine Source collagen </b>
                                        from free-range EU-certified sources is organic, non-GMO, halal, and kosher-certified, raised exclusively on a plant-based diet also provides the full bouquet of 18 essential and non-essential amino acids.</p>
                                </div>
                            </div>
                            <div className={styles.slider2Details}>
                                <div className={styles.sliderContentIMG}>
                                    <img src='/images/BrunoPharmaSlider.webp' alt='' />
                                </div>
                                <div className={styles.sliderContent3}>
                                    <div>
                                        <h3>Royal Collagen Peptides</h3>
                                        <h5>The Science of Beauty</h5>
                                    </div>
                                    <div className={styles.forRound}>
                                        <div className={styles.round}>
                                            <p onMouseEnter={() => handleMouseEnter('Royal Collagen', 'page-1')}>Royal Collagen Peptides</p>
                                        </div>
                                        <div className={styles.round}>
                                            <p onMouseEnter={() => handleMouseEnter('Natural', 'page-2')} >Natural Vitamin C </p>
                                        </div>
                                        <div className={styles.round} >
                                            <p onMouseEnter={() => handleMouseEnter('Red Orange', 'page-3')} >Red Orange</p>
                                        </div>
                                        <div className={styles.round}>
                                            <p onMouseEnter={() => handleMouseEnter('Bovine', 'page-4')}>Bovine Source collagen</p>
                                        </div>
                                    </div>
                                    <hr className={styles.blackHr2} />
                                    <div className={styles.btnDivBuy}>
                                        <div className={styles.roundBtn}><p onClick={() => hanldeShow2('/images/modalImgBrunoMd (1).webp', 'Royal Collagen Peptides', 'The Science of Beauty')}>Buy Now</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.slider3data}>
                            <div className={styles.sliderContent}>
                                <h6>For Healthy Cholesterol levels</h6>
                                <div className={styles.forscrollbar}>
                                    <p className={styles.Pcontent}><b >Heart disease</b> is one of the leading causes of death globally, so keeping cholesterol levels in check is crucial for preventing these serious health issues.
                                        The clinically proven, natural ingredients in CholestQ10® are delivered with Phytosome® Technology. Phytosome delivers usually hard-to-absorb ingredients into your bloodstream with up to 3000% more bioavailability.
                                    </p>
                                    <hr className={styles.blackHr} />
                                    <p className={styles.Pcontent} id="page-5">
                                        <b className={selectedKeyword === 'Coenzyme' ? styles.highlightedHeading : ''}>Coenzyme Q10 </b>
                                        Phytosome® promotes healthy aging, heart & cardiovascular health, brain health, and all activities involving energetic expenditure.</p>
                                    <hr className={styles.blackHr} />
                                    <p className={styles.Pcontent}><b>Cardoon</b> contains active biophenols and flavonoids from an endemic variety of Cardoon leaf, inhibiting the creation of fatty lipids in the liver.</p>
                                    <hr className={styles.blackHr} />
                                    <p className={styles.Pcontent} id="page-6">
                                        <b className={selectedKeyword === 'E-d-alpha-tocopheryl' ? styles.highlightedHeading : ''}>Natural Vitamin (E-d-alpha-tocopheryl succinate)</b>
                                        shields proteins, LDL cholesterol, and mitochondrial DNA against oxidative damage and reduces lipid peroxidation levels — the pivotal reaction in the cause of atherosclerosis.</p>
                                    <hr className={styles.blackHr} />
                                    <p className={styles.Pcontent} id="page-7">
                                        <b className={selectedKeyword === 'Bergamot Orange' ? styles.highlightedHeading : ''}>Bergamot Orange Extract Phytosome®</b>
                                        supports healthy cholesterol levels and governs the metabolic conditions that increase the risk of heart disease and TYPE II diabetes.</p>
                                    <p className={styles.Pcontent} id="page-8">
                                        <b className={selectedKeyword === 'Curcumin Phytosome' ? styles.highlightedHeading : ''}>Curcumin Phytosome® (Turmeric Extract)</b>
                                        supports healthy blood vessel function and guards against chronic inflammation.</p>
                                </div>

                            </div>
                            <div className={styles.slider2Details}>
                                <div className={styles.sliderContentIMG}>
                                    <img src='/images/BrunoPharmaSlider2.webp' alt='' />
                                </div>
                                <div className={styles.sliderContent3}>
                                    <div>
                                        <h3>CholestQ10</h3>
                                        <h5>The Science of Heart Health</h5>
                                    </div>
                                    <div className={styles.forRound}>
                                        <div className={styles.round}>
                                            <p onMouseEnter={() => handleMouseEnter('Coenzyme', 'page-5')}>Coenzyme</p></div>
                                        <div className={styles.round}>
                                            <p onMouseEnter={() => handleMouseEnter('E-d-alpha-tocopheryl', 'page-6')}>D-alpha-tocopheryl succinate</p></div>
                                        <div className={styles.round}>
                                            <p onMouseEnter={() => handleMouseEnter('Bergamot Orange', 'page-7')}>Bergamot Orange Extract Phytosome®</p></div>
                                        <div className={styles.round}>
                                            <p onMouseEnter={() => handleMouseEnter('Curcumin Phytosome', 'page-8')}>Curcumin Phytosome®</p></div>
                                    </div>
                                    <hr className={styles.blackHr2} />
                                    <div className={styles.btnDivBuy}>
                                        <div className={styles.roundBtn} ><p onClick={() => hanldeShow2('/images/modalImgBrunoMd2.webp', 'CholestQ10 60 v-caps', 'The Science of Heart Health')}>Buy Now</p></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={styles.slider3data}>
                            <div className={styles.sliderContent}>
                                <h6>For a Healthy Inflammatory Response</h6>
                                <div className={styles.forscrollbar}>
                                    <p className={styles.Pcontent}><b>For a healthy inflammatory response</b> Inflammation is a leading cause of disease. Like high blood pressure, inflammation is a silent killer. Unlike high blood pressure, inflammation is often best managed without pharmacological intervention. Nature is the best medicine to put inflammation in check.The clinically proven, natural ingredients in Riboflam® are delivered with Phytosome® Technology. Phytosome delivers usually hard-to-absorb ingredients into your bloodstream with up to 3000% more bioavailability.</p>
                                    <hr className={styles.blackHr} />
                                    <p className={styles.Pcontent} id="page-9">
                                        <b className={selectedKeyword === 'Natural Astaxanthin' ? styles.highlightedHeading : ''}>Natural Astaxanthin Extract</b>
                                        is harvested from algae and is proven to be the most potent antioxidant in nature. Astaxanthin’s superpower is reducing inflammation system-wide, which helps balance immune response and support brain and heart health.  </p>
                                    <hr className={styles.blackHr} />
                                    <p className={styles.Pcontent} id="page-10">
                                        <b className={selectedKeyword === 'Curcumin Phytosome' ? styles.highlightedHeading : ''}>Curcumin Phytosome</b> comes from turmeric, which has been used in Asian cooking and cures since ancient times. It supports a healthy inflammation and immune response. Bruno MD’s Curcumin Phytosome is the #1 recommended formulation by the prestigious Cleveland Clinic.</p>
                                    <hr className={styles.blackHr} />
                                    <p className={styles.Pcontent} id="page-12">
                                        <b className={selectedKeyword === 'Boswellia Serra' ? styles.highlightedHeading : ''}>Boswellia Serra Phytosome,</b>
                                        commonly known as Indian Frankincense, and Echinacea Angustifolia Phytosome are both proven to create a balanced inflammation response. Native Americans have used Echinacea as an anti-inflammatory for centuries.</p>
                                    <hr className={styles.blackHr} />
                                    <p className={styles.Pcontent} id="page-13">
                                        <b className={selectedKeyword === 'Nucleoflam' ? styles.highlightedHeading : ''}>Nucleoflam Proprietary Nucleotides</b>
                                        <b> & </b>
                                        <b className={selectedKeyword === 'Nucleosides' ? styles.highlightedHeading : ''}>Nucleosides Yeast Extract Complex</b> are involved in the development and functioning of immune cells and contribute to the growth and repair of the intestinal lining, which can help with intestinal inflammation.
                                    </p>
                                    <p className={styles.Pcontent} id="page-11">
                                        <b className={selectedKeyword === 'Quercetin Phytosome' ? styles.highlightedHeading : ''}>Quercitin Phytosome</b> blocks inflammatory enzymes and the creation of cytokines and, like Astaxanthin, is a potent antioxidant, but you’ll need to eat 100 kilos of broccoli each day to get enough. Riboflam delivers 2000% more quercitin than standard supplements.
                                    </p>
                                </div>

                            </div>
                            <div className={styles.slider2Details}>
                                <div className={styles.sliderContentIMG}>
                                    <img src='/images/BrunoPharmaSlider3.webp' alt='' />
                                </div>
                                <div className={styles.sliderContent3}>
                                    <div>
                                        <h3>Riboflam </h3>
                                        <h5>The Science of Longevity</h5>
                                    </div>
                                    <div className={styles.forRound}>
                                        <div className={styles.round}>
                                            <p onMouseEnter={() => handleMouseEnter('Natural Astaxanthin', 'page-9')}>Natural Astaxanthin Extract</p></div>
                                        <div className={styles.round}>
                                            <p onMouseEnter={() => handleMouseEnter('Curcumin Phytosome', 'page-10')}>Curcumin Phytosome</p></div>
                                        <div className={styles.round}>
                                            <p onMouseEnter={() => handleMouseEnter('Quercetin Phytosome', 'page-11')}>Quercetin Phytosome</p></div>
                                        <div className={styles.round}>
                                            <p onMouseEnter={() => handleMouseEnter('Boswellia Serra', 'page-12')}>Boswellia Serra Phytosome</p></div>
                                        <div className={styles.round}>
                                            <p onMouseEnter={() => handleMouseEnter('Nucleoflam', 'page-13')}>Nucleoflam Proprietary Nucleotides</p></div>
                                        <div className={styles.round}>
                                            <p onMouseEnter={() => handleMouseEnter('Nucleosides', 'page-13')}>Nucleosides Yeast Extract Complex</p></div>

                                    </div>
                                    <hr className={styles.blackHr2} />
                                    <div className={styles.btnDivBuy}>
                                        <div className={styles.roundBtn}><p onClick={() => hanldeShow2('/images/modalImgBrunoMd3.webp', 'Riboflam 90 v-caps', 'The Science of Longevity')}>Buy Now</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.slider3data}>
                            <div className={styles.sliderContent}>
                                <h6>For a Lifetime of 360º Vision Care</h6>
                                <div className={styles.forscrollbar}>
                                    <p className={styles.Pcontent}><b>Eye strain, Dry Eyes, Headaches & General Fatigue</b> are all signs of Computer Vision Syndrome. Ingredients in Bluerex Vision® are clinically proven to help alleviate symptoms of digital overexposure and protect your eyes from harmful blue light before it can damage the retina.The clinically proven, natural ingredients in Bluerex Vision® are delivered with Phytosome® Technology. Phytosome delivers usually hard-to-absorb ingredients into your bloodstream with up to 3000% more bioavailability.
                                    </p>
                                    <hr className={styles.blackHr} />
                                    <p className={styles.Pcontent} id="page-14">
                                        <b className={selectedKeyword === 'Astaxanthin' ? styles.highlightedHeading : ''}>Astaxanthin’s</b>
                                        potent anti-inflammatory properties alleviate oxidative stress in the front of the eye and help reduce eye fatigue and strain, common symptoms of computer vision syndrome.</p>
                                    <hr className={styles.blackHr} />
                                    <p className={styles.Pcontent} id="page-15">
                                        <b className={selectedKeyword === 'Lutein & Zeaxanthin' ? styles.highlightedHeading : ''}>Lutein & Zeaxanthin</b>
                                        increase the macular pigments that filter harmful blue light before it can damage your retina. They are also antioxidants that protect the eyes against free radicals, improving visual performance and reducing the progression of certain eye conditions as we age.</p>
                                    <hr className={styles.blackHr} />
                                    <p className={styles.Pcontent} id="page-18">
                                        <b className={selectedKeyword === 'Bilberry Extract' ? styles.highlightedHeading : ''}>Bilberry Extract</b>
                                        is packed with anthocyanins, which promote healthy tear secretion, improve vision, increase retinal sensitivity (night vision), and help prevent common eye issues as we mature</p>
                                    <hr className={styles.blackHr} />
                                    <p className={styles.Pcontent} id="page-16">
                                        <b className={selectedKeyword === 'D-Alpha' ? styles.highlightedHeading : ''}>D-Alpha Tocopheryl Succinate,</b>
                                        a natural form of Vitamin E, neutralizes oxidative damage and has been shown to reduce the risk of developing advanced age-related macular degeneration by 25% for subjects who have already demonstrated early signs of macular degeneration.</p>
                                    <p className={styles.Pcontent} id="page-17">
                                        <b className={selectedKeyword === 'Docosahexaenoic' ? styles.highlightedHeading : ''}>Docosahexaenoic acid (DHA),</b>
                                        naturally derived from Schizochytrium sp marine alga, is a polyunsaturated omega-3 fatty acid accounting for up to 93% of the omega-3 fats in the retina.</p>
                                </div>

                            </div>
                            <div className={styles.slider2Details}>
                                <div className={styles.sliderContentIMG}>
                                    <img src='/images/BrunoPharmaSlider4.webp' alt='' />
                                </div>
                                <div className={styles.sliderContent3}>
                                    <div>
                                        <h3>Blurex </h3>
                                        <h5>The Science of Sight</h5>
                                    </div>
                                    <div className={styles.forRound}>
                                        <div className={styles.round}>
                                            <p onMouseEnter={() => handleMouseEnter('Astaxanthin', 'page-14')}>Astaxanthin</p></div>
                                        <div className={styles.round}>
                                            <p onMouseEnter={() => handleMouseEnter('Lutein & Zeaxanthin', 'page-15')}>Lutein & Zeaxanthin</p></div>
                                        <div className={styles.round}>
                                            <p onMouseEnter={() => handleMouseEnter('D-Alpha', 'page-16')}>D-Alpha Tocopheryl Succinate</p></div>
                                        <div className={styles.round}>
                                            <p onMouseEnter={() => handleMouseEnter('Docosahexaenoic', 'page-17')}>Docosahexaenoic acid</p></div>
                                        <div className={styles.round}>
                                            <p onMouseEnter={() => handleMouseEnter('Bilberry Extract', 'page-18')}>Bilberry Extract </p></div>
                                    </div>
                                    <hr className={styles.blackHr2} />
                                    <div className={styles.btnDivBuy}>
                                        <div className={styles.roundBtn}><p onClick={() => hanldeShow2('/images/modalImgBrunoMd4.webp', 'Bluerex Vision 60 softgels', 'The Science of Sight')}>Buy Now</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Slider>

                    <div className={styles.bothButton2Main2}>
                    <div className={styles.bothButton3}>
                        <div className={styles.LeftBtn}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none" className={styles.svgIcon} onClick={goToPrev2}>
                                    <path d="M15.166 26L45.4994 26" stroke="#7F7F7F" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4.69127 26.2144L13.9557 31.773C14.4889 32.093 15.1673 31.7089 15.1673 31.087L15.1673 20.913C15.1673 20.2911 14.4889 19.907 13.9557 20.227L4.69127 25.7856C4.52944 25.8827 4.52944 26.1173 4.69127 26.2144Z" fill="#7F7F7F" />
                                </svg>
                            </div>

                        </div>
                        <div className={styles.RightBtn}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none" onClick={goToNext2}>
                                    <path d="M36.834 26H6.50065" stroke="#7F7F7F" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M47.3087 25.7856L38.0443 20.227C37.5111 19.907 36.8327 20.2911 36.8327 20.913V31.087C36.8327 31.7089 37.5111 32.093 38.0443 31.773L47.3087 26.2144C47.4706 26.1173 47.4706 25.8827 47.3087 25.7856Z" fill="#7F7F7F" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>


                </div>
            </div>
        </div>
    )
}
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
export default ScienceSlider2
