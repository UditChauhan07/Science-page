import React, { useState } from 'react';
import { useRouter } from 'next/router';


const ScienceVideo = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isSliderVisible, setIsSliderVisible] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const handleBack = () => {
    setIsVisible(!isVisible);
    setIsSliderVisible(!isSliderVisible);
    router.back(); 
  };

  return (
    isSliderVisible && (
      <div data-index1={activeIndex}>
        <h2 className='ArrowControl' onClick={handleBack}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 1024 1024" className="icon" version="1.1">
            <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000" />
          </svg>
        </h2>
        <div className={styles.BgBlack}>
          <h1>We are Bruno MD</h1>
        </div>
        <video className={styles.MobileShow} width="100%" height="100%" controls loop autoPlay muted>
          <source
            src="/images/Science Masthead Portrait720.mov"
            type="video/mp4"
          />
          <source
            src="/images/Science Masthead Portrait720.mov"
            type="video/ogg"
          />
        </video>

        {/* <video className={styles.DeskShow} width="100%" height="100%" controls loop autoPlay muted>
          <source
            src="/images/Science Masthead web.mp4"
            type="video/mp4"
          />
          <source
            src="/images/Science Masthead web.mp4"
            type="video/ogg"
          />
        </video> */}
      </div>
    )
  );
};

ScienceVideo.hideLayout = true;
export default ScienceVideo;
