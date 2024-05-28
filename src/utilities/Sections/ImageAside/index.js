import React from 'react'
import styles from './styles.module.css'

const ImageAside = ({ content,theme,isLayout=false }) => {
    const { image, title, subTitle, titleDescription, legalText,subTitleColor,titleColor } = content
    if (!title || !subTitle) return null
    console.log({isLayout});
    return (
        <section>
            <div className={styles.Container}>
                <div className={styles.imageAsideContainer}>
                    <div className={isLayout? styles.headingContainerIsLayout:styles.headingContainer}>
                        <div className={styles.title} dangerouslySetInnerHTML={{ __html: title }} style={titleColor&&{color:theme.backgroundColor}}/>
                        <div className={styles.subTitle} dangerouslySetInnerHTML={{ __html: subTitle }} style={subTitleColor&&{color:theme.backgroundColor}}/>
                        <div className={styles.mt15}>
                            {titleDescription.length && titleDescription.map((e,i)=>{
                                return(
                                    <div className={styles.titleDescription} dangerouslySetInnerHTML={{ __html: e }} key={i}/>
                                )
                            })}
                            {legalText && <div className={styles.legal} dangerouslySetInnerHTML={{ __html: legalText }} />}
                        </div>
                    </div>
                    {image && <div className={styles.imageContainer} style={image?.shift ?{bottom:'200px'}:{}}>
                        <img src={image?.src} className={styles.image} alt={image?.alt} />
                    </div>}
                </div>
            </div>
        </section>
    )
}
export default ImageAside
