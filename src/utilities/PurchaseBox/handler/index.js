import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import PriceBox from "../priceBox";
const Handler = ({
  data,
  variantId,
  ActiveBox = null,
  IsActiveStatusHandler = null,
  isSticky = false,
}) => {
  useEffect(() => {}, [data]);
  const [oneTimePrice, setOneTimePrice] = useState(
    parseFloat(data?.price).toFixed(2)
  );
  const [DiscountPrice, setDiscountPrice] = useState(
    (data?.price * (data?.priceBox.discount / 100)).toFixed(2)
  );
  const [subscribePrice, setSubscribePrice] = useState(
    (data?.price - data?.price * (data?.priceBox.discount / 100)).toFixed(2)
  );
  const [oneTimeDiscountPrice, setOneTimeDiscountPrice] = useState(
    (
      data?.price -
      data?.price * ((data?.priceBox?.oneTime?.discountPer || 0) / 100)
    ).toFixed(2)
  );
  const [OTST, setOTST] = useState(oneTimePrice.split("."));
  const [SEST, setSEST] = useState(subscribePrice.split("."));
  const [OTDST, setOTDST] = useState(oneTimeDiscountPrice.split("."));
  const [isActive, setIsActive] = useState(ActiveBox || 2);
  if (!data) return null;
  const isActiveHandler = (value) => {
    setIsActive(value);
    if (IsActiveStatusHandler) IsActiveStatusHandler(value);
  };
  return (
    <div className={styles.accordionItem}>
      <div
        className={`${styles.accordionTitle} { ${
          isActive == 1 && styles.isSticky
        } { ${isActive == 1 && styles.accordionTitleActive} ${
          isActive == 1 && styles.p25_15
        }`}
        onClick={() => isActiveHandler(1)}
        style={
          isActive == 2 && data.priceBox.subscribe.themeColor
            ? { background: data.theme, color: "#fff" }
            : {}
        }
      >
        <div className={styles.flex}>
          <div className={styles.circle}>
            {isActive == 1 && (
              <div
                className={styles.circleActive}
                style={
                  data.priceBox.isPriceBoxTheme
                    ? { background: data.theme }
                    : {}
                }
              ></div>
            )}
          </div>
          <div className={styles.title}>
            {data.priceBox?.oneTime?.title
              ? data.priceBox?.oneTime?.title
              : "Acquisto singolo"}
          </div>
        </div>
        <div className={styles.price}>
          <div className={styles.titlePrice}>$</div>
          <div className={styles.priceFirstIndex}>
            {data.priceBox.isCheckoutRedirected ? OTDST[0] : OTST[0]}
          </div>
          <div className={styles.titlePrice}>
            .{data.priceBox.isCheckoutRedirected ? OTDST[1] : OTST[1]}
          </div>
          &nbsp;{" "}
          {data.priceBox.isCheckoutRedirected &&
            data.priceBox?.oneDiscounted && (
              <div
                className={styles.crossed}
                style={
                  isActive == 2 && data.priceBox.subscribe.themeColor
                    ? { color: "#fff" }
                    : {}
                }
              >
                ${oneTimePrice}
              </div>
            )}
        </div>
      </div>
      {isActive == 1 && (
        <div className={` ${isActive == 1 && styles.isSticky}`}>
          <PriceBox isActive={isActive} data={data} variantId={variantId} />
        </div>
      )}
      <div
        className={`${styles.accordionTitle} ${
          isActive == 2 && styles.accordionTitleActive
        } ${isActive == 2 && styles.isSticky}`}
        onClick={() => isActiveHandler(2)}
        style={
          isActive == 1 && data.priceBox.subscribe.themeColor
            ? { background: data.theme, color: "#fff" }
            : {}
        }
      >
        <div className={styles.flex}>
          <div className={styles.circle}>
            {isActive == 2 && (
              <div
                className={styles.circleActive}
                style={
                  data.priceBox.isPriceBoxTheme
                    ? { background: data.theme }
                    : {}
                }
              ></div>
            )}
          </div>
          <div className={styles.title}>
            {data.priceBox?.subscribe?.title
              ? data.priceBox?.subscribe?.title
              : "Acquisto periodico"}
          </div>
        </div>
        <div className={styles.price}>
          <div className={styles.titlePrice}>$</div>
          <div className={styles.priceFirstIndex}>{SEST[0]}</div>
          <div className={styles.titlePrice}>.{SEST[1]}</div> &nbsp;
          <div
            className={styles.crossed}
            style={
              isActive == 1 && data.priceBox.subscribe.themeColor
                ? { color: "#fff" }
                : {}
            }
          >
            {" "}
            ${oneTimePrice}
          </div>
        </div>
        <div className={styles.titleDesc}>
          <div className={styles.saveInfo}>
            {data.priceBox?.subscribe?.saveLabel} ${DiscountPrice}
          </div>
          {data.priceBox?.subscribe?.extraLabel && (
            <div className={styles.saveText}>
              {data.priceBox?.subscribe?.extraLabel}
            </div>
          )}
        </div>
      </div>
      {isActive == 2 && (
        <div className={` ${isActive == 2 && styles.isSticky}`}>
          <PriceBox isActive={isActive} data={data} variantId={variantId} />
        </div>
      )}
    </div>
  );
};

export default Handler;
