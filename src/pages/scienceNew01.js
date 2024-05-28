import React, { useEffect, useRef, useState } from "react";
import ScienceStep1 from "@/utilities/Sections/ScienceStep1";
import ScienceStep2 from "@/utilities/Sections/ScienceStep2";
import ScienceStep3 from "@/utilities/Sections/ScienceStep3";
import ScienceStep4 from "@/utilities/Sections/ScienceStep4";
import ScienceStep5 from "@/utilities/Sections/ScienceStep5";
import scienza from "../../json/scienza.json";
import PageHead from "@/utilities/Head";
import SEO from "../../json/SEO.json";
import MasterHeadImg from "@/utilities/MasterHeadImg";
import Headers from "@/utilities/HeaderScienceNew";
import data from "../../json/layout.json";
import ScrollToTop from "@/utilities/ScrollToTop";

import Footer from "@/utilities/Footer/";
import styles from "../styles/scienceNew.module.css";

const Science = ({ version }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { masterHead, Step01, Step02, Step03, Step04, Step05 } =
    scienza[version] || {};

  const videoRef = useRef(null);
  const [isMute, setMute] = useState(false);

  const handleToggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setMute(!isMute);
    }
  };

  useEffect(() => {
    $(function () {
      "use strict";
      const elements = {
        scrollify: $(".js--scrollify"),
        header: $(".js--header"),
        footer: $(".js--footer"),
        navigate: $(".js--navigate"),
        navigateItems: $(".js--navigate-items"),
        navigateLink: $(".js--navigate-link"),
        introTitle: $(".js--intro-title"),
        third: $(".js--third"),
        thirdTitle: $(".js--third-title"),
        thirdLeft: $(".js--third-left"),
        thirdRight: $(".js--third-right"),
        sectionCard: $(".js--section-card"),
        block: $(".js--block"),
        more: $(".js--more"),
      };
    });
  }, []);
  return (
    <div className="SciencewithoutScroll">
      <main className="ScienceScrollAnimation">
        <div>
          <Headers
            link={data[version].links}
            version={version}
            iconLink={{
              cart: data[version].cartLink,
              login: data[version].login,
            }}
          />
        </div>

        <div className={` ${styles.BrunoMdPhytosome}`}>
          <img src="/images/Orange_By_Ludovic_Fremondiere.png" />
          <div className={` ${styles.HeadingsTop}`}>
            <h1>
              Bruno MD
              <p>A prescription to thrive</p>
            </h1>
            <p>Phytosome® Technology 3000% higher bioavailability  </p>
          </div>
        </div>

        <footer class="footer js--footer" data-section-name="footer">
          <Footer data={scienza[version].footer} />
        </footer>

        <ScrollToTop></ScrollToTop>
      </main>
    </div>
  );
};
Science.hideLayout = true;
export default Science;
