import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import styles from '../styles/sciencedesktop.module.css'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import TabScience from '@/pages/TabScience';

const Sciencedesktoppage = () => {
  const [show, setShow] = useState();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(null);

  // .............new modal....
  const [show2, setShow2] = useState();
  const [activeIndex, setActiveIndex] = useState(1);
  const [selectedOption, setSelectedOption] = useState("1");
  const [selectedOption2, setSelectedOption2] = useState("1");
  const [selectedDay, setSelectedDay] = useState("30 Day");
  const [isVisible, setIsVisible] = useState(false);
  const [modalImage2, setModalImage2] = useState('/images/modalImgBrunoMd (1).webp');
  const [modalTitle2, setModalTitle2] = useState('Royal Collagen Peptides');
  const [modalsubTitle2, setModalsubTitle2] = useState('The Science of Beauty');



  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  // Function For Quantity Change Start //
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  // Function For Quantity Change End //

  // Function For Quantity Change Start //
  const handleSelectChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };
  // Function For Quantity Change End //
  // Function For Day Change Start //
  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };
  // Function For Day Change End //


  const handleRadioChange = (index) => {
    setActiveIndex(index);
  };
  const handleClose2 = () => setShow2(false);
  const hanldeShow2 = (imageSrc2, title2, subTitle2) => {
    setModalImage2(imageSrc2);
    setModalTitle2(title2);
    setModalsubTitle2(subTitle2)
    setShow2(true)
  }
  // .............new modal....



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
  const sliderData = [
    {
      title: 'For Healthy Skin, Hair & Bones',
      description: [
        {
          heading: 'Bruno MD Royal Collagen Peptides',
          text: 'Bruno MD Royal Collagen Peptides are clinically proven to help produce new collagen at any age by stimulating your body’s own endogenous collagen production. Unlike standard collagen peptides, Bruno MD® uses patented technology to precisely cut collagen peptides that specifically target cartilage growth, firmer skin, and stronger bones.'
        },
        {
          heading: 'Natural Vitamin C',
          text: 'Clinical studies prove that skin health is significantly improved when Royal Collagen Peptides are combined with natural vitamin C. Vitamin C is crucial for the formation (biosynthesis) of collagen.'
        },
        {
          heading: 'Royal Collagen Peptides',
          text: 'Royal Collagen Peptides increase collagen levels throughout the body by stimulating new collagen production at any age to restore cartilage, increase bone density, and strengthen bones.'
        },
        {
          heading: 'Red Orange Complex',
          text: 'Maximizes collagen formation and strengthens immunity with 400% of the daily recommended value of Vitamin C. Dense flavonoids, anthocyanins, and phenolic compounds help prevent collagen degradation.'
        },
        {
          heading: 'Bovine Source collagen',
          text: 'From free-range EU-certified sources is organic, non-GMO, halal, and kosher-certified, raised exclusively on a plant-based diet also provides the full bouquet of 18 essential and non-essential amino acids.'
        },
      ],
      imageSrc: '/images/BrunoPharmaSlider.webp',
      buyNowImage: '/images/modalImgBrunoMd (1).webp',
      buyNowTitle: 'Royal Collagen Peptides',
      buyNowSubtitle: 'The Science of Beauty',
    },
    {
      title: 'For Healthy Cholesterol levels',
      description: [
        {
          heading: 'Heart disease',
          text: 'Is one of the leading causes of death globally, so keeping cholesterol levels in check is crucial for preventing these serious health issues. The clinically proven, natural ingredients in CholestQ10® are delivered with Phytosome® Technology. Phytosome delivers usually hard-to-absorb ingredients into your bloodstream with up to 3000% more bioavailability.'
        },
        {
          heading: 'Coenzyme Q10',
          text: 'Phytosome® promotes healthy aging, heart & cardiovascular health, brain health, and all activities involving energetic expenditure.'
        },
        {
          heading: 'Cardoon',
          text: 'Contains active biophenols and flavonoids from an endemic variety of Cardoon leaf, inhibiting the creation of fatty lipids in the liver.'
        },
        {
          heading: 'Natural Vitamin (E-d-alpha-tocopheryl succinate)',
          text: 'Shields proteins, LDL cholesterol, and mitochondrial DNA against oxidative damage and reduces lipid peroxidation levels — the pivotal reaction in the cause of atherosclerosis.'
        },
        {
          heading: 'Bergamot Orange Extract Phytosome®',
          text: 'Supports healthy cholesterol levels and governs the metabolic conditions that increase the risk of heart disease and TYPE II diabetes.'
        },
        {
          heading: 'Curcumin Phytosome® (Turmeric Extract)',
          text: 'Supports healthy blood vessel function and guards against chronic inflammation.'
        },
      ],
      imageSrc: '/images/BrunoPharmaSlider2.webp',
      buyNowImage: '/images/modalImgBrunoMd2.webp',
      buyNowTitle: 'CholestQ10 60 v-caps',
      buyNowSubtitle: 'The Science of Heart Health',
    },
    {
      title: 'For a Healthy Inflammatory Response',
      description: [
        {
          heading: 'For a healthy inflammatory response',
          text: 'Inflammation is a leading cause of disease. Like high blood pressure, inflammation is a silent killer. Unlike high blood pressure, inflammation is often best managed without pharmacological intervention. Nature is the best medicine to put inflammation in check. The clinically proven, natural ingredients in Riboflam® are delivered with Phytosome® Technology. Phytosome delivers usually hard-to-absorb ingredients into your bloodstream with up to 3000% more bioavailability.'
        },
        {
          heading: 'Natural Astaxanthin Extract',
          text: 'Is harvested from algae and is proven to be the most potent antioxidant in nature. Astaxanthin’s superpower is reducing inflammation system-wide, which helps balance immune response and support brain and heart health.'
        },
        {
          heading: 'Curcumin Phytosome',
          text: 'Comes from turmeric, which has been used in Asian cooking and cures since ancient times. It supports a healthy inflammation and immune response. Bruno MD’s Curcumin Phytosome is the #1 recommended formulation by the prestigious Cleveland Clinic.'
        },
        {
          heading: 'Boswellia Serra Phytosome',
          text: 'Commonly known as Indian Frankincense, and Echinacea Angustifolia Phytosome are both proven to create a balanced inflammation response. Native Americans have used Echinacea as an anti-inflammatory for centuries.'
        },
        {
          heading: 'Nucleoflam Proprietary Nucleotides & Nucleosides Yeast Extract Complex',
          text: 'Are involved in the development and functioning of immune cells and contribute to the growth and repair of the intestinal lining, which can help with intestinal inflammation.'
        },
        {
          heading: 'Quercitin Phytosome',
          text: 'Blocks inflammatory enzymes and the creation of cytokines and, like Astaxanthin, is a potent antioxidant, but you’ll need to eat 100 kilos of broccoli each day to get enough. Riboflam delivers 2000% more quercitin than standard supplements.'
        },
      ],
      imageSrc: '/images/BrunoPharmaSlider3.webp',
      buyNowImage: '/images/modalImgBrunoMd3.webp',
      buyNowTitle: 'Riboflam 90 v-caps',
      buyNowSubtitle: 'The Science of Longevity',
    },
    {
      title: 'For a Lifetime of 360º Vision Care',
      description: [
        {
          heading: 'Eye strain, Dry Eyes, Headaches & General Fatigue',
          text: 'Are all signs of Computer Vision Syndrome. Ingredients in Bluerex Vision® are clinically proven to help alleviate symptoms of digital overexposure and protect your eyes from harmful blue light before it can damage the retina. The clinically proven, natural ingredients in Bluerex Vision® are delivered with Phytosome® Technology. Phytosome delivers usually hard-to-absorb ingredients into your bloodstream with up to 3000% more bioavailability.'
        },
        {
          heading: 'Astaxanthin’s',
          text: 'Potent anti-inflammatory properties alleviate oxidative stress in the front of the eye and help reduce eye fatigue and strain, common symptoms of computer vision syndrome.'
        },
        {
          heading: 'Lutein & Zeaxanthin',
          text: 'Increase the macular pigments that filter harmful blue light before it can damage your retina. They are also antioxidants that protect the eyes against free radicals, improving visual performance and reducing the progression of certain eye conditions as we age.'
        },
        {
          heading: 'D-Alpha Tocopheryl Succinate',
          text: 'A natural form of Vitamin E, neutralizes oxidative damage and has been shown to reduce the risk of developing advanced age-related macular degeneration by 25% for subjects who have already demonstrated early signs of macular degeneration.'
        },
        {
          heading: 'Docosahexaenoic acid (DHA)',
          text: 'Naturally derived from Schizochytrium sp marine alga, is a polyunsaturated omega-3 fatty acid accounting for up to 93% of the omega-3 fats in the retina.'
        },
        {
          heading: 'Bilberry Extract',
          text: 'Is packed with anthocyanins, which promote healthy tear secretion, improve vision, increase retinal sensitivity (night vision), and help prevent common eye issues as we mature.'
        },
      ],
      imageSrc: '/images/BrunoPharmaSlider4.webp',
      buyNowImage: '/images/modalImgBrunoMd4.webp',
      buyNowTitle: 'Bluerex Vision 60 softgels',
      buyNowSubtitle: 'The Science of Sight',
    },
  ];

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
        <div className={styles.Rectangle1}><img src='/images/Rectangle1.webp' /></div>
        <div className={styles.Rectangle2}><img src='/images/Rectangle2.webp' /></div>

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
        <img src='/images/rotaionImg1.webp' />
      </div>
      {/* Human Tab Section Start */}
      <TabScience />
      {/* Human Tab Section End */}
      <div className={styles.imgRotation2}>
        <img src='/images/rotaionImg1.webp' />
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
                  <p>The phospholipids themselves can have beneficial effects, such as supporting liver function and improving the skin&apos;s barrier function. Overall, phytosome technology improves the efficacy and safety of plant extracts by enhancing their absorption and bioavailability in the body.</p>
                </div>

              </div>
            </div>

            <div className={styles.slide2Img}>
              <video width="" height="100%" loop autoPlay muted >
                <source src="/images/slidevideoA.mp4" type="video/mp4" />
                <source src="/images/slidevideoA.mp4" type="video/ogg" />
              </video>
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
              <video width="" height="100%" loop autoPlay muted >
                <source src="/images/slidevideo3.mp4" type="video/mp4" />
                <source src="/images/slidevideo3.mp4" type="video/ogg" />
              </video>
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
                  <p>Phytosome technology has been used to deliver a wide range of active ingredients, including antioxidants, anti-inflammatory compounds, vitamins, and minerals.It also provides a novel delivery option for poorly soluble substances, allowing for more efficient and effective delivery of these compounds to targeted tissues.</p>
                  <p>Overall, phytosome technology represents an innovative approach to enhancing the bioavailability of plant-based compounds and improving their therapeutic value.</p>
                </div>
              </div>
            </div>

            <div className={styles.slide2Img}>
              <video width="" height="100%" loop autoPlay muted >
                <source src="/images/slidevideo2.mp4" type="video/mp4" />
                <source src="/images/slidevideo2.mp4" type="video/ogg" />
              </video>
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
          <div className={`container ${styles.brunoDecription4}`}>
            <h1>Clinical Studies</h1>
            <p>Natural Ingredients, clinically proven results</p>

          </div>
          {/* Modal start */}

          <Modal show={show2} onHide={handleClose2} backdrop="static" keyboard={false} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
            <Modal.Header closeButton>

            </Modal.Header>
            <div className={styles.mainModalDiv}>

              <div className={styles.modalImg}>
                {/* <div className={styles.modalImgTitle}>
          <p>Save an additional 10% use HEART at checkout</p>
          </div> */}
                <div className={styles.modalContentData}>
                  <div className={styles.brunoImgModal}>
                    <img src={modalImage2} alt='' />
                  </div>
                  <div className={styles.modaltitle}>
                    <h6>{modalTitle2}</h6>
                    <p>{modalsubTitle2}</p>
                  </div>
                </div>
              </div>

              <div className={styles.modalContent}>
                <div className={`accordion ${styles.Accordian}`}>
                  <div className="accordion-item">
                    <div className={`${styles.Accordian1} ${activeIndex === 0 ? styles.active : ''}`}>
                      <input
                        type="radio"
                        id="section1"
                        name="accordion"
                        checked={activeIndex === 0}
                        onChange={() => handleRadioChange(0)}
                      />
                      <label className={`accordion-button ${styles.accordianButton}`} htmlFor="section1">
                        ONE-TIME PURCHASE
                        <div className={styles.price}>
                          <span className={styles.dollar}>$</span>
                          <span className={styles.mainPrice}>58</span>
                          <span className={styles.cents}>.00</span>

                        </div>
                      </label>

                    </div>
                    {activeIndex === 0 && (
                      <div className={`accordion-content ${styles.accordionContent}`}>
                        <div className={styles.stocDiv}>
                          <h6 className={styles.stock}>In Stock.</h6>
                          {/* <div className={styles.customSelect}>
                            <select className={styles.selectDiv} value={selectedOption} onChange={handleSelectChange}>
                              <option value="1" className={styles.qty}>
                                Qty:1
                              </option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </select>
                            <p className={styles.unit}>1 Unit</p>

                          </div> */}
                          <div className={styles.cutomMainDiv}>
                          <div className={styles.customSelectnew}>
                            <div className={styles.qty}>Qty:</div>
                            <select className={styles.selectDivnew} >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="3">4</option>
                              <option value="3">5</option>
                              <option value="3">6</option>
                              <option value="3">7</option>
                              <option value="3">8</option>
                              <option value="3">9</option>
                              <option value="3">10</option>

                            </select>
                           
                          </div>
                          <p className={styles.unit}>1 Unit</p>
                          </div>
                          <div className={styles.addCartButton}><div>ADD TO CART</div> </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="accordion-item">
                    <div className={`${styles.Accordian2} ${activeIndex === 1 ? styles.active2 : ''}`}>
                      <input
                        className={styles.radioButton}
                        type="radio"
                        id="section2"
                        name="accordion"
                        checked={activeIndex === 1}
                        onChange={() => handleRadioChange(1)}
                      />
                      <label className="accordion-button" htmlFor="section2">  SUBSCRIBE & SAVE 20%
                        <div className={styles.price}>
                          <span className={styles.dollar}>$</span>
                          <span className={styles.mainPrice}>47</span>
                          <span className={styles.cents}>.00</span>
                          <span className={styles.offprice}>$58.98</span>
                        </div>
                      </label>
                    </div>
                    {activeIndex === 1 && (
                      <div className={`accordion-content ${styles.accordionContent}`}>
                        <div className={styles.saveContent}>
                          <div className={styles.stocDiv2}>
                            <div className={styles.save}>Save $11.80</div>
                            <div className={styles.savetext}>with Subscription</div>
                          </div>
                          <div className={styles.sectionbar2}>
                            <div>Don&apos;t miss this opportunity to save <b>20%</b> on this order and all future subscribe and save orders.</div>
                            <ul>
                              <li>No Fees</li>
                              <li>Cancel anytime</li>
                            </ul>
                          </div>
                          <div className={styles.sectionbar3}>
                            <div className={styles.LearnbText} onClick={toggleVisibility} >Learn more
                            </div>
                            <div className={`${styles.UpArrow} ${isVisible ? styles.rotate90 : ''}`} onClick={toggleVisibility}>
                              <svg class="flickity-button-icon" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg>
                            </div>
                          </div>
                          {isVisible && (
                            <div>
                              <p className={styles.desclimerText}>
                                There is no commitment and no minimum to buy. Please note
                                exact shipment times may vary. To customize future
                                shipments and changes, access your account in the Bruno MD
                                portal, or email customer care department at{' '}
                                <a href="mailto:customercare@brunopharma.com">
                                  customercare@brunopharma.com
                                </a>
                                .
                              </p>
                              <div className={styles.sectionbar4}>
                                <div className={styles.informatonText}>
                                  <p>HOW SUBSCRIBE & SAVE WORKS</p>
                                </div>
                                <div>
                                  <img className={styles.infoBtn} src="//cdn.shopify.com/s/files/1/0021/0573/7291/t/172/assets/information-button.svg?v=6467211743660140745" height="20" width="20" alt="Information button" />
                                </div>
                              </div>
                            </div>
                          )}
                          <div className={styles.stocDiv3}>
                            <h6 className={styles.stock2}>In Stock.</h6>
                            <div className={styles.cutomMainDiv}>
                          <div className={styles.customSelectnew}>
                            <div className={styles.qty}>Qty:</div>
                            <select className={styles.selectDivnew} >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="3">4</option>
                              <option value="3">5</option>
                              <option value="3">6</option>
                              <option value="3">7</option>
                              <option value="3">8</option>
                              <option value="3">9</option>
                              <option value="3">10</option>

                            </select>
                           
                          </div>
                          <p className={styles.unit}>1 Unit</p>
                          </div>


                            <div className={styles.customSelect3}>
                              <select className={styles.selectDiv3} value={selectedDay} onChange={handleDayChange}>
                                <option value="30 Day">30 Day</option>
                                <option value="60 Day">60 Day</option>
                                <option value="90 Day">90 Day</option>
                              </select>
                            </div>
                            <div className={styles.addCartButton}><div>SUBSCRIBE</div> </div>
                          </div>

                        </div>

                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

          </Modal>
          {/* Modale Open */}


          <Slider ref={c => (slider2 = c)}{...settings}>
            <div className={styles.slider3data}>
              <div className={styles.sliderContent}>
                <h6>For Healthy Skin, Hair & Bones</h6>
                <div className={styles.forscrollbar}>
                  <p className={styles.Pcontent}><b >Bruno MD Royal Collagen Peptides</b> are clinically proven to help produce new collagen at any age by stimulating your body’s own endogenous collagen production.Unlike standard collagen peptides, Bruno MD® uses patented technology to precisely cut collagen peptides that specifically target cartilage growth, firmer skin, and stronger bones.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}><b className={hoveredIndex === 1 ? styles.highlightedHeading : styles.heading}>Natural Vitamin C</b> Clinical studies prove that skin health is significantly improved when Royal Collagen Peptides are combined with natural vitamin C. Vitamin C is crucial for the formation (biosynthesis) of collagen.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}><b className={hoveredIndex === 0 ? styles.highlightedHeading : styles.heading} >Royal Collagen Peptides</b> increase collagen levels throughout the body by stimulating new collagen production at any age to restore cartilage, increase bone density, and strengthen bones</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}><b className={hoveredIndex === 2 ? styles.highlightedHeading : styles.heading}>Red Orange Complex</b>  maximizes collagen formation and strengthens immunity with 400% of the daily recommended value of Vitamin C. Dense flavonoids, anthocyanins, and phenolic compounds help prevent collagen degradation.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}><b className={hoveredIndex === 3 ? styles.highlightedHeading : styles.heading}>Bovine Source collagen </b>from free-range EU-certified sources is organic, non-GMO, halal, and kosher-certified, raised exclusively on a plant-based diet also provides the full bouquet of 18 essential and non-essential amino acids.</p>
                </div>
              </div>
              <div className={styles.sliderContentIMG}>
                <img src='/images/BrunoPharmaSlider.webp' alt='' />
              </div>
              <div className={styles.sliderContent3}>
                <div>
                  <h3>Royal Collagen Peptides</h3>
                  <h5>The Science of Beauty</h5>
                </div>
                <div className={styles.forRound}>
                  <div className={styles.round}
                    onMouseEnter={() => setHoveredIndex(0)}
                    onMouseLeave={() => setHoveredIndex(null)}><p >Royal Collagen Peptides</p></div>
                  <div className={styles.round}
                    onMouseEnter={() => setHoveredIndex(1)}
                    onMouseLeave={() => setHoveredIndex(null)}><p >Natural Vitamin C </p></div>
                  <div className={styles.round} onMouseEnter={() => setHoveredIndex(2)}
                    onMouseLeave={() => setHoveredIndex(null)}><p>Red Orange</p></div>
                  <div className={styles.round} onMouseEnter={() => setHoveredIndex(3)}
                    onMouseLeave={() => setHoveredIndex(null)}><p>Bovine Source collagen</p></div>
                </div>
                <hr className={styles.blackHr2} />
                <div className={styles.btnDivBuy}>
                  <div className={styles.roundBtn}><p onClick={() => hanldeShow2('/images/modalImgBrunoMd (1).webp', 'Royal Collagen Peptides', 'The Science of Beauty')}>Buy Now</p></div>
                </div>
              </div>
            </div>
            <div className={styles.slider3data}>
              <div className={styles.sliderContent}>
                <h6>For Healthy Cholesterol levels</h6>
                <div className={styles.forscrollbar}>
                  <p className={styles.Pcontent}><b >Heart disease</b> is one of the leading causes of death globally, so keeping cholesterol levels in check is crucial for preventing these serious health issues.
                    The clinically proven, natural ingredients in CholestQ10® are delivered with Phytosome® Technology. Phytosome delivers usually hard-to-absorb ingredients into your bloodstream with up to 3000% more bioavailability.
                  </p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}><b className={hoveredIndex === 0 ? styles.highlightedHeading : styles.heading}>Coenzyme Q10 </b>Phytosome® promotes healthy aging, heart & cardiovascular health, brain health, and all activities involving energetic expenditure.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}><b>Cardoon</b> contains active biophenols and flavonoids from an endemic variety of Cardoon leaf, inhibiting the creation of fatty lipids in the liver.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}><b className={hoveredIndex === 1 ? styles.highlightedHeading : styles.heading}>Natural Vitamin (E-d-alpha-tocopheryl succinate)</b> shields proteins, LDL cholesterol, and mitochondrial DNA against oxidative damage and reduces lipid peroxidation levels — the pivotal reaction in the cause of atherosclerosis.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}> <b className={hoveredIndex === 2 ? styles.highlightedHeading : styles.heading}>Bergamot Orange Extract Phytosome®</b>supports healthy cholesterol levels and governs the metabolic conditions that increase the risk of heart disease and TYPE II diabetes.</p>
                  <p className={styles.Pcontent}>  <b className={hoveredIndex === 3 ? styles.highlightedHeading : styles.heading}>Curcumin Phytosome® (Turmeric Extract)</b>supports healthy blood vessel function and guards against chronic inflammation.</p>

                </div>

              </div>
              <div className={styles.sliderContentIMG}>
                <img src='/images/BrunoPharmaSlider2.webp' alt='' />
              </div>
              <div className={styles.sliderContent3}>
                <div>
                  <h3>CholestQ10</h3>
                  <h5>The Science of Heart Health</h5>
                </div>
                <div className={styles.forRound}>
                  <div className={styles.round} onMouseEnter={() => setHoveredIndex(0)}
                    onMouseLeave={() => setHoveredIndex(null)}><p>Coenzyme</p></div>
                  <div className={styles.round} onMouseEnter={() => setHoveredIndex(1)}
                    onMouseLeave={() => setHoveredIndex(null)}><p>D-alpha-tocopheryl succinate</p></div>
                  <div className={styles.round} onMouseEnter={() => setHoveredIndex(2)}
                    onMouseLeave={() => setHoveredIndex(null)} ><p>Bergamot Orange Extract Phytosome®</p></div>
                  <div className={styles.round} onMouseEnter={() => setHoveredIndex(3)}
                    onMouseLeave={() => setHoveredIndex(null)}><p>Curcumin Phytosome®</p></div>
                </div>
                <hr className={styles.blackHr2} />
                <div className={styles.btnDivBuy}>
                  <div className={styles.roundBtn} ><p onClick={() => hanldeShow2('/images/modalImgBrunoMd2.webp', 'CholestQ10 60 v-caps', 'The Science of Heart Health')}>Buy Now</p></div>
                </div>
              </div>
            </div>
            <div className={styles.slider3data}>
              <div className={styles.sliderContent}>
                <h6>For a Healthy Inflammatory Response</h6>
                <div className={styles.forscrollbar}>
                  <p className={styles.Pcontent}><b>For a healthy inflammatory response</b> Inflammation is a leading cause of disease. Like high blood pressure, inflammation is a silent killer. Unlike high blood pressure, inflammation is often best managed without pharmacological intervention. Nature is the best medicine to put inflammation in check.The clinically proven, natural ingredients in Riboflam® are delivered with Phytosome® Technology. Phytosome delivers usually hard-to-absorb ingredients into your bloodstream with up to 3000% more bioavailability.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}><b className={hoveredIndex === 0 ? styles.highlightedHeading : styles.heading}>Natural Astaxanthin Extract</b> is harvested from algae and is proven to be the most potent antioxidant in nature. Astaxanthin’s superpower is reducing inflammation system-wide, which helps balance immune response and support brain and heart health.  </p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}><b className={hoveredIndex === 1 ? styles.highlightedHeading : styles.heading}>Curcumin Phytosome</b> comes from turmeric, which has been used in Asian cooking and cures since ancient times. It supports a healthy inflammation and immune response. Bruno MD’s Curcumin Phytosome is the #1 recommended formulation by the prestigious Cleveland Clinic.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}><b className={hoveredIndex === 4 ? styles.highlightedHeading : styles.heading}>Boswellia Serra Phytosome,</b> commonly known as Indian Frankincense, and Echinacea Angustifolia Phytosome are both proven to create a balanced inflammation response. Native Americans have used Echinacea as an anti-inflammatory for centuries.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}> <b className={hoveredIndex === 3 ? styles.highlightedHeading : styles.heading}>Nucleoflam Proprietary Nucleotides</b>
                    <b> & </b>
                    <b className={hoveredIndex === 5 ? styles.highlightedHeading : styles.heading}>Nucleosides Yeast Extract Complex</b> are involved in the development and functioning of immune cells and contribute to the growth and repair of the intestinal lining, which can help with intestinal inflammation.
                  </p>
                  <p className={styles.Pcontent}><b className={hoveredIndex === 2 ? styles.highlightedHeading : styles.heading}>Quercitin Phytosome</b> blocks inflammatory enzymes and the creation of cytokines and, like Astaxanthin, is a potent antioxidant, but you’ll need to eat 100 kilos of broccoli each day to get enough. Riboflam delivers 2000% more quercitin than standard supplements.
                  </p>
                </div>

              </div>
              <div className={styles.sliderContentIMG}>
                <img src='/images/BrunoPharmaSlider3.webp' alt='' />
              </div>
              <div className={styles.sliderContent3}>
                <div>
                  <h3>Riboflam </h3>
                  <h5>The Science of Longevity</h5>
                </div>
                <div className={styles.forRound}>
                  <div className={styles.round} onMouseEnter={() => setHoveredIndex(0)}
                    onMouseLeave={() => setHoveredIndex(null)}><p>Natural Astaxanthin Extract</p></div>
                  <div className={styles.round} onMouseEnter={() => setHoveredIndex(1)}
                    onMouseLeave={() => setHoveredIndex(null)}><p> Curcumin Phytosome</p></div>
                  <div className={styles.round} onMouseEnter={() => setHoveredIndex(2)}
                    onMouseLeave={() => setHoveredIndex(null)}><p>Quercetin Phytosome</p></div>
                  <div className={styles.round} onMouseEnter={() => setHoveredIndex(4)}
                    onMouseLeave={() => setHoveredIndex(null)}><p>Boswellia Serra Phytosome</p></div>
                  <div className={styles.round} onMouseEnter={() => setHoveredIndex(3)}
                    onMouseLeave={() => setHoveredIndex(null)}><p>Nucleoflam Proprietary Nucleotides</p></div>
                  <div className={styles.round} onMouseEnter={() => setHoveredIndex(5)}
                    onMouseLeave={() => setHoveredIndex(null)}><p>Nucleosides Yeast Extract Complex</p></div>

                </div>
                <hr className={styles.blackHr2} />
                <div className={styles.btnDivBuy}>
                  <div className={styles.roundBtn}><p onClick={() => hanldeShow2('/images/modalImgBrunoMd3.webp', 'Riboflam 90 v-caps', 'The Science of Longevity')}>Buy Now</p></div>
                </div>
              </div>
            </div>
            <div className={styles.slider3data}>
              <div className={styles.sliderContent}>
                <h6>For a Lifetime of 360º Vision Care</h6>
                <div className={styles.forscrollbar}>
                  <p className={styles.Pcontent}><b>Eye strain, Dry Eyes, Headaches & General Fatigue</b> are all signs of Computer Vision Syndrome. Ingredients in Bluerex Vision® are clinically proven to help alleviate symptoms of digital overexposure and protect your eyes from harmful blue light before it can damage the retina.The clinically proven, natural ingredients in Bluerex Vision® are delivered with Phytosome® Technology. Phytosome delivers usually hard-to-absorb ingredients into your bloodstream with up to 3000% more bioavailability.
                  </p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}><b className={hoveredIndex === 0 ? styles.highlightedHeading : styles.heading}>Astaxanthin’s</b> potent anti-inflammatory properties alleviate oxidative stress in the front of the eye and help reduce eye fatigue and strain, common symptoms of computer vision syndrome.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}><b className={hoveredIndex === 1 ? styles.highlightedHeading : styles.heading}>Lutein & Zeaxanthin</b> increase the macular pigments that filter harmful blue light before it can damage your retina. They are also antioxidants that protect the eyes against free radicals, improving visual performance and reducing the progression of certain eye conditions as we age.</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}><b className={hoveredIndex === 4 ? styles.highlightedHeading : styles.heading}>Bilberry Extract</b> is packed with anthocyanins, which promote healthy tear secretion, improve vision, increase retinal sensitivity (night vision), and help prevent common eye issues as we mature</p>
                  <hr className={styles.blackHr} />
                  <p className={styles.Pcontent}><b className={hoveredIndex === 2 ? styles.highlightedHeading : styles.heading}>D-Alpha Tocopheryl Succinate,</b> a natural form of Vitamin E, neutralizes oxidative damage and has been shown to reduce the risk of developing advanced age-related macular degeneration by 25% for subjects who have already demonstrated early signs of macular degeneration.</p>
                  <p className={styles.Pcontent}><b className={hoveredIndex === 3 ? styles.highlightedHeading : styles.heading}>Docosahexaenoic acid (DHA),</b> naturally derived from Schizochytrium sp marine alga, is a polyunsaturated omega-3 fatty acid accounting for up to 93% of the omega-3 fats in the retina.</p>
                </div>

              </div>
              <div className={styles.sliderContentIMG}>
                <img src='/images/BrunoPharmaSlider4.webp' alt='' />
              </div>
              <div className={styles.sliderContent3}>
                <div>
                  <h3>Blurex </h3>
                  <h5>The Science of Sight</h5>
                </div>
                <div className={styles.forRound}>
                  <div className={styles.round} onMouseEnter={() => setHoveredIndex(0)}
                    onMouseLeave={() => setHoveredIndex(null)} ><p>Astaxanthin</p></div>
                  <div className={styles.round} onMouseEnter={() => setHoveredIndex(1)}
                    onMouseLeave={() => setHoveredIndex(null)}><p>Lutein & Zeaxanthin</p></div>
                  <div className={styles.round} onMouseEnter={() => setHoveredIndex(2)}
                    onMouseLeave={() => setHoveredIndex(null)}><p>D-Alpha Tocopheryl Succinate</p></div>
                  <div className={styles.round} onMouseEnter={() => setHoveredIndex(3)}
                    onMouseLeave={() => setHoveredIndex(null)}><p>Docosahexaenoic acid</p></div>
                  <div className={styles.round} onMouseEnter={() => setHoveredIndex(4)}
                    onMouseLeave={() => setHoveredIndex(null)}><p>Bilberry Extract </p></div>
                </div>
                <hr className={styles.blackHr2} />
                <div className={styles.btnDivBuy}>
                  <div className={styles.roundBtn}><p onClick={() => hanldeShow2('/images/modalImgBrunoMd4.webp', 'Bluerex Vision 60 softgels', 'The Science of Sight')}>Buy Now</p></div>
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
              </div>

            </div>
            <div className={styles.RightBtn}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none" onClick={goToNext2}>
                  <path d="M36.834 26H6.50065" stroke="#7F7F7F" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M47.3087 25.7856L38.0443 20.227C37.5111 19.907 36.8327 20.2911 36.8327 20.913V31.087C36.8327 31.7089 37.5111 32.093 38.0443 31.773L47.3087 26.2144C47.4706 26.1173 47.4706 25.8827 47.3087 25.7856Z" fill="#7F7F7F" />
                </svg>
              </div>
            </div>
          </div>


        </div>

      </div>

    </div>

  );
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
export default Sciencedesktoppage;
