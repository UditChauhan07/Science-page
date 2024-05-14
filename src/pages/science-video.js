import React from "react";
import styles from '../styles/sciencePhytosome.module.css'

const ScienceVideo = () => {
  return (
    <div>
        <div className={styles.BgBlack}>
            <h1>We are Bruno MD</h1>

        </div>
      <video width="100%" height="100%" controls loop autoPlay muted>
        <source
          src="/images/Science Masthead Portrait720.mov"
          type="video/mp4"
        />
        <source
          src="/images/Science Masthead Portrait720.mov"
          type="video/ogg"
        />
      </video>
    </div>
  );
};

export default ScienceVideo;
