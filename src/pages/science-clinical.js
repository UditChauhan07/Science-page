import React from "react";
import styles from "../styles/scienceClinical.module.css";
import Link from "next/link";

const ScienceClinical = () => {
  return (
    <div>
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

          <div>
            <h1>Clinically proven ingredients. </h1>
          </div>
        </div>

        <div className={styles.ClinicIngre}>
          <div className={styles.ClinicContent}>
            <h6>Clinically proven ingredients.</h6>

            <p>What does clinically proven mean?</p>

            <p>
              Multiple studies substantiate all advertised health benefits and
              claims
            </p>
            <p>
              All clinical trials conducted on our ingredients are randomized,
              double-blind, placebo-controlled, and published
            </p>

            <p>
              Clinically proven claims represent the highest medical bar for any
              benefit and are rarely used on nutraceutical products.
            </p>

            <p>
              The efficacy of our clinically proven ingredients is guaranteed.
            </p>
          </div>

          <div className={styles.ClinicMainImg}>
            <div className={styles.ClinicImg}>
              <div className={styles.ClinicButton}>
                <button>LEARN MORE</button>
              </div>

              <div className={styles.ClinicInnerImg}>
                <img src="/images/royalMarron.png" />
              </div>
            </div>

            <div className={styles.ClinicImg}>
              <div className={styles.ClinicButton}>
                <button>LEARN MORE</button>
              </div>

              <div className={styles.ClinicInnerImg}>
                <img src="/images/BDQuest10.png" />
              </div>
            </div>

            <div className={styles.ClinicImg}>
              <div className={styles.ClinicButton}>
                <button>LEARN MORE</button>
              </div>

              <div className={styles.ClinicInnerImg}>
                <img src="/images/RibhoFlam.png" />
              </div>
            </div>

            <div className={styles.ClinicImg}>
              <div className={styles.ClinicButton}>
                <button>LEARN MORE</button>
              </div>

              <div className={styles.ClinicInnerImg}>
                <img src="/images/Blurex12.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScienceClinical;
