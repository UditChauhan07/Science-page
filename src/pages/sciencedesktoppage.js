import React, { useEffect } from 'react';
import TrustBadge from '@/utilities/TrustBadges'
import MarkqueCarousel from '@/utilities/MarkqueCarousel';
import styles from '../styles/sciencedesktop.module.css'
import PatnerData from "../../json/parters.json";
import TrustBadgeData from "../../json/trustBages.json";

const Sciencedesktoppage = ({ productColorTheme, contents }) => {

  return (
    <div>
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
    </div>
  )
}

export default Sciencedesktoppage
