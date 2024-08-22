
import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import styles from './sciencedesktop.module.css'
// import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import TabScience from '../ScienceTab/DesktopTab/TabScience';
import ScienceSlider2 from '@/utilities/SciencePage/SliderPage/ScienceSlider2';
import SciencesSlider from '@/utilities/SciencePage/SliderPage/SciencesSlider';
import ScienceNewVideo from '@/utilities/SciencePage/ScienceVideo/ScienceNewVideo';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Modal from '../ModalSciencePage/Modal';


const Sciencedesktoppage = () => {
  const carouselRef = useRef(null);

  const [activeSlideIndex, setActiveSlideIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleShow = (index) => {
    setActiveSlideIndex(index);
    setIsModalOpen(true);
  };


  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };


  // ....Modal function Start..//
  // const handleClose = () => setShow(false);
  // const handleShow = (index) => {
  //   setShow(true);
  //   setActiveSlideIndex(index);
  // };
  // modal function End.../

  const slides = [
    {
      image: '/images/heroSlide1.webp',
      title: 'Science: a human endeavor.',
      subtitle: 'Pharma, Meet Nature.',
      content: 'Bruno MD is committed to furthering our understanding of the power of natural substances to improve human health and longevity.',
      readmore: "Bruno MD is committed to furthering our understanding of the power of natural substances to improve human health and longevity.",
      readmore2: "This goal is a moving target. One not easily achieved. Nature is not always willing to show us her hand. Pharmacology is another path to improving human health, and Bruno also does this. We are the third-largest pharmaceutical company in Italy today.",
      readmore3: "Knowing both sides, we understand that some solutions for improving health outcomes are pharma's job. Still, we also know that many diseases that lead to the necessity of pharmacological intervention are often preventable through leveraging the best ingredients that Nature has to offer and unlocking some of Nature's secrets that she is reluctant to share with us.",
      readmore4: "One of the seemingly insurmountable problems of deploying nature-based solutions to improve health and longevity is the issue of bioavailability. In our pharmaceutical business, we customize molecules to interact with the human body in a precise and targeted way with largely predictable outcomes because we design them for specific receptors in the body. ",
      readmore5: "Nature does not play this way. Our bodies block many plant-based nutrients that would benefit our health. This low bioavailability is a function of evolution, and the problem is particularly acute with a special kind of plant nutrient known as polyphenols."
    },
    {
      image: '/images/heroSlide2.webp',
      title: 'Understand the world.',
      subtitle: 'Unlocking Nature’s Secrets',
      content: 'Polyphenols are compounds in many plant-based foods, such as fruits, vegetables, tea, and wine. They are antioxidants.',
      readmore: "Polyphenols are compounds in many plant-based foods, such as fruits, vegetables, tea, and wine. They are antioxidants, which means they can help protect our cells from damage caused by free radicals. Some polyphenols have anti-inflammatory and anti-cancer properties. A diet rich in polyphenols has various health benefits, including reducing the risk of heart disease, diabetes, and certain cancers. Until recently, these antioxidants, when included in supplements, remained mostly unavailable to our bodies, meaning that no matter how much of a supplement containing polyphenols we consume, very little of it is absorbed.",
      readmore2: "The low bioavailability problem is vexing. Our bodies block botanical compounds like polyphenols in two ways: low water solubility and limited intestinal absorption. Creating optimal bio absorption without altering the natural actives found in plants is the elusive target. As a pharma, we are skilled at creating molecular solutions to health problems, but our mission is different here. The goal is to deliver 100% of a plant's food-grade benefits into your body without altering the botanical itself. In other words, let Nature do what she does best. To do this, natural derivatives must balance hydrophilicity (the ability to dissolve in gastrointestinal fluids) and lipophilicity (the ability to cross lipid membranes).",
      readmore3: "Complicating this mission is that all plant-based polyphenols carry a different pharmacokinetic profile, so Bruno MD utilizes a new technology called Phytosome that optimizes the bioavailability of each botanical. Hence, our bodies absorb them in the best possible way.With Phytosome Technology, Bruno MD supplements deliver a higher percentage (up to 3000% more) of highly beneficial polyphenols into the bloodstream. Importantly, Phytosome Technology does this without changing the natural ingredients themselves or relying on drugs, making it safe and tolerated by our bodies over time."
    },
    {
      image: '/images/heroSlide3.webp',
      title: 'Blue Zone Longevity',
      subtitle: ' Live Healthier, Longer Lives',
      content: 'Many pharmacological companies are scaled international conglomerates. The names of these companies are familiar and, unfortunately.',
      readmore: "Many pharmacological companies are scaled international conglomerates. The names of these companies are familiar and, unfortunately, are often known for being as impersonal as they are innovative. Bruno MD, an Italian company based in Rome, is a family-owned operation that allows the company to innovate from a different perspective. It is not hyperbole to say that we treat our employees, scientists, doctors, and company representatives like family.",
      readmore2: "This philosophy extends to our customers and the innovations we bring to them in both our pharmacological and supplementation businesses. We see human health as a holistic rubric that benefits from the basic rituals of a Mediterranean lifestyle; eating fresh food sourced daily, socializing regularly, connecting with family and friends, and taking regular daily walks are effective prescriptions for longevity, health, and happiness",
      readmore3: "This philosophy is born out of new scientific evidence surrounding Blue Zone communities worldwide, where people live extraordinarily long and healthy lives. Two of the five Blue Zones are in the Mediterranean—one in Sardinia and the other on the island of Ikaria in Greece. A study of the diet and lifestyles found in these areas reveals remarkable similarities. Men and women stay active and engaged well into their 90s, and living past 100 is common.",
      readmore4: "In contrast, lifespan in many industrialized countries has stalled or is decreasing, as in the United States. This trend brings us back to our philosophy: we believe in medicine. We are very good at creating pharmacological solutions, but we embrace the lifestyle and diet of Mediterranean Blue Zones to reduce the need for pharmaceutical intervention in the first place."
    },
    {
      image: '/images/heroSlide4.webp',
      title: 'Farm to Table.',
      subtitle: 'Rooted in Italian Soil',
      content: 'If you take supplements, you should be aware that the ingredients you consume, such as Vitamin C or E, are often produced in a lab.',
      readmore: "If you take supplements, you should be aware that the ingredients you consume, such as Vitamin C or E, are often produced in a lab and not harvested from natural sources. While these compounds appear identical to their naturally derived counterparts on a molecular level, they are not the same nor provide equivalent health benefits.",
      readmore2: "Artificially manufactured vitamins are not as beneficial as naturally occurring vitamins of the same type because natural vitamins are accompanied by cofactors such as enzymes, minerals, and other organic molecules that work together to support their absorption, bioavailability, and utilization in the body. Unfortunately, these cofactors are often absent or removed during the manufacturing process of artificial vitamins, which results in reduced effectiveness and increased risk of toxicity",
      readmore3: "Furthermore, natural vitamins are usually present in a complex matrix of other beneficial compounds, such as antioxidants, fiber, flavonoids, and phytonutrients, that interact synergistically to provide additional health benefits beyond the vitamin itself, like natural vitamin C.",
      readmore4: "On the other hand, artificial vitamins typically contain only the isolated vitamin molecules, which lack these synergistic components and may even interfere with their absorption and function in the body. Moreover, when taken in high doses, artificial vitamins may even be toxic, whereas natural vitamins are generally safe in any amount.",
      readmore5: "Given our philosophy, it is unsurprising that Bruno MD only sources natural ingredients for our products. What may surprise you is that we also follow our Mediterranean philosophy as a core principle of our sourcing methods. We prefer to work with small, Italian-owned family farms and people we know. Our citrus, for example, is sourced from a network of orchards situated on only a few hectares of land at the base of the Etna Volcano in Sicily. We source our blood oranges from these areas because we know the farmers run organic operations, pick their fruit by hand, and harvest only when the citrus hits its peak nutritional value.",
      readmore6: "We also know the mineral-rich soil fed by the volcano imparts other beneficial co-factors like a higher percentage of anthocyanins, a compound of flavonoids representing a potent group of antioxidants proven to help tame free radicals and provide anti-inflammatory benefits. The over 60+ flavonoids found in our Red Orange Complex can encourage heart health, help maintain cholesterol levels in the healthy range, and boost cognitive function. If our ingredients can't be grown on Italian soil, Bruno MD searches worldwide for farmers and ingredients that live up to the same standards, then transforms them into products that deliver 100% food-grade composition and the highest bioavailability available."
    },
    {
      image: '/images/heroSlide5.webp',
      title: 'Nature, Meet Pharma',
      subtitle: 'Clinically Proven Ingredients.',
      content: 'When a company makes a claim, it should be transparent and verifiable. Because we are both a pharmacological company and a nutritional.',
      readmore: "When a company makes a claim, it should be transparent and verifiable. Because we are both a pharmacological company and a nutritional supplement company, Bruno MD applies the same principled methods for safety, provenance, and effectiveness on all of our products, whether they are molecules we formulate or ones we source from Nature.",
      readmore2: "We substantiate all advertised health benefits and claims. All clinical trials on our ingredients are randomized, double-blind, placebo-controlled, and published. In addition, all Bruno MD dietary supplements undergo the same rigorous manufacturing and internal regulatory processes as our pharmaceutical products. Finally, the efficacy of the actives in all of our pharmacological or botanical products delivered with Phytosome Technology is guaranteed.",

    },
  ];

  return (

    <div className={styles.leptop}>

      {/* Custom Modal */}
      {isModalOpen && (
        <Modal show={isModalOpen} onClose={handleCloseModal}>
          <div className={styles.modalHeader}>
            <h1>{slides[activeSlideIndex]?.title}</h1>
            <h2>{slides[activeSlideIndex]?.subtitle}</h2>
          </div>
          <div className={styles.modalBody}>
            <p>{slides[activeSlideIndex]?.readmore}</p>
            <p>{slides[activeSlideIndex]?.readmore2}</p>
            <p>{slides[activeSlideIndex]?.readmore3}</p>
            <p>{slides[activeSlideIndex]?.readmore4}</p>
            <p>{slides[activeSlideIndex]?.readmore5}</p>
            <p>{slides[activeSlideIndex]?.readmore6}</p>
          </div>
        </Modal>
      )}
      {/* End of Custom Modal */}
      <div className={styles.carouselContainer}>

        <Carousel fade={true} interval={4000} controls={false} pause={false} className={styles.carousel} ref={carouselRef}>
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <div className={styles.carouselMain}>
                <img src={slide.image} alt={`Slide ${index + 1}`} />
              </div>
              <Carousel.Caption className={styles.imgcotent}>
                <div className={`container ${styles.heroImgContent}`}>
                  <h1>{slide.title}</h1>
                  <h2>{slide.subtitle}</h2>
                  <p>{slide.content}</p>

                  {slide.readmore && (
                    <div className={styles.ancorLink}>
                      <button onClick={() => handleShow(index)}>Read More</button>
                    </div>
                  )}
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}

        </Carousel>
        <div className={styles.carouselBtnDiv}>
        <button
          className={`${styles.carouselControl} ${styles.carouselControlLeft}`}
          onClick={handlePrev}
        >
         <i className={styles.LeftArrow}><FaAngleLeft /></i> 
        </button>
        <button
          className={`${styles.carouselControl} ${styles.carouselControlRight}`}
          onClick={handleNext}>

         <i className={styles.RightArrow}><FaAngleRight /></i> 
        </button>
        </div>
      </div>
      <div className={styles.RectangleDiv}>
        <div className={styles.Rectangle1}><img src='/images/Rectangle1.webp' /></div>
        <div className={styles.Rectangle2}><img src='/images/Rectangle2.webp' /></div>
      </div>
      {/*  */}


      {/* Science Video Page Start */}
      <ScienceNewVideo />
      {/* Science Video Page Start */}


      {/* Human Tab Section Start */}
      <TabScience />
      {/* Human Tab Section End */}

      {/* Science Slider 1  Start*/}
      <SciencesSlider />
      {/* Science Slider 1  End*/}


      {/* Science Slider 2 Start */}
      <ScienceSlider2 />
      {/* Science Slider 2 Start */}
    </div>

  );
}

export default Sciencedesktoppage;
