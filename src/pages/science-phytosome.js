import React from "react";
import styles from "../styles/sciencePhytosome.module.css";
import Link from "next/link";

const SciencePhytosome = () => {
  return (
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

            <div className={styles.imageDiv}>
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
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.PhytoTopope}>
            <div className={styles.PhytoMain}>
              <div className={styles.PhytoImg}>
                <img src="/images/phyto1.png" />
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
              <div className={styles.PhytoImg}>
                <img src="/images/phyto2.png" />
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
              <div className={styles.PhytoImg}>
                <img src="/images/phyto3.png" />
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
        </div>
      </div>
    </div>
  );
};

export default SciencePhytosome;
