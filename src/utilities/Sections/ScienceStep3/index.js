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
              <div className={styles.ContentBox}>
                <h3>BLUE ZONE</h3>
                <h3>BLUE ZONE</h3>
              </div>
              <h1>BLUE ZONE</h1>
            </ScrollAnimation>
            <ScrollAnimation delay={900} animateOnce="true" animateIn="fadeIn">
              <h2>Longevity.</h2>
            </ScrollAnimation>
            <ScrollAnimation
              delay={1500}
              animateOnce="true"
              animateIn="fadeInUp"
            >
              <h3 className={styles.LiveHealter}>
                Live Healthier, Longer Lives
              </h3>
            </ScrollAnimation>
            <ScrollAnimation
              delay={1800}
              animateOnce="true"
              animateIn="fadeInUp"
            >
              <div className={styles.W80}>
                <p>
                  Many pharmacological companies are scaled international
                  conglomerates. The names of these companies are familiar and,
                  unfortunately, are often known for being as impersonal as they
                  are innovative.
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
            <div className={styles.containerModal}>
              <div
                className={`${styles.NatureSecrets} ${styles.animated} ${styles.bounceInLeft}`}
              >
                <h3>Live Healthier Longer Lives</h3>
                <div id="ScrollRight" className={styles.InneerDiscription}>
                  <p>
                    Many pharmacological companies are scaled international
                    conglomerates. The names of these companies are familiar
                    and, unfortunately, are often known for being as impersonal
                    as they are innovative. Bruno MD, an Italian company based
                    in Rome, is a family-owned operation that allows the company
                    to innovate from a different perspective. It is not
                    hyperbole to say that we treat our employees, scientists,
                    doctors, and company representatives like family.
                  </p>
                </div>
              </div>
              <div
                className={`${styles.NatureSecretsImg} ${styles.animated} ${styles.bounceInRight}`}
              >
                <div
                  className={`${styles.diagram} ${styles.animated} ${styles.fadeInUp01}`}
                >
                  
                  <div className={`${styles.HandPlant} ${styles.rotateimg1}`}>
                  {/* <img src="/images/handPlant.svg" /> */}
                  <svg width="630" height="616" viewBox="0 0 630 616" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M75.5928 12.3111L103.652 42.3261L111.627 6.08154L75.5928 12.3111Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M111.627 6.08154L134.296 25.0164L103.652 42.3261L111.627 6.08154Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M134.296 25.0165L145.52 2.31445L111.627 6.08172L134.296 25.0165Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M134.297 25.0165L154.603 12.7791L145.521 2.31445L134.297 25.0165Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M134.296 25.0166L124.008 49.787L103.652 42.3263L134.296 25.0166Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M44.2109 35.0624L73.4766 45.0838L75.5933 12.311L44.2109 35.0624Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M73.4766 45.0838L103.653 42.3261L75.5933 12.311L73.4766 45.0838Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M44.2109 35.0625L60.0621 66.8503L73.4766 45.0839L44.2109 35.0625Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M11.3271 30.3599L21.591 59.193L44.211 35.0628L11.3271 30.3599Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M21.5908 59.1929L33.6515 96.3731L60.0619 66.8505L21.5908 59.1929Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M33.6514 96.3729L66.166 103.12L60.0618 66.8503L33.6514 96.3729Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M66.166 103.12L33.6514 96.373L40.9862 105.459L66.166 103.12Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M66.1658 103.12L86.6443 115.751L59.5693 138.749L66.1658 103.12Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M59.5693 138.749L102.939 137.591L86.6443 115.751L59.5693 138.749Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M78.3003 161.475L102.939 137.591L59.5693 138.749L78.3003 161.475Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M86.6446 115.751L96.6623 78.5955L66.166 103.12L86.6446 115.751Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M96.6621 78.5954L119.947 83.1506L124.008 49.7869L96.6621 78.5954Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M96.6623 78.5955L86.6445 115.751L119.947 83.1507L96.6623 78.5955Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M102.939 137.591L119.947 83.1506L86.6445 115.751L102.939 137.591Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M124.008 49.787L154.504 42.4494L134.296 25.0166L124.008 49.787Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M124.008 49.7868L154.504 42.4492L119.946 83.1505L124.008 49.7868Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M134.297 25.0168L154.505 42.4496L154.603 12.7793L134.297 25.0168Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M265.29 58.5034L248.085 83.3723L295.392 86.4994L265.29 58.5034Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M248.085 83.3723L288.525 112.156L295.392 86.4994L248.085 83.3723Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M288.526 112.156L271.518 133.233L307.552 127.003L288.526 112.156Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M271.517 133.233L248.085 83.3723L288.525 112.156L271.517 133.233Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M271.518 133.233L299.577 163.273L307.552 127.004L271.518 133.233Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M307.552 127.004L330.221 145.938L299.577 163.273L307.552 127.004Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M330.221 145.938L319.933 170.709L299.577 163.273L330.221 145.938Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M271.517 133.233L226.425 112.993L248.085 83.3723L271.517 133.233Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M248.085 83.3723L238.806 51.5845L265.29 58.5034L248.085 83.3723Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M238.806 51.5845L214.34 71.3318L248.085 83.3723L238.806 51.5845Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M238.806 51.5845L204.766 35.6782L214.34 71.3318L238.806 51.5845Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M204.765 35.6782L182.047 56.9768L214.34 71.3318L204.765 35.6782Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M214.34 71.3318L211.337 96.1022L248.085 83.3723L214.34 71.3318Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M211.337 96.1022L226.425 112.993L248.085 83.3723L211.337 96.1022Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M240.135 156.009L269.4 166.006L271.517 133.233L240.135 156.009Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M269.4 166.006L299.577 163.273L271.517 133.233L269.4 166.006Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M211.337 96.1022L183.327 92.0394L214.34 71.3318L211.337 96.1022Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M183.327 92.0395L182.047 56.9768L214.34 71.3318L183.327 92.0395Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M240.135 156.009L255.986 187.772L269.4 166.006L240.135 156.009Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M255.986 187.772L283.874 184.325L269.401 166.006L255.986 187.772Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M283.873 184.325L299.577 163.273L269.4 166.006L283.873 184.325Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M319.932 170.709L283.873 184.325L299.577 163.273L319.932 170.709Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M207.251 151.281L217.515 180.115L240.135 156.009L207.251 151.281Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M217.516 180.115L255.987 187.772L240.136 156.009L217.516 180.115Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M217.516 180.115L229.576 217.295L255.987 187.772L217.516 180.115Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M229.576 217.295L262.091 224.041L255.987 187.772L229.576 217.295Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M262.091 224.041L292.587 199.517L255.986 187.772L262.091 224.041Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M292.587 199.517L283.874 184.325L255.986 187.772L292.587 199.517Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M170.429 187.28L156.695 144.289L125.337 167.04L170.429 187.28Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M156.695 144.289L127.429 134.267L125.337 167.04L156.695 144.289Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M156.695 144.289L140.844 112.525L127.43 134.267L156.695 144.289Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M179.315 120.158L140.844 112.525L156.695 144.289L179.315 120.158Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M262.091 224.042L229.576 217.295L224.432 227.538L262.091 224.042Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M224.431 227.538L200.285 210.77L229.575 217.295L224.431 227.538Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M200.286 210.77L189.013 226.947L224.432 227.538L200.286 210.77Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M159.132 194.248L200.286 210.77L189.013 226.947L159.132 194.248Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M200.285 210.77L217.515 180.115L229.575 217.295L200.285 210.77Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M170.43 187.28L217.516 180.115L207.252 151.281L170.43 187.28Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M156.695 144.289L185.986 148.278L179.315 120.158L156.695 144.289Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M156.695 144.289L184.016 159.801L170.43 187.28L156.695 144.289Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M184.016 159.801L185.986 148.277L156.695 144.289L184.016 159.801Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M184.016 159.801L207.251 151.282L185.985 148.278L184.016 159.801Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M184.016 159.801L207.252 151.281L170.43 187.28L184.016 159.801Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M170.43 187.28L200.286 210.77L217.516 180.115L170.43 187.28Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M159.132 194.248L170.43 187.28L200.286 210.77L159.132 194.248Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M159.131 194.248L125.337 167.04L170.429 187.28L159.131 194.248Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M124.353 190.752L125.337 167.04L159.132 194.248L124.353 190.752Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M292.586 199.517L319.932 170.709L283.873 184.325L292.586 199.517Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M292.587 199.517L315.896 204.097L319.933 170.709L292.587 199.517Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M319.933 170.709L350.429 163.371L330.221 145.938L319.933 170.709Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M319.932 170.709L350.428 163.371L315.896 204.097L319.932 170.709Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M154.504 42.4492L147.883 82.8058L182.047 56.9766L154.504 42.4492Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M154.504 42.4495L204.765 35.6782L182.047 56.9768L154.504 42.4495Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M154.504 42.4496L204.765 35.6784L154.602 12.7793L154.504 42.4496Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M119.946 83.1505L147.883 82.8058L154.504 42.4492L119.946 83.1505Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M102.938 137.591L127.429 134.267L140.843 112.525L102.938 137.591Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M102.938 137.591L125.337 167.04L127.429 134.267L102.938 137.591Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M78.3008 161.475L125.337 167.04L102.939 137.591L78.3008 161.475Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M78.3008 161.475L124.353 190.752L125.337 167.04L78.3008 161.475Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M238.806 51.5845L222.856 31L205.996 36.2692L238.806 51.5845Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M222.856 30.9997L188.176 17.4326L205.996 36.2689L222.856 30.9997Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M204.765 35.6784L188.176 17.433L154.603 12.7793L204.765 35.6784Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M265.29 58.5035L245.304 36.7617L238.806 51.5846L265.29 58.5035Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M245.304 36.7617L271.05 44.8626L265.29 58.5035L245.304 36.7617Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M307.552 127.004L328.572 128.703L330.221 145.938L307.552 127.004Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M307.551 127.004L306.395 100.091L328.571 128.703L307.551 127.004Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M306.395 100.091L332.288 114.742L328.571 128.703L306.395 100.091Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M306.395 100.091L306.739 79.7773L332.288 114.742L306.395 100.091Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M295.393 86.4993L306.395 100.091L288.525 112.156L295.393 86.4993Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M295.393 86.4993L306.739 79.7773L306.395 100.091L295.393 86.4993Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M265.29 58.5034L289.042 66.8505L295.393 86.4994L265.29 58.5034Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M289.042 66.8503L271.05 44.8623L265.29 58.5033L289.042 66.8503Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M289.042 66.8503L306.739 79.7772L295.392 86.4992L289.042 66.8503Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M124.353 190.752L142.173 212.715L159.132 194.248L124.353 190.752Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M159.132 194.248L189.013 226.947L161.076 211.558L159.132 194.248Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M161.076 211.558L164.374 222.121L189.013 226.947L161.076 211.558Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M161.076 211.558L142.173 212.715L159.132 194.248L161.076 211.558Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M124.352 190.752L111.233 192.968L142.173 212.715L124.352 190.752Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M75.593 12.3111L72.1963 4.40723L111.627 6.08157L75.593 12.3111Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M75.5928 12.3111L52.7021 12.1634L72.1962 4.40723L75.5928 12.3111Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M52.7023 12.1636L48.4688 21.1016L75.593 12.3113L52.7023 12.1636Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M48.4691 21.1013L44.2109 35.0624L75.5933 12.311L48.4691 21.1013Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M48.4684 21.1015L24.79 19.3779L44.2102 35.0626L48.4684 21.1015Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M24.79 19.378L52.7019 12.1636L48.4684 21.1016L24.79 19.378Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M24.7908 19.3779L11.3271 30.3596L44.211 35.0626L24.7908 19.3779Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M52.7019 12.1634L33.7002 4.97363L24.79 19.3779L52.7019 12.1634Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M52.7019 12.1634L72.1959 4.40723L33.7002 4.97355L52.7019 12.1634Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M24.7903 19.3778L5.00098 16.4478L11.3267 30.3596L24.7903 19.3778Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M24.7903 19.3781L9.99755 3.79199L5.00098 16.448L24.7903 19.3781Z" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M186.797 10.0459L188.175 17.4327L215.521 18.2206L222.856 30.9998" stroke="#65FFFF" stroke-width="0.1472" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M308.783 173.269L294.876 173.196L284.661 153.793" stroke="#65FFFF" stroke-width="0.368" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M213.749 133.553L187.068 124.935L176.386 104.966L213.749 133.553ZM213.749 133.553L244.098 133.356L284.661 153.793L308.783 173.27L324.954 172.58L338.737 182.331L347.278 182.405L359.56 190.432" stroke="#65FFFF" stroke-width="0.368" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M176.386 104.966L134.985 96.6686L103.308 67.8354L128.783 77.0936" stroke="#65FFFF" stroke-width="0.368" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M103.308 67.8352L80.3188 72.9321L56.1729 48.0386L74.6577 51.5596" stroke="#65FFFF" stroke-width="0.368" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M359.56 190.432C302.309 -66.9981 40.0505 25.8293 0.939453 0.443359C28.1868 117.647 130.063 318.543 359.56 190.432Z" stroke="#65FFFF" stroke-width="0.368" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M0.939453 0.443359C40.0259 25.8293 302.309 -66.9981 359.56 190.432C359.56 190.432 127.257 128.432 0.939453 0.443359Z" fill="url(#paint0_linear_772_1066)"/>
