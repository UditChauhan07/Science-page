import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
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
            <ScrollAnimation delay={600} animateOnce="true" animateIn="fadeIn">
              <div className={`${styles.Mask} `}>
                <h1 className={styles.animateCh}>Farm to Table.</h1>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={1500} animateOnce="true" animateIn="fadeIn">
              <h3>Rooted in Italian Soil</h3>
            </ScrollAnimation>
            <ScrollAnimation delay={1800} animateOnce="true" animateIn="fadeIn">
              <div className={styles.W80}>
                <p>
                  If you take supplements, you should be aware that the
                  ingredients you consume, such as Vitamin C or E, are often
                  produced in a lab and not harvested from natural sources.
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
                className={`${styles.HeadingItalianSoli} ${styles.animated} ${styles.bounceInLeft}`}
              >
                <h3>Rooted In</h3>
                <h4>Italian Soil</h4>
                <div id="ScrollRight" className={styles.InneerDiscription}>
                  <p>
                    If you take supplements, you should be aware that the
                    ingredients you consume, such as <b>Vitamin C or E,</b> are
                    often produced in a lab and not harvested from natural
                    sources. While these compounds appear identical to their
                    naturally derived counterparts on a molecular level, they
                    are not the same nor provide equivalent health benefits.
                  </p>
                  <p>
                    Artificially manufactured vitamins are not as beneficial as
                    naturally occurring vitamins of the same type because
                    natural vitamins are accompanied by cofactors such as
                    enzymes, minerals, and other organic molecules that work
                    together to support their absorption, bioavailability, and
                    utilization in the body.Unfortunately, these cofactors are
                    often absent or removed during the manufacturing process of
                    artificial vitamins, which results in reduced effectiveness
                    and increased risk of toxicity.
                  </p>
                </div>
              </div>
              <div className={`${styles.GifVideo} `}>
                
                <img src="/images/vitamnCE.gif" />
              </div>

              <div
                className={`${styles.BottomDis} ${styles.animated}  ${styles.flipInX}`}
              >
                <div className={`${styles.BottomImg}`}>
                  <img src="/images/RootedOrange.png" />
                </div>

                <div id="ScrollRight" className={`${styles.Discription}`}>
                  <p>
                    Furthermore, natural vitamins are usually present in a
                    complex matrix of other beneficial compounds, such as
                    antioxidants, fiber, flavonoids, and phytonutrients, that
                    interact synergistically to provide additional health
                    benefits beyond the vitamin itself, like natural vitamin C.
                    On the other hand, artificial vitamins typically contain
                    only the isolated vitamin molecules, which lack these
                    synergistic components and may even interfere with their
                    absorption and function in the body.
                  </p>
                  <p>
                    Moreover, when taken in high doses, artificial vitamins may
                    even be toxic, whereas natural vitamins are generally safe
                    in any amount. Given our philosophy, it is unsurprising that
                    Bruno MD only sources natural ingredients for our products.
                    What may surprise you is that we also follow our
                    Mediterranean philosophy as a core principle of our sourcing
                    methods. We prefer to work with small, Italian-owned family
                    farms and people we know. Our citrus, for example, is
                    sourced from a network of orchards situated on only a few
                    hectares of land at the base of the Etna Volcano in Sicily.
                  </p>

                  <p>
                    We source our blood oranges from these areas because we know
                    the farmers run organic operations, pick their fruit by
                    hand, and harvest only when the citrus hits its peak
                    nutritional value.  We also know the mineral-rich soil fed
                    by the volcano imparts other beneficial co-factors like a
                    higher percentage of anthocyanins, a compound of flavonoids
                    representing a potent group of antioxidants proven to help
                    tame free radicals and provide anti-inflammatory benefits.
                    The over 60+ flavonoids found in our Red Orange Complex can
                    encourage heart health, help maintain cholesterol levels in
                    the healthy range, and boost cognitive function. If our
                    ingredients can&apost be grown on Italian soil, Bruno MD
                    searches worldwide for farmers and ingredients that live up
                    to the same standards, then transforms them into products
                    that deliver 100% food-grade composition and the highest
                    bioavailability available.
                  </p>
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
