import React, { useState, useRef, useEffect } from 'react';
import styles from "../styles/sciencePhytosome.module.css";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PatnerData from "../../json/parters.json";
import MarkqueCarousel from "@/utilities/MarkqueCarousel";
import TrustBadgeData from "../../json/trustBages.json";
import TrustBadge from '../../src/utilities/TrustBadges/index';




const SciencePhytosome = ({ productColorTheme, contents }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const goToSlide = (index) => {
    setActiveTab(index);
  };
  const handleClick = (index) => {
    console.log("index", index);
    setIsVisible(!isVisible);
    setIsSliderVisible(!isSliderVisible);
    goToSlide(index);
  };
  console.log(contents, "gdgdh")

  var settings = {
    dots: false,
    Arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: activeTab - 1,
    beforeChange: (_, next) => setActiveTab(next),
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth <= 767 ? (
        <div className='forMobile'>
          <div>
            <div>
              <div className={styles.arrowTop}></div>
              <div className={styles.TopBruno}>
                <div className={styles.PhytoVideoTag}>
                  <video width="100%" height="100%" loop autoPlay muted>
                    <source src="/images/PhytoVideo.mp4" type="video/mp4" />
                    <source src="/images/PhytoVideo.mp4" type="video/ogg" />
                  </video>
                </div>

                <div className={styles.videoContent}>
                  <div className={styles.backgroundShadow}>
                    <h1>Bruno MD</h1>
                    <p>A prescription to thrive</p>

                    <h5>Phytosome® Technology 3000% higher bioavailability</h5>
                  </div>


                </div>
              </div>
              {isVisible && <div className={styles.container}>
                <div className={styles.PhytoTopope}>
                  <div className={styles.PhytoMain}>
                    <div className={styles.PhytoImg} onClick={() => handleClick(1)}
                    >
                      <img src="/images/phyto1.webp" />
                      <h4>
                        <a href="#">LEARN MORE</a>
                      </h4>
                    </div>

                    <div className={styles.PhytoPara}>
                      <p>
                        Phytosome® technology is a method used to improve the
                        absorption and bioavailability of plant extracts. It involves
                        the binding of plant extracts with phospholipids, which are
                        natural substances found in cell membranes.
                      </p>
                    </div>
                  </div>

                  <div className={styles.PhytoMain}>
                    <div className={styles.PhytoImg} onClick={() => handleClick(2)}>
                      <img src="/images/phyto2.webp" />
                      <h4>
                        <a href="#">LEARN MORE</a>
                      </h4>
                    </div>

                    <div className={styles.PhytoPara}>
                      <p>
                        Phytosome technology encapsulates plant-based molecules, such
                        as polyphenols, within a lipid layer called a phospholipid.
                        This creates a microstructure that enhances the solubility and
                        bioavailability of the active ingredient, allowing it to be
                        better absorbed by the body.
                      </p>
                    </div>
                  </div>

                  <div className={styles.PhytoMain}>
                    <div className={styles.PhytoImg} onClick={() => handleClick(3)}>
                      <img src="/images/phyto3.webp" />
                      <h4>
                        <a href="#">LEARN MORE</a>
                      </h4>
                    </div>

                    <div className={styles.PhytoPara}>
                      <p>
                        Bruno MD uses this technology to deliver up to 3000% more
                        bioavailability than standard supplementation. Like many
                        recent scientific breakthroughs, the phytosome delivery system
                        is a form of biomimicry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>}
              {isSliderVisible && <div className={styles.PhytoClass}>
                <Slider {...settings}>

                  <div className={styles.PhytoMain1}>

                    <div className={styles.PhytoImages1}>
                      <img src="/images/PhytoBigImg.webp" />
                    </div>
                    <div className={styles.PhytoPara11}>
                      <p>
                        The process of phytosome formation involves the covalent binding of one or more plant constituents with phospholipids. This process helps to protect the plant extract from degradation and increases its stability. The phospholipid coating also enables the extract to bypass the digestive system&apos;s harsh environment and be more easily absorbed by the body&apos;s cells.

                        Once the phytosome is ingested, the phospholipid coating is broken down, releasing the plant extract into the bloodstream. The phospholipids themselves can have beneficial effects, such as supporting liver function and improving the skin&apos;s barrier function.

                        Overall, phytosome technology improves the efficacy and safety of plant extracts by enhancing their absorption and bioavailability in the body.

                      </p>
                    </div>
                  </div>

                  <div className={styles.PhytoMain1}>

                    <div className={styles.PhytoImages1}>
                      <img src="/images/PhytoBigImg1.webp" />
                    </div>
                    <div className={styles.PhytoPara11}>
                      <p>
                        Phytosome technology is a form of biomimicry. Our bodies have evolved to view beneficial plant-based polyphenols as useless or dangerous.

                        For this reason, nutrients such as curcumin are blocked by your gut before they can enter your bloodstream. No matter how much curcumin you take, the benefits are limited without Phytosome technology. Phytosome uses biomimicry to wrap polyphenols in a fatty lipid, like a delivery truck.

                        With the curcumin molecule hidden inside, the lipid can pass through the gut and into your bloodstream with 3000% more bioavailability. Phytosome sets the new standard in prescription-grade natural ingredients.


                      </p>
                    </div>
                  </div>


                  <div className={styles.PhytoMain1}>

                    <div className={styles.PhytoImages1}>
                      <img src="/images/PhytoBigImg2.webp" />
                    </div>
                    <div className={styles.PhytoPara11}>
                      <p>
                        The phospholipid shell in phytosomes mimics the natural structure of cell membranes, which enables them to bypass the digestive and hepatic barriers by selectively releasing their active compounds into the bloodstream. This enhances their therapeutic value and decreases the amount required to deliver therapeutic effects.

                        Phytosome technology has been used to deliver a wide range of active ingredients, including antioxidants, anti-inflammatory compounds, vitamins, and minerals. It also provides a novel delivery option for poorly soluble substances, allowing for more efficient and effective delivery of these compounds to targeted tissues.

                        Overall, phytosome technology represents an innovative approach to enhancing the bioavailability of plant-based compounds and improving their therapeutic value.
                      </p>
                    </div>
                  </div>
                </Slider>

              </div>}
            </div>
          </div>
        </div>
      ) : (

        <div className='Leptop'>
          <div className={styles.PhytoVideoTag}>
            <video width="100%" height="100%" loop autoPlay muted>
              <source src="/images/Science Masthead web.mp4" type="video/mp4" />
              <source src="/images/Science Masthead web.mp4" type="video/ogg" />
            </video>
          </div>
          <div className={styles.ProductTrust}>
            {PatnerData && <MarkqueCarousel image={PatnerData} />}

          </div>
          <div className={styles.PhyImgContainer}>
            <div className={styles.PhyImgall}>
              <div className={styles.PhyImgsection}>
                <img className={styles.PhyImg1} src='/images/Frame 26.png' alt='' />
                <div className={styles.PhyImgcontents}>
                  <h3 className={styles.content1}>SCIENCE</h3>
                  <p className={styles.p1}>A human endeavor</p>
                  <button className={styles.PhyBtn}>Learn More</button>
                </div>
              </div>


              <div className={styles.PhyImgsection}>
                <img className={styles.PhyImg2} src='/images/Rectangle 36 (1).png' alt='' />
                <div className={styles.PhyImgcontents2}>
                  <h3 className={styles.content2}>Understand the world.</h3>
                  <p className={styles.p2}>Unlocking Nature&apos;s Secrets</p>
                  <button className={styles.PhyBtn}>Learn More</button>
                </div>
              </div>

            </div>
            <div className={styles.PhyImgall}>
              <div className={styles.PhyImgsection}>
                <img className={styles.PhyImg1} src='/images/Frame 27.png' alt='' />
                <div className={styles.PhyImgcontents3}>
                  <h3 className={styles.content3}>BLUE ZONE</h3>
                  <p className={styles.p3}>LIVE HEALTHIER,LONGER LIVES </p>
                  <button className={styles.PhyBtn}>Learn More</button>
                </div>
              </div>
              <div className={styles.PhyImgsection}>
                <img className={styles.PhyImg2} src='/images/Frame 28.png' alt='' />
                <div className={styles.PhyImgcontents4}>
                  <h3 className={styles.content4}>Farm To Table</h3>
                  <p className={styles.p4}>Rooted in Italian Soil</p>
                  <button className={styles.PhyBtn}>Learn More</button>
                </div>
              </div>
            </div>
            <div className={styles.PhyImgall}>
              <div className={styles.PhyImgsection}>
                <img className={styles.PhyImg1} src='/images/Rectangle 39.png' alt='' />
                <div className={styles.PhyImgcontents5}>
                  <h3 className={styles.content5}>NATURE</h3>
                  <p className={styles.p5}>Meet Pharma.</p>
                  <button className={styles.PhyBtn}>Learn More</button>
                </div>
              </div>

            </div>

          </div>

        



          <div id='test'>
            {TrustBadgeData && (
              <TrustBadge contents={TrustBadgeData['ENG']} productColorTheme={productColorTheme} />
            )}
          </div>
          <div className={`container ${styles.Phymain}`}>
            <div className={styles.PhymainContent}>
              <div className={styles.PhyImg}>
                <img className='' src='/images/Screenshot 2024.png' alt='' />
              </div>
              <div className={styles.PhyText}>
                
                <h3 className={styles.PhyTextHeading}>Phytosome <br />technology</h3>
                <div className={styles.textextra}>
                  <div className={styles.PhyContent}>
                    <p>Phytosome® technology is a method used to improve the absorption and bioavailability of plant extracts. It involves the binding of plant extracts with phospholipids, which are natural substances found in cell membranes.</p>
                    <p>The process of phytosome formation involves the covalent binding of one or more plant constituents with phospholipids. This process helps to protect the plant extract from degradation and increases its stability. The phospholipid coating also enables the extract to bypass the digestive system&apos;s harsh environment and be more easily absorbed by the body&apos;s cells. Once the phytosome is ingested, the phospholipid coating is broken down, releasing the plant extract into the bloodstream. The phospholipids themselves can have beneficial effects, such as supporting liver function and improving the skin&apos;s barrier function. Overall, phytosome technology improves the efficacy and safety of plant extracts by enhancing their absorption and bioavailability in the body.</p>
                    <button className={styles.PhyBtn}>Learn more</button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.PhymainContent}>
              <div className={styles.PhyText}>
                <h3 className={styles.PhyTextHeading2}>Clinically proven <br />ingredients.</h3>
                <div className={styles.textextra2}>
                  <div className={styles.PhyContent2}>
                    <p className={styles.description}> The process of phytosome formation involves the covalent binding of one or more plant constituents with phospholipids. This process helps to protect the plant extract from degradation and increases its stabilit</p>
                    <button className={styles.PhyBtn}>Learn more</button>
                  </div>
                </div>
              </div>
              <div className={styles.PhyImg}>
                <img className='' src='/images/Screenshot 2024-02-06 at 10.03 1.png' alt='' />
              </div>
            </div>
            <div className={styles.PhymainContent}>
              <div className={styles.PhyImg}>
                <img className='' src='/images/Screenshot 2024-02-06 at 9.58 3.png' alt='' />
              </div>
              <div className={styles.PhyText}>
                <h3 className={styles.PhyTextHeading}>Phytosome <br />technology</h3>
                <div className={styles.textextra}>
                  <div className={styles.PhyContent}>
                  <p>Phytosome® technology is a method used to improve the absorption and bioavailability of plant extracts. It involves the binding of plant extracts with phospholipids, which are natural substances found in cell membranes.</p>
                    <p>The process of phytosome formation involves the covalent binding of one or more plant constituents with phospholipids. This process helps to protect the plant extract from degradation and increases its stability. The phospholipid coating also enables the extract to bypass the digestive system&apos;s harsh environment and be more easily absorbed by the body&apos;s cells. Once the phytosome is ingested, the phospholipid coating is broken down, releasing the plant extract into the bloodstream. The phospholipids themselves can have beneficial effects, such as supporting liver function and improving the skin&apos;s barrier function. Overall, phytosome technology improves the efficacy and safety of plant extracts by enhancing their absorption and bioavailability in the body.</p>
                    <button className={styles.PhyBtn}>Learn more</button>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      )}

    </>

  );
};
SciencePhytosome.hideLayout = true;

export default SciencePhytosome;
