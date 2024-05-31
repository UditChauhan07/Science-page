import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ScienceTab from '.././utilities/Sections/ScienceNewVersionPage/ScienceTabs/ScienceTab';

function ScienceTabComponent() {
  const [isVisible, setIsVisible] = useState(true);
  const [isSliderVisible, setIsSliderVisible] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0); // assuming activeIndex is a state variable you might want to manage
  const router = useRouter();

  const handleBack = () => {
    setIsVisible(!isVisible);
    setIsSliderVisible(!isSliderVisible);
    router.back(); // this navigates back to the previous page
  };

  return (
    isSliderVisible && (
      <div data-index1={activeIndex}>
        <h2 className='ArrowControl ' onClick={handleBack}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 1024 1024" className="icon" version="1.1">
            <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000" />
          </svg>
        </h2>
        <ScienceTab index={activeIndex} />
      </div>
    )
  );
}

ScienceTabComponent.hideLayout = true;
export default ScienceTabComponent;
