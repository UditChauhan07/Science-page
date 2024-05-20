import React, { useState, useRef } from 'react';
import styles from "../styles/RoyaProductScience.module.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function RoyalProductSciencePage(index) {
   
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };

    var settings = {
        dots: false,
        Arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: index.index-1,
        beforeChange: (_, next) => next,
      };

      

  return (

    
    <div className={styles.royalContainer}>

      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={closeModal}>&times;</span>

            <div className={styles.OneTimePurchaseModal}>
                <input type='radio' name="price" id="1"/>
                <div className={styles.OneTimePrice}>
                    <h5>ONE-TIME PURCHASE</h5>
                    <p><span>$</span>58.<span>98</span></p>
                </div>
            </div>

            <div className={`${styles.OneTimePurchaseModal} ${styles.SubsSave}`}>
                <input type='radio' name="price" id="2"/>
                <div className={styles.OneTimePrice}>
                    <h5>SUBSCRIBE & SAVE 20%</h5>
                    <p><span>$</span>47.<span>18</span>  <p className={styles.linethoroughRate}>$58.98</p> </p>
                </div>
            </div>

            <div className={styles.SubscribeSave}>

            <p className={styles.ParaSubs} ><span>Save $11.80</span> with Subscription</p>

            <p className={styles.ParaOneA}>Don&apos;t miss this opportunity to save <b>20%</b> on this order and all future subscribe and save orders</p>
            <ul>
                <li>No Fees</li>
                <li>Cancel anytime</li>
            </ul>

            <h5 className={styles.HeadingLeranMore}>Learn More <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 1024 1024" class="icon" version="1.1"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000"/></svg></h5>

            <div className={styles.InStockQuantity}>
                <p>In stock</p>
                <div className={styles.QtySelect}>
                <label for="quantity">QTY:</label>
                <input type="number" placeholder='1' id="quantity" name="quantity"/>  
                </div>

                <div className={styles.Delievery}>
                    <p>Delievery every</p>

                    <div className={styles.DelieveryDay}>
                    <input type="number"  placeholder='5' id="day" name="quantity" min="0" max="100" step="5" />
                    <label>day</label>
                        </div>
                        </div>

            </div>

            <button>SUBSCRIBE</button>

            </div>

          </div>
        </div>
      )}

<div className={`${"controlSlider"} ${isOpen ? styles.hidden : ''}`}> 
    <Slider {...settings}>
<div className={styles.PhytoMain1}>
<button onClick={openModal}>Buy Now</button>
 
  <div className={styles.PhytoImages1}>
<div className={styles.royalImage}>
  <img src="/images/royalMarron.png" />

</div>
<div className={styles.royalYellow}>
    <h4>Royal Collagen Peptides
</h4>
<p>The Science of<br></br>
Beauty</p>

</div>
  </div>



  <div className={styles.PhytoPara11}>
          
         <p> <span>For healthy skin, hair & bones</span></p>

<p><span>Bruno MD Royal Collagen Peptides</span> are clinically proven to help produce new collagen at any age by stimulating your body’s own endogenous collagen production.</p>
<p>Unlike standard collagen peptides, Bruno MD® uses patented technology to precisely cut collagen peptides that specifically target cartilage growth, firmer skin, and stronger bones.</p>

<p>
<span>Natural Vitamin C</span> Clinical studies prove that skin health is significantly improved when Royal Collagen Peptides are combined with natural vitamin C. Vitamin C is crucial for the formation (biosynthesis) of collagen.</p>

<p><span>Royal Collagen Peptides</span> increase collagen levels throughout the body by stimulating new collagen production at any age to restore cartilage, increase bone density, and strengthen bones.</p>

<p>
<span>Red Orange Complex</span> maximizes collagen formation and strengthens immunity with 400% of the daily recommended value of Vitamin C. Dense flavonoids, anthocyanins, and phenolic compounds help prevent collagen degradation.</p>
<p><span>Bovine Source collagen</span> from free-range EU-certified sources is organic, non-GMO, halal, and kosher-certified raised exclusively on a plant-based diet also provides the full bouquet of 18 essential and non-essential amino acids.</p>
          
        </div>
</div>

<div className={styles.PhytoMain1}>
<button onClick={openModal}>Buy Now</button>
 
<div className={styles.PhytoImages1}>
<div className={styles.royalImage}>
  <img src="/images/BDQuest10.png" />

</div>
<div className={styles.royalYellow}>
    <h4>CholestQ10
</h4>
<p>The Science of
<br></br>
Heart Health</p>

</div>
  </div>

  <div className={styles.PhytoPara11}>
          <p><span>For healthy cholesterol levels</span>   </p>
          <p>Heart disease is one of the leading causes of death globally, so keeping cholesterol levels in check is crucial for preventing these serious health issues.</p>

<p>
The clinically proven, natural ingredients in CholestQ10® are delivered with <sapn>Phytosome® Technology</sapn>. Phytosome delivers usually hard-to-absorb ingredients into your bloodstream with up to 3000% more bioavailability.   </p>

          <p><span>Coenzyme Q10 Phytosome®</span> promotes healthy aging, heart & cardiovascular health, brain health, and all activities involving energetic expenditure. </p>

          <p><span>Cardoon</span> contains active biophenols and flavonoids from an endemic variety of Cardoon leaf inhibit the creation of fatty lipids in the liver. </p>
          <p>
