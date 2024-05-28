import React from 'react'
import storia from '../../json/storia.json'
import MasterHeadImg from '@/utilities/MasterHeadImg';
import ImgText from '@/utilities/Sections/Img&Text';
import TimeLine from '@/utilities/TimeLine';
import { NewsLetter } from '@/utilities/NewsLetter';
import PageHead from '@/utilities/Head';
import SEO from '../../json/SEO.json'
import styles from '@/styles/ourStory.module.css'

export default function Storia({ version }) {
    const { masterHead, section, timeline,timelineDesc, newsletter } = storia[version] || {};
    return (
        <section>
            <PageHead content={SEO[version]?.storia?.SEO} />
            <MasterHeadImg data={masterHead} />
            <div className={styles.container}>
                <div className={styles.desc}>
                    <p>{timelineDesc}</p>
                </div>
            </div>
            <TimeLine data={timeline} />
            <ImgText data={section} />
            {/* <NewsLetter content={newsletter} /> */}
        </section>
    )

}