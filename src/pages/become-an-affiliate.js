import React from 'react'
import styles from '@/styles/BecomeAnAffiliate.module.css'
import PageHead from '@/utilities/Head'
import pages from '../../json/pages.json'

export default function BecomeAnAffiliate() {
    return (
        <section className={styles.container}>
            <PageHead content={{title:"Become An Affiliate | Bruno MD",description:"Health and wellness products rooted in the heart of Italy, made from all-natural ingredients. Pharmaceutical grade supplements to fuel your future."}}/>
            <div className={styles.twoCol}>
            <img src={pages['become-an-affiliate'].image} />
          <div dangerouslySetInnerHTML={{ __html: pages['become-an-affiliate'].content }} className={styles.contentHolder}/>
        </div>
        </section>
    )
}