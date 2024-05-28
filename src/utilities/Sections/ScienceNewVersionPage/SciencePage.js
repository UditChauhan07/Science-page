import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import ScienceTab from './ScienceTabs/ScienceTab'
// import ImgGreen from "../../../../public/images/Images/"

function SciencePage() {

 
  return (
    <div>
      <section>
        <div className={styles.TopBruno}>
          <h1>Bruno MD</h1>
          <p>A prescription to thrive</p>

          <h5>
            Bruno MD is committed to powering natural substances to improve
            human health & longevity.
          </h5>

          <div className={styles.imageDiv}>
      <Link href={{ pathname: '/science-tab', query: { tab: 0 } }}>
        <div className={` ${styles.imageMain} ${styles.imageMain1} `}>
          <img src="/images/greeneffect.webp"/>
        </div>
      </Link>
      <Link href={{ pathname: '/science-tab', query: { tab: 1 } }}>
        <div className={` ${styles.imageMain} ${styles.imageMain2} `}>
          <img src="/images/DoctrwithTube.webp"/>
        </div>
      </Link>
      <Link href={{ pathname: '/science-tab', query: { tab: 2 } }}>
        <div className={` ${styles.imageMain} ${styles.imageMain3} `}>
          <img src="/images/Swing.webp"/>
        </div>
      </Link>
    </div>
        </div>
      </section>


      {/* <ScienceTab></ScienceTab> */}
    </div>
  );
}

export default SciencePage;
