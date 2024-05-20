import React, { useState, useRef } from 'react';

import styles from "../styles/scienceClinical.module.css";
import Link from "next/link";
import RoyalProductSciencePage from './RoyalProductSciencePage'
// import ScienceTab from '../utilities/Sections/ScienceNewVersionPage/ScienceTabs/ScienceTab'

const ScienceClinical = () => {

  const [isVisible, setIsVisible] = useState(true);
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);


  const goToSlide = (index) => {
    console.log("indexaa",index);
    setActiveIndex(index);
    setActiveTab(index);
  };


  const handleClick = (index) => {
    console.log("index",index);
    setIsVisible(!isVisible);
    setIsSliderVisible(!isSliderVisible);
    goToSlide(index);
  };

  const handleBack = () => {
    setIsVisible(!isVisible);
    setIsSliderVisible(!isSliderVisible);
  };

  return (
    
      <div>
      
        <div className={styles.arrowTop}></div>
        <div className={styles.TopBruno}>
          <div className={styles.PhytoVideoTag}>
            <video width="100%" height="100%" loop autoPlay muted>
              <source src="/images/ClinicalStudies.mp4" type="video/mp4" />
              <source src="/images/ClinicalStudies.mp4" type="video/ogg" />
            </video>
          </div>

          <div className={styles.videoContent}>
            <div className={styles.backgroundShadow}>
              <h1>Bruno MD</h1>
              <p>A prescription to thrive</p>
              <h5>
                Clinical Studies Natural Ingredients, clinically proven results
              </h5>
            </div>
            {/* <ScienceTab></ScienceTab> */}
            {/* <div className={styles.imageDiv}>
              <Link href="/science-phytosome">
                <div className={` ${styles.imageMain} ${styles.imageMain1} `}>
                  <img src="/images/greeneffect.png" />
                </div>
              </Link>

              <Link href="/science-clinical">
                <div className={` ${styles.imageMain} ${styles.imageMain2} `}>
                  <img src="/images/DoctrwithTube.png" />
                </div>
              </Link>
              <Link href="/science-human">
                <div className={` ${styles.imageMain} ${styles.imageMain3} `}>
                  <img src="/images/Swing.png" />
                </div>
              </Link>
            </div> */}
          </div>
          </div>


          {isVisible && <div className={styles.ImgCollage1} >
           <div className={`${styles.ImgCollagen}`}>
            <img src="/images/collagen-balls3.png" />
          </div>
          <div className={`${styles.Discripton}`}>
            <p>
              All Bruno MD products are backed by a strict and reliable
              pharmaceutical approach to manufacturing and ingredients. If
              you’re ready for a deep dive into the clinical studies behind our
              ingredients, you’ve come to the right place.
            </p>
          </div>
   

<div className={styles.ClinicIngre}>
        <div className={styles.ClinicContent}>
<h6>Clinically proven ingredients. 
</h6>

<p>
What does clinically proven mean? 
</p>

<p><b>Multiple studies </b>substantiate all advertised health benefits and claims</p>
<p> <b>All clinical trials </b>conducted on our ingredients are <b>randomized, double-blind, placebo-controlled</b>, and published</p>

<p>Clinically proven claims represent the highest medical bar for any benefit and are rarely used on nutraceutical products.</p>

<p>The efficacy of our clinically proven ingredients is<b> guaranteed</b>.</p>
<p>Bruno MD® dietary supplements undergo the same rigorous manufacturing and internal regulatory processes as our pharmaceutical drugs.</p>

       </div>

        <div className={styles.ClinicMainImg}>


        
          <div className={styles.ClinicImg}>

<div className={styles.ClinicButton}>
  <button>LEARN MORE</button>
</div>

<div className={styles.ClinicInnerImg} onClick={() => handleClick(1)}>
  <img src='/images/royalMarron.png'/>
            </div>
</div>

<div className={styles.ClinicImg}>

<div className={styles.ClinicButton}>
  <button>LEARN MORE</button>
</div>

<div className={styles.ClinicInnerImg} onClick={() => handleClick(2)}>
  <img src='/images/BDQuest10.png'/>
            </div>
</div>

<div className={styles.ClinicImg}>

<div className={styles.ClinicButton}>
  <button>LEARN MORE</button>
</div>

<div className={styles.ClinicInnerImg} onClick={() => handleClick(3)}>
  <img src='/images/RibhoFlam.png'/>
            </div>
</div>

<div className={styles.ClinicImg}>

<div className={styles.ClinicButton}>
  <button>LEARN MORE</button>
</div>

<div className={styles.ClinicInnerImg} onClick={() => handleClick(4)}>
  <img src='/images/Blurex12.png'/>
            </div>
</div>
{/* vinod */}

      </div>
    </div>
    </div>}
    

    {isSliderVisible &&
   <div data-index1={activeIndex}>
     <h2 className='ArrowControl'  onClick={() => handleBack()}><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 1024 1024" class="icon" version="1.1"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000"/></svg></h2>
     <RoyalProductSciencePage index={activeIndex}></RoyalProductSciencePage>
  </div>}
   
    </div>
  );
};
ScienceClinical.hideLayout = true;
export default ScienceClinical;