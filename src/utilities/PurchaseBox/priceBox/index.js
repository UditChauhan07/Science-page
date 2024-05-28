import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import SupplementalInfo from "@/utilities/SupplementalInfo";
import Spinner from "@/utilities/Loader/index1";
import SubscribeProduct from "../../../../json/subscribe.json";
import {
  AddtoCart,
  RechargeCart,
  RechargeCartAItemRemove,
  addCartItems,
} from "@/data/lib";
import { useRouter } from "next/navigation";
import { Decrypt } from "@/data/Auth";

const PriceBox = ({ isActive, data, variantId }) => {
  const router = useRouter();
  const [learnMore, setLearnMore] = useState(false);
  const [detailsMore, setDetailsMore] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(true);
  const [subscriptionInit, setInit] = useState(false);
  const [currentShippingInterval, setCurrentShippingInterval] = useState(30);
  const [freqText, setFreq] = useState();
  const [color, setColor] = useState(
    data?.priceBox?.isCheckoutTheme ? data.theme : "#ffffff"
  );
  const [background, setBackgroundColor] = useState(
    data?.priceBox?.isCheckoutTheme ? "#ffffff" : data.theme
  );
  useEffect(() => {
    if (isActive == 2 && data?.freq?.length > 0) {
      setCurrentShippingInterval(data?.freq[0]?.id);
      if (!subscriptionInit) {
        setIsAddingToCart(false);
        setInit(true);
      }
    }
    if (isActive == 1) {
      if (!subscriptionInit) {
        setIsAddingToCart(false);
        setInit(true);
      }
    }
    if (data?.priceBox?.isCheckoutTheme) {
      const onMouseEnter = () => {
        setColor("#ffffff" || "#56008C");
        setBackgroundColor(data?.theme || "#56008C");
      };

      const onMouseLeave = () => {
        setColor(data.theme);
        setBackgroundColor("#ffffff");
      };
      document
        .getElementById("checkoutBtnContainer")
        ?.addEventListener("mouseenter", onMouseEnter);
      document
        .getElementById("checkoutBtnContainer")
        ?.addEventListener("mouseleave", onMouseLeave);
    }
  }, [data]);
  if (!data) return null;
  const QUANTITY_OPTIONS = [...Array(data?.priceBox.maxQty).keys()].map(
    (n) => n + 1
  );
  const buttonText =
    isActive == 2
      ? data.priceBox?.subscribe?.btnText
      : data.priceBox?.oneTime?.btnText;

  const handleQuantityChange = (e) => {
    const { value } = e.target;
    setQuantity(+value);
  };

  const handleFreqChange = (e) => {
    const { value } = e.target;
    setFreq(value);
    setCurrentShippingInterval(parseInt(value));
  };

  const cartHandler = () => {
    setIsAddingToCart(true);
    let cId = localStorage.getItem("l8Z2364#TEa");
    let lineItemsToAdd = [];
    let oneTimeDiscount = data.priceBox?.oneTime?.discount || [];
    let discountCheck = Array.isArray(oneTimeDiscount);
    if (!discountCheck) {
      oneTimeDiscount = [data.priceBox?.oneTime?.discount];
    }
    if (isActive == 1) {
      lineItemsToAdd = [
        {
          merchandiseId: variantId,
          quantity,
        },
      ];
      let variantIdFull = variantId.split("ProductVariant/");
      let vId = null;
      if (variantIdFull.length == 2) {
        vId = variantIdFull[1];
      } else {
        vId = `${SubscribeProduct[data?.EXTERNALID]?.variatntId}`;
      }
      if (data.priceBox.isCheckoutRedirected) {
        AddtoCart({
          lineItems: lineItemsToAdd,
          customerAccessToken: Decrypt(),
          discountCodeList: oneTimeDiscount || [],
        })
          .then((response) => {
            let checkoutUrl = response?.data?.cartCreate?.cart?.checkoutUrl;
            // if(response?.data.priceBox?.oneTime?.discount){
            // checkoutUrl += "?discount="+data.priceBox?.oneTime?.discount
            // }
            router.push(checkoutUrl);
          })
          .catch((err) => {
            console.log({ err });
          });
      } else {
        RechargeCart({
          items: [
            {
              external_product_id: {
                ecommerce: `${data?.EXTERNALID}`,
              },
              external_variant_id: {
                ecommerce: vId,
              },
              quantity,
            },
          ],
        })
          .then((response) => {
            if (response?.status == 200) {
              if (cId) {
                addCartItems({
                  items: lineItemsToAdd,
                  customerAccessToken: Decrypt(),
                })
                  .then((response) => {
                    if (response?.data?.cartLinesAdd?.userErrors?.length) {
                      if (response?.data?.cartLinesAdd?.userErrors[0].message) {
                        if (
                          response?.data?.cartLinesAdd?.userErrors[0].message ==
                          "The specified cart does not exist."
                        ) {
                          AddtoCart({
                            lineItems: lineItemsToAdd,
                            customerAccessToken: Decrypt(),
                            discountCodeList: oneTimeDiscount || [],
                          })
                            .then((response) => {
                              let id = response?.data?.cartCreate?.cart?.id;
                              localStorage.setItem("l8Z2364#TEa", id);
                              router.push("/cart");
                            })
                            .catch((err) => {
                              console.log({ err });
                            });
                        }
                      }
                    } else {
                      router.push("/cart");
                    }
                  })
                  .catch((err) => {
                    console.log({ err });
                  });
              } else {
                AddtoCart({
                  lineItems: lineItemsToAdd,
                  customerAccessToken: Decrypt(),
                  discountCodeList: oneTimeDiscount || [],
                })
                  .then((response) => {
                    let id = response?.data?.cartCreate?.cart?.id;
                    if (id) {
                      localStorage.setItem("l8Z2364#TEa", id);
                      router.push("/cart");
                    } else {
                      if (response?.data?.cartCreate?.userErrors?.length) {
                        if (response?.data?.cartCreate?.userErrors[0].message) {
                          if (
                            response?.data?.cartCreate?.userErrors[0].message ==
                            "The specified cart does not exist."
                          ) {
                            AddtoCart({
                              lineItems: lineItemsToAdd,
                              customerAccessToken: Decrypt(),
                              discountCodeList: oneTimeDiscount || [],
                            })
                              .then((response) => {
                                let id = response?.data?.cartCreate?.cart?.id;
                                localStorage.setItem("l8Z2364#TEa", id);
                                router.push("/cart");
                              })
                              .catch((err) => {
                                console.log({ err });
                              });
                          }
                        }
                      }
                    }
                  })
                  .catch((err) => {
                    console.log({ err });
                  });
              }
            } else {
              throw new Error(response?.data);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      if (SubscribeProduct[data?.EXTERNALID]?.subscriptionProductId) {
        RechargeCart({
          isNotToken: true,
          items: [
            {
              external_product_id: {
                ecommerce: `${
                  SubscribeProduct[data?.EXTERNALID].subscriptionProductId
                }`,
              },
              external_variant_id: {
                ecommerce: `${
                  SubscribeProduct[data?.EXTERNALID]
                    .subscriptionProductVariantId
                }`,
              },
              quantity,
              subscription_preferences: {
                charge_interval_frequency: currentShippingInterval,
                cutoff_day_of_month: null,
                cutoff_day_of_week: null,
                expire_after_specific_number_of_charges: null,
                interval_unit: "day",
                order_day_of_month: null,
                order_day_of_week: null,
                order_interval_frequency: currentShippingInterval,
              },
            },
          ],
        })
          .then((response) => {
            if (response?.status == 200) {
              if (data.priceBox.isCheckoutRedirected) {
                let url = `https://checkout.rechargeapps.com/r/checkout/${response?.data?.checkout?.token}`;
                router.push(url);
              } else {
                router.push("/cart");
              }
            } else {
              throw new Error(response?.data);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        throw new Error("This Product Can't Subscribe for now");
      }
    }
  };
  return (
    <div className={styles.accordionItem}>
      <div className={styles.accordionContent}>
        <div style={styles.row}>
          {isActive == 2 && (
            <>
              <div className={styles.section2} id="section2">
                {data.priceBox.subscriptionDetails && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.priceBox.subscriptionDetails,
                    }}
                  />
                )}
              </div>
              {data?.priceBox.moreInfoBtnText && (
                <div
                  className={styles.section3}
                  style={{ color: data.theme }}
                  onClick={() => setLearnMore(!learnMore)}
                >
                  {data?.priceBox.moreInfoBtnText}
                  <div
                    className={learnMore ? styles.upArrow : styles.downArrow}
                  >
                    <svg class="flickity-button-icon" viewBox="0 0 100 100">
                      <path
                        d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                        class="arrow"
                        transform="translate(100, 100) rotate(180) "
                      ></path>
                    </svg>
                  </div>
                </div>
              )}
              {learnMore && (
                <div className={styles.m5}>
                  <SupplementalInfo
                    moneyBackInfo={data?.priceBox.moneyBackInfo}
                    termPurchase={data?.priceBox?.termPurchase}
                    interval={freqText || data?.freq[0].id}
                  />
                </div>
              )}
            </>
          )}
          <div
            className={styles.section4}
            id={+"_stockHolder"}
            style={
              data?.priceBox?.isStockBack
                ? { color: "#000" }
                : data?.priceBox?.isStockTheme
                ? { color: data.theme }
                : {}
            }
          >
            {data?.priceBox?.stock}
          </div>
          <div className={styles.flex}>
            <div className={styles.selectDiv}>
              <div
                className={styles.quntity}
                style={
                  data.priceBox.isPriceBoxTheme ? { color: data.theme } : {}
                }
              >
                {data.priceBox?.qtyLabelText
                  ? data.priceBox?.qtyLabelText
                  : "QTY"}
                :
              </div>
              <select
                className={styles.selectNon}
                style={
                  data.priceBox.isPriceBoxTheme ? { color: data.theme } : {}
                }
                aria-label="quantity"
                onChange={handleQuantityChange}
              >
                {QUANTITY_OPTIONS.map((val) => (
                  <option key={val} value={val}>
                    {`${val}`}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.section5_2}>
              {data.priceBox.qtyUnitMultiplierLabel &&
                quantity * data.priceBox.defaultQtyMultiplayer}{" "}
              {data.priceBox.qtyUnitMultiplierLabel}
              {data.priceBox.qtyExtraDesc && (
                <>
                  {" "}
                  (
                  {data.priceBox.qtyMultiplierShowOnExtraDesc &&
                    quantity * data.priceBox.defaultQtyMultiplayer}{" "}
                  {data.priceBox.qtyExtraDesc})
                </>
              )}
            </div>
          </div>
          {isActive == 2 && (
            <div className={styles.section6_2}>
              <b className={styles.freqLabel}>
                {data.priceBox?.freqLabelText
                  ? data.priceBox?.freqLabelText
                  : "Consegna ogni"}
                :
              </b>
              <select
                className={styles.freq}
                onChange={handleFreqChange}
                aria-label="frequency"
                style={
                  data.priceBox.isPriceBoxTheme ? { color: data.theme } : {}
                }
              >
                {data.freq?.length &&
                  data.freq?.map((val) => (
                    <option key={val.id} value={val.id}>
                      {val.value}
                    </option>
                  ))}
              </select>
            </div>
          )}
          {/*  onClick={CreateCart} */}
          {!data?.priceBox?.oneTime?.stock ? (
            <>
              <div className={styles.flex}>
                <div
                  className={styles.buyNowBtn}
                  id="checkoutBtnContainer"
                  style={
                    !subscriptionInit
                      ? { background: data.theme }
                      : data?.priceBox?.isCheckoutTheme
                      ? {
                          background,
                          border: `2px solid ${data.theme}`,
                          color,
                          fontWeight: "bolder",
                        }
                      : {}
                  }
                  onClick={() => cartHandler()}
                >
                  <p>
                    {isAddingToCart ? (
                      <Spinner
                        className={styles.spinner}
                        size={20}
                        theme={color}
                      />
                    ) : (
                      buttonText
                    )}
                  </p>
                </div>
              </div>
              {isActive == 1 && data?.priceBox?.oneTime?.accordanTitle && (
                <div
                  style={{ paddingBottom: "2rem" }}
                  id={data.priceBox.modalPriceBoxContainerID + "_detailsHolder"}
                >
                  <div
                    className={styles.section7}
                    onClick={() => setDetailsMore(!detailsMore)}
                  >
                    <b>{data.priceBox.oneTime.accordanTitle}</b>
                    <div
                      className={
                        detailsMore ? styles.upArrow : styles.downArrow
                      }
                    >
                      <svg
                        className="flickity-button-icon"
                        viewBox="0 0 100 100"
                      >
                        <path
                          d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                          className="arrow"
                          transform="translate(100, 100) rotate(180) "
                        ></path>
                      </svg>
                    </div>
                  </div>
                  {detailsMore && (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: data.priceBox.oneTime.accordanBody,
                      }}
                    />
                  )}
                </div>
              )}
            </>
          ) : (
            <div className={""}>
              <p
                className={styles.preOrder}
                style={{ marginTop: "20px", marginLeft: "10px" }}
              >
                Click Here To
              </p>
              {/* <p className={styles.preOrder} style={{marginTop:'20px', marginLeft:'10px'}}>Click Here To</p> */}
              {data?.priceBox?.oneTime?.btn1Href && (
                <a
                  href={data?.priceBox?.oneTime?.btn1Href}
                  className={styles.buyNowBtn}
                  style={{ marginTop: "0px", fontSize: "14px" }}
                >
                  <p>{data?.priceBox?.oneTime?.btn1Title}</p>
                </a>
              )}
              {data?.priceBox?.oneTime?.btn2Href && (
                <a
                  href={data?.priceBox?.oneTime?.btn2Href}
                  className={styles.buyNowBtn}
                  style={{ fontSize: "14px" }}
                >
                  <p>{data?.priceBox?.oneTime?.btn2Title}</p>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default PriceBox;