<path d="M0.939453 0.443359C127.257 128.407 359.56 190.432 359.56 190.432C130.063 318.543 28.1868 117.647 0.939453 0.443359Z" fill="url(#paint1_linear_772_1066)"/>
<path d="M572.665 57.1741L551.448 79.8516L545.418 52.4465L572.665 57.1741Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M545.417 52.4465L528.286 66.7769L551.448 79.8516L545.417 52.4465Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M528.287 66.777L519.795 49.615L545.418 52.4466L528.287 66.777Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M528.286 66.777L512.952 57.5189L519.795 49.615L528.286 66.777Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M528.286 66.7771L536.064 85.4903L551.448 79.8517L528.286 66.7771Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M596.368 74.3607L574.24 81.9198L572.665 57.1741L596.368 74.3607Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M574.24 81.9198L551.448 79.8515L572.665 57.1741L574.24 81.9198Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M596.368 74.3608L584.381 98.3679L574.24 81.92L596.368 74.3608Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M621.228 70.7905L613.45 92.5816L596.368 74.3608L621.228 70.7905Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M613.45 92.5815L604.343 120.676L584.381 98.3679L613.45 92.5815Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M604.343 120.676L579.778 125.773L584.381 98.3679L604.343 120.676Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M579.778 125.773L604.343 120.676L598.805 127.546L579.778 125.773Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M579.778 125.773L564.296 135.327L584.75 152.71L579.778 125.773Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M584.75 152.71L551.965 151.824L564.296 135.326L584.75 152.71Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M570.597 169.872L551.965 151.824L584.75 152.71L570.597 169.872Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M564.296 135.326L556.715 107.257L579.778 125.773L564.296 135.326Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M556.715 107.257L539.117 110.704L536.064 85.4902L556.715 107.257Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M556.715 107.257L564.296 135.326L539.116 110.704L556.715 107.257Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M551.965 151.824L539.116 110.704L564.296 135.327L551.965 151.824Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M536.064 85.4903L513.001 79.9256L528.286 66.7771L536.064 85.4903Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M536.064 85.4903L513.001 79.9255L539.116 110.704L536.064 85.4903Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M528.286 66.7769L513.001 79.9254L512.952 57.5188L528.286 66.7769Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M429.291 92.0645L442.287 110.876L406.548 113.24L429.291 92.0645Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M442.287 110.876L411.741 132.618L406.548 113.24L442.287 110.876Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M411.741 132.618L424.589 148.549L397.366 143.821L411.741 132.618Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M424.59 148.549L442.287 110.876L411.741 132.618L424.59 148.549Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M424.589 148.549L403.372 171.226L397.366 143.821L424.589 148.549Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M397.367 143.821L380.211 158.152L403.372 171.226L397.367 143.821Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M380.211 158.152L388.013 176.865L403.372 171.226L380.211 158.152Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M424.589 148.549L458.679 133.258L442.286 110.876L424.589 148.549Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M442.286 110.876L449.301 86.8445L429.29 92.0645L442.286 110.876Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M449.301 86.8445L467.786 101.766L442.286 110.876L449.301 86.8445Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M449.302 86.8445L475.023 74.8286L467.787 101.766L449.302 86.8445Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M475.023 74.8286L492.203 90.9072L467.786 101.766L475.023 74.8286Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M467.786 101.766L470.05 120.479L442.286 110.876L467.786 101.766Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M470.05 120.479L458.679 133.258L442.286 110.876L470.05 120.479Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M448.292 165.735L426.189 173.319L424.589 148.549L448.292 165.735Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M426.189 173.319L403.372 171.226L424.589 148.549L426.189 173.319Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M470.051 120.479L491.243 117.401L467.786 101.766L470.051 120.479Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M491.243 117.401L492.203 90.9072L467.786 101.766L491.243 117.401Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M448.292 165.735L436.33 189.742L426.189 173.319L448.292 165.735Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M436.33 189.742L415.261 187.157L426.189 173.319L436.33 189.742Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M415.26 187.157L403.372 171.226L426.189 173.319L415.26 187.157Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M388.014 176.865L415.261 187.157L403.373 171.226L388.014 176.865Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M473.152 162.19L465.399 183.981L448.292 165.735L473.152 162.19Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M465.399 183.981L436.33 189.742L448.292 165.735L465.399 183.981Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M465.399 183.981L456.292 212.075L436.33 189.742L465.399 183.981Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M456.291 212.075L431.702 217.172L436.329 189.742L456.291 212.075Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M431.702 217.172L408.664 198.631L436.33 189.742L431.702 217.172Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M408.664 198.631L415.261 187.157L436.33 189.743L408.664 198.631Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M500.99 189.398L511.353 156.896L535.056 174.083L500.99 189.398Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M511.353 156.896L533.48 149.337L535.055 174.082L511.353 156.896Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M511.353 156.896L523.339 132.889L533.48 149.337L511.353 156.896Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M494.271 138.651L523.339 132.889L511.352 156.896L494.271 138.651Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M431.702 217.172L456.291 212.075L460.18 219.807L431.702 217.172Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M460.181 219.807L478.42 207.126L456.292 212.075L460.181 219.807Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M478.419 207.126L486.936 219.364L460.181 219.807L478.419 207.126Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M509.531 194.642L478.419 207.126L486.935 219.363L509.531 194.642Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M478.42 207.126L465.399 183.981L456.292 212.075L478.42 207.126Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M500.99 189.398L465.398 183.981L473.152 162.19L500.99 189.398Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M511.352 156.896L489.225 159.9L494.27 138.651L511.352 156.896Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M511.353 156.896L490.727 168.616L500.99 189.398L511.353 156.896Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M490.726 168.616L489.225 159.9L511.352 156.896L490.726 168.616Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M490.726 168.616L473.152 162.19L489.225 159.9L490.726 168.616Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M490.726 168.616L473.152 162.19L500.99 189.398L490.726 168.616Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M500.99 189.398L478.419 207.126L465.398 183.981L500.99 189.398Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M509.531 194.642L500.99 189.398L478.419 207.126L509.531 194.642Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M509.531 194.642L535.056 174.083L500.99 189.398L509.531 194.642Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M535.794 192.008L535.056 174.083L509.531 194.642L535.794 192.008Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M408.665 198.631L388.014 176.865L415.261 187.157L408.665 198.631Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M408.665 198.631L391.066 202.078L388.014 176.865L408.665 198.631Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M388.013 176.865L364.95 171.325L380.211 158.152L388.013 176.865Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M388.013 176.865L364.95 171.325L391.065 202.078L388.013 176.865Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M513.002 79.9255L518.023 110.433L492.203 90.9072L513.002 79.9255Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M513.001 79.9255L475.022 74.8286L492.203 90.9072L513.001 79.9255Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M513.001 79.9254L475.022 74.8285L512.952 57.5188L513.001 79.9254Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M539.116 110.704L518.022 110.433L513.001 79.9255L539.116 110.704Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M551.965 151.824L533.48 149.337L523.339 132.889L551.965 151.824Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M551.965 151.824L535.056 174.082L533.48 149.337L551.965 151.824Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M570.598 169.872L535.056 174.083L551.965 151.824L570.598 169.872Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M570.598 169.872L535.794 192.008L535.056 174.083L570.598 169.872Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M449.302 86.8445L461.362 71.283L474.112 75.2718L449.302 86.8445Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M461.362 71.2828L487.576 61.0398L474.112 75.2717L461.362 71.2828Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M475.022 74.8285L487.575 61.0398L512.952 57.5188L475.022 74.8285Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M429.29 92.0644L444.403 75.6411L449.301 86.8444L429.29 92.0644Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M444.403 75.6411L424.958 81.7475L429.29 92.0644L444.403 75.6411Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M397.367 143.821L381.491 145.102L380.211 158.152L397.367 143.821Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M397.367 143.821L398.228 123.508L381.491 145.102L397.367 143.821Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M398.228 123.508L378.66 134.563L381.491 145.102L398.228 123.508Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M398.228 123.508L397.957 108.143L378.66 134.563L398.228 123.508Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M406.548 113.24L398.229 123.508L411.741 132.618L406.548 113.24Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M406.547 113.24L397.957 108.143L398.228 123.508L406.547 113.24Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M429.291 92.0645L411.348 98.3679L406.548 113.24L429.291 92.0645Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M411.347 98.3679L424.958 81.7476L429.29 92.0644L411.347 98.3679Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M411.347 98.3679L397.957 108.143L406.547 113.24L411.347 98.3679Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M535.794 192.008L522.33 208.603L509.531 194.642L535.794 192.008Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M509.531 194.642L486.936 219.363L508.054 207.717L509.531 194.642Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M508.054 207.717L505.543 215.719L486.936 219.364L508.054 207.717Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M508.054 207.717L522.33 208.603L509.531 194.642L508.054 207.717Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M535.794 192.008L545.713 193.682L522.33 208.603L535.794 192.008Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M572.665 57.1742L575.2 51.1909L545.418 52.4467L572.665 57.1742Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M572.665 57.1742L589.944 57.0511L575.2 51.1909L572.665 57.1742Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M589.944 57.051L593.144 63.7976L572.665 57.1741L589.944 57.051Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M593.144 63.7976L596.368 74.3607L572.665 57.1741L593.144 63.7976Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M593.144 63.7977L611.038 62.5173L596.368 74.3608L593.144 63.7977Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M611.037 62.5173L589.943 57.051L593.143 63.7976L611.037 62.5173Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M611.038 62.5173L621.228 70.7905L596.368 74.3608L611.038 62.5173Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M589.943 57.051L604.318 51.6094L611.037 62.5172L589.943 57.051Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M589.944 57.0511L575.2 51.1909L604.318 51.6095L589.944 57.0511Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M611.037 62.5173L626.002 60.2766L621.227 70.7905L611.037 62.5173Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M611.037 62.5171L622.212 50.7229L626.002 60.2765L611.037 62.5171Z" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M488.61 55.4507L487.576 61.04L466.9 61.631L461.362 71.2831" stroke="#65FFFF" stroke-width="0.1112" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M396.432 178.81L406.942 178.736L414.67 164.086" stroke="#65FFFF" stroke-width="0.2781" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M468.254 148.795L488.412 142.27L496.461 127.176L468.254 148.795ZM468.254 148.795L445.314 148.623L414.67 164.086L396.431 178.81L384.198 178.268L373.787 185.63L367.338 185.704L358.059 191.761" stroke="#65FFFF" stroke-width="0.2781" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M496.461 127.176L527.745 120.922L551.719 99.1311L532.446 106.124" stroke="#65FFFF" stroke-width="0.2781" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M551.719 99.1312L569.071 102.972L587.31 84.1606L573.354 86.8199" stroke="#65FFFF" stroke-width="0.2781" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M358.059 191.762C401.329 -2.75749 599.518 67.3925 629.055 48.2114C608.478 136.754 531.486 288.578 358.059 191.762Z" stroke="#65FFFF" stroke-width="0.2781" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M629.055 48.2114C599.518 67.3925 401.329 -2.75748 358.059 191.761C358.059 191.761 533.603 144.905 629.055 48.2114Z" fill="url(#paint2_linear_772_1066)"/>
<path d="M629.055 48.2114C533.603 144.905 358.059 191.762 358.059 191.762C531.486 288.578 608.478 136.754 629.055 48.2114Z" fill="url(#paint3_linear_772_1066)"/>
<path d="M386.932 452.589L378.538 425.923L367.905 452.589H386.932Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M367.905 452.589L368.89 424.421L378.538 425.923L367.905 452.589Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M378.538 425.923L382.575 418.955L386.931 452.589L378.538 425.923Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M382.574 418.955L386.931 416.197V452.589L382.574 418.955Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M382.575 418.955L378.145 402.507L378.538 425.923L382.575 418.955Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M378.144 402.507L370.243 404.255L378.538 425.923L378.144 402.507Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M370.243 404.255L368.89 424.421L378.538 425.923L370.243 404.255Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M370.243 404.255L369.775 387.413L378.144 402.507L370.243 404.255Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M369.775 387.413L377.75 381.577L378.144 402.507L369.775 387.413Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M378.144 402.507L383.362 402.137L377.75 381.577L378.144 402.507Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M383.363 402.137L382.575 418.954L378.145 402.507L383.363 402.137Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M383.362 402.137L386.931 416.197L382.574 418.954L383.362 402.137Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M383.362 402.137L384.765 384.483L377.75 381.577L383.362 402.137Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M369.775 369.438L377.75 381.577L369.775 387.413V369.438Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M369.775 352.375L376.987 364.095L369.775 369.438V352.375Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M376.987 364.095L377.75 381.577L369.775 369.438L376.987 364.095Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M384.765 384.483L376.987 364.095L377.75 381.577L384.765 384.483Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M359.511 208.554L359.117 194.199L357.887 192.5L359.511 208.554Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M360.595 227.981L362.736 214.71L359.512 208.554L360.595 227.981Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M362.736 214.71L359.118 194.199L359.512 208.554L362.736 214.71Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M362.736 214.71L366.551 233.694L360.595 227.981L362.736 214.71Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M366.551 233.694L364.902 248.837L360.595 227.981L366.551 233.694Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M364.902 248.837L361.555 250.486L360.595 227.981L364.902 248.837Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M364.902 248.837L365.345 272.031L361.555 250.486L364.902 248.837Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M364.902 248.837L371.031 256.322L366.551 233.694L364.902 248.837Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M371.031 256.322L365.345 272.031L364.902 248.837L371.031 256.322Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M367.782 318.74L373.862 307.512L377.751 333.933L367.782 318.74Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M373.861 307.512L381.295 309.162L377.75 333.933L373.861 307.512Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M373.861 307.512L377.898 285.771L381.295 309.162L373.861 307.512Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M373.861 307.513L367.412 293.872L367.781 318.74L373.861 307.513Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M367.412 293.871L377.898 285.771L373.861 307.512L367.412 293.871Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M367.462 326.373L377.75 333.932L369.776 352.375L367.462 326.373Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M377.75 333.933L382.082 358.531L369.775 352.375L377.75 333.933Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M382.082 358.531L376.987 364.095L369.775 352.375L382.082 358.531Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M377.75 333.932L367.462 326.373L367.782 318.74L377.75 333.932Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M371.03 256.322L373.861 277.227L365.345 272.031L371.03 256.322Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M367.412 293.872L373.861 277.227L365.345 272.031L367.412 293.872Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M377.898 285.771L373.861 277.227L367.412 293.871L377.898 285.771Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M377.75 333.932H385.7L381.294 309.162L377.75 333.932Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M385.7 333.933L382.082 358.531L377.75 333.933H385.7Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M382.082 358.531L384.765 384.483L376.987 364.095L382.082 358.531Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M382.082 358.531L389.392 364.095L384.765 384.483L382.082 358.531Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M382.082 358.531L385.7 333.933L389.392 364.095L382.082 358.531Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M384.765 384.483L392.051 399.33L383.362 402.137L384.765 384.483Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M384.766 384.483L392.051 399.33L389.393 364.095L384.766 384.483Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M383.362 402.137L392.051 399.33L386.931 416.197L383.362 402.137Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M386.931 416.197L390.057 444.858L382.574 418.955L386.931 416.197Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M382.574 418.955L390.057 444.858L386.931 452.589L384.839 436.954L382.574 418.955Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M392.051 399.33L394.955 375.742L398.5 401.128L392.051 399.33Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M392.051 399.33L400.592 420.358L398.5 401.128L392.051 399.33Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M392.051 399.33L400.592 420.358L386.932 416.197L392.051 399.33Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M386.932 416.197L390.058 444.858L398.894 438.136L386.932 416.197Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M398.894 438.136L400.592 420.358L386.932 416.197L398.894 438.136Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M386.932 452.589L400.125 455.766L390.058 444.858L386.932 452.589Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M390.058 444.858L398.894 438.136L400.125 455.766L390.058 444.858Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M389.393 364.095L394.955 375.742L392.051 399.33L389.393 364.095Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M363.573 608.968L350.084 595.647L345.235 604.462L363.573 608.968Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M345.236 604.462L341.199 591.633L350.085 595.647L345.236 604.462Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M345.236 604.462L329.655 599.611L341.199 591.633L345.236 604.462Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M329.656 599.611L326.948 593.283L341.2 591.633L329.656 599.611Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M326.948 593.283L319.662 596.853L329.655 599.611L326.948 593.283Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M326.948 593.283L331.822 573.708L341.2 591.633L326.948 593.283Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M350.085 595.647L361.038 592.224L363.573 608.968L350.085 595.647Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M361.038 592.224L365.961 590.722L363.573 608.968L361.038 592.224Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M361.038 592.224L356.214 576.367L350.085 595.647L361.038 592.224Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M356.213 576.367L348.14 575.949L350.084 595.647L356.213 576.367Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M348.14 575.949L341.199 591.633L350.085 595.647L348.14 575.949Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M331.821 573.708L348.14 575.949L341.199 591.633L331.821 573.708Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M348.14 575.949L351.807 558.368L356.213 576.367L348.14 575.949Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M351.808 558.368L331.821 573.708L348.14 575.949L351.808 558.368Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M351.808 558.368L366.33 554.896L356.213 576.367L351.808 558.368Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M356.214 576.367L366.256 576.219L366.33 554.896L356.214 576.367Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M366.256 576.219L361.038 592.224L356.214 576.367L366.256 576.219Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M366.256 576.219L365.961 590.722L361.038 592.224L366.256 576.219Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M366.256 576.219L372.311 559.55L366.33 554.896L366.256 576.219Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M351.808 558.368L343.119 550.612L331.821 573.708L351.808 558.368Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M331.822 573.708L321.533 586.856L326.948 593.283L331.822 573.708Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M321.533 586.856L319.662 596.853L326.948 593.283L321.533 586.856Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M335.095 552.852L343.119 550.612L331.821 573.708L335.095 552.852Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M343.119 550.612L353.481 534.016L351.808 558.368L343.119 550.612Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M353.481 534.016L361.85 541.083L351.808 558.368L353.481 534.016Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M361.85 541.083L366.33 554.896L351.808 558.368L361.85 541.083Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M343.119 550.612L352.325 523.773L353.481 534.016L343.119 550.612Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M335.095 552.852L342.848 531.997L343.119 550.612L335.095 552.852Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M352.325 523.773L342.849 531.997L343.119 550.612L352.325 523.773Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M353.481 534.016L366.404 524.635L361.85 541.083L353.481 534.016Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M366.403 524.635L370.243 537.857L361.85 541.083L366.403 524.635Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M370.243 537.857L366.329 554.896L361.85 541.083L370.243 537.857Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M372.311 559.55L370.244 537.857L366.33 554.896L372.311 559.55Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M352.324 523.773L357.148 512.594L353.481 534.016L352.324 523.773Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M357.149 512.594L366.404 524.635L353.481 534.016L357.149 512.594Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M373.443 491.69L382.28 482.481L379.006 508.975L373.443 491.69Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M382.279 482.481L388.999 486.051L379.006 508.975L382.279 482.481Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M382.279 482.481L391.952 462.586L388.999 486.051L382.279 482.481Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M402.069 463.472L391.953 462.586L388.999 486.051L402.069 463.472Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M382.28 482.481L379.671 467.609L373.443 491.69L382.28 482.481Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M379.671 467.609L366.945 477.458L373.443 491.69L379.671 467.609Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M379.67 467.609L391.952 462.586L382.279 482.481L379.67 467.609Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M357.148 512.595L371.104 498.954L366.403 524.635L357.148 512.595Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M371.104 498.954L379.005 508.975L366.403 524.635L371.104 498.954Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M379.005 508.975L376.618 533.844L366.403 524.635L379.005 508.975Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M376.618 533.844L370.243 537.857L366.403 524.635L376.618 533.844Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M363.056 463.472L366.969 477.384L372.433 452.86L363.056 463.472Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M363.056 463.472L359.118 481.422L366.97 477.384L363.056 463.472Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M379.005 508.975L371.104 498.954L373.443 491.69L379.005 508.975Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M373.443 491.69L363.819 490.114L371.105 498.954L373.443 491.69Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M363.819 490.114L366.97 477.384L373.443 491.69L363.819 490.114Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M359.118 481.422L363.819 490.114L366.97 477.384L359.118 481.422Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M363.819 490.114L357.148 512.594L371.104 498.954L363.819 490.114Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M355.573 493.167L357.148 512.595L352.324 523.773L355.573 493.167Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M346.615 520.966L352.325 523.773L342.849 531.997L346.615 520.966Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M349.248 513.506L352.325 523.773L346.614 520.966L349.248 513.506Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M349.248 513.506L352.325 523.773L355.574 493.167L349.248 513.506Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M355.573 493.167L363.819 490.114L357.149 512.594L355.573 493.167Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M359.118 481.422L355.573 493.167L363.819 490.114L359.118 481.422Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M372.434 452.86L379.67 467.609L366.97 477.384L372.434 452.86Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M379.006 508.975L386.661 511.093L388.999 486.051L379.006 508.975Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M388.998 486.051L396.481 506.857L386.66 511.093L388.998 486.051Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M402.069 463.472L399.534 483.072L388.999 486.051L402.069 463.472Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M399.534 483.072L396.482 506.858L388.999 486.051L399.534 483.072Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M386.661 511.093L376.618 533.844L379.006 508.975L386.661 511.093Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M376.618 533.844L372.311 559.55L370.243 537.857L376.618 533.844Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M376.618 533.844L382.205 541.157L372.311 559.55L376.618 533.844Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M376.618 533.844L386.661 511.093L382.205 541.157L376.618 533.844Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M396.481 506.857L382.205 541.157L386.66 511.093L396.481 506.857Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M372.311 559.55L375.387 575.826L366.256 576.22L372.311 559.55Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M372.311 559.55L375.387 575.825L382.205 541.157L372.311 559.55Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M366.255 576.219L375.387 575.825L365.96 590.722L366.255 576.219Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M365.961 590.722L368.644 602.344L361.038 592.224L365.961 590.722Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M375.388 575.825L387.03 552.853L384.889 579.888L375.388 575.825Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M375.388 575.825L382.156 599.931L384.889 579.888L375.388 575.825Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M375.387 575.825L382.156 599.931L365.96 590.722L375.387 575.825Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M378.587 615.049L382.156 599.931L365.96 590.722L378.587 615.049Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M363.573 608.968L378.588 615.049L368.644 602.344L363.573 608.968Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M382.206 541.157L387.03 552.853L375.388 575.825L382.206 541.157Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M382.205 541.157L393.355 534.016L387.029 552.853L382.205 541.157Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M396.481 506.857L393.355 534.016L382.205 541.157L396.481 506.857Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M379.67 467.609L386.931 452.589L391.952 462.586L379.67 467.609Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M400.124 456.282L391.952 462.586L402.068 463.472L400.124 456.282Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M363.056 463.472L367.905 452.589L372.433 452.86L363.056 463.472Z" stroke="white" stroke-width="0.1" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M358.281 191.49C364.41 226.011 371.868 260.237 379.055 294.635C382.698 311.821 386.045 329.082 389.442 346.416C392.789 363.775 395.866 381.208 398.229 399.035C398.894 403.467 399.337 407.973 399.853 412.479C400.42 416.96 400.74 421.54 401.084 426.12C401.527 430.675 401.626 435.378 401.773 440.081C402.019 444.784 401.798 449.462 401.773 454.165C401.256 472.829 399.312 490.877 396.949 508.778C394.512 526.654 391.854 544.432 388.679 562.086L383.855 588.58C382.156 597.469 380.458 606.087 378.563 615.296L317.964 595.868C321.311 588.383 324.634 580.233 327.834 572.304C331.009 564.302 334.184 556.3 337.113 548.224C343.021 532.071 348.756 515.845 353.678 499.495C358.576 483.17 363.031 466.723 366.084 450.57C366.723 446.557 367.634 442.518 367.979 438.48C368.446 434.442 368.963 430.404 369.16 426.194C369.456 422.032 369.751 417.847 369.849 413.587C369.972 409.327 370.169 405.092 370.145 400.808C370.366 383.67 369.825 366.287 369.013 348.879C368.274 331.446 366.994 314.013 365.714 296.531C363.204 261.591 360.078 226.578 357.813 191.589L358.281 191.49Z" fill="url(#paint4_linear_772_1066)"/>
<path d="M358.281 191.49C364.41 226.011 371.868 260.237 379.055 294.635C382.698 311.821 386.045 329.082 389.442 346.416C392.789 363.775 395.866 381.208 398.229 399.035C398.894 403.467 399.337 407.973 399.853 412.479C400.42 416.96 400.74 421.54 401.084 426.12C401.527 430.675 401.626 435.378 401.773 440.081C402.019 444.784 401.798 449.462 401.773 454.165C401.256 472.829 399.312 490.877 396.949 508.778C394.512 526.654 391.854 544.432 388.679 562.086L383.855 588.58C382.156 597.469 380.458 606.087 378.563 615.296L317.964 595.868C321.311 588.383 324.634 580.233 327.834 572.304C331.009 564.302 334.184 556.3 337.113 548.224C343.021 532.071 348.756 515.845 353.678 499.495C358.576 483.17 363.031 466.723 366.084 450.57C366.723 446.557 367.634 442.518 367.979 438.48C368.446 434.442 368.963 430.404 369.16 426.194C369.456 422.032 369.751 417.847 369.849 413.587C369.972 409.327 370.169 405.092 370.145 400.808C370.366 383.67 369.825 366.287 369.013 348.879C368.274 331.446 366.994 314.013 365.714 296.531C363.204 261.591 360.078 226.578 357.813 191.589L358.281 191.49Z" stroke="#65FFFF" stroke-width="0.4727" stroke-miterlimit="10"/>
<defs>
<linearGradient id="paint0_linear_772_1066" x1="227.886" y1="18.2177" x2="166.635" y2="117.459" gradientUnits="userSpaceOnUse">
<stop stop-color="#65FFFF"/>
<stop offset="0.146" stop-color="#65FFFF" stop-opacity="0.854"/>
<stop offset="1" stop-color="#65FFFF" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_772_1066" x1="187.263" y1="84.0835" x2="117.762" y2="196.692" gradientUnits="userSpaceOnUse">
<stop stop-color="#65FFFF"/>
<stop offset="0.1413" stop-color="#65FFFF" stop-opacity="0.8587"/>
<stop offset="1" stop-color="#65FFFF" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_772_1066" x1="457.561" y1="61.6251" x2="503.847" y2="136.619" gradientUnits="userSpaceOnUse">
<stop stop-color="#65FFFF"/>
<stop offset="0.146" stop-color="#65FFFF" stop-opacity="0.854"/>
<stop offset="1" stop-color="#65FFFF" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint3_linear_772_1066" x1="488.258" y1="111.398" x2="540.778" y2="196.494" gradientUnits="userSpaceOnUse">
<stop stop-color="#65FFFF"/>
<stop offset="0.1413" stop-color="#65FFFF" stop-opacity="0.8587"/>
<stop offset="1" stop-color="#65FFFF" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint4_linear_772_1066" x1="317.966" y1="403.385" x2="401.892" y2="403.385" gradientUnits="userSpaceOnUse">
<stop offset="0.2682" stop-color="#65FFFF" stop-opacity="0"/>
<stop offset="0.8988" stop-color="#65FFFF" stop-opacity="0.8617"/>
<stop offset="1" stop-color="#65FFFF"/>
</linearGradient>
</defs>
</svg>

                  </div>
                  <div className={`${styles.Hand} `}>                 
                  <svg  width="825" height="880" viewBox="0 0 825 880" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className={`${styles.PathLine} `} d="M218.841 401.68L221.056 391.142L227.923 421.452L218.841 401.68Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M221.057 391.142L251.307 417.34L227.924 421.452L221.057 391.142Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M227.924 421.452L252.661 429.947L251.307 417.34L227.924 421.452Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M252.661 429.947L245.375 438.073L227.924 421.452L252.661 429.947Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M252.661 429.947L253.325 449.005L245.375 438.073L252.661 429.947Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M252.66 429.947L263.318 434.97L251.307 417.34L252.66 429.947Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M195.926 352.238L226.225 367.282L221.056 391.142L195.926 352.238Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M226.226 367.282L243.037 392.545L221.057 391.142L226.226 367.282Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M243.037 392.545L251.307 417.34L221.057 391.142L243.037 392.545Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M195.926 352.238L211.875 339.508L226.225 367.283L195.926 352.238Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M211.876 339.508L188.542 324.267L195.926 352.238L211.876 339.508Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M226.226 367.282L253.547 383.509L243.037 392.545L226.226 367.282Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M253.546 383.509L260.561 406.309L243.036 392.545L253.546 383.509Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M260.561 406.309L251.306 417.34L243.036 392.545L260.561 406.309Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M263.318 434.97L260.561 406.31L251.307 417.341L263.318 434.97Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M211.875 339.508L235.283 350.835L226.225 367.283L211.875 339.508Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M235.283 350.835L253.547 383.509L226.226 367.283L235.283 350.835Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M235.283 350.835L261.669 365.805L253.547 383.509L235.283 350.835Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M261.668 365.805L280.079 392.718L253.546 383.509L261.668 365.805Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M280.079 392.718L274.024 415.05L253.546 383.509L280.079 392.718Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M274.024 415.05L260.561 406.309L253.546 383.509L274.024 415.05Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M224.379 312.399L189.994 296.862L194.154 275.391L224.379 312.399Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M189.994 296.862L173.65 273.987L194.154 275.391L189.994 296.862Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M247.319 341.379L235.283 350.835L261.669 365.805L253.153 354.282L247.319 341.379Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M224.379 312.399L235.283 350.835L211.875 339.508L224.379 312.399Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M189.994 296.862L202.621 321.558L179.263 313.507L189.994 296.862Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M202.621 321.558L188.542 324.267L179.263 313.507L202.621 321.558Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M202.621 321.558L211.876 339.508L188.542 324.267L202.621 321.558Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M189.994 296.862L209.931 321.041L224.379 312.399L189.994 296.862Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M209.931 321.041L202.621 321.558L189.994 296.862L209.931 321.041Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M209.931 321.041L211.876 339.508L202.621 321.558L209.931 321.041Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M209.931 321.041L211.875 339.508L224.379 312.399L209.931 321.041Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M224.379 312.399L247.319 341.38L235.283 350.835L224.379 312.399Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M225.363 303.707L224.379 312.399L247.319 341.379L225.363 303.707Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M225.363 303.707L194.153 275.391L224.379 312.399L225.363 303.707Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M206.288 282.655L194.153 275.391L225.363 303.707L206.288 282.655Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M294.134 412.514L274.024 415.051L280.079 392.718L294.134 412.514Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M274.025 415.051L263.318 434.97L260.562 406.31L274.025 415.051Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M274.025 415.051L285.028 434.823L263.318 434.97L274.025 415.051Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M274.024 415.051L294.134 412.514L285.027 434.823L274.024 415.051Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M309.272 434.355L285.027 434.823L294.134 412.514L309.272 434.355Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M263.318 434.97L268.536 459.593L252.66 429.947L263.318 434.97Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M263.318 434.97L268.536 459.593L285.028 434.823L263.318 434.97Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M252.66 429.947L268.536 459.593L253.325 449.005L252.66 429.947Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M283.255 496.453L287.858 483.846L308.681 512.064L283.255 496.453Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M308.681 512.064L324.827 511.965L329.258 532.624L308.681 512.064Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M324.827 511.965L341.589 526.099L329.258 532.624L324.827 511.965Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M341.589 526.099L361.6 513.886L374.3 548.062L341.589 526.099Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M324.827 511.965L338.242 498.62L341.589 526.099L324.827 511.965Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M361.601 513.886L338.242 498.62L341.59 526.099L361.601 513.886Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M324.827 511.965L312.545 488.303L308.681 512.064L324.827 511.965Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M312.545 488.303L287.857 483.846L308.681 512.064L312.545 488.303Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M312.545 488.303L338.242 498.62L324.827 511.965L312.545 488.303Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M361.601 513.886L385.008 525.188L374.301 548.062L361.601 513.886Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M453.212 502.929L469.875 515.437L471.155 509.7L453.212 502.929Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M469.876 515.437L494.563 519.894L471.156 509.7L469.876 515.437Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M469.876 515.437L444.154 505.12L453.212 502.929L469.876 515.437Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M440.143 534.421L434.728 521.42L420.132 535.48L440.143 534.421Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M434.728 521.42L407.751 506.056L420.132 535.48L434.728 521.42Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M395.419 489.657L407.775 506.031L418.703 494.114L395.419 489.657Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M395.419 489.657L375.187 482.541L407.775 506.031L395.419 489.657Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M374.079 486.776L339.719 471.239L338.267 455.259L374.079 486.776Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M339.718 471.239L322.932 445.952L338.266 455.259L339.718 471.239Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M339.719 471.239L312.397 455.013L322.932 445.952L339.719 471.239Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M330.661 487.687L312.397 455.013L339.719 471.24L330.661 487.687Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M312.397 455.013L294.208 457.968L330.661 487.687L312.397 455.013Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M330.661 487.687L338.242 498.62L312.545 488.303L330.661 487.687Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M294.208 457.968L312.545 488.303L330.661 487.687L294.208 457.968Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M294.208 457.968L287.857 483.846L312.545 488.303L294.208 457.968Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M420.132 535.48L400.392 513.812L413.535 542.103L420.132 535.48Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M400.392 513.812L407.776 506.031L420.132 535.48L400.392 513.812Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M375.187 482.541L400.391 513.812L407.775 506.031L375.187 482.541Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M400.391 513.812L385.008 525.188L413.535 542.103L400.391 513.812Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M374.08 486.776L385.008 525.188L361.601 513.886L374.08 486.776Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M339.719 471.24L352.346 495.936L330.661 487.687L339.719 471.24Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M352.346 495.936L338.242 498.62L330.661 487.687L352.346 495.936Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M352.346 495.936L361.601 513.886L338.242 498.62L352.346 495.936Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M339.719 471.24L359.656 495.394L374.079 486.776L339.719 471.24Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M359.656 495.394L352.346 495.936L339.719 471.24L359.656 495.394Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M359.656 495.394L361.6 513.886L352.346 495.936L359.656 495.394Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M359.655 495.394L361.6 513.886L374.079 486.776L359.655 495.394Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M374.079 486.776L400.391 513.812L385.008 525.188L374.079 486.776Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M375.187 482.541L374.079 486.776L400.391 513.812L375.187 482.541Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M375.187 482.541L338.267 455.259L374.079 486.776L375.187 482.541Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M418.704 494.114L434.727 521.42L407.775 506.031L418.704 494.114Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M444.155 505.12L434.728 521.42L418.704 494.114L444.155 505.12Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M469.876 515.437L457.741 527.428L444.154 505.12L469.876 515.437Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M434.728 521.42L457.741 527.428L444.155 505.12L434.728 521.42Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M268.536 459.593L294.208 457.968L287.858 483.846L268.536 459.593Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M268.536 459.593L283.255 496.453L287.858 483.846L268.536 459.593Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M268.536 459.593L283.255 496.453L253.325 449.005L268.536 459.593Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M285.027 434.823L294.208 457.968L268.536 459.593L285.027 434.823Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M285.027 434.823L312.398 455.013L294.208 457.968L285.027 434.823Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M309.272 434.355L312.398 455.013L285.027 434.823L309.272 434.355Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M309.271 434.355L322.932 445.952L312.397 455.013L309.271 434.355Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M309.271 434.355L338.266 455.259L322.932 445.952L309.271 434.355Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M185.022 332.589C198.215 350.022 226.963 421.182 226.963 421.182C226.963 421.182 226.963 421.182 226.939 421.182C260.019 445.189 281.458 497.216 290.59 508.814C303.069 524.621 354.191 544.172 373.316 548.308C390.865 552.125 455.624 528.29 488.828 520.583C454.369 492.907 386.238 494.311 370.51 479.193C354.117 463.434 310.33 439.796 304.176 428.298C298.023 416.799 255.835 357.532 253.94 355.636C252.045 353.74 234.101 308.681 210.472 286.299C186.843 263.917 168.506 276.154 168.506 276.154C174.536 297.822 181.206 323.307 185.022 332.589Z" fill="url(#paint0_linear_775_1067)"/>
<path className={`${styles.PathLine} `} d="M185.022 332.589C198.215 350.022 226.963 421.182 226.963 421.182C226.963 421.182 226.963 421.182 226.939 421.182C260.019 445.189 281.458 497.216 290.59 508.814C303.069 524.621 354.191 544.172 373.316 548.308C390.865 552.125 455.624 528.29 488.828 520.583C454.369 492.907 386.238 494.311 370.51 479.193C354.117 463.434 310.33 439.796 304.176 428.298C298.023 416.799 255.835 357.532 253.94 355.636C252.045 353.74 234.101 308.681 210.472 286.299C186.843 263.917 168.506 276.154 168.506 276.154C174.536 297.822 181.206 323.307 185.022 332.589Z" stroke="#65FFFF" stroke-width="0.4727" stroke-miterlimit="10"/>
<path className={`${styles.PathLine} `} d="M119.13 285.092L139.338 300.974L127.375 306.858L119.13 285.092Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M139.338 300.974L140.692 318.899L127.376 306.858L139.338 300.974Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M140.692 318.899L134.145 321.706L127.376 306.858L140.692 318.899Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M141.652 335.913L140.692 318.899L134.145 321.706L141.652 335.913Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M110.318 263.793L129.394 274.824L119.13 285.092L110.318 263.793Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M129.394 274.824L139.338 300.974L119.13 285.092L129.394 274.824Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M161.244 284.6L173.502 293.193L163.829 308.976L161.244 284.6Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M173.501 293.193L178.719 312.965L163.828 308.976L173.501 293.193Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M173.502 293.193L169.17 277.73L161.244 284.6L173.502 293.193Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M169.17 277.73L156.248 261.307L161.245 284.6L169.17 277.73Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M129.395 274.824L155.239 286.865L139.338 300.974L129.395 274.824Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M155.238 286.865L163.828 308.976L139.338 300.974L155.238 286.865Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M163.828 308.976L151.743 326.31L139.338 300.974L163.828 308.976Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M151.743 326.31L140.692 318.899L139.338 300.974L151.743 326.31Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M155.879 239.589L131.093 238.013L156.297 261.257L155.879 239.589Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M141.307 221.861L128.36 216.099L155.878 239.589L141.307 221.861Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M127.991 244.686L100.571 230.06L114.183 218.02L127.991 244.686Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M100.571 230.06L105.371 223.683L114.183 218.02L100.571 230.06Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M163.828 308.976L155.238 286.865L161.244 284.6L163.828 308.976Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M161.244 284.6L147.189 266.896L155.238 286.865L161.244 284.6Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M147.189 266.896L156.297 261.257L161.244 284.6L147.189 266.896Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M131.093 238.013L147.19 266.896L156.297 261.257L131.093 238.013Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M147.19 266.896L129.395 274.824L155.239 286.865L147.19 266.896Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M127.991 244.686L129.394 274.824L110.318 263.793L127.991 244.686Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M100.572 230.06L104.51 250.596L98.1348 237.989L100.572 230.06Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M100.571 230.06L111.795 250.571L127.991 244.686L100.571 230.06Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M111.795 250.571L104.509 250.596L100.571 230.06L111.795 250.571Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M111.795 250.571L110.319 263.793L104.51 250.596L111.795 250.571Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M111.795 250.571L110.318 263.793L127.991 244.686L111.795 250.571Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M127.991 244.686L147.19 266.896L129.394 274.824L127.991 244.686Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M131.093 238.013L127.991 244.686L147.19 266.896L131.093 238.013Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M131.092 238.014L114.183 218.02L127.991 244.686L131.092 238.014Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M128.36 216.099L131.092 238.014L155.878 239.589L128.36 216.099Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M128.36 216.099L114.183 218.02L131.092 238.014L128.36 216.099Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M163.828 308.976L174.732 323.824L178.719 312.965L163.828 308.976Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M178.72 312.965L188.344 337.44L174.732 323.823L178.72 312.965Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M174.732 323.824L151.743 326.31L163.828 308.976L174.732 323.824Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M151.743 326.31L141.651 335.913L140.691 318.899L151.743 326.31Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M151.743 326.31L157.724 342.118L141.651 335.913L151.743 326.31Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M151.743 326.31L174.732 323.823L157.724 342.118L151.743 326.31Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M188.344 337.44L157.725 342.118L174.733 323.823L188.344 337.44Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M190.953 415.395L213.499 407.023L220.809 429.159L190.953 415.395Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M177.981 403.626L194.35 394.047L190.953 415.395L177.981 403.626Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M213.499 407.024L194.35 394.047L190.953 415.395L213.499 407.024Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M171.705 384.765L194.35 394.047L177.982 403.626L171.705 384.765Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M213.499 407.023L226.052 418.941L220.809 429.159L213.499 407.023Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M202.422 373.019L179.605 359.108L192.085 352.681L202.422 373.019Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M189.574 385.232L179.605 359.108L202.422 373.019L189.574 385.232Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M179.606 359.108L161.097 360.437L189.575 385.232L179.606 359.108Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M189.575 385.232L194.35 394.047L171.705 384.765L189.575 385.232Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M161.097 360.437L171.705 384.764L189.575 385.232L161.097 360.437Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M161.097 360.437L161.392 374.472L171.705 384.764L161.097 360.437Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M202.423 373.02L208.797 392.718L189.574 385.232L202.423 373.02Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M208.797 392.718L194.349 394.047L189.574 385.232L208.797 392.718Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M208.798 392.718L213.499 407.024L194.35 394.047L208.798 392.718Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M215.05 393.284L208.798 392.718L202.423 373.02L215.05 393.284Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M215.05 393.284L213.499 407.024L208.798 392.718L215.05 393.284Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M157.725 342.118L179.606 359.108L161.097 360.437L157.725 342.118Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M188.344 337.44L179.606 359.108L157.725 342.118L188.344 337.44Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M188.343 337.44L192.085 352.681L179.605 359.108L188.343 337.44Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M133.48 321.337C153.811 354.134 172.246 398.578 178.301 413.77C185.685 409.609 194.497 408.279 202.94 410.027C211.53 411.825 219.529 415.789 226.938 421.181H226.962C226.962 421.181 198.214 350.022 185.021 332.589C178.547 316.929 164.075 255.102 158.167 243.554C152.285 232.006 139.904 212.234 118.146 216.69C105.051 219.374 99.1684 231.292 97.667 240.156C113.814 266.059 124.52 300.063 133.48 321.337Z" fill="url(#paint1_linear_775_1067)"/>
<path className={`${styles.PathLine} `} d="M133.48 321.337C153.811 354.134 172.246 398.578 178.301 413.77C185.685 409.609 194.497 408.279 202.94 410.027C211.53 411.825 219.529 415.789 226.938 421.181H226.962C226.962 421.181 198.214 350.022 185.021 332.589C178.547 316.929 164.075 255.102 158.167 243.554C152.285 232.006 139.904 212.234 118.146 216.69C105.051 219.374 99.1684 231.292 97.667 240.156C113.814 266.059 124.52 300.063 133.48 321.337Z" stroke="#65FFFF" stroke-width="0.4727" stroke-miterlimit="10"/>
<path className={`${styles.PathLine} `} d="M118.146 397.962L123.733 392.348L106.454 381.391L118.146 397.962Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M70.3711 312.226L88.2652 330.102L91.3665 349.751L70.3711 312.226Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M88.2646 330.102L102.565 355.833L91.366 349.751L88.2646 330.102Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M102.565 355.833L106.454 381.391L91.3662 349.751L102.565 355.833Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M70.3711 312.226L77.6075 301.688L88.2652 330.102L70.3711 312.226Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M77.6078 301.688L52.625 286.668L70.3714 312.226L77.6078 301.688Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M88.2646 330.102L117.899 345.984L102.565 355.833L88.2646 330.102Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M117.9 345.984L120.73 369.523L102.565 355.833L117.9 345.984Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M120.73 369.523L106.454 381.391L102.565 355.833L120.73 369.523Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M123.733 392.348L120.73 369.523L106.454 381.391L123.733 392.348Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M77.6074 301.688L103.698 312.596L88.2651 330.102L77.6074 301.688Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M103.697 312.596L117.899 345.984L88.2646 330.102L103.697 312.596Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M103.698 312.596L123.389 332.294L117.9 345.984L103.698 312.596Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M123.389 332.294L142.76 351.672L117.9 345.984L123.389 332.294Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M142.76 351.672L135.155 378.092L117.9 345.984L142.76 351.672Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M135.155 378.092L120.731 369.523L117.9 345.984L135.155 378.092Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M100.006 272.929L61.4609 258.032L73.9647 232.941L100.006 272.929Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M61.4607 258.032L47.1602 232.326L73.9644 232.941L61.4607 258.032Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M47.1602 232.326L62.4452 224.397L73.9644 232.941L47.1602 232.326Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M61.4611 258.032L38.915 242.84L47.1606 232.326L61.4611 258.032Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M38.915 242.84L41.0072 228.706L47.1606 232.326L38.915 242.84Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M41.0068 228.706L62.4453 224.397L47.1602 232.326L41.0068 228.706Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M46.0284 275.563L38.915 242.84L61.4611 258.032L46.0284 275.563Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M142.76 351.672L123.389 332.294L134.662 323.725L142.76 351.672Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M134.662 323.725L112.288 303.978L123.389 332.294L134.662 323.725Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M112.288 303.978L124.201 297.502L134.662 323.725L112.288 303.978Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M103.501 263.793L112.288 303.978L124.201 297.502L103.501 263.793Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M112.288 303.978L103.698 312.596L123.389 332.294L112.288 303.978Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M100.006 272.928L103.698 312.596L77.6074 301.688L100.006 272.928Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M61.4611 258.032L70.765 283.319L46.0283 275.563L61.4611 258.032Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M70.765 283.319L52.6248 286.668L46.0283 275.563L70.765 283.319Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M70.7653 283.319L77.6078 301.688L52.625 286.668L70.7653 283.319Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M61.4609 258.032L79.9458 282.482L100.006 272.928L61.4609 258.032Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M79.9458 282.482L70.7649 283.319L61.4609 258.032L79.9458 282.482Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M79.9455 282.482L77.6072 301.688L70.7646 283.319L79.9455 282.482Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M79.9457 282.482L77.6074 301.688L100.006 272.928L79.9457 282.482Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M100.006 272.928L112.288 303.978L103.698 312.596L100.006 272.928Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M103.501 263.793L100.006 272.928L112.288 303.978L103.501 263.793Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M103.501 263.794L73.9648 232.941L100.006 272.929L103.501 263.794Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M93.4835 233.852L73.9648 232.941L103.501 263.794L93.4835 233.852Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M84.7948 222.674L93.4834 233.852L71.9219 224.791L84.7948 222.674Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M71.9219 224.791L73.9648 232.941L93.4834 233.852L71.9219 224.791Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M71.9216 224.791L62.4453 224.397L73.9645 232.941L71.9216 224.791Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M75.8354 215.681L71.9219 224.791L84.7948 222.674L75.8354 215.681Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M68.4512 212.037L71.9217 224.791L75.8353 215.681L68.4512 212.037Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M71.9212 224.791L57.5469 209.205L68.4261 212.037L71.9212 224.791Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M57.5469 209.205L62.445 224.397L71.9212 224.791L57.5469 209.205Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M62.4452 224.397L40.5391 212.603L41.0067 228.706L62.4452 224.397Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M62.4452 224.397L57.5471 209.205L40.5391 212.603L62.4452 224.397Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M41.0069 228.706L26.0664 238.605L38.9147 242.84L41.0069 228.706Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M41.0074 228.706L29.0205 222.674L40.5397 212.603L41.0074 228.706Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M29.02 222.674L26.0664 238.604L41.0069 228.706L29.02 222.674Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M160.063 373.143L135.154 378.092L142.76 351.672L160.063 373.143Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M135.154 378.092L123.733 392.348L120.73 369.523L135.154 378.092Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M135.154 378.092L143.72 398.307L123.733 392.348L135.154 378.092Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M135.154 378.092L160.063 373.143L143.72 398.307L135.154 378.092Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M123.734 392.348L129.936 416.257L118.146 397.962L123.734 392.348Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M123.733 392.348L129.936 416.257L143.72 398.307L123.733 392.348Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M163.509 467.398L173.157 477.272L180.64 497.142L163.509 467.398Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M173.157 477.272L190.288 491.381L180.64 497.142L173.157 477.272Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M173.157 477.272L193.217 462.818L190.288 491.381L173.157 477.272Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M173.157 477.272L164.05 453.043L163.509 467.398L173.157 477.272Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M164.051 453.043L148.421 442.283L163.509 467.398L164.051 453.043Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M164.051 453.043L193.218 462.818L173.158 477.272L164.051 453.043Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M172.395 418.301L149.11 422.117L186.597 451.714L172.395 418.301Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M186.597 451.714L193.218 462.818L164.051 453.043L186.597 451.714Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M149.11 422.117L164.051 453.043L186.597 451.714L149.11 422.117Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M149.11 422.117L148.421 442.283L164.051 453.043L149.11 422.117Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M129.936 416.257L149.11 422.117L148.42 442.283L129.936 416.257Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M143.719 398.307L149.11 422.117L129.936 416.257L143.719 398.307Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M143.72 398.307L172.395 418.301L149.11 422.117L143.72 398.307Z" stroke="#65FFFF" stroke-width="0.1569" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M39.6777 272.362C45.6588 274.652 51.886 278.542 58.0148 284.55C80.9793 306.957 88.5357 345.344 94.5661 357.507C102.689 370.73 126.588 410.889 145.393 438.861C164.198 466.832 186.08 506.179 186.08 506.179C185.513 499.088 183.421 492.218 179.828 486.087C163.361 458.066 154.18 433.764 172.739 417.611C174.462 416.109 176.357 414.853 178.302 413.745C172.222 398.553 153.811 354.109 133.456 321.312C123.192 296.985 110.688 256.062 90.4064 229.593C71.0354 204.33 48.6124 207.088 35.0749 215.878C28.06 220.433 17.5746 232.375 39.6284 272.288L39.6777 272.362Z" fill="url(#paint2_linear_775_1067)"/>
<path className={`${styles.PathLine} `} d="M39.6777 272.362C45.6588 274.652 51.886 278.542 58.0148 284.55C80.9793 306.957 88.5357 345.344 94.5661 357.507C102.689 370.73 126.588 410.889 145.393 438.861C164.198 466.832 186.08 506.179 186.08 506.179C185.513 499.088 183.421 492.218 179.828 486.087C163.361 458.066 154.18 433.764 172.739 417.611C174.462 416.109 176.357 414.853 178.302 413.745C172.222 398.553 153.811 354.109 133.456 321.312C123.192 296.985 110.688 256.062 90.4064 229.593C71.0354 204.33 48.6124 207.088 35.0749 215.878C28.06 220.433 17.5746 232.375 39.6284 272.288L39.6777 272.362Z" stroke="#65FFFF" stroke-width="0.4727" stroke-miterlimit="10"/>
<path className={`${styles.PathLine} `} d="M147.166 607.748L161.072 590.807L131.068 579.481L147.166 607.748Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M89.5449 495.099L118.589 535.874L97.3228 539.395L89.5449 495.099Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M118.589 535.874L131.069 579.481L97.3232 539.395L118.589 535.874Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M89.5449 495.099L140.446 514.009L118.589 535.874L89.5449 495.099Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M140.447 514.009L150.76 554.39L118.59 535.874L140.447 514.009Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M150.76 554.39L131.069 579.481L118.59 535.874L150.76 554.39Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M161.072 590.807L150.759 554.39L131.068 579.481L161.072 590.807Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M65.6455 448.488L109.655 459.741L89.5454 495.099L65.6455 448.488Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M109.654 459.741L140.446 514.009L89.5449 495.099L109.654 459.741Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M109.654 459.741L154.55 480.768L140.446 514.009L109.654 459.741Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M154.55 480.768L192.135 518.392L140.446 514.009L154.55 480.768Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M192.135 518.392L175.742 565.101L140.446 514.009L192.135 518.392Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M175.742 565.101L150.759 554.39L140.446 514.009L175.742 565.101Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M94.0006 391.339L37.4385 374.916L42.8289 329.093L94.0006 391.339Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M37.4382 374.916L13.9814 332.983L42.8286 329.093L37.4382 374.916Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M13.9811 332.983L1.25586 294.793L42.8283 329.093L13.9811 332.983Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M192.135 518.392L154.55 480.768L166.906 473.652L192.135 518.392Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M166.906 473.652L132.742 436.645L154.55 480.768L166.906 473.652Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M132.742 436.645L139.462 429.923L166.906 473.652L132.742 436.645Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M97.2246 374.3L132.742 436.645L139.462 429.923L97.2246 374.3Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M132.742 436.645L109.654 459.741L154.55 480.768L132.742 436.645Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M94.0004 391.339L109.655 459.741L65.6455 448.488L94.0004 391.339Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M37.4385 374.916L64.5627 414.139L94.0006 391.339L37.4385 374.916Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M64.5627 414.139L50.2376 418.35L37.4385 374.916L64.5627 414.139Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M64.5624 414.139L65.6454 448.488L50.2373 418.35L64.5624 414.139Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M64.5625 414.139L65.6455 448.488L94.0004 391.339L64.5625 414.139Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M94 391.339L132.742 436.645L109.654 459.741L94 391.339Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M97.2244 374.3L94 391.339L132.742 436.645L97.2244 374.3Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M97.2243 374.3L42.8281 329.093L93.9999 391.339L97.2243 374.3Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M73.9398 324.833L42.8281 329.093L97.2243 374.3L73.9398 324.833Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M61.3134 287.973L73.9402 324.833L31.2109 276.991L61.3134 287.973Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M31.2109 276.991L42.8286 329.093L73.9402 324.833L31.2109 276.991Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M31.2107 276.991L1.25586 294.793L42.8283 329.093L31.2107 276.991Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M31.2109 276.991L8.93555 274.948L34.1153 270.639L31.2109 276.991Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M8.93532 274.948L1.25586 294.794L31.2107 276.991L8.93532 274.948Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M1.25614 294.794L8.9356 274.948L0.739258 286.594L1.25614 294.794Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M175.743 565.101L161.073 590.807L150.76 554.39L175.743 565.101Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M175.742 565.101L194.301 597.948L161.072 590.807L175.742 565.101Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M161.073 590.807L170.721 645.371L147.166 607.748L161.073 590.807Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M161.072 590.807L170.721 645.371L194.301 597.948L161.072 590.807Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M227.85 733.545L260.537 727.463L261.595 744.059L227.85 733.545Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M260.536 727.463L291.131 747.038L261.595 744.059L260.536 727.463Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M291.131 747.038L331.99 714.93L353.699 746.742L291.131 747.038Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M260.536 727.463L288.694 696.118L291.131 747.038L260.536 727.463Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M331.99 714.93L288.694 696.118L291.131 747.038L331.99 714.93Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M260.537 727.463L240.058 687.771L227.85 733.545L260.537 727.463Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M240.058 687.771L194.104 688.608L227.85 733.545L240.058 687.771Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M240.058 687.771L288.694 696.118L260.536 727.463L240.058 687.771Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M331.989 714.93L375.998 726.183L353.698 746.742L331.989 714.93Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M375.999 726.182L395.149 747.185L353.699 746.742L375.999 726.182Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M442.973 730.368L478.687 737.312L460.35 752.824L442.973 730.368Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M478.687 737.312L502.464 759.275L460.35 752.824L478.687 737.312Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M375.999 726.182L432.069 739.011L395.148 747.185L375.999 726.182Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M432.069 739.011L460.35 752.824L395.148 747.185L432.069 739.011Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M295.587 643.278L244.686 624.368L266.542 602.503L295.587 643.278Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M275.477 678.636L244.686 624.368L295.587 643.278L275.477 678.636Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M244.685 624.368L208.773 638.033L275.476 678.636L244.685 624.368Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M275.477 678.636L288.694 696.118L240.058 687.771L275.477 678.636Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M208.773 638.033L240.057 687.771L275.476 678.636L208.773 638.033Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M208.774 638.033L194.104 688.608L240.058 687.771L208.774 638.033Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M460.349 752.824L432.068 739.011L442.972 730.368L460.349 752.824Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M442.973 730.368L407.652 697.768L432.069 739.011L442.973 730.368Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M407.652 697.768L375.999 726.182L432.069 739.011L407.652 697.768Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M295.586 643.278L316.581 684.792L275.477 678.636L295.586 643.278Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M316.581 684.792L288.694 696.118L275.477 678.636L316.581 684.792Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M316.582 684.792L331.99 714.93L288.694 696.118L316.582 684.792Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M330.907 680.581L316.581 684.792L295.586 643.278L330.907 680.581Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M330.906 680.581L331.989 714.93L316.581 684.792L330.906 680.581Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M558.115 756.271L543.027 768.533L502.464 759.275L558.115 756.271Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M170.721 645.371L208.773 638.033L194.104 688.608L170.721 645.371Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M194.301 597.948L208.773 638.033L170.721 645.371L194.301 597.948Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M194.301 597.948L244.685 624.368L208.774 638.033L194.301 597.948Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M89.5457 495.099L63.5537 469.811L65.6459 448.488L89.5457 495.099Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M50.2373 418.35L63.5533 469.811L65.6454 448.488L50.2373 418.35Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M73.9404 324.833L96.2158 360.216L97.2249 374.3L73.9404 324.833Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M37.4382 374.916L28.2081 384.149L13.9814 332.983" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M50.2376 418.35L39.4814 413.007L63.5536 469.811L50.2376 418.35Z" stroke="#65FFFF" stroke-width="0.1626" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M602.666 783.701L584.156 770.602C511.349 725.961 400.908 727.241 364.184 696.364C322.612 661.425 210.792 602.798 195.211 574.728C188.147 563.525 188.319 534.446 186.104 506.204C186.104 506.204 164.223 466.832 145.418 438.885C126.613 410.914 102.713 370.754 94.5907 357.532C88.5604 345.344 81.004 306.982 58.0395 284.575C35.0749 262.168 11.0028 268.324 2.04342 282.901C-2.63317 290.509 5.02167 305.406 11.5689 325.473C17.5746 343.866 22.1774 367.48 24.7372 376.171C28.5277 388.384 41.8929 416.799 54.9874 448.439C67.0973 477.74 78.8626 510.537 84.4007 518.761C87.822 528.142 132.988 584.184 164.543 634.931C192.405 679.744 197.673 706.287 222.729 730.541C290.146 770.971 370.977 715.373 602.764 783.75C602.69 783.701 602.69 783.701 602.666 783.701Z" fill="url(#paint3_linear_775_1067)"/>
<path className={`${styles.PathLine} `} d="M602.666 783.701L584.156 770.602C511.349 725.961 400.908 727.241 364.184 696.364C322.612 661.425 210.792 602.798 195.211 574.728C188.147 563.525 188.319 534.446 186.104 506.204C186.104 506.204 164.223 466.832 145.418 438.885C126.613 410.914 102.713 370.754 94.5907 357.532C88.5604 345.344 81.004 306.982 58.0395 284.575C35.0749 262.168 11.0028 268.324 2.04342 282.901C-2.63317 290.509 5.02167 305.406 11.5689 325.473C17.5746 343.866 22.1774 367.48 24.7372 376.171C28.5277 388.384 41.8929 416.799 54.9874 448.439C67.0973 477.74 78.8626 510.537 84.4007 518.761C87.822 528.142 132.988 584.184 164.543 634.931C192.405 679.744 197.673 706.287 222.729 730.541C290.146 770.971 370.977 715.373 602.764 783.75C602.69 783.701 602.69 783.701 602.666 783.701Z" stroke="#65FFFF" stroke-width="0.4727" stroke-miterlimit="10"/>
<path className={`${styles.PathLine} `} d="M282.836 641.21L294.478 629.563L316.089 662.508L282.836 641.21Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M294.478 629.563L220.834 600.041L282.836 641.21L294.478 629.563Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M294.478 629.563L350.031 661.351L316.088 662.508L294.478 629.563Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M316.089 662.508L352.935 688.066L350.031 661.351L316.089 662.508Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M352.936 688.066L368.639 689.544L350.031 661.351L352.936 688.066Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M294.478 629.563L247.589 568.45L220.834 600.041L294.478 629.563Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M190.534 562.54L216.6 551.682L220.834 600.04L190.534 562.54Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M216.601 551.682L247.589 568.45L220.834 600.04L216.601 551.682Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M247.589 568.45L317.689 573.842L294.478 629.563L247.589 568.45Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M317.688 573.842L343.36 614.617L294.478 629.563L317.688 573.842Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M343.36 614.617L350.031 661.351L294.478 629.563L343.36 614.617Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M247.589 568.45L298.736 525.631L317.689 573.842L247.589 568.45Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M216.601 551.682L253.398 511.842L247.589 568.45L216.601 551.682Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M298.736 525.631L253.398 511.842L247.589 568.45L298.736 525.631Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M216.6 551.682L200.355 510.636L190.534 562.54L216.6 551.682Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M200.355 510.636L253.398 511.842L216.6 551.682L200.355 510.636Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M317.688 573.842L371.519 586.449L343.36 614.617L317.688 573.842Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M371.518 586.449L376.293 629.957L343.36 614.617L371.518 586.449Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M376.293 629.957L350.031 661.351L343.36 614.617L376.293 629.957Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M368.639 689.544L376.294 629.957L350.031 661.351L368.639 689.544Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M298.736 525.631L343.509 538.902L317.689 573.842L298.736 525.631Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M343.508 538.903L371.519 586.449L317.688 573.842L343.508 538.903Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M430.124 537.474L460.177 528.364L428.696 582.682L430.124 537.474Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M460.177 528.364L481.32 553.578L428.696 582.682L460.177 528.364Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M460.177 528.364L511.348 516.2L481.32 553.578L460.177 528.364Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M545.045 533.978L511.349 516.2L481.32 553.578L545.045 533.978Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M343.508 538.903L401.301 561.014L371.518 586.449L343.508 538.903Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M401.301 561.014L428.696 582.682L371.519 586.449L401.301 561.014Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M428.696 582.682L402.458 637.738L371.519 586.449L428.696 582.682Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M402.458 637.738L376.294 629.957L371.519 586.449L402.458 637.738Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M258.763 456.294L216.157 438.885L232.575 425.54L258.763 456.294Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M216.157 438.885L206.14 410.348L232.575 425.54L216.157 438.885Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M241.534 494.459L216.157 438.885L258.763 456.293L241.534 494.459Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M216.157 438.885L173.625 460.208L241.534 494.459L216.157 438.885Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M241.534 494.458L253.398 511.842L200.355 510.636L241.534 494.458Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M173.625 460.208L200.355 510.636L241.534 494.459L173.625 460.208Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M428.696 582.682L401.301 561.014L430.123 537.474L428.696 582.682Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M430.124 537.474L399.209 545.748L401.301 561.014L430.124 537.474Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M258.764 456.293L265.385 498.595L241.534 494.459L258.764 456.293Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M265.385 498.595L253.398 511.842L241.534 494.458L265.385 498.595Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M265.384 498.595L298.736 525.631L253.397 511.842L265.384 498.595Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M281.802 495L265.385 498.595L258.764 456.293L281.802 495Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M281.802 495L298.736 525.631L265.385 498.595L281.802 495Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M206.139 410.348L179.482 427.263L216.157 438.885L206.139 410.348Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M191.248 408.969L179.482 427.263L206.139 410.348L191.248 408.969Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M179.483 427.263L173.625 460.209L216.157 438.885L179.483 427.263Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M173.625 460.209L163.41 433.862L179.483 427.263L173.625 460.209Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M179.483 427.263L163.41 433.862L191.273 408.993L179.483 427.263Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M428.696 582.682L455.181 609.2L481.32 553.578L428.696 582.682Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M481.32 553.578L494.119 626.091L455.181 609.2L481.32 553.578Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M545.045 533.978L521.982 575.566L481.32 553.578L545.045 533.978Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M521.982 575.566L494.119 626.091L481.32 553.578L521.982 575.566Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M455.18 609.2L402.458 637.738L428.696 582.682L455.18 609.2Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M402.458 637.738L368.639 689.544L376.294 629.957L402.458 637.738Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M402.458 637.738L417.743 671.422L368.639 689.544L402.458 637.738Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M402.458 637.738L455.18 609.2L417.743 671.422L402.458 637.738Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M494.119 626.091L417.743 671.422L455.18 609.2L494.119 626.091Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M368.639 689.544L383.924 708.429L352.936 688.066L368.639 689.544Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M368.639 689.544L383.924 708.429L417.743 671.422L368.639 689.544Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M748.796 636.113L678.696 630.745L703.605 573.325L748.796 636.113Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M678.696 630.745L653.024 589.945L703.605 573.325L678.696 630.745Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M653.025 589.945L649.382 540.183L703.606 573.325L653.025 589.945Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M748.796 636.113L697.673 678.932L678.696 630.745L748.796 636.113Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M779.785 652.905L742.987 692.72L748.796 636.113L779.785 652.905Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M697.674 678.932L742.987 692.72L748.796 636.113L697.674 678.932Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M796.03 693.927L742.987 692.72L779.785 652.905L796.03 693.927Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M674.045 777.989L712.861 779.761L682.291 836.369L674.045 777.989Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M712.86 779.761L734.914 807.289L682.29 836.369L712.86 779.761Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M712.86 779.761L762.235 757.355L734.914 807.289L712.86 779.761Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M798.663 787.665L762.235 757.355L734.914 807.289L798.663 787.665Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M712.861 779.761L713.821 735.637L674.045 777.988L712.861 779.761Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M713.821 735.637L660.286 724.631L674.045 777.988L713.821 735.637Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M713.82 735.637L762.235 757.355L712.86 779.761L713.82 735.637Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M678.696 630.745L624.866 618.114L653.024 589.945L678.696 630.745Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M624.867 618.114L620.092 574.63L653.025 589.945L624.867 618.114Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M620.092 574.63L649.382 540.183L653.025 589.945L620.092 574.63Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M620.879 528.561L620.092 574.63L649.382 540.183L620.879 528.561Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M697.673 678.932L650.268 673.712L678.696 630.745L697.673 678.932Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M650.268 673.712L624.866 618.114L678.696 630.745L650.268 673.712Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M650.268 673.711L660.408 724.508L697.673 678.931L650.268 673.711Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M650.268 673.711L600.154 690.947L660.408 724.508L650.268 673.711Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M624.867 618.114L582.359 639.461L650.268 673.712L624.867 618.114Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M593.657 710.572L523.582 705.204L546.793 649.458L593.657 710.572Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M523.581 705.204L497.909 664.404L546.792 649.458L523.581 705.204Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M523.582 705.204L469.752 692.573L497.91 664.404L523.582 705.204Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M495.252 736.647L469.752 692.573L523.582 705.204L495.252 736.647Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M469.752 692.573L423.872 719.534L495.252 736.647L469.752 692.573Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M682.29 836.369L660.384 789.487L674.044 777.989L682.29 836.369Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M674.045 777.989L639.955 747.407L660.384 789.487L674.045 777.989Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M639.955 747.407L660.409 724.508L674.045 777.988L639.955 747.407Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M600.154 690.948L639.955 747.407L660.408 724.508L600.154 690.948Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M639.954 747.407L600.77 782.421L660.384 789.487L639.954 747.407Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M593.657 710.572L600.77 782.421L569.363 762.23L593.657 710.572Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M523.581 705.204L554.373 737.164L495.251 736.647L523.581 705.204Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M554.373 737.164L527.298 745.536L495.251 736.647L554.373 737.164Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M554.373 737.164L569.363 762.23L527.298 745.536L554.373 737.164Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M523.582 705.204L571.136 730.024L593.657 710.572L523.582 705.204Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M571.136 730.024L554.374 737.164L523.582 705.204L571.136 730.024Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M571.135 730.023L569.363 762.23L554.373 737.164L571.135 730.023Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M571.135 730.024L569.363 762.23L593.657 710.572L571.135 730.024Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M593.656 710.572L639.955 747.407L600.77 782.421L593.656 710.572Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M600.154 690.948L593.656 710.572L639.955 747.407L600.154 690.948Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M600.154 690.947L546.792 649.458L593.656 710.572L600.154 690.947Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M582.359 639.461L600.155 690.947L650.268 673.712L582.359 639.461Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M582.359 639.461L546.792 649.458L600.154 690.947L582.359 639.461Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M624.867 618.114L583.467 587.163L582.359 639.461L624.867 618.114Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M583.467 587.163L620.092 574.63L624.867 618.114L583.467 587.163Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M576.723 566.086L583.467 587.163L620.092 574.63L576.723 566.086Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M697.674 678.932L713.821 735.638L660.409 724.508L697.674 678.932Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M742.987 692.72L713.82 735.638L697.674 678.932L742.987 692.72Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M796.03 693.927L762.875 729.753L742.987 692.72L796.03 693.927Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M713.82 735.637L762.875 729.753L742.987 692.72L713.82 735.637Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M762.235 757.355L762.875 729.753L713.82 735.638L762.235 757.355Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M796.03 693.927L804.029 739.553L762.875 729.753L796.03 693.927Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M796.03 693.927L824.779 722.686L804.03 739.553L796.03 693.927Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M804.029 739.553L824.68 755.286L824.779 722.686L804.029 739.553Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M682.29 836.369L708.774 862.887L734.914 807.29L682.29 836.369Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M734.914 807.29L747.713 879.779L708.774 862.887L734.914 807.29Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M417.743 671.422L423.872 719.534L383.924 708.429L417.743 671.422Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M417.743 671.422L469.752 692.573L423.872 719.534L417.743 671.422Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M494.119 626.091L469.752 692.572L417.743 671.422L494.119 626.091Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M494.119 626.091L497.91 664.404L469.752 692.572L494.119 626.091Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M494.119 626.091L546.792 649.458L497.91 664.404L494.119 626.091Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M521.982 575.566L546.792 649.458L494.119 626.091L521.982 575.566Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M521.981 575.566L582.359 639.461L546.792 649.458L521.981 575.566Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M583.466 587.163L521.981 575.566L582.359 639.461L583.466 587.163Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M576.723 566.086L592.968 527.207L620.092 574.63L576.723 566.086Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M576.722 566.086L521.981 575.566L583.466 587.163L576.722 566.086Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M545.044 533.978L576.722 566.086L521.981 575.566L545.044 533.978Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M592.968 527.207L545.045 533.978L576.723 566.086L592.968 527.207Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M573.4 516.496L592.968 527.207L545.045 533.978L573.4 516.496Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M592.968 527.207L620.88 528.561L620.092 574.63L592.968 527.207Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M573.399 516.496L620.879 528.561L592.967 527.207L573.399 516.496Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M817.69 691.662C795.021 669.674 721.943 575.369 666.809 548.333C621.249 525.976 566.213 504.406 496.999 518.934C467.684 523.809 392.465 552.494 373.34 548.333C354.216 544.172 303.093 524.621 290.614 508.838C279.415 494.656 249.805 419.803 202.94 410.052C192.258 407.836 180.985 410.471 172.739 417.636C154.205 433.764 163.361 458.091 179.828 486.112C183.422 492.243 185.514 499.112 186.08 506.204C188.295 534.446 188.123 563.55 195.187 574.729C210.767 602.798 322.587 661.425 364.159 696.364C405.732 731.304 541.673 725.05 610.665 790.768C679.682 856.461 690.069 877.686 690.069 877.686" fill="url(#paint4_linear_775_1067)"/>
<path className={`${styles.PathLine} `} d="M817.69 691.662C795.021 669.674 721.943 575.369 666.809 548.333C621.249 525.976 566.213 504.406 496.999 518.934C467.684 523.809 392.465 552.494 373.34 548.333C354.216 544.172 303.093 524.621 290.614 508.838C279.415 494.656 249.805 419.803 202.94 410.052C192.258 407.836 180.985 410.471 172.739 417.636C154.205 433.764 163.361 458.091 179.828 486.112C183.422 492.243 185.514 499.112 186.08 506.204C188.295 534.446 188.123 563.55 195.187 574.729C210.767 602.798 322.587 661.425 364.159 696.364C405.732 731.304 541.673 725.05 610.665 790.768C679.682 856.461 690.069 877.686 690.069 877.686" stroke="#65FFFF" stroke-width="0.4727" stroke-miterlimit="10"/>
<path className={`${styles.PathLine} `} d="M660.385 789.487L660.828 823.442L600.771 782.42L660.385 789.487Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M660.827 823.442L656.667 836.787C656.667 836.787 609.286 788.945 601.828 783.135L660.827 823.442Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M660.828 823.442L675.079 844.568L656.668 836.787L660.828 823.442Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M675.079 844.568L678.057 860.893L656.668 836.787L675.079 844.568Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M689.38 876.405L695.041 864.537L677.467 860.302L689.38 876.405Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M682.291 836.369L675.079 844.568L678.057 860.893L682.291 836.369Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path className={`${styles.PathLine} `} d="M660.827 823.442L682.29 836.369L675.078 844.568L660.827 823.442Z" stroke="#65FFFF" stroke-width="0.18" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M492.79 586.473C471.524 589.083 449.667 590.438 427.416 590.438C207.961 590.438 30.0537 458.337 30.0537 295.384C30.0537 132.432 207.961 0.331055 427.416 0.331055C646.872 0.331055 824.779 132.432 824.779 295.384C824.779 441.791 681.134 563.303 492.79 586.473Z" fill="url(#paint5_radial_775_1067)" fill-opacity="0.3"/>
<defs>
<linearGradient id="paint0_linear_775_1067" x1="259.168" y1="484.275" x2="336.836" y2="388.399" gradientUnits="userSpaceOnUse">
<stop stop-color="#65FFFF" stop-opacity="0"/>
<stop offset="0.8587" stop-color="#65FFFF" stop-opacity="0.8587"/>
<stop offset="1" stop-color="#65FFFF"/>
</linearGradient>
<linearGradient id="paint1_linear_775_1067" x1="138.939" y1="333.609" x2="188.483" y2="311.558" gradientUnits="userSpaceOnUse">
<stop stop-color="#65FFFF" stop-opacity="0"/>
<stop offset="0.8587" stop-color="#65FFFF" stop-opacity="0.8587"/>
<stop offset="1" stop-color="#65FFFF"/>
</linearGradient>
<linearGradient id="paint2_linear_775_1067" x1="93.9135" y1="370.247" x2="152.134" y2="337.986" gradientUnits="userSpaceOnUse">
<stop stop-color="#65FFFF" stop-opacity="0"/>
<stop offset="0.8587" stop-color="#65FFFF" stop-opacity="0.8587"/>
<stop offset="1" stop-color="#65FFFF"/>
</linearGradient>
<linearGradient id="paint3_linear_775_1067" x1="163.689" y1="671.521" x2="327.175" y2="508.095" gradientUnits="userSpaceOnUse">
<stop stop-color="#65FFFF" stop-opacity="0"/>
<stop offset="0.8587" stop-color="#65FFFF" stop-opacity="0.8587"/>
<stop offset="1" stop-color="#65FFFF"/>
</linearGradient>
<linearGradient id="paint4_linear_775_1067" x1="484.71" y1="874.088" x2="492.736" y2="414.459" gradientUnits="userSpaceOnUse">
<stop offset="0.2682" stop-color="#65FFFF" stop-opacity="0"/>
<stop offset="0.8988" stop-color="#65FFFF" stop-opacity="0.8617"/>
<stop offset="1" stop-color="#65FFFF"/>
</linearGradient>
<radialGradient id="paint5_radial_775_1067" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(427.406 295.38) rotate(-90) scale(295.066 397.36)">
<stop stop-color="#65FFFF"/>
<stop offset="0.1413" stop-color="#65FFFF" stop-opacity="0.8587"/>
<stop offset="1" stop-color="#65FFFF" stop-opacity="0"/>
</radialGradient>
</defs>
</svg>

                  </div>
                </div>
              </div>
              <div
                className={`${styles.BottomDis} ${styles.animated}  ${styles.flipInX}`}
              >
                <div id="ScrollRight" className={`${styles.Discription}`}>
                  <p>
                    This philosophy extends to our customers and the innovations
                    we bring to them in both our pharmacological and
                    supplementation businesses. We see human health as a
                    holistic rubric that benefits from the basic rituals of a
                    Mediterranean lifestyle; eating fresh food sourced daily,
                    socializing regularly, connecting with family and friends,
                    and taking regular daily walks are effective prescriptions
                    for longevity, health, and happiness.
                  </p>

                  <p>
                    This philosophy is born out of new scientific evidence
                    surrounding Blue Zone communities worldwide, where people
                    live extraordinarily long and healthy lives.Two of the five
                    Blue Zones are in the Mediterranean—one in Sardinia and the
                    other on the island of Ikaria in Greece. A study of the diet
                    and lifestyles found in these areas reveals remarkable
                    similarities. Men and women stay active and engaged well
                    into their 90s, and living past 100 is common.
                  </p>
                  <p>
                    In contrast, lifespan in many industrialized countries has
                    stalled or is decreasing, as in the United States. This
                    trend brings us back to our philosophy: we believe in
                    medicine. We are very good at creating pharmacological
                    solutions, but we embrace the lifestyle and diet of
                    Mediterranean Blue Zones to reduce the need for
                    pharmaceutical intervention in the first place.
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
