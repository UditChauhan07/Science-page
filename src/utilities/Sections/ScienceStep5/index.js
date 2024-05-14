import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import ScrollAnimation from "react-animate-on-scroll";
const Index = () => {
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
    <div className={styles.height100vh}>
      <div className={styles.container}>
        <div className={styles.RowFlex}>
          <div className={styles.W70}>
            <ScrollAnimation
              delay={600}
              animateOnce="true"
              animateIn="fadeInUp"
            >
              <h1>Nature,</h1>
            </ScrollAnimation>
            <ScrollAnimation
              delay={800}
              animateOnce="true"
              animateIn="fadeInUp"
            >
              <h2>Meet Pharma.</h2>
            </ScrollAnimation>
            <ScrollAnimation
              delay={1500}
              animateOnce="true"
              animateIn="fadeInUp"
            >
              <h3>Clinically Proven Ingredients</h3>
            </ScrollAnimation>
            <ScrollAnimation
              delay={1800}
              animateOnce="true"
              animateIn="fadeInUp"
            >
              <div className={styles.W80}>
                <p>
                  When a company makes a claim, it should be transparent and
                  verifiable. Because we are both a pharmacological company and
                  a nutritional supplement company
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={2000} animateOnce="true" animateIn="fadeIn">
              <div>
                <button
                  onClick={toggleVisibility}
                  className={styles.ReadMoreBtnWhite}
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
            <div className={styles.containerModal}>
              <div
                className={`${styles.Margin6} ${styles.HeadingItalianSoli} ${styles.animated} ${styles.bounceInLeft}`}
              >
                <h3>Clinically Proven</h3>
                <h4>Ingredients</h4>
                <div id="ScrollRight" className={styles.InneerDiscription}>
                  <p>
                    When a company makes a claim, it should be transparent and
                    verifiable. Because we are both a pharmacological company
                    and a nutritional supplement company, Bruno MD applies the
                    same principled methods for safety, provenance, and
                    effectiveness on all of our products, whether they are
                    molecules we formulate or ones we source from Nature.
                  </p>
                  <p>
                    We substantiate all advertised health benefits and claims.
                    All clinical trials on our ingredients are randomized,
                    double-blind, placebo-controlled, and published. In
                    addition, all Bruno MD dietary supplements undergo the same
                    rigorous manufacturing and internal regulatory processes as
                    our pharmaceutical products. Finally, the efficacy of the
                    actives in all of our pharmacological or botanical products
                    delivered with Phytosome Technology is guaranteed.
                  </p>
                </div>
              </div>
              <div className={`${styles.PlantAnimationRight}`}>
                <div className="plantNew">
                  <div className="not-load">
                    <div className="flowers">
                      <div class="flower flower--1">
                        <div class="flower__leafs flower__leafs--1">
                          <div class="flower__leaf flower__leaf--1"></div>
                          <div class="flower__leaf flower__leaf--2"></div>
                          <div class="flower__leaf flower__leaf--3"></div>
                          <div class="flower__leaf flower__leaf--4"></div>
                          <div class="flower__white-circle"></div>

                          <div class="flower__light flower__light--1"></div>
                          <div class="flower__light flower__light--2"></div>
                          <div class="flower__light flower__light--3"></div>
                          <div class="flower__light flower__light--4"></div>
                          <div class="flower__light flower__light--5"></div>
                          <div class="flower__light flower__light--6"></div>
                          <div class="flower__light flower__light--7"></div>
                          <div class="flower__light flower__light--8"></div>
                        </div>
                        <div class="flower__line">
                          <div class="flower__line__leaf flower__line__leaf--1"></div>
                          <div class="flower__line__leaf flower__line__leaf--2"></div>
                          <div class="flower__line__leaf flower__line__leaf--3"></div>
                          <div class="flower__line__leaf flower__line__leaf--4"></div>
                          <div class="flower__line__leaf flower__line__leaf--5"></div>
                          <div class="flower__line__leaf flower__line__leaf--6"></div>
                        </div>
                      </div>
                      <div class="flower flower--2">
                        <div class="flower__leafs flower__leafs--2">
                          <div class="flower__leaf flower__leaf--1"></div>
                          <div class="flower__leaf flower__leaf--2"></div>
                          <div class="flower__leaf flower__leaf--3"></div>
                          <div class="flower__leaf flower__leaf--4"></div>
                          <div class="flower__white-circle"></div>

                          <div class="flower__light flower__light--1"></div>
                          <div class="flower__light flower__light--2"></div>
                          <div class="flower__light flower__light--3"></div>
                          <div class="flower__light flower__light--4"></div>
                          <div class="flower__light flower__light--5"></div>
                          <div class="flower__light flower__light--6"></div>
                          <div class="flower__light flower__light--7"></div>
                          <div class="flower__light flower__light--8"></div>
                        </div>
                        <div class="flower__line">
                          <div class="flower__line__leaf flower__line__leaf--1"></div>
                          <div class="flower__line__leaf flower__line__leaf--2"></div>
                          <div class="flower__line__leaf flower__line__leaf--3"></div>
                          <div class="flower__line__leaf flower__line__leaf--4"></div>
                        </div>
                      </div>
                      <div class="flower flower--3">
                        <div class="flower__leafs flower__leafs--3">
                          <div class="flower__leaf flower__leaf--1"></div>
                          <div class="flower__leaf flower__leaf--2"></div>
                          <div class="flower__leaf flower__leaf--3"></div>
                          <div class="flower__leaf flower__leaf--4"></div>
                          <div class="flower__white-circle"></div>

                          <div class="flower__light flower__light--1"></div>
                          <div class="flower__light flower__light--2"></div>
                          <div class="flower__light flower__light--3"></div>
                          <div class="flower__light flower__light--4"></div>
                          <div class="flower__light flower__light--5"></div>
                          <div class="flower__light flower__light--6"></div>
                          <div class="flower__light flower__light--7"></div>
                          <div class="flower__light flower__light--8"></div>
                        </div>
                        <div class="flower__line">
                          <div class="flower__line__leaf flower__line__leaf--1"></div>
                          <div class="flower__line__leaf flower__line__leaf--2"></div>
                          <div class="flower__line__leaf flower__line__leaf--3"></div>
                          <div class="flower__line__leaf flower__line__leaf--4"></div>
                        </div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "1.2s" }}>
                        <div className="flower__g-long">
                          <div className="flower__g-long__top"></div>
                          <div className="flower__g-long__bottom"></div>
                        </div>
                      </div>
                      <div class="growing-grass">
                        <div class="flower__grass flower__grass--1">
                          <div class="flower__grass--top"></div>
                          <div class="flower__grass--bottom"></div>
                          <div class="flower__grass__leaf flower__grass__leaf--1"></div>
                          <div class="flower__grass__leaf flower__grass__leaf--2"></div>
                          <div class="flower__grass__leaf flower__grass__leaf--3"></div>
                          <div class="flower__grass__leaf flower__grass__leaf--4"></div>
                          <div class="flower__grass__leaf flower__grass__leaf--5"></div>
                          <div class="flower__grass__leaf flower__grass__leaf--6"></div>
                          <div class="flower__grass__leaf flower__grass__leaf--7"></div>
                          <div class="flower__grass__leaf flower__grass__leaf--8"></div>
                          <div class="flower__grass__overlay"></div>
                        </div>
                      </div>
                      <div class="growing-grass">
                        <div class="flower__grass flower__grass--2">
                          <div class="flower__grass--top"></div>
                          <div class="flower__grass--bottom"></div>
                          <div class="flower__grass__leaf flower__grass__leaf--1"></div>
                          <div class="flower__grass__leaf flower__grass__leaf--2"></div>
                          <div class="flower__grass__leaf flower__grass__leaf--3"></div>
                          <div class="flower__grass__leaf flower__grass__leaf--4"></div>
                          <div class="flower__grass__leaf flower__grass__leaf--5"></div>
                          <div class="flower__grass__leaf flower__grass__leaf--6"></div>
                          <div class="flower__grass__leaf flower__grass__leaf--7"></div>
                          <div class="flower__grass__leaf flower__grass__leaf--8"></div>
                          <div class="flower__grass__overlay"></div>
                        </div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "2.4s" }}>
                        <div className="flower__g-right flower__g-right--1">
                          <div className="leaf"></div>
                        </div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "2.8s" }}>
                        <div className="flower__g-right flower__g-right--2">
                          <div className="leaf"></div>
                        </div>
                      </div>
                      <div className="grow-ans" style={{ "--d": "2.8s" }}>
                        <div className="flower__g-front">
                          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
                            <div className="flower__g-front__leaf"></div>
                          </div>
                          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
                            <div className="flower__g-front__leaf"></div>
                          </div>
                          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
                            <div className="flower__g-front__leaf"></div>
                          </div>
                          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
                            <div className="flower__g-front__leaf"></div>
                          </div>
                          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
                            <div className="flower__g-front__leaf"></div>
                          </div>
                          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
                            <div className="flower__g-front__leaf"></div>
                          </div>
                          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
                            <div className="flower__g-front__leaf"></div>
                          </div>
                          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
                            <div className="flower__g-front__leaf"></div>
                          </div>
                          <div className="flower__g-front__line"></div>
                        </div>
                      </div>
                      {/* <div className="long-g long-g--0">
                        <div className="grow-ans" style={{ "--d": "3s" }}>
                          <div className="leaf leaf--0"></div>
                        </div>
                        <div className="grow-ans" style={{ "--d": "2.2s" }}>
                          <div className="leaf leaf--1"></div>
                        </div>
                        <div className="grow-ans" style={{ "--d": "3.4s" }}>
                          <div className="leaf leaf--2"></div>
                        </div>
                        <div className="grow-ans" style={{ "--d": "3.6s" }}>
                          <div className="leaf leaf--3"></div>
                        </div>
                      </div> */}
                      <div className="long-g long-g--1">
                        <div className="grow-ans" style={{ "--d": "3.6s" }}>
                          <div className="leaf leaf--0"></div>
                        </div>
                        <div className="grow-ans" style={{ "--d": "3.8s" }}>
                          <div className="leaf leaf--1"></div>
                        </div>
                        <div className="grow-ans" style={{ "--d": "4s" }}>
                          <div className="leaf leaf--2"></div>
                        </div>
                        <div className="grow-ans" style={{ "--d": "4.2s" }}>
                          <div className="leaf leaf--3"></div>
                        </div>
                      </div>
                      <div className="long-g long-g--2">
                        <div className="grow-ans" style={{ "--d": "4s" }}>
                          <div className="leaf leaf--0"></div>
                        </div>
                        <div className="grow-ans" style={{ "--d": "4.2s" }}>
                          <div className="leaf leaf--1"></div>
                        </div>
                        <div className="grow-ans" style={{ "--d": "4.4s" }}>
                          <div className="leaf leaf--2"></div>
                        </div>
                        <div className="grow-ans" style={{ "--d": "4.6s" }}>
                          <div className="leaf leaf--3"></div>
                        </div>
                      </div>
                      <div className="long-g long-g--3">
                        <div className="grow-ans" style={{ "--d": "4s" }}>
                          <div className="leaf leaf--0"></div>
                        </div>
                        <div className="grow-ans" style={{ "--d": "4.2s" }}>
                          <div className="leaf leaf--1"></div>
                        </div>
                        <div className="grow-ans" style={{ "--d": "3s" }}>
                          <div className="leaf leaf--2"></div>
                        </div>
                        <div className="grow-ans" style={{ "--d": "3.6s" }}>
                          <div className="leaf leaf--3"></div>
                        </div>
                      </div>
                      <div className="long-g long-g--4">
                        <div className="grow-ans" style={{ "--d": "4s" }}>
                          <div className="leaf leaf--0"></div>
                        </div>
                        <div className="grow-ans" style={{ "--d": "4.2s" }}>
                          <div className="leaf leaf--1"></div>
                        </div>
                        <div className="grow-ans" style={{ "--d": "3s" }}>
                          <div className="leaf leaf--2"></div>
                        </div>
                        <div className="grow-ans" style={{ "--d": "3.6s" }}>
                          <div className="leaf leaf--3"></div>
                        </div>
                      </div>
                      <div className="long-g long-g--5">
                        <div className="grow-ans" style={{ "--d": "4s" }}>
                          <div className="leaf leaf--0"></div>
                        </div>
                        <div className="grow-ans" style={{ "--d": "4.2s" }}>
                          <div className="leaf leaf--1"></div>
                        </div>
                        <div className="grow-ans" style={{ "--d": "3s" }}>
                          <div className="leaf leaf--2"></div>
                        </div>
                        <div className="grow-ans" style={{ "--d": "3.6s" }}>
                          <div className="leaf leaf--3"></div>
                        </div>
                      </div>
                      {/* <div className="long-g long-g--6">
                        <div className="grow-ans" style={{ "--d": "4.2s" }}>
                          <div className="leaf leaf--0"></div>
                        </div>
                        <div className="grow-ans" style={{ "--d": "4.4s" }}>
                          <div className="leaf leaf--1"></div>
                        </div>
                        <div className="grow-ans" style={{ "--d": "4.6s" }}>
                          <div className="leaf leaf--2"></div>
                        </div>
                        <div className="grow-ans" style={{ "--d": "4.8s" }}>
                          <div className="leaf leaf--3"></div>
                        </div>
                      </div> */}

                      <div className="long-g long-g--7">
                        <div className="grow-ans" style={{ "--d": "3s" }}>
                          <div className="leaf leaf--0"></div>
                        </div>
                        <div className="grow-ans" style={{ "--d": "3.2s" }}>
                          <div className="leaf leaf--1"></div>
                        </div>
                        <div className="grow-ans" style={{ "--d": "3.5s" }}>
                          <div className="leaf leaf--2"></div>
                        </div>
                        <div className="grow-ans" style={{ "--d": "3.6s" }}>
                          <div className="leaf leaf--3"></div>
                        </div>
                      </div>
                    </div>
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
