import React, { useState } from 'react'
// import styles from "../styles/MobileTabScience.module.css"

const MobileTabScience = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Data for the tabs
  const tabData = [
    {
      title: 'Royal Collagen Peptides',
      tabImage: 'images/Tab1.png',
      videoSrc: 'images/Science-BlurV.gif',
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
      tabImage: 'images/Tab2.png',
      videoSrc: 'images/Science-BluRV1.gif',
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
      tabImage: 'images/Tab3.png',
      videoSrc: 'images/Science-BlurV2.gif',
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
      tabImage: 'images/Tab4.png',
      videoSrc: 'images/Science-BluRV33.gif',
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
            {/* <video autoPlay loop muted key={tabData[activeTab].videoSrc}>
              <source src={tabData[activeTab].videoSrc} type="video/webm" />
              <source src={tabData[activeTab].videoSrc} type="video/mp4" />
            </video> */}
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
          <button>{tabData[activeTab].buyButton}</button>
        </div>
      </div>
    </div>
  )
}

export default MobileTabScience
