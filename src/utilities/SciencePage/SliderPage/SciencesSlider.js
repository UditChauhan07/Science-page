import React, { useState } from 'react'
// import styles from '../styles/sciencedesktop.module.css'
import styles from "./SciencesSlider.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
const SciencesSlider = () => {
    const slideData = [
        {
            title: "Better by Nature",
            subtitle: "Making Phytosome",
            content: [
                "The process of phytosome formation involves the covalent binding of one or more plant constituents with phospholipids. This process helps to protect the plant extract from degradation and increases its stability.",
                "The phospholipid coating also enables the extract to bypass the digestive system's harsh environment and be more easily absorbed by the body's cells. Once the phytosome is ingested, the phospholipid coating is broken down, releasing the plant extract into the bloodstream.",
                "The phospholipids themselves can have beneficial effects, such as supporting liver function and improving the skin's barrier function. Overall, phytosome technology improves the efficacy and safety of plant extracts by enhancing their absorption and bioavailability in the body."
            ],
            videoSrc: "/images/slidevideoA.mp4"
        },
        {
            title: "Biomimicry",
            subtitle: "Delivering More",
            content: [
                "Phytosome technology is a form of biomimicry. Our bodies have evolved to view beneficial plant-based polyphenols as useless or dangerous.",
                "For this reason, nutrients such as curcumin are blocked by your gut before they can enter your bloodstream.",
                "No matter how much curcumin you take, the benefits are limited without Phytosome technology. Phytosome uses biomimicry to wrap polyphenols in a fatty lipid, like a delivery truck. With the curcumin molecule hidden inside, the lipid can pass through the gut and into your bloodstream with 3000% more bioavailability. Phytosome sets the new standard in prescription-grade natural ingredients."
            ],
            videoSrc: "/images/slidevideo3.mp4"
        },
        {
            title: "Phospholipids",
            subtitle: "Nature’s Delivery Truck",
            content: [
                "The phospholipid shell in phytosomes mimics the natural structure of cell membranes, which enables them to bypass the digestive and hepatic barriers by selectively releasing their active compounds into the bloodstream.",
                "This enhances their therapeutic value and decreases the amount required to deliver therapeutic effects.",
                "Phytosome technology has been used to deliver a wide range of active ingredients, including antioxidants, anti-inflammatory compounds, vitamins, and minerals. It also provides a novel delivery option for poorly soluble substances, allowing for more efficient and effective delivery of these compounds to targeted tissues.",
                "Overall, phytosome technology represents an innovative approach to enhancing the bioavailability of plant-based compounds and improving their therapeutic value."
            ],
            videoSrc: "/images/slidevideo2.mp4"
        }
    ];
    // .......Slider 1st Function Start.///

    const goToPrev = () => {
        slider.slickPrev();
    };
    const goToNext = () => {
        slider.slickNext();
    };
    let slider;
    // .......Slider 1st Function End.///
    const settings = {
        dots: false, // Hide dots
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };
    return (
        <div>
            <div className={`container ${styles.brunoDecription3}`}>
                <h1>Phytosome Technology</h1>
                <p>Up to 3000% higher bioavailability</p>
            </div>
            <div className={`container ${styles.SliderDiv2}`}>
                <Slider ref={c => (slider = c)} {...settings}>
                    {slideData.map((slide, index) => (
                        <div className={styles.slideData} key={index}>
                            <div className={styles.contentbackdiv}>
                                <div className={styles.slideContent}>
                                    <h1><b>{slide.title}</b></h1>
                                    <h2>{slide.subtitle}</h2>
                                    <div className={styles.pcontent}>
                                        {slide.content.map((text, i) => (
                                            <p key={i}>{text}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.slide2Img}>
                                <video width="" height="100%" autoPlay={true} muted playsInline controls loop>
                                    <source src={slide.videoSrc} type="video/mp4" />
                                    <source src={slide.videoSrc} type="video/ogg" />
                                </video>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className={styles.bothButton}>
                    <div className={styles.LeftBtn}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none" className={styles.svgIcon} onClick={goToPrev} >
                                <path d="M15.166 26L45.4994 26" stroke="#7F7F7F" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4.69127 26.2144L13.9557 31.773C14.4889 32.093 15.1673 31.7089 15.1673 31.087L15.1673 20.913C15.1673 20.2911 14.4889 19.907 13.9557 20.227L4.69127 25.7856C4.52944 25.8827 4.52944 26.1173 4.69127 26.2144Z" fill="#7F7F7F" />
                            </svg>


                        </div>

                    </div>
                    <div className={styles.RightBtn}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none" onClick={goToNext}>
                                <path d="M36.834 26H6.50065" stroke="#7F7F7F" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M47.3087 25.7856L38.0443 20.227C37.5111 19.907 36.8327 20.2911 36.8327 20.913V31.087C36.8327 31.7089 37.5111 32.093 38.0443 31.773L47.3087 26.2144C47.4706 26.1173 47.4706 25.8827 47.3087 25.7856Z" fill="#7F7F7F" />
                            </svg>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} ${styles.customPrevArrow}`} onClick={onClick}>
            Custom Left Button
        </div>
    );
};
const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} ${styles.customPrevArrow}`} onClick={onClick}>
            Custom Right Button
        </div>
    );
};
export default SciencesSlider
