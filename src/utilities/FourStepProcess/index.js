import React from 'react'
import styles from './styles.module.css'
import ProcessCard from './ProcessCard'

const FourStepProcess = ({ processCards, header, theme,stepAlignment,buttonTittle,centerAlign=false,isFontLayout=false }) => {
  if (!processCards?.length) return null
  return (
    <section>
      <div>
        <h2 className={centerAlign? styles.processHeaderCenter:styles.processHeader}>
        {header}
        </h2>
        <div className={isFontLayout?styles.processCardGridThemed:styles.processCardGrid }>
          {processCards?.map((el, idx) => {
            return (
              <ProcessCard
                stepNumber={el.stepNumber}
                image={el?.video?.src || el.image?.src}
                title={el.title}
                imageAltText = {el?.video?.alt || el.image?.alt}
                video={el?.video}
                bodyCopy={el.body}
                expandedCopy={el.expanded}
                key={idx}
                stepAlignment={stepAlignment}
                titleColor={theme}
                buttonTittle={buttonTittle}
                arrowColor={theme}
                isFontLayout={isFontLayout}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FourStepProcess