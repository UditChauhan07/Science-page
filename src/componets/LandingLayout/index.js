import MarkqueCarousel from "@/utilities/MarkqueCarousel";
import { WistiaHero } from "@/utilities/WistiaHero";
import AnnouncementBar from "@/utilities/announcementBar";
import PatnerData from "../../../json/parters.json";
import landingData from "../../../json/landing.json";
import layoutData from "../../../json/layout.json";
import Chat from "@/utilities/ChatBubble";
import PageHead from "@/utilities/Head";
import Footer from "@/utilities/Footer/";
import { NewsLetter } from "@/utilities/NewsLetter";
import ProductReviews from "@/utilities/ProductReviews";
import ImageAside from "@/utilities/Sections/ImageAside";
import ModalBoxInner from "@/utilities/ModalBoxInner";
import { useEffect, useState } from "react";
import ProductArticleModal from "@/utilities/Sections/ProductArticleModal";
import ProductTrustBadges from "@/utilities/ProductTrustBadges";
import Testimonial from "@/utilities/Testimonial";
import LandingBlog from "@/utilities/LandingBlog";
import FourStepProcess from "@/utilities/FourStepProcess";
import ReasonsToBelieve from "@/utilities/ReasonsToBelieve";
import SubscriptionBar from "@/utilities/SubscriptionBar";
import ProductSlideAccordion from "@/utilities/productSlideAccordion";
import StickyNav from "@/utilities/Nav";
import { getProduct, getSubscriptionDetails } from "@/data/lib";
import { useMatchMedia } from "@/utilities/Sections/Hooks/useMatchMedia";
import PriceBoxModal from "@/utilities/ModalBoxInner/priceBox";
import Loader2 from "@/utilities/Loader/index2";
import Amazon from "@/utilities/ProductReviews/amozon";
import StickyPriceBox from "@/utilities/StickyPriceBox";
import Collagen from "@/utilities/Collagen";
import CollagenPeptides from "@/utilities/CollagenPeptides";
import { HomeGallery } from "@/utilities/HomeGallery";
import FeatureInfo from "@/utilities/FeatureInfo";
import ScienceVideos from "@/utilities/ScienceVideos";
import ProductsBlogData from "../../../json/productBlog.json";

