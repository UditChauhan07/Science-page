import React from 'react'
import SciencePage from '../utilities/Sections/ScienceNewVersionPage/SciencePage'
import styles from '../utilities/Sections/ScienceNewVersionPage/styles.module.css'
import SciencePageSlider from '../utilities/Sections/ScienceNewVersionPage/SciencePageSlider'
import ScienceVideoPage from '../utilities/Sections/ScienceNewVersionPage/ScienceVideoPage'

function ScienceNewVersionPage() {
  return (
    <div className={styles.destopNone} >
        <SciencePage></SciencePage>
        <SciencePageSlider></SciencePageSlider>
        <ScienceVideoPage></ScienceVideoPage>
        </div>
  )
}

export default ScienceNewVersionPage