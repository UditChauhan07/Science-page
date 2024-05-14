import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const Index = () => {
  const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const moveinX = (e.pageX * -20) / -1000;
    const moveinY = (e.pageY * 25) / -1000;
    setBackgroundPosition({ x: moveinX, y: moveinY });
  };
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
  }, [isVisible]);

  return (
    <div
      className={styles.height100vh}
      onMouseMove={handleMouseMove}
      style={{
        backgroundPosition: `${backgroundPosition.x}px ${backgroundPosition.y}px`,
      }}
    >
      <div className={styles.container}>
        <div className={styles.RowFlex}>
          <div className={styles.W70}>
            <ScrollAnimation
              delay={600}
              animateOnce="true"
              animateIn="fadeInUp"
            >
              <h1>Science</h1>
            </ScrollAnimation>

            <ScrollAnimation
              delay={1200}
              animateOnce="true"
              animateIn="fadeInUp"
            >
              <h2>A human endeavor.</h2>
            </ScrollAnimation>
            <ScrollAnimation delay={1500} animateOnce="true" animateIn="fadeIn">
              <h3>Pharma, Meet Nature</h3>
            </ScrollAnimation>
            <ScrollAnimation delay={1800} animateOnce="true" animateIn="fadeIn">
              <div className={styles.W80}>
                <p>
                  Bruno MD is committed to furthering our understanding of the
                  power of natural substances to improve human health and
                  longevity. This goal is a moving target. One not easily
                  achieved.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={2000} animateOnce="true" animateIn="fadeIn">
              <div>
                <button
                  onClick={toggleVisibility}
                  className={styles.ReadMoreBtn}
                >
                  Read More
                </button>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {isVisible ? (
          <span></span>
        ) : (
          <div
            className={`scrollHidden ${styles.hiddenParagraph} ${styles.animated}  ${styles.fadeInUp1}`}
          >
            <div
              className={`${styles.containerModal} ${styles.InnerModalBg}  ${styles.animated} ${styles.fadeIn}`}
            >
              <div
                className={`${styles.Title} ${styles.animated} ${styles.bounceInLeft}`}
              >
                <img src="/images/BMD-Icon.png" />
                <h3>Science</h3>
                <h4>A human endeavor</h4>
                
              </div>

              <div className={`${styles.ModalGraphic}`}>
                <div class="loader">
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </div>
              </div>
              <div className={styles.InneerDiscription}>
                <div
                  className={`${styles.ModalTitle}  ${styles.animated} ${styles.fadeIn01}`}
                >
                  <h2>
                    Pharma, <br></br>Meet Nature
                  </h2>
                  <p>
                    Bruno MD is committed to furthering our understanding of the
                    power of natural substances to improve human health and
                    longevity. This goal is a moving target. One not easily
                    achieved. Nature is not always willing to show us her hand.
                    Pharmacology is another path to improving human health, and
                    Bruno also does this.
                  </p>
                </div>

                <div
                  className={`${styles.BottomDis} ${styles.animated}  ${styles.flipInX}`}
                >
                  <div className={`${styles.BottomImg}`}>
                    <img src="/images/scienceNature.png" />
                  </div>

                  <div id="ScrollRight" className={`${styles.Discription}`}>
                    <p>
                      We are the third-largest pharmaceutical company in Italy
                      today. Knowing both sides, we understand that some
                      solutions for improving health outcomes are pharma&apos;s
                      job. Still, we also know that many diseases that lead to
                      the necessity of pharmacological intervention are often
                      preventable through leveraging the best ingredients that
                      Nature has to offer and unlocking some of Nature&apos;s
                      secrets that she is reluctant to share with us.
                    </p>
                    <p>
                      One of the seemingly insurmountable problems of deploying
                      nature-based solutions to improve health and longevity is
                      the issue of bioavailability. In our pharmaceutical
                      business, we customize molecules to interact with the
                      human body in a precise and targeted way with largely
                      predictable outcomes because we design them for specific
                      receptors in the body. Nature does not play this way. Our
                      bodies block many plant-based nutrients that would benefit
                      our health. This low bioavailability is a function of
                      evolution, and the problem is particularly acute with a
                      special kind of plant nutrient known as polyphenols.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <span onClick={toggleVisibility}>X</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
