import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import MarkqueCarousel from "@/utilities/MarkqueCarousel";
import TrustBadge from "@/utilities/TrustBadges";
import { NewsLetter } from "@/utilities/NewsLetter";
import PatnerData from "../../../json/parters.json";
import TrustBadgeData from "../../../json/trustBages.json";
import ProductsData from "../../../json/products.json";
import ProductCard from "@/utilities/ProductCard";
import BenefitCards from "@/utilities/BenefitCards";
import Tabs from "@/utilities/Tabs";
import PageHead from "@/utilities/Head";
import Loader2 from "@/utilities/Loader/index2";
import ProductReviews from "@/utilities/ProductReviews";
import FourStepProcess from "@/utilities/FourStepProcess";
import ProductTrustBadges from "@/utilities/ProductTrustBadges";
import Testimonial from "@/utilities/Testimonial";
import { HomeGallery } from "@/utilities/HomeGallery";
import { getProduct, getSubscriptionDetails } from "@/data/lib";
import AnnouncementBar from "@/utilities/announcementBar";
import Amazon from "@/utilities/ProductReviews/amozon";
import StickyPriceBox from "@/utilities/StickyPriceBox";

const Product = ({ version }) => {
  const [load, setLoad] = useState(true);
  const [product, setProduct] = useState();
  const [shopifyP, setSProduct] = useState();
  const [rechargeProduct, setRProduct] = useState();

  const {
    title,
    details,
    newsletter,
    fourStepProcess,
    theme,
    EXTERNALID,
    STOREFRONTID,
    SLUG,
    benefits,
    priceBox,
    seo,
    testimonial,
    homeGallery,
    bottomBar,
    review,
    amazonReview,
  } = product || {};
  useEffect(() => {
    let url = window.location.href;
    let splitUrl = url.split("/products/");
    if (splitUrl.length == 2) {
      let queryString = splitUrl[1].split("?");
      let product = ProductsData[queryString[0]];
      if (product?.EXTERNALID) {
        const productId = `gid://shopify/Product/${product.EXTERNALID}`;
        if (EXTERNALID && shopifyP?.id != productId) {
          getProduct({ productId })
            .then((response) => {
              let product = response?.data?.product;
              setSProduct(product);
              setLoad(false);
            })
            .catch((err) => {
              console.log({ err });
            });
        }
        if (
          EXTERNALID &&
          (!rechargeProduct?.product_id ||
            rechargeProduct?.product_id != EXTERNALID)
        ) {
          getSubscriptionDetails({ EXTERNALID })
            .then((data) => {
              // console.warn({data,EXTERNALID});
              if (data.plans.length) {
                let freq = [];
                if (data?.plans?.length) {
                  let freq = [];
                  data.plans.map((element) => {
                    if (
                      element.subscription_preferences.charge_interval_frequency
                    )
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
                    product_id: EXTERNALID,
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
                    product_id: EXTERNALID,
                    subscription_preferences: freqs,
                  });
                }
              }
            })
            .catch((err) => {
              console.log(err.message);
            });
        }

        setProduct(product);
      } else {
        window.location.href = "/";
      }
    } else {
      window.location.href = "/";
    }
  }, [load, shopifyP, product, rechargeProduct]);
  //
  if (load) return <Loader2 />;
  return (
    <section style={{ margin: "2rem auto" }}>
      <PageHead content={seo} />
      {true && (
        <ProductCard
          data={{
            images: shopifyP.images.edges,
            declaimer: {
              title: shopifyP.title,
              content: shopifyP.descriptionHtml,
            },
            priceDescription: {
              EXTERNALID,
              STOREFRONTID,
              SLUG,
              price: shopifyP?.variants?.edges?.length
                ? parseFloat(shopifyP.variants.edges[0].node?.price?.amount)
                : 0,
              theme,
              priceBox,
              freq: rechargeProduct?.subscription_preferences,
            },
            review,
          }}
          variantId={shopifyP.variants.edges[0].node?.id}
        />
      )}
      {true && (
        <StickyPriceBox
          priceDescription={{
            EXTERNALID,
            STOREFRONTID,
            SLUG,
            price: shopifyP?.variants?.edges?.length
              ? parseFloat(shopifyP.variants.edges[0].node?.price?.amount)
              : 0,
            theme,
            priceBox,
            freq: rechargeProduct?.subscription_preferences,
          }}
          variantId={shopifyP.variants.edges[0].node?.id}
        />
      )}
      {benefits && <BenefitCards data={benefits} productColorTheme={theme} />}
      {product?.ProductTrustBadges && (
        <ProductTrustBadges images={product.ProductTrustBadges} />
      )}
      <Tabs
        data={details}
        productColorTheme={theme}
        productString={product.EXTERNALID}
      />
      {fourStepProcess?.content && false && (
        <FourStepProcess
          processCards={fourStepProcess.content}
          theme={theme}
          header={fourStepProcess.title}
          buttonTittle={fourStepProcess.buttonTittle}
          stepAlignment={fourStepProcess.stepAlignment}
        />
      )}
      <TrustBadge
        contents={TrustBadgeData[version]}
        productColorTheme={theme}
      />
      <MarkqueCarousel image={PatnerData} />
      {testimonial && (
        <Testimonial
          content={{
            slides: testimonial,
            title: "Our Believers",
            subTitle: "See what BrunoMD customers have to say.",
            theme: theme,
          }}
        />
      )}
      {homeGallery && (
        <HomeGallery
          id={homeGallery.id}
          galleryId={homeGallery.galleryId}
          productid={EXTERNALID}
        />
      )}
      {!review && (
        <div style={{ margin: "2rem auto" }}>
          <ProductReviews variantId={EXTERNALID} />
        </div>
      )}
      {amazonReview && <Amazon content={amazonReview} />}
      <NewsLetter content={newsletter} />
      <div className={styles.bottomBar}>
        <AnnouncementBar
          announcement={bottomBar.content}
          theme={{
            backgroundColor: bottomBar.color,
            color: bottomBar.textColor,
          }}
          position={true}
        />
      </div>
    </section>
  );
};
export default Product;
