import React from "react";
import styles from "./styles.module.css";
const VideoPlayer = ({
  video,
  id,
  theme,
  style = null,
  height = null,
  position = null,
  paddingTop = null,
}) => {
  const videoHandler = (e) => {
    console.log({ aa: e.target.getAttribute("data-vid") });
    if (e.target.getAttribute("data-vid")) {
      let video = document.getElementById(e.target.getAttribute("data-vid"));
      if (video.paused) {
        video
          .play()
          .then((Response) => {
            console.log({ Response });
          })
          .catch((err) => {
            console.log(err);
          });
        document.getElementById(
          e.target.getAttribute("data-id")
        ).style.display = "none";
      } else {
        let pausedStatus = video.pause();
        console.log({ pausedStatus });
        document.getElementById(
          e.target.getAttribute("data-id")
        ).style.display = "block";
      }
    }
  };
  return (
    <div className={styles.holder}>
      <div
        className={styles.playerHolder}
        id={`playBtn-${id}`}
        data-id={`playBtn-${id}`}
        data-vid={`video-${id}`}
        onClick={videoHandler}
        style={style ? style : { backgroundColor: theme }}
      ></div>
      <video
        className={styles.videoEmbbed}
        style={
          (position && { position: "unset", height: height },
          paddingTop && { paddingTop: paddingTop })
        }
        poster={video.poster}
        frameBorder="0"
        data-id={`playBtn-${id}`}
        data-vid={`video-${id}`}
        id={`video-${id}`}
        onClick={videoHandler}
        allowFullScreen=""
        mozallowfullscreen=""
        webkitallowfullscreen=""
        oallowfullscreen=""
        msallowfullscreen=""
        src={video.src}
      >
        <track src="" kind="captions" />
      </video>
    </div>
  );
};
export default VideoPlayer;
