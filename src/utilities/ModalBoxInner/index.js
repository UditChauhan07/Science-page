import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { AddtoCart, RechargeCart, addCartItems, getProduct } from "@/data/lib";
import SubscribeProduct from "../../../json/subscribe.json";
import { useRouter } from "next/navigation";
import Spinner from "../Loader/index1";

const ModalBoxInner = ({
  isOpen,
  content,
  ModalHandler,
  clickedType,
  externalId,
  productVariantId,
  themed=false,
  isCheckout=false
}) => {
  const router = useRouter();
  const [type, setType] = useState(clickedType);
  const [quantity, setQuantity] = useState(1);
  const [freq, setFreq] = useState(30);
  const [cartLoad, setCartLoad] = useState(false);
  useEffect(() => {
    if (externalId) {
      // const productId = `gid://shopify/Product/${externalId}`;
      // fetchProduct(productId)
    } else {
      window.location.href = "/";
    }
    setType(clickedType);
  }, [clickedType]);

  const fetchProduct = async (productId) => {
    getProduct({ productId })
      .then((response) => {
        let product = response?.data?.product;
      })
      .catch((err) => {
        console.log({ err });
      });
  };
  const QUANTITY_OPTIONS = [...Array(content?.maxQty).keys()].map((n) => n + 1);

  const typeHandler = (e) => {
    const { name, value } = e.target;
    setType(value);
    setQuantity(1);
  };

  const autoQtyHandler = () => {
    setQuantity(content?.onetimeBox?.autoQty || 2);
  };

  const QtyIncrement = (e) => {
    const { value } = e.target;
    setQuantity(parseInt(value));
  };

  const cartHandler = () => {
    setCartLoad(true);
    let cId = localStorage.getItem("l8Z2364#TEa");
    if (type == "Onetime") {
      if (content?.onetimeBox?.discount) {
        window.location.href = `https://www.brunomd.com/cart/${SubscribeProduct[externalId]?.variatntId}:${quantity}?discount=${content?.onetimeBox?.discount}`
      }else{
      let lineItemsToAdd = [
        {
          merchandiseId: `gid://shopify/ProductVariant/${SubscribeProduct[externalId]?.variatntId}`,
          quantity,
        },
      ];
      let rechargeItem = [
        {
          external_product_id: {
            ecommerce: `${externalId}`,
          },
          external_variant_id: {
            ecommerce: `${SubscribeProduct[externalId]?.variatntId}`,
          },
          quantity,
        },
      ];
      RechargeCart({ items: rechargeItem })
        .then((response) => {
          if (response?.status == 200) {
            // if (cId) {
            //   addCartItems({ items: lineItemsToAdd, handler: { router } }).then((response)=>{
            //     // router.push('/cart')
            //     console.log({response});
            //   }).catch((err)=>{
            //     console.log({err});
            //   })
            // } else {
            AddtoCart({ lineItems: lineItemsToAdd, handler: { router } })
              .then((response) => {
                // let id= response?.data?.cartCreate?.cart?.id;
                // localStorage.setItem("l8Z2364#TEa", id);
                // router.push('/cart')
                if (response?.data?.cartCreate?.cart?.checkoutUrl) {
                  if (content?.onetimeBox?.discount) {
                    window.location.href = `${response?.data?.cartCreate?.cart?.checkoutUrl}?discount=${content?.onetimeBox?.discount}`;
                  } else {
                    window.location.href = `${response?.data?.cartCreate?.cart?.checkoutUrl}`;
                  }
                }
              })
              .catch((err) => {
                console.log({ err });
              });
            // }
          } else {
            throw new Error(response?.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      }
    } else {
      if (SubscribeProduct[externalId]?.subscriptionProductId) {
        RechargeCart({
          isNotToken: isCheckout,
          items: [
            {
              external_product_id: {
                ecommerce: `${SubscribeProduct[externalId].subscriptionProductId}`,
              },
              external_variant_id: {
                ecommerce: `${SubscribeProduct[externalId].subscriptionProductVariantId}`,
              },
              quantity,
              subscription_preferences: {
                charge_interval_frequency: freq,
                cutoff_day_of_month: null,
                cutoff_day_of_week: null,
                expire_after_specific_number_of_charges: null,
                interval_unit: "day",
                order_day_of_month: null,
                order_day_of_week: null,
                order_interval_frequency: freq,
              },
            },
          ],
        })
          .then((response) => {
            if (response?.status == 200) {
              if(isCheckout){
                let url = `https://checkout.rechargeapps.com/r/checkout/${response?.data?.checkout?.token}`
                router.push(url);
              }else{
                router.push("/cart");
              }
            } else {
              throw new Error(response?.data);
            }
          })
          .catch((err) => {
            console.log({ err });
          });
      } else {
        throw new Error("This Product Can't Subscribe for now");
      }
    }
  };
  return (
    <section>
      {isOpen === true && (
        <div className={styles.holder} style={themed?{background:themed}:{}}>
          {isOpen && (
            <div className={styles.exitButton} onClick={ModalHandler} style={themed?{border:'1px solid #fff'}:{}}>
              <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                <g fill="white" fill-rule="evenodd">
                  <path fill={themed?'none':'#FFBF3C'} d="M0 0h40v40H0z" />
                  <path
                    fill={themed?'#fff':'#00A0DD'}
                    fill-rule="nonzero"
                    d="M16.93 25.416l3.267-3.266 3.069 3.07 2.09-2.09-3.07-3.07 3.13-3.13-2.338-2.337-3.13 3.13-3.078-3.078-2.09 2.089 3.079 3.078-3.266 3.266z"
                  />
                </g>
              </svg>
            </div>
          )}
          <div className={styles.conHolder}>
            <div className={styles.container}>
              <div className={styles.boxOne}>
                <div style={themed?{fontFamily: 'var(--bmd-font-Secondary)',fontWeight:"bolder"}:{ color: "#ffbf3c" }}>{content.title1}</div>
                <div style={themed?{fontFamily: 'var(--bmd-font-Secondary)'}:{}}>{content.title2}</div>
              </div>
              <div className={styles.boxHide}>
                <img
                  width="150"
                  height="150"
                  src={content?.productImg?.src}
                  alt={content?.productImg?.alt || "..."}
                  className="styles_imageSource__xZJZ_"
                />
              </div>
              <div className={styles.boxTwo}>
                <input
                  id="Subscribe"
                  type="radio"
                  className={styles.hide}
                  onClick={typeHandler}
                  name="QTY"
                  value={"Subscribe"}
                  checked={type == "Subscribe" ? true : false}
                />
                <label className={themed?styles.themeLabel:styles.label} for={"Subscribe"} style={themed && type == "Subscribe"?{color:themed}:{}}>
                  <p>
                    ${content.subscriptionBox.price}{" "}
                    {content?.price && (
                      <span className={styles.strike}>${content?.price}</span>
                    )}
                  </p>
                  <p className={styles.ft12}>
                    {content.subscriptionBox.modalBtnText}
                  </p>
                </label>
              </div>
              <div className={styles.boxThree}>
                <input
                  id="Onetime"
                  type="radio"
                  className={styles.hide}
                  checked={type == "Onetime" ? true : false}
                  name="QTY"
                  value={"Onetime"}
                  onClick={typeHandler}
                />
                <label className={themed?styles.themeLabel:styles.label} for={"Onetime"} style={themed && type == "Onetime"?{color:themed}:{}}>
                  <p>
                    ${content.onetimeBox.price}{" "}
                    {(content?.price && content?.price != content.onetimeBox.price) && (
                      <span className={styles.strike}>${content?.price}</span>
                    )}
                  </p>
                  <p className={styles.ft12}>
                    {content.onetimeBox.modalBtnText}
                  </p>
                </label>
              </div>
              <div className={styles.boxFour}>
                <img
                  width="150"
                  height="150"
                  src={content?.productImg.src}
                  alt={content?.productImg?.alt || "..."}
                  className="styles_imageSource__xZJZ_"
                />
              </div>
              <div
                className={styles.boxFive}
                dangerouslySetInnerHTML={{
                  __html: content.subscriptionBox.desc,
                }}
              />
              <div
                className={styles.boxSix}
                dangerouslySetInnerHTML={{ __html: content.onetimeBox.desc }}
              />
              <div className={styles.boxSeven}>
                {type == "Subscribe" ? (
                  <div className={styles.freqHolder}>
                    <label className={styles.selectLabel}>
                      Delivery every:
                    </label>
                    <select
                      className={styles.selectHolder}
                      onChange={(e) => setFreq(parseInt(e.target.value))}
                    >
                      <option value="30">30 days</option>
                      <option value="60">60 days</option>
                      <option value="90">90 days</option>
                    </select>
                  </div>
                ) : (
                  <>
                    {content?.onetimeBox?.freeShip && (
                      <div className={styles.boxTen}>
                        <div>
                          <p>Buy 2 Get</p>
                          <p>
                            <span>FREE SHIPPING</span>
                          </p>
                        </div>
                        <img src="\images\free-shipping-32.png" />
                      </div>
                    )}
                  </>
                )}
              </div>
              <div className={styles.boxEight}>
                <div className={styles.qtyHolder}>
                  <label className={styles.selectLabel}>QTY:</label>
                  <select
                    className={styles.selectHolder}
                    onChange={QtyIncrement}
                  >
                    {QUANTITY_OPTIONS.map((val) => (
                      <option
                        key={val}
                        value={val}
                        selected={quantity == val ? true : false}
                      >
                        {`${val}`}
                      </option>
                    ))}
                  </select>
                  <p className={`${styles.qtyServingText} ${themed &&styles.textGotham}`}>
                    {quantity * 30} servings
                  </p>
                </div>
              </div>
              <div className={styles.boxNight}>
                <div className={styles.mobHide}></div>
                <div className={styles.btnContainer}>
                  <p
                    className={themed ?styles.btnThemed :styles.btn}
                    style={themed?{color:themed}:{}}
                    onClick={() => {
                      cartHandler();
                    }}
                  >
                    {cartLoad ? (
                      <Spinner className={styles.spinner} size={20} />
                    ) : (
                      <>{type == "Subscribe" ? "Subscribe" : "Checkout"}</>
                    )}
                  </p>
                  {type == "Onetime" && content?.onetimeBox?.freeShip && (
                    <div
                      className={styles.boxTen}
                      onClick={autoQtyHandler}
                      value="2"
                    >
                      <div>
                        <p>Buy 2 Get</p>
                        <p>
                          <span>FREE SHIPPING</span>
                        </p>
                      </div>
                      <img src="\images\free-shipping-32.png" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ModalBoxInner;
