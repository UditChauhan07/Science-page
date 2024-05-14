import React, { useEffect, useState } from "react"
import styles from "@/styles/spedizione.module.css"
import MasterHeadImg from "@/utilities/MasterHeadImg"
import ImgText from "@/utilities/Sections/Img&Text"
import scienza from '../../json/responsabilita-sociale.json'
import PageHead from "@/utilities/Head"

export default function SocialResponsibility({version}) {
    const { masterHead, sectionOne, sectionTwo } = scienza[version] || {};
    return (
        <>
        <PageHead content={{title:'Social Responsibility | Bruno MD',description:"Bruno MD has promoted sustainability for over a quarter of a century through his water and energy conservation efforts and the protection of biodiversity."}}/>
            <MasterHeadImg data={masterHead} />
            <section className={styles.container}>
                <div className={styles.textPDHolder} dangerouslySetInnerHTML={{ __html: sectionOne.content }} />
                <ImgText data={sectionTwo} />
            </section>
        </>
    )
}
