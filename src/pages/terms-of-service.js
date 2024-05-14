import React, { useEffect, useState } from "react"
import styles from "@/styles/spedizione.module.css"
import PageHead from "@/utilities/Head"
import pages from '../../json/pages.json'

export default function ReturnAndCancellationPolicy() {

    return (
        <section className={styles.container}>
            <PageHead content={{title:'Terms of Service | Bruno MD',description:"We are confident that you will be satisfied with your Bruno MD products, however, if you are not satisfied with your purchase, we will refund your entire first order."}}/>
            <h1 style={{marginBottom:'4rem'}}>Terms of Service</h1>
            <div className={styles.textHolder} dangerouslySetInnerHTML={{ __html: pages['terms-of-service'] }}/>
        </section>
    )
}
