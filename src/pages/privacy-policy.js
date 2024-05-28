import React, { useEffect, useState } from "react"
import styles from "@/styles/spedizione.module.css"
import PageHead from "@/utilities/Head"
import pages from '../../json/pages.json'

export default function PrivacyPolicy() {

    return (
        <section className={styles.container}>
            <PageHead content={{title:'Privacy Policy | Bruno MD',description:"We are confident that you will be satisfied with your Bruno MD products, however, if you are not satisfied with your purchase, we will refund your entire first order."}}/>
            <h1>Privacy Policy</h1>
            <div className={styles.textHolder} dangerouslySetInnerHTML={{ __html: pages['privacy-policy'] }}/>
        </section>
    )
}
