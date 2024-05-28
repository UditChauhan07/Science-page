import React from 'react'
import styles from './styles.module.css'

const BottomBar = ({contents}) => {
    const {backgroundColor,textColor,content,fixed} = contents || []
  if(!content) return null;
  if(!content.length) return null;
  return(
    <div className={styles.bar} id="bottomBar" style={fixed?{backgroundColor:backgroundColor, color:textColor, position:'fixed', bottom:0, width:'100%'}:{backgroundColor:backgroundColor, color:textColor}}>
    {content.map((element, index)=>{
      return(
        <>
        {/* <span  className={(index % 2 == 0 ? styles.borderRB : styles.borderB)}> */}
        <span className={styles.disc}>
        <div dangerouslySetInnerHTML={{ __html: element }}></div>
        </span>
        {(content.length-1) != index && <span className={styles.hyphen}>&nbsp; - &nbsp;</span>}
        </>
      )
    })}
    </div>
  )
}
export default BottomBar