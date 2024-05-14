import styles from "./styles.module.css";
import { useMatchMedia } from "../Hooks/useMatchMedia";
import PurchaseBox from "@/utilities/PurchaseBox";
import Image from "next/image";
const ProductArticleModal = ({
  content,
  ModalHandler,
  priceBox = null,
  variantId = null,
}) => {
  const [isDesktopImage] = useMatchMedia("(min-width: 1024px)", true);
  if (priceBox) {
    return (
      <section className={styles.container}>
        <div className={styles.dFlexv2}>
          <img
            src={content.bannerDesk?.src}
            alt={content.bannerDesk?.alt}
            className={styles.col1}
            width={1000}
            height={600}
            loading="lazy"
          />
          <div className={styles.col2v2}>
            <PurchaseBox data={priceBox} variantId={variantId} />
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className={styles.container}>
        {isDesktopImage && (
          <div className={styles.dFlex}>
            <img
              src={content.bannerDesk?.src}
              alt={content.bannerDesk?.alt}
              className={styles.col1}
            />
            <div className={styles.col2}>
              <div
                className={styles.textContainer}
                style={{ "background-color": content.colorTheme }}
              >
                <div className={styles.wBorder}>
                  <p>
                    {false && <span className={styles.upperCase}></span>}
                    {content.title}
                  </p>
                </div>
                <div
                  className={styles.button}
                  style={{ color: content.colorTheme }}
                  onClick={ModalHandler}
                >
                  <h1 className={styles.buttonText}>{content.buttonTitle}</h1>
                  {content.buttonDescription && (
                    <p className={styles.ft10}>{content.buttonDescription}</p>
                  )}
                </div>
                <div
                  className={styles.offer}
                  style={{ color: content.offerTextColor }}
                >
                  <p className={styles.ft20}>{content.offerTagLine}</p>
                  {content.offerTagDescription && (
                    <p className={styles.ft10}>{content.offerTagDescription}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {!isDesktopImage && (
          <img
            src={content.bannerMob?.src || content.bannerDesk?.src}
            alt={content.bannerMob?.alt || content.bannerDesk?.alt}
            className={styles.mobIMG}
            onClick={ModalHandler}
          />
        )}
      </section>
    );
  }
};
export default ProductArticleModal;
