import React from 'react'
// import styles from '../styles/sciencedesktop.module.css'
import styles from './SciencnewVideo.module.css'
const ScienceNewVideo = () => {
  return (
    <div>
      <div className={`container ${styles.brunoDecription}`}>
        <h1>We are <b>Bruno MD</b></h1>
        <p>Science and the Human Connection</p>

      </div>
      <div className={styles.PhytoVideoTag}>
        <video width="100%" height="100%" loop autoPlay muted controls>
          <source src="/images/Science Masthead web.mp4" type="video/mp4" />
          <source src="/images/Science Masthead web.mp4" type="video/ogg" />
        </video>
      </div>
      <div className={styles.PhytoVideoTag1}>
        <video width="100%" height="100%" autoPlay={true} muted playsInline controls loop>
          <source src='/images/Science Masthead Portrait720New.mp4' type='' />
          <source src="/images/Science Masthead Portrait720New.mp4" type="" />
        </video>
      </div>

    </div>
  )
}

export default ScienceNewVideo