const LandingPage = ({ page }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedType, setClickedType] = useState("Subscribe");
  const [shopifyP, setSProduct] = useState();
  const [rechargeProduct, setRProduct] = useState();
  const [isDesktopModal] = useMatchMedia("(min-width: 767px)", true);
  const ModalHandler = (e) => {
    const { value } = e.target.dataset;
    if (value) {
      setClickedType(value);
    } else {
      setClickedType("Subscribe");
    }
    setIsOpen(!isOpen);
  };
  const pageData = landingData[page] || {};
  let BlogData = ProductsBlogData[pageData.externalId];
  useEffect(() => {
    if (pageData?.externalId) {
      const productId = `gid://shopify/Product/${pageData.externalId}`;
      const EXTERNALID = pageData.externalId;
      getProduct({ productId })
        .then((response) => {
          let product = response?.data?.product;
          setSProduct(product);
        })
        .catch((err) => {
          console.log({ err });
        });
      getSubscriptionDetails({ EXTERNALID })
        .then((data) => {
          // console.warn({data,EXTERNALID});
          if (data.plans.length) {
            if (data?.plans?.length) {
              let freq = [];
              data.plans.map((element) => {
                if (element.subscription_preferences.charge_interval_frequency)
                  freq.push({
                    id: element.subscription_preferences
                      .charge_interval_frequency,
                    value:
                      element.subscription_preferences
                        .charge_interval_frequency +
                      " " +
                      element.subscription_preferences.interval_unit,
                  });
              });
              freq.sort((a, b) => {
                if (a.value < b.value) {
                  return -1;
                }
                if (a.value > b.value) {
                  return 1;
                }
              });
              setRProduct({
                product_id: pageData.externalId,
                subscription_preferences: freq,
              });
            }
            if (response?.selling_plan_groups?.length > 0) {
              let freqs = [];
              response.selling_plan_groups[0].selling_plans.map((plans) => {
                if (plans.order_interval_frequency) {
                  freqs.push({
                    id: `gid://shopify/SellingPlan/${plans.selling_plan_id}`,
                    value: plans.order_interval_frequency + " Days",
                  });
                }
              });
              freqs.sort((a, b) => {
                if (a.value < b.value) {
                  return -1;
                }
                if (a.value > b.value) {
                  return 1;
                }
              });
              setRProduct({
                product_id: pageData.externalId,
                subscription_preferences: freqs,
              });
            }
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      window.location.href = window.location.origin + "/404-page";
    }
  }, []);
  if (!shopifyP) return <Loader2 />;
  return (
    <>
      {pageData?.externalId && (
        <>
          <PageHead content={pageData.seo} />
          {pageData?.announcement && (
            <AnnouncementBar
              announcement={pageData.announcement.title}
              theme={pageData.announcement.theme}
              ModalHandler={ModalHandler}
            />
          )}
          {pageData?.nav && <StickyNav theme={pageData.announcement.theme} />}
          {pageData?.wistiaVideoId && (
            <WistiaHero
              id={pageData.wistiaVideoId}
              content={{ buyNow: true, ModalHandler }}
              theme={pageData.announcement.theme}
              video={pageData.video}
              mobId={pageData.wistiaMobileId}
            />
          )}
          {pageData?.bottomBar && (
            <>
              {pageData?.isPriceBoxModal && isDesktopModal ? (
                <PriceBoxModal
                  content={pageData.bottomBar}
                  priceBox={{
                    EXTERNALID: pageData.externalId,
                    priceBox: pageData.ProductArticleModal.priceBox,
                    freq: rechargeProduct?.subscription_preferences,
                    theme: pageData.theme,
                    price: shopifyP?.variants?.edges?.length
                      ? parseFloat(
                          shopifyP.variants.edges[0].node?.price?.amount
                        )
                      : 0,
                  }}
                  variantId={pageData.variantId}
                  isOpen={isOpen}
                  theme={pageData.theme2 ? pageData.theme2 : pageData.theme}
                  ModalHandler={ModalHandler}
                />
              ) : (
                <ModalBoxInner
                  content={pageData.bottomBar}
                  isOpen={isOpen}
                  ModalHandler={ModalHandler}
                  externalId={pageData.externalId}
                  productVariantId={pageData.variantId}
                  clickedType={clickedType}
                  version={"ENG"}
                  themed={pageData.theme}
                  isCheckout={true}
                />
              )}
            </>
          )}
          {PatnerData && <MarkqueCarousel image={PatnerData} />}
          {pageData?.isSticky && (
            <StickyPriceBox
              priceDescription={{
                EXTERNALID: pageData.externalId,
                priceBox: pageData.ProductArticleModal.priceBox,
                freq: rechargeProduct?.subscription_preferences,
                theme: pageData.theme,
                price: shopifyP?.variants?.edges?.length
                  ? parseFloat(shopifyP.variants.edges[0].node?.price?.amount)
                  : 0,
              }}
              variantId={pageData.variantId}
            />
          )}
          {pageData?.ImageAside && (
            <ImageAside
              content={pageData.ImageAside}
              theme={pageData.announcement.theme}
              isLayout={pageData.isFontLayout}
            />
          )}
          {pageData?.ProductArticleModal && (
            <ProductArticleModal
              content={pageData.ProductArticleModal}
              ModalHandler={ModalHandler}
              priceBox={{
                EXTERNALID: pageData.externalId,
                priceBox: pageData.ProductArticleModal.priceBox,
                freq: rechargeProduct?.subscription_preferences,
                theme: pageData.theme,
                price: shopifyP?.variants?.edges?.length
                  ? parseFloat(shopifyP.variants.edges[0].node?.price?.amount)
                  : 0,
              }}
              variantId={pageData.variantId}
            />
          )}
          {pageData?.ProductSlideAccordion && (
            <ProductSlideAccordion
              content={pageData.ProductSlideAccordion}
              theme={pageData.theme}
              ModalHandler={ModalHandler}
              isFontLayout={pageData.isFontLayout}
            />
          )}
          {pageData?.ProductTrustBadges && (
            <ProductTrustBadges
              images={pageData.ProductTrustBadges}
              backgroundColor={pageData.theme}
            />
          )}
          {pageData?.testimonial && (
            <Testimonial
              content={{
                slides: pageData.testimonial,
                theme: pageData.theme,
                invertDesign: false,
                title: "Our Believers",
                subTitle: "See what BrunoMD customers have to say.",
              }}
            />
          )}
          {pageData?.FourStepProcess && (
            <FourStepProcess
              processCards={pageData.FourStepProcess.items}
              theme={pageData.theme}
              header={pageData.FourStepProcess.title}
              stepAlignment={true}
              centerAlign
              isFontLayout={pageData.isFontLayout}
            />
          )}
          {pageData?.Collagen && (
            <Collagen
              content={pageData.Collagen}
              theme={pageData.theme}
              theme3={pageData.theme3 ? pageData.theme3 : ""}
              isLayout={pageData.isFontLayout}
            />
          )}
          {pageData?.CollagenPeptides && (
            <CollagenPeptides
              content={pageData.CollagenPeptides}
              theme={pageData.theme}
              theme3={pageData.theme3 ? pageData.theme3 : ""}
              isLayout={pageData.isFontLayout}
            />
          )}
          {pageData?.ReasonsToBelieve && (
            <ReasonsToBelieve
              ingredients={pageData.ReasonsToBelieve.ingredients}
              content={pageData.ReasonsToBelieve.items}
              theme={pageData.theme}
              product={pageData.product}
              readMoreLabel={pageData.ReasonsToBelieve.readMoreLabel}
              accordanTitle={""}
              versionV2={pageData.ReasonsToBelieve.versionV2}
              isFontLayout={pageData.isFontLayout}
            />
          )}
          {pageData?.ScienceVideos && (
            <ScienceVideos
              data={pageData.ScienceVideos}
              theme={pageData.theme}
            />
          )}
          {BlogData?.Blog && (
            <LandingBlog
              data={BlogData.Blog}
              theme={pageData.theme}
              productString={pageData.externalId}
              isLanding={BlogData.is_landing}
            />
          )}
          {pageData?.externalId && !pageData?.isHideScript && (
            <ProductReviews variantId={pageData.externalId} />
          )}
          {pageData?.amazonReview && (
            <Amazon content={pageData?.amazonReview} />
          )}
          {pageData?.homeGallery && !pageData?.isHideScript && (
            <HomeGallery
              id={pageData.homeGallery.id}
              galleryId={pageData.homeGallery.galleryId}
              desc={pageData.homeGallery.title}
              isreviews={false}
              theme={pageData.theme}
            />
          )}
          {pageData?.NewsLetter && !pageData?.isHideScript && (
            <NewsLetter content={pageData.NewsLetter} />
          )}
          {pageData?.featureInfo && (
            <FeatureInfo
              infoBanners={layoutData["ENG"].featureInfo}
              theme={pageData.theme}
            />
          )}
          {!pageData?.chat && !pageData?.isHideScript && <Chat />}
          {pageData?.footer && (
            <Footer data={pageData.footer} isLanding={true} />
          )}
          {!isOpen && (
            <SubscriptionBar
              content={pageData.bottomBar}
              ModalHandler={ModalHandler}
              active={clickedType}
              themed={pageData.theme2 ? pageData.theme2 : pageData.theme}
              themea={pageData.textTheme ? pageData.textTheme : ""}
            />
          )}
        </>
      )}
    </>
  );
};
export default LandingPage;