<span>Natural Vitamin (E-d-alpha-tocopheryl succinate)</span> shields proteins, LDL cholesterol, and mitochondrial DNA against oxidative damage and reduces lipid peroxidation levels — the pivotal reaction in the cause of atherosclerosis.   </p>

          <p><span>Bergamot Orange Extract Phytosome®</span>
supports healthy cholesterol levels and governs the metabolic conditions that increase the risk of heart disease and TYPE II diabetes.   </p>

<p><span>Curcumin Phytosome®</span> (Turmeric Extract)
supports healthy blood vessel function and guards against chronic inflammation.  </p>
        </div>
</div>


<div className={styles.PhytoMain1}>
<button onClick={openModal}>Buy Now</button>
 
  <div className={styles.PhytoImages1}>
<div className={styles.royalImage}>
  <img src="/images/RibhoFlam.png" />

</div>
<div className={styles.royalYellow}>
    <h4>Riboflam </h4>
<p>The Science of<br></br>
Longevity</p>

</div>
  </div>

  <div className={styles.PhytoPara11}>
          <p><span> For a healthy inflammatory response</span> </p>
        
          <p> Inflammation is a leading cause of disease. Like high blood pressure, inflammation is a silent killer. Unlike high blood pressure, inflammation is often best managed without pharmacological intervention. Nature is the best medicine to put inflammation in check.</p>
        
          <p>Inflammation is a leading cause of disease. Like high blood pressure, inflammation is a silent killer. Unlike high blood pressure, inflammation is often best managed without pharmacological intervention. Nature is the best medicine to put inflammation in check. </p>
        
          <p>The clinically proven, natural ingredients in Riboflam® are delivered with <span>Phytosome® Technology</span>. Phytosome delivers usually hard-to-absorb ingredients into your bloodstream with up to 3000% more bioavailability. </p>
        
          <p><span>Natural Astaxanthin Extract</span> is harvested from algae and is proven to be the most potent antioxidant in nature. Astaxanthin’s superpower is reducing inflammation system-wide, which helps balance immune response and support brain and heart health. </p>
         
          <p> <span>Curcumin Phytosome</span> comes from turmeric, which has been used in Asian cooking and cures since ancient times. It supports a healthy inflammation and immune response. Bruno MD’s Curcumin Phytosome is the #1 recommended formulation by the prestigious Cleveland Clinic.</p>
       
          <p><span>Boswellia Serra Phytosome,</span> commonly known as Indian Frankincense, and Echinacea Angustifolia Phytosome are both proven to create a balanced inflammation response. Native Americans have used Echinacea as an anti-inflammatory for centuries. </p>
              
          <p><span>Nucleoflam Proprietary Nucleotides & Nucleosides Yeast Extract Complex</span>
are involved in the development and functioning of immune cells and contribute to the growth and repair of the intestinal lining, which can help with intestinal inflammation.</p>

  <p><span>Quercitin Phytosome</span> blocks inflammatory enzymes and the creation of cytokines and, like Astaxanthin, is a potent antioxidant, but you’ll need to eat 100 kilos of broccoli each day to get enough. Riboflam delivers 2000% more quercitin than standard supplements.</p>
        </div>

     
</div>

<div className={styles.PhytoMain1}>

    <button onClick={openModal}>Buy Now</button>
 
   <div className={styles.PhytoImages1}>
<div className={styles.royalImage}>
  <img src="/images/Blurex12.png" />

</div>
<div className={styles.royalYellow}>
    <h4>Blurex </h4>
<p>The Science of<br></br>
Sight</p>

</div>
  </div>


        <div className={styles.PhytoPara11}>
           <p><span>For a lifetime of 360° vision care</span></p> 

           <p>Eye strain, Dry Eyes, Headaches & General Fatigue are all signs of Computer Vision Syndrome. Ingredients in Bluerex Vision® are clinically proven to help alleviate symptoms of digital overexposure and protect your eyes from harmful blue light before it can damage the retina..</p> 

           <p>The clinically proven, natural ingredients in Bluerex Vision® are delivered with <span>Phytosome® Technology</span>. Phytosome delivers usually hard-to-absorb ingredients into your bloodstream with up to 3000% more bioavailability.</p>

           <p><span>Astaxanthin’</span>s potent anti-inflammatory properties alleviate oxidative stress in the front of the eye and help reduce eye fatigue and strain, common symptoms of computer vision syndrome.</p> 

           <p><span>Lutein & Zeaxanthin</span> increase the macular pigments that filter harmful blue light before it can damage your retina. They are also antioxidants that protect the eyes against free radicals, improving visual performance and reducing the progression of certain eye conditions as we age.</p> 

           <p>
<span>Bilberry Extract</span> is packed with anthocyanins, which promote healthy tear secretion, improve vision, increase retinal sensitivity (night vision), and help prevent common eye issues as we mature.</p> 
           <p><span>D-Alpha Tocopheryl Succinate</span>, a natural form of Vitamin E, neutralizes oxidative damage and has been shown to reduce the risk of developing advanced age-related macular degeneration by 25% for subjects who have already demonstrated early signs of macular degeneration.</p> 

           <p><span>Docosahexaenoic acid (DHA)</span>, naturally derived from Schizochytrium sp marine alga, is a polyunsaturated omega-3 fatty acid accounting for up to 93% of the omega-3 fats in the retina.</p> 

        













            
        </div>
</div>
</Slider>
</div>
</div>
  )
}
RoyalProductSciencePage.hideLayout = true;
export default RoyalProductSciencePage