import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import styles from '../styles/sciencedesktop.module.css'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import TabScience from '@/pages/TabScience';

const Sciencedesktoppage = () => {
  const [show, setShow] = useState();
  const [activeSlideIndex, setActiveSlideIndex] = useState(null);
  const settings = {
    dots: false, // Hide dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  // .......Slider 1st Function Start.///

  const goToPrev = () => {
    slider.slickPrev();
  };
  const goToNext = () => {
    slider.slickNext();
  };
  let slider;
  // .......Slider 1st Function End.///

  // .......Slider 2nd Function Start..///
  const goToPrev2 = () => {
    slider2.slickPrev();
  };
  const goToNext2 = () => {
    slider2.slickNext();
  };
  let slider2;
  // .......Slider 2nd Function End.///
  // ....Modal function Start..//
  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    setShow(true);
    setActiveSlideIndex(index);
  };
  // modal function End.../


  const slides = [
    {
      image: '/images/heroSlide1.png',
      title: 'Science: a human endeavor.',
      subtitle: 'Pharma, Meet Nature.',
      content: 'Bruno MD is committed to furthering our understanding of the power of natural substances to improve human health and longevity.',
      readmore: "Bruno MD is committed to furthering our understanding of the power of natural substances to improve human health and longevity.",
      readmore2: "This goal is a moving target. One not easily achieved. Nature is not always willing to show us her hand. Pharmacology is another path to improving human health, and Bruno also does this. We are the third-largest pharmaceutical company in Italy today.",
      readmore3: "Knowing both sides, we understand that some solutions for improving health outcomes are pharma's job. Still, we also know that many diseases that lead to the necessity of pharmacological intervention are often preventable through leveraging the best ingredients that Nature has to offer and unlocking some of Nature's secrets that she is reluctant to share with us.",
      readmore4:"One of the seemingly insurmountable problems of deploying nature-based solutions to improve health and longevity is the issue of bioavailability. In our pharmaceutical business, we customize molecules to interact with the human body in a precise and targeted way with largely predictable outcomes because we design them for specific receptors in the body. ",
      readmore5:"Nature does not play this way. Our bodies block many plant-based nutrients that would benefit our health. This low bioavailability is a function of evolution, and the problem is particularly acute with a special kind of plant nutrient known as polyphenols."
    },
    {
      image: '/images/heroSlide2.png',
      title: 'Understand the world.',
      subtitle: 'Unlocking Nature’s Secrets',
      content: 'Polyphenols are compounds in many plant-based foods, such as fruits, vegetables, tea, and wine. They are antioxidants.',
      readmore: "Polyphenols are compounds in many plant-based foods, such as fruits, vegetables, tea, and wine. They are antioxidants, which means they can help protect our cells from damage caused by free radicals. Some polyphenols have anti-inflammatory and anti-cancer properties. A diet rich in polyphenols has various health benefits, including reducing the risk of heart disease, diabetes, and certain cancers. Until recently, these antioxidants, when included in supplements, remained mostly unavailable to our bodies, meaning that no matter how much of a supplement containing polyphenols we consume, very little of it is absorbed.",
      readmore2: "The low bioavailability problem is vexing. Our bodies block botanical compounds like polyphenols in two ways: low water solubility and limited intestinal absorption. Creating optimal bio absorption without altering the natural actives found in plants is the elusive target. As a pharma, we are skilled at creating molecular solutions to health problems, but our mission is different here. The goal is to deliver 100% of a plant's food-grade benefits into your body without altering the botanical itself. In other words, let Nature do what she does best. To do this, natural derivatives must balance hydrophilicity (the ability to dissolve in gastrointestinal fluids) and lipophilicity (the ability to cross lipid membranes).",
      readmore3: "Complicating this mission is that all plant-based polyphenols carry a different pharmacokinetic profile, so Bruno MD utilizes a new technology called Phytosome that optimizes the bioavailability of each botanical. Hence, our bodies absorb them in the best possible way.With Phytosome Technology, Bruno MD supplements deliver a higher percentage (up to 3000% more) of highly beneficial polyphenols into the bloodstream. Importantly, Phytosome Technology does this without changing the natural ingredients themselves or relying on drugs, making it safe and tolerated by our bodies over time."
    },
    {
      image: '/images/heroSlide3.png',
      title: 'Blue Zone Longevity',
      subtitle: ' Live Healthier, Longer Lives',
      content: 'Many pharmacological companies are scaled international conglomerates. The names of these companies are familiar and, unfortunately.',
      readmore: "Many pharmacological companies are scaled international conglomerates. The names of these companies are familiar and, unfortunately, are often known for being as impersonal as they are innovative. Bruno MD, an Italian company based in Rome, is a family-owned operation that allows the company to innovate from a different perspective. It is not hyperbole to say that we treat our employees, scientists, doctors, and company representatives like family.",
      readmore2: "This philosophy extends to our customers and the innovations we bring to them in both our pharmacological and supplementation businesses. We see human health as a holistic rubric that benefits from the basic rituals of a Mediterranean lifestyle; eating fresh food sourced daily, socializing regularly, connecting with family and friends, and taking regular daily walks are effective prescriptions for longevity, health, and happiness",
      readmore3: "This philosophy is born out of new scientific evidence surrounding Blue Zone communities worldwide, where people live extraordinarily long and healthy lives. Two of the five Blue Zones are in the Mediterranean—one in Sardinia and the other on the island of Ikaria in Greece. A study of the diet and lifestyles found in these areas reveals remarkable similarities. Men and women stay active and engaged well into their 90s, and living past 100 is common.",
      readmore4:"In contrast, lifespan in many industrialized countries has stalled or is decreasing, as in the United States. This trend brings us back to our philosophy: we believe in medicine. We are very good at creating pharmacological solutions, but we embrace the lifestyle and diet of Mediterranean Blue Zones to reduce the need for pharmaceutical intervention in the first place."
    },
    {
      image: '/images/heroSlide4.png',
      title: 'Farm to Table.',
      subtitle: 'Rooted in Italian Soil',
      content: 'If you take supplements, you should be aware that the ingredients you consume, such as Vitamin C or E, are often produced in a lab.',
      readmore: "If you take supplements, you should be aware that the ingredients you consume, such as Vitamin C or E, are often produced in a lab and not harvested from natural sources. While these compounds appear identical to their naturally derived counterparts on a molecular level, they are not the same nor provide equivalent health benefits.",
      readmore2: "Artificially manufactured vitamins are not as beneficial as naturally occurring vitamins of the same type because natural vitamins are accompanied by cofactors such as enzymes, minerals, and other organic molecules that work together to support their absorption, bioavailability, and utilization in the body. Unfortunately, these cofactors are often absent or removed during the manufacturing process of artificial vitamins, which results in reduced effectiveness and increased risk of toxicity",
      readmore3: "Furthermore, natural vitamins are usually present in a complex matrix of other beneficial compounds, such as antioxidants, fiber, flavonoids, and phytonutrients, that interact synergistically to provide additional health benefits beyond the vitamin itself, like natural vitamin C.",
      readmore4: "On the other hand, artificial vitamins typically contain only the isolated vitamin molecules, which lack these synergistic components and may even interfere with their absorption and function in the body. Moreover, when taken in high doses, artificial vitamins may even be toxic, whereas natural vitamins are generally safe in any amount.",
      readmore5:"Given our philosophy, it is unsurprising that Bruno MD only sources natural ingredients for our products. What may surprise you is that we also follow our Mediterranean philosophy as a core principle of our sourcing methods. We prefer to work with small, Italian-owned family farms and people we know. Our citrus, for example, is sourced from a network of orchards situated on only a few hectares of land at the base of the Etna Volcano in Sicily. We source our blood oranges from these areas because we know the farmers run organic operations, pick their fruit by hand, and harvest only when the citrus hits its peak nutritional value.",
      readmore6:"We also know the mineral-rich soil fed by the volcano imparts other beneficial co-factors like a higher percentage of anthocyanins, a compound of flavonoids representing a potent group of antioxidants proven to help tame free radicals and provide anti-inflammatory benefits. The over 60+ flavonoids found in our Red Orange Complex can encourage heart health, help maintain cholesterol levels in the healthy range, and boost cognitive function. If our ingredients can't be grown on Italian soil, Bruno MD searches worldwide for farmers and ingredients that live up to the same standards, then transforms them into products that deliver 100% food-grade composition and the highest bioavailability available."
    },
    {
      image: '/images/heroSlide5.png',
      title: 'Nature, Meet Pharma',
      subtitle: 'Clinically Proven Ingredients.',
      content: 'When a company makes a claim, it should be transparent and verifiable. Because we are both a pharmacological company and a nutritional.',
      readmore: "When a company makes a claim, it should be transparent and verifiable. Because we are both a pharmacological company and a nutritional supplement company, Bruno MD applies the same principled methods for safety, provenance, and effectiveness on all of our products, whether they are molecules we formulate or ones we source from Nature.",
      readmore2: "We substantiate all advertised health benefits and claims. All clinical trials on our ingredients are randomized, double-blind, placebo-controlled, and published. In addition, all Bruno MD dietary supplements undergo the same rigorous manufacturing and internal regulatory processes as our pharmaceutical products. Finally, the efficacy of the actives in all of our pharmacological or botanical products delivered with Phytosome Technology is guaranteed.",
    
    },
  ];

  return (

    <div className={styles.leptop}>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
        <Modal.Header className={styles.modalHeader} closeButton>
          <Modal.Title>
            <h1>{slides[activeSlideIndex]?.title}</h1>
            <h2>{slides[activeSlideIndex]?.subtitle}</h2>
          </Modal.Title>
        </Modal.Header>
        <div className={styles.modalBody}>
          <p>{slides[activeSlideIndex]?.readmore}</p>
          <p>{slides[activeSlideIndex]?.readmore2}</p>
          <p>{slides[activeSlideIndex]?.readmore3}</p>
          <p>{slides[activeSlideIndex]?.readmore4}</p>
          <p>{slides[activeSlideIndex]?.readmore5}</p>
          <p>{slides[activeSlideIndex]?.readmore6}</p>
        </div>

      </Modal>
      <Carousel fade={true} interval={4000} controls={false} pause={false} className={styles.carousel}>
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


      <div className={styles.RectangleDiv}>
        <div className={styles.Rectangle1}><img src='/images/Rectangle1.png' /></div>
        <div className={styles.Rectangle2}><img src='/images/Rectangle2.png' /></div>

      </div>

      <div className={`container ${styles.brunoDecription}`}>
        <h1>We are <b>Bruno MD</b></h1>
        <p>Science and the Human Connection</p>

      </div>
      <div className={styles.PhytoVideoTag}>
        <video width="100%" height="100%" loop autoPlay muted controls>
          <source src="/images/Science Masthead web.mp4" type="video/mp4" />
          <source src="/images/Science Masthead web.mp4" type="video/ogg" />
        </video>
      </div>
      <div className={`container ${styles.brunoDecription2}`}>
        <h1> Phytosome® Technology </h1>
        <p> 3000% higher bioavailability</p>

      </div>

      <div className={styles.imgRotation}>
        <img src='/images/rotaionImg1.png' />
      </div>
      {/* Human Tab Section Start */}
      <TabScience />
      {/* Human Tab Section End */}
      <div className={styles.imgRotation2}>
        <img src='/images/rotaionImg1.png' />
      </div>
      <div className={`container ${styles.brunoDecription3}`}>
        <h1>Phytosome Technology</h1>
        <p>Up to 3000% higher bioavailability</p>

      </div>


      <div className={`container ${styles.SliderDiv2}`}>
        <Slider ref={c => (slider = c)} {...settings}>
          <div className={styles.slideData}>
            <div className={styles.contentbackdiv}>
              <div className={styles.slideContent} >
                <h1><b>Better by Nature</b> </h1>
                <h2> Making Phytosome</h2>
                <div className={styles.pcontent} >
                  <p>The process of phytosome formation involves the covalent binding of one or more plant constituents with phospholipids. This process helps to protect the plant extract from degradation and increases its stability.</p>
                  <p> The phospholipid coating also enables the extract to bypass the digestive system &apos;s harsh environment and be more easily absorbed by the body&apos;s cells. Once the phytosome is ingested, the phospholipid coating is broken down, releasing the plant extract into the bloodstream.</p>
                  <p>The phospholipids themselves can have beneficial effects, such as supporting liver function and improving the skin&apos;s barrier function. Overall, phytosome technology</p>
                </div>

              </div>
            </div>

            <div className={styles.slide2Img}>
              <img src="/images/slideImg2.png" alt='' />
            </div>
          </div>

          <div className={styles.slideData}>
            <div className={styles.contentbackdiv}>
              <div className={styles.slideContent}>
                <h1><b>Biomimicry</b></h1>
                <h2>Delivering More</h2>
                <div className={styles.pcontent}>
                  <p>Phytosome technology is a form of biomimicry. Our bodies have evolved to view beneficial plant-based polyphenols as useless or dangerous.</p>
                  <p> For this reason, nutrients such as curcumin are blocked by your gut before they can enter your bloodstream. </p>
                  <p>No matter how much curcumin you take, the benefits are limited without Phytosome technology. Phytosome uses biomimicry to wrap polyphenols in a fatty lipid, like a delivery truck.With the curcumin molecule hidden inside, the lipid can pass through the gut and into your bloodstream with 3000% more bioavailability. Phytosome sets the new standard in prescription-grade natural ingredients. </p>
                </div>
              </div>
            </div>

            <div className={styles.slide2Img}>
              <img src="/images/slideImg2b.png" alt='' />
            </div>
          </div>
          <div className={styles.slideData}>
            <div className={styles.contentbackdiv}>
              <div className={styles.slideContent}>
                <h1><b>Phospholipids</b></h1>
                <h2>Nature’s Delivery Truck</h2>
                <div className={styles.pcontent}>
                  <p>The phospholipid shell in phytosomes mimics the natural structure of cell membranes, which enables them to bypass the digestive and hepatic barriers by selectively releasing their active compounds into the bloodstream.</p>
                  <p>This enhances their therapeutic value and decreases the amount required to deliver therapeutic effects.</p>
                  <p>Phytosome technology has been used to deliver a wide range of active ingredients, including antioxidants, anti-inflammatory compounds, vitamins, and minerals.</p>
                </div>
              </div>
            </div>

            <div className={styles.slide2Img}>
              <img src="/images/slideImg2c.png" alt='' />
            </div>
          </div>

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


      <div className={styles.nextCarousel}>
        <div className={`container ${styles.SliderDiv3}`}>
          <Slider ref={c => (slider2 = c)}{...settings}>
            <div className={styles.slider3data}>
              <div className={styles.sliderContent}>
                <h6>For Healthy Skin, Hair & Bones</h6>
                <div className={styles.forscrollbar}>
                  <p className={styles.Pcontent}><b>Bruno MD Royal Collagen Peptides</b> are clinically proven to help produce new collagen at any age by stimulating your body’s own endogenous collagen production.Unlike standard collagen peptides, Bruno MD® uses patented technology to precisely cut collagen peptides that specifically target cartilage growth, firmer skin, and stronger bones.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}><b>Natural Vitamin C</b> Clinical studies prove that skin health is significantly improved when Royal Collagen Peptides are combined with natural vitamin C. Vitamin C is crucial for the formation (biosynthesis) of collagen.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}><b>Royal Collagen Peptides</b> increase collagen levels throughout the body by stimulating new collagen production at any age to restore cartilage, increase bone density, and strengthen bones</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}><b>Red Orange Complex</b>  maximizes collagen formation and strengthens immunity with 400% of the daily recommended value of Vitamin C. Dense flavonoids, anthocyanins, and phenolic compounds help prevent collagen degradation.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}><b>Bovine Source collagen </b>from free-range EU-certified sources is organic, non-GMO, halal, and kosher-certified, raised exclusively on a plant-based diet also provides the full bouquet of 18 essential and non-essential amino acids.</p>
                </div>
              </div>
              <div className={styles.sliderContentIMG}>
                <img src='/images/BrunoPharmaSlider.png' alt='' />
              </div>
              <div className={styles.sliderContent3}>
                <div>
                  <h3>Royal Collagen Peptides</h3>
                  <h5>The Science of Beauty</h5>
                </div>
                <div className={styles.roundeddiv}>
                  <div className={styles.round}><p>Natural Vitamin C</p></div>
                  <div className={styles.round}><p>Royal Collagen Peptides</p></div>
                </div>
                <div className={styles.roundeddiv2}>
                  <div className={styles.round2}><p>Red Orange Complex</p></div>
                  <div className={styles.round2}><p>Bovine Source collagen</p></div>
                </div>
                <hr className={styles.blackHr2} />
                <div className={styles.btnDivBuy}>
                  <div className={styles.roundBtn}><p>Buy Now</p></div>
                </div>
              </div>
            </div>
            <div className={styles.slider3data}>
              <div className={styles.sliderContent}>
                <h6>For Healthy Cholesterol levels</h6>
                <div className={styles.forscrollbar}>
                  <p className={styles.Pcontent}><b>Heart disease</b> is one of the leading causes of death globally, so keeping cholesterol levels in check is crucial for preventing these serious health issues.
                    The clinically proven, natural ingredients in CholestQ10® are delivered with Phytosome® Technology. Phytosome delivers usually hard-to-absorb ingredients into your bloodstream with up to 3000% more bioavailability.
                  </p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}><b>Coenzyme Q10 </b>Phytosome® promotes healthy aging, heart & cardiovascular health, brain health, and all activities involving energetic expenditure.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}><b>Cardoon</b> contains active biophenols and flavonoids from an endemic variety of Cardoon leaf, inhibiting the creation of fatty lipids in the liver.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}><b>Natural Vitamin (E-d-alpha-tocopheryl succinate)</b> shields proteins, LDL cholesterol, and mitochondrial DNA against oxidative damage and reduces lipid peroxidation levels — the pivotal reaction in the cause of atherosclerosis.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}> <b>Bergamot Orange Extract Phytosome®</b>supports healthy cholesterol levels and governs the metabolic conditions that increase the risk of heart disease and TYPE II diabetes.</p>
                  <p className={styles.Pcontent}>  <b>Curcumin Phytosome® (Turmeric Extract)</b>supports healthy blood vessel function and guards against chronic inflammation.</p>

                </div>

              </div>
              <div className={styles.sliderContentIMG}>
                <img src='/images/BrunoPharmaSlider2.png' alt='' />
              </div>
              <div className={styles.sliderContent3}>
                <div>
                  <h3>CholestQ10</h3>
                  <h5>The Science of Heart Health</h5>
                </div>
                <div className={styles.roundeddiv}>
                  <div className={styles.round}><p>Natural Vitamin C</p></div>
                  <div className={styles.round}><p>Royal Collagen Peptides</p></div>
                </div>
                <div className={styles.roundeddiv2}>
                  <div className={styles.round2}><p>Red Orange Complex</p></div>
                  <div className={styles.round2}><p>Bovine Source collagen</p></div>
                </div>
                <hr className={styles.blackHr2} />
                <div className={styles.btnDivBuy}>
                  <div className={styles.roundBtn}><p>Buy Now</p></div>
                </div>
              </div>
            </div>
            <div className={styles.slider3data}>
              <div className={styles.sliderContent}>
                <h6>For a Healthy Inflammatory Response</h6>
                <div className={styles.forscrollbar}>
                  <p className={styles.Pcontent}><b>For a healthy inflammatory response</b> Inflammation is a leading cause of disease. Like high blood pressure, inflammation is a silent killer. Unlike high blood pressure, inflammation is often best managed without pharmacological intervention. Nature is the best medicine to put inflammation in check.The clinically proven, natural ingredients in Riboflam® are delivered with Phytosome® Technology. Phytosome delivers usually hard-to-absorb ingredients into your bloodstream with up to 3000% more bioavailability.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}><b>Coenzyme Q10 Phytosome®</b> promotes healthy aging, heart & cardiovascular health, brain health, and all activities involving energetic expenditure.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}><b>Cardoon</b> contains active biophenols and flavonoids from an endemic variety of Cardoon leaf inhibiting the creation of fatty lipids in the liver</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}><b>Natural Vitamin (E-d-alpha-tocopheryl succinate)</b> shields proteins, LDL cholesterol, and mitochondrial DNA against oxidative damage and reduces lipid peroxidation levels — the pivotal reaction in the cause of atherosclerosis.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}><b>Bergamot Orange Extract Phytosome®</b>
                    supports healthy cholesterol levels and governs the metabolic conditions that increase the risk of heart disease and TYPE II diabetes.
                  </p>
                  <p className={styles.Pcontent}><b>Curcumin Phytosome® (Turmeric Extract)</b>
                    supports healthy blood vessel function and guards against chronic inflammation.
                  </p>
                </div>

              </div>
              <div className={styles.sliderContentIMG}>
                <img src='/images/BrunoPharmaSlider3.png' alt='' />
              </div>
              <div className={styles.sliderContent3}>
                <div>
                  <h3>Riboflam </h3>
                  <h5>The Science of Longevity</h5>
                </div>
                <div className={styles.roundeddiv}>
                  <div className={styles.round}><p>Natural Vitamin C</p></div>
                  <div className={styles.round}><p>Royal Collagen Peptides</p></div>
                </div>
                <div className={styles.roundeddiv2}>
                  <div className={styles.round2}><p>Red Orange Complex</p></div>
                  <div className={styles.round2}><p>Bovine Source collagen</p></div>
                </div>
                <hr className={styles.blackHr2} />
                <div className={styles.btnDivBuy}>
                  <div className={styles.roundBtn}><p>Buy Now</p></div>
                </div>
              </div>
            </div>
            <div className={styles.slider3data}>
              <div className={styles.sliderContent}>
                <h6>For a Lifetime of 360º Vision Care</h6>
                <div className={styles.forscrollbar}>
                  <p className={styles.Pcontent}><b>For healthy cholesterol levels</b>
                    Heart disease is one of the leading causes of death globally, so keeping cholesterol levels in check is crucial for preventing these serious health issues.
                    The clinically proven, natural ingredients in CholestQ10® are delivered with Phytosome® Technology. Phytosome delivers usually hard-to-absorb ingredients into your bloodstream with up to 3000% more bioavailability.
                  </p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}><b>Coenzyme Q10 Phytosome®</b> promotes healthy aging, heart & cardiovascular health, brain health, and all activities involving energetic expenditure.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}><b>Cardoon</b> contains active biophenols and flavonoids from an endemic variety of Cardoon leaf inhibiting the creation of fatty lipids in the liver.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}><b>Natural Vitamin (E-d-alpha-tocopheryl succinate)</b> shields proteins, LDL cholesterol, and mitochondrial DNA against oxidative damage and reduces lipid peroxidation levels — the pivotal reaction in the cause of atherosclerosis.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}><b>Bergamot Orange Extract Phytosome®</b>
                    supports healthy cholesterol levels and governs the metabolic conditions that increase the risk of heart disease and TYPE II diabetes.
                  </p>
                  <p className={styles.Pcontent}><b>Curcumin Phytosome® (Turmeric Extract)</b>
                    supports healthy blood vessel function and guards against chronic inflammation.
                  </p>
                </div>

              </div>
              <div className={styles.sliderContentIMG}>
                <img src='/images/BrunoPharmaSlider4.png' alt='' />
              </div>
              <div className={styles.sliderContent3}>
                <div>
                  <h3>Blurex </h3>
                  <h5>The Science of Sight</h5>
                </div>
                <div className={styles.roundeddiv}>
                  <div className={styles.round}><p>Natural Vitamin C</p></div>
                  <div className={styles.round}><p>Royal Collagen Peptides</p></div>
                </div>
                <div className={styles.roundeddiv2}>
                  <div className={styles.round2}><p>Red Orange Complex</p></div>
                  <div className={styles.round2}><p>Bovine Source collagen</p></div>
                </div>
                <hr className={styles.blackHr2} />
                <div className={styles.btnDivBuy}>
                  <div className={styles.roundBtn}><p>Buy Now</p></div>
                </div>
              </div>
            </div>

          </Slider>
          <div className={styles.bothButton2}>
            <div className={styles.LeftBtn}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none" className={styles.svgIcon} onClick={goToPrev2}>
                  <path d="M15.166 26L45.4994 26" stroke="#7F7F7F" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M4.69127 26.2144L13.9557 31.773C14.4889 32.093 15.1673 31.7089 15.1673 31.087L15.1673 20.913C15.1673 20.2911 14.4889 19.907 13.9557 20.227L4.69127 25.7856C4.52944 25.8827 4.52944 26.1173 4.69127 26.2144Z" fill="#7F7F7F" />
                </svg>
                {/* <img src='/Images/ArrowLeft.png' onClick={goToPrev2} alt='' /> */}
              </div>

            </div>
            <div className={styles.RightBtn}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none" onClick={goToNext2}>
                  <path d="M36.834 26H6.50065" stroke="#7F7F7F" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M47.3087 25.7856L38.0443 20.227C37.5111 19.907 36.8327 20.2911 36.8327 20.913V31.087C36.8327 31.7089 37.5111 32.093 38.0443 31.773L47.3087 26.2144C47.4706 26.1173 47.4706 25.8827 47.3087 25.7856Z" fill="#7F7F7F" />
                </svg>
                {/* <img src='/Images/ArrowRight.png' onClick={goToNext2} alt=''/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
// Custom component for Previous Arrow
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
export default Sciencedesktoppage;
