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
import data from '../../json/layout.json'


import Footer from "@/utilities/Footer/";

const ScienceNew = ({ version }) => {
  


  useEffect(() => {
    $(document).ready(() => {
      if ($.scrollify) {
        $.scrollify({
          section: ".js--scrollify",
          interstitialSection: "",
          easing: "easeOutExpo",
          scrollSpeed: 1100,
          offset: 0,
          scrollbars: true,
          standardScrollElements: "",
          setHeights: true,
          overflowScroll: true,
          updateHash: true,
          touchScroll: true,
          before: function () {},
          after: function () {},
          afterResize: function () {},
          afterRender: function () {},
        });
      } else {
        console.error("jQuery Scrollify plugin is not available.");
      }
    });
  }, []);
  
};



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
          setMute(!isMute)
        }
      };

      
      const autoToggleMute = () => {
        const video = videoRef.current;
        video.play();
      //video.muted = !video.muted;
      };

  useEffect(() => {
    autoToggleMute();
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

      elements.navigateItems.on("click", ".js--navigate-link", (ev) => {
        ev.preventDefault();

        const $this = $(ev.currentTarget);
        const hash = $this.attr("href");

        $.scrollify.move(hash);
      });

      elements.more.on("click", (ev) => {
        elements.block.slideToggle();
      });

      setTimeout(() => {
        elements.introTitle.addClass("bounceInDown");
      }, 100);

      $.scrollify({
        section: ".js--scrollify",
        sectionName: "section-name",
        overflowScroll: false,
        setHeights: true,
        interstitialSection: ".footer, .section__fourth",
        standardScrollElements: ".footer",
        before(index, sections) {
          const ref = sections[index].data("section-name");

          if (ref === "intro" || ref === "footer") {
            elements.header.removeClass("is--active");
            elements.introTitle.addClass("bounceInDown");
          }

          if (ref === "science") {
            setTimeout(function () {
              elements.sectionCard.addClass("flipInY");
            }, 100);
          }

          if (ref === "third") {
            elements.third.removeClass("is--inactive");
            elements.thirdLeft.addClass("fadeInLeft");
            elements.thirdRight.addClass("fadeInRight");
            elements.thirdTitle.addClass("bounceInDown");
          }

          if (ref === "footer") {
            elements.navigate.addClass("is--inactive");
          } else {
            elements.navigate.removeClass("is--inactive");
          }

          elements.navigateLink
            .parent()
            .siblings()
            .find(".js--navigate-link")
            .removeClass("is--active");
          elements.navigateLink.eq(index).addClass("is--active");
        },
        after: function (index, sections) {
          var ref = sections[index].data("section-name");

          if (ref !== "science") {
            elements.sectionCard.removeClass("flipInY");
          }

          if (ref === "third") {
            elements.thirdLeft.removeClass("fadeInLeft");
            elements.thirdRight.removeClass("fadeInRight");
            elements.thirdTitle.removeClass("bounceInDown");
          }

          if (ref !== "third") {
            elements.third.addClass("is--inactive");
          }

          if (ref !== "intro" && ref !== "footer") {
            elements.header.addClass("is--active");
            elements.introTitle.removeClass("bounceInDown");
          }
        },
        afterRender() {},
      });
    });
  }, []);
  return (
   
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
      
      {/* <nav class="section-navigate js--navigate">
        <ul class="section-navigate__items js--navigate-items">
          <li class="section-navigate__item">
            <a
              href="#intro"
              class="section-navigate__link js--navigate-link is--active"
            >
              <span class="section-navigate__name">intro</span>
            </a>
          </li>
          <li class="section-navigate__item">
            <a href="#science" class="section-navigate__link js--navigate-link">
              <span class="section-navigate__name">Science</span>
            </a>
          </li>
          <li class="section-navigate__item">
            <a href="#understand-the-world" class="section-navigate__link js--navigate-link">
              <span class="section-navigate__name">understand-the-world</span>
            </a>
          </li>
          <li class="section-navigate__item">
            <a href="#BlueZone" class="section-navigate__link js--navigate-link">
              <span class="section-navigate__name">BlueZone</span>
            </a>
          </li>
          <li class="section-navigate__item">
            <a href="#farm-to-table" class="section-navigate__link js--navigate-link">
              <span class="section-navigate__name">farm-to-table</span>
            </a>
          </li>
          <li class="section-navigate__item">
            <a href="#nature" class="section-navigate__link js--navigate-link">
              <span class="section-navigate__name">nature</span>
            </a>
          </li>
        </ul>
        
      </nav> */}

      <section
        class="section__intro is--scrolled js--scrollify"
        data-section-name="intro"
      >
        <div className="height100Vh">
          <video width="1920" height="auto" ref={videoRef} loop autoPlay muted>
            <source
              src="https://cdn.shopify.com/videos/c/o/v/b45c94600c184f59a34a27c3f428ca33.mp4"
              type="video/mp4"
            />
          </video>
          {/* <button className="MuteBtn" onClick={handleToggleMute}>       
       
         {isMute ? (<img src="/images/unmute-icon.png"/>) : (<img src="/images/mute-icon.png"/>)}       
       
      </button> */}
          
     
      
    </div>
         
       
      </section>
      <section
        class="section__science is--scrolled js--scrollify"
        data-section-name="science"
      >
        <ScienceStep1 />
      </section>

      <section
        class="section__understand-the-world is--scrolled js--scrollify js--third"
        data-section-name="understand-the-world"
      >
        <ScienceStep2 />
      </section>

      <section
        class="section__BlueZone is--scrolled js--scrollify"
        data-section-name="BlueZone"
      >
        <ScienceStep3 />
      </section>

      <section
        class="section__farm-to-table is--scrolled js--scrollify"
        data-section-name="farm-to-table"
      >
        <ScienceStep4 />
      </section>
      <section
        class="section__nature is--scrolled js--scrollify"
        data-section-name="nature"
      >
        <ScienceStep5 />
      </section>

      <footer class="footer js--footer" data-section-name="footer">
      <Footer data={scienza[version].footer} />
      
       
      </footer>
    </main>
  );
};
Science.hideLayout = true;
export default Science;
