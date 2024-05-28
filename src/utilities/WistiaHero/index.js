import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useMatchMedia } from "../Sections/Hooks/useMatchMedia";
export const WistiaHero = ({
  id,
  content,
  theme = null,
  height = null,
  video = {},
  mobId = null,
}) => {
  const [isDesktop] = useMatchMedia("(min-width: 775px)", true);
  const [windowWidth, setWindowWidth] = useState(0);
  const [color, setColor] = React.useState(
    theme?.backgroundColorInvert ? "#FFFFFF" : "#000000"
  );
  const [textColor, setTextColor] = React.useState(
    theme?.backgroundColorInvert ? theme?.backgroundColor : "#000000"
  );
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const onMouseEnter = () => {
      setColor(
        theme?.backgroundColorInvert ? theme?.backgroundColor : "#000000"
      );
      setTextColor(theme?.backgroundColorInvert ? "#FFFFFF" : "#000000");
    };

    const onMouseLeave = () => {
      setColor(theme?.backgroundColorInvert ? "#FFFFFF" : "#000000");
      setTextColor(
        theme?.backgroundColorInvert ? theme?.backgroundColor : "#000000"
      );
    };

    document
      .getElementById("WistiaEmbedTrigger")
      ?.addEventListener("mouseenter", onMouseEnter);
    document
      .getElementById("WistiaEmbedTrigger")
      ?.addEventListener("mouseleave", onMouseLeave);
  }, []);
  // if (!id.desktop) return null
  const wistiaVideo = `//fast.wistia.net/embed/iframe/${
    isDesktop ? id : mobId
  }?videoFoam=true`;
  return (
    <section className={styles.cover}>
      <div className={styles.holder}>
        {video?.src && video?.mob ? (
          <video
            className={styles.videoEmbbed}
            poster={video.poster}
            frameBorder="0"
            width={windowWidth}
            height={"auto"}
            autoPlay={true}
            muted
            playsInline
            controls
            loop
            src={isDesktop ? video.src : video.mob}
          >
            <track src="" kind="captions" />
          </video>
        ) : video?.src ? (
          <>
            {isDesktop ? (
              <video
                className={styles.videoEmbbed}
                poster={video.poster}
                frameBorder="0"
                width={windowWidth}
                height={"auto"}
                autoPlay={true}
                muted
                playsInline
                controls
                loop
                src={video.src}
              >
                <track src="" kind="captions" />
              </video>
            ) : mobId ? (
              <iframe
                src={wistiaVideo}
                allowtransparency="true"
                frameborder="0"
                scrolling="no"
                className="wistia_embed"
                name="wistia_embed"
                autoPlay
                allowfullscreen
                mozallowfullscreen
                webkitallowfullscreen
                oallowfullscreen
                msallowfullscreen
                width={windowWidth}
                height={
                  height || windowWidth / 2 + (windowWidth / 2) * 0.7 || 0
                }
              ></iframe>
            ) : (
              <video
                className={styles.videoEmbbed}
                poster={video.poster}
                frameBorder="0"
                width={windowWidth}
                height={"auto"}
                autoPlay={true}
                muted
                playsInline
                controls
                loop
                src={video.src}
              >
                <track src="" kind="captions" />
              </video>
            )}
          </>
        ) : (
          <>
            <iframe
              src={wistiaVideo}
              allowtransparency="true"
              frameborder="0"
              scrolling="no"
              className="wistia_embed"
              name="wistia_embed"
              autoPlay
              allowfullscreen
              mozallowfullscreen
              webkitallowfullscreen
              oallowfullscreen
              msallowfullscreen
              width={windowWidth}
              height={height || windowWidth / 2 + (windowWidth / 2) * 0.2 || 0}
            ></iframe>
            <script
              src="//fast.wistia.net/assets/external/E-v1.js"
              async
            ></script>
          </>
        )}
        {content && (
          <div className={styles.conatiner}>
            <div className={styles.heroButtonAndTextContainer}>
              <div className={styles.titleHolder}>
                {content?.title && (
                  <div
                    className={styles.title}
                    dangerouslySetInnerHTML={{ __html: content.title }}
                  />
                )}
                {content?.subTitle && (
                  <div className={styles.subTitle}>{content.subTitle}</div>
                )}
              </div>
              {content?.btnText && (
                <a href={content.btnLink || "/collezioni/tutti"}>
                  <span className={styles.btn}>{content.btnText}</span>
                </a>
              )}
            </div>
            {content.buyNow && (
              <span
                className={styles.buyNow}
                id="WistiaEmbedTrigger"
                onClick={content.ModalHandler}
                style={{ background: color, color: textColor }}
              >
                Buy Now
              </span>
            )}
          </div>
        )}
        {content?.headTitle && (
          <div
            className={styles.headTitle}
            dangerouslySetInnerHTML={{ __html: content.headTitle }}
          />
        )}
      </div>
    </section>
  );
};
