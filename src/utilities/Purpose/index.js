//import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
const Cards = ({ contents }) => {
  const { image, title, paragraphs, buttonText, buttonUrl, linkTitle } =
    contents;
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.ourPurposeContainer}>
          <Image
            className={styles.ourPurposeImage}
            width={800}
            height={800}
            src={image?.src}
            alt={image?.alt || "...."}
          />
          <div className={styles.textBodyOuterContainer}>
            <h1 className={styles.textBodyHeader}>{title}</h1>
            <div className={styles.textBodyContainer}>
              {paragraphs.map((e, i) => {
                return (
                  <p className={styles.textBodyParagraph} key={i}>
                    {e}
                  </p>
                );
              })}
            </div>
            <div>
              <div
                className={styles.ourPurposeButton}
                onClick={() => (window.location.href = buttonUrl)}
              >
                {buttonText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cards;