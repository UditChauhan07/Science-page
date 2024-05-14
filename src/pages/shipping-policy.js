import React, { useEffect, useState } from "react"
import styles from "@/styles/spedizione.module.css"
import PageHead from "@/utilities/Head"
import pages from '../../json/pages.json'

export default function ShippingPolicy() {

    return (
        <section className={styles.container}>
            <PageHead content={{title:'Shipping Policy | Bruno MD',description:"Bruno MD has promoted sustainability for over a quarter of a century through his water and energy conservation efforts and the protection of biodiversity."}}/>
            <h1 style={{marginBottom:'4rem'}}>Shipping Policy</h1>
            <div className={styles.textHolder} dangerouslySetInnerHTML={{ __html: pages['shipping-policy'] }}/>
        </section>
    )
}
