import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image';

const MarkqueCarousel = ({ image }) => {
  
  if (image?.length) {
    const Sliderimage = [];
    image.map(e=>Sliderimage.push(e))
    image.map(e=>Sliderimage.push(e))
    image.map(e=>Sliderimage.push(e))
    if(Sliderimage.length == 0) return null
    return (
      <section className={styles.container}>
        <div className={styles.photobanner}>
          {
            Sliderimage.map((element4,i) => {
              return (
                <Image src={element4.src} alt={element4.alt} key={i} width={142} height={64}/>
              )
            })
          }
        </div>
      </section>
    )
  } else {
    return null
  }
}

export default MarkqueCarousel