import React, { useEffect, useState } from 'react'
import SciencePage from '../utilities/Sections/ScienceNewVersionPage/SciencePage'
import styles from '../utilities/Sections/ScienceNewVersionPage/styles.module.css'
import SciencePageSlider from '../utilities/Sections/ScienceNewVersionPage/SciencePageSlider'
import ScienceVideoPage from '../utilities/Sections/ScienceNewVersionPage/ScienceVideoPage'
import Sciencedesktoppage from "./sciencedesktoppage"
function ScienceNewVersionPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      {windowWidth <= 767 ? (
        <div className={styles.destopNone} >

          <SciencePageSlider></SciencePageSlider>

        </div>
      ) : (
        <div>
          <Sciencedesktoppage />
        </div>
      )}

    </>
  )
}

ScienceNewVersionPage.hideLayout = true;
if (typeof window !== 'undefined' && window.innerWidth < 767) {
  console.log("hjdhdjhdjwhdhd")
  ScienceNewVersionPage.hideLayout = true; // Hide layout for desktop
}else if( typeof window !== 'undefined' && window.innerWidth >768){
    console.log("hjdhdjhdjwhdhd")

  ScienceNewVersionPage.hideLayout = false; // Hide layout for desktop

}else{ 
   ScienceNewVersionPage.hideLayout = false; // Hide layout for desktop
}
export default ScienceNewVersionPage
