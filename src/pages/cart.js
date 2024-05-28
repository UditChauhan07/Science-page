import React, { useEffect, useState } from "react";
import styles from "@/styles/carrelo.module.css";
import PageHead from "@/utilities/Head";
import { NewsLetter } from "@/utilities/NewsLetter";
import CartSummary from "@/utilities/CartSummary";
import CartItemList from "@/utilities/CartItemList";
import CartItemShopify from "@/utilities/CartItemShopify";

import {
  removeCartItems,
  updateCartItems,
  fetchRechargeCart,
  RechargeCartAItemRemove,
  RechargeCartAItemQTYUpdate,
  getCartList,
} from "@/data/lib";

const Cart = () => {
  const [removeState, setRemoveState] = useState();
  const [cartData, setData] = useState({
    url: undefined,
    price: undefined,
    lineItems: [],
    ShopItems: [],
    version: "ENG",
    title: "Summary",
    subtotalLabel: "Subtotal",
    checkoutLabel: "Checkout",
    moneyBack: {
      title: "100% Satisfaction 30-Day money back guarantee",
      description:
        "How does the 30 day guarantee work? Purchase with complete confidence, with our 30-day money back guarantee. We are confident you will be happy with your Bruno MD products, however, if for any reason you are dissatisfied with your purchase, we will refund your first order in full. We honor a full refund if our customer care department is contacted within 30 days from your first order date. There is no need to return the product; however, we welcome your feedback to help us improve the quality of our service.",
    },
  });
  useEffect(() => {
    getCarts();
  }, []);

  const getCarts = () => {
    fetchRechargeCart()
      .then((rechargeCart) => {
        getCartList()
          .then((response) => {
            console.log({ response });
            let url = response?.data?.cart?.checkoutUrl;
            if (response?.data?.cart?.lines?.edges.length == 0) {
              url = null;
              localStorage.removeItem("l8Z2364#TEa");
            }
            let price = response?.data?.cart?.cost?.subtotalAmount?.amount;
            let total = response?.data?.cart?.cost?.totalAmount?.amount;
            let tax = response?.data?.cart?.cost?.totalTaxAmount?.amount;
            if (rechargeCart?.data?.checkout?.line_items.length > 0) {
              let shopifyIndexItem = {};
              response?.data?.cart?.lines?.edges.map((element) => {
                let strId = element.node.merchandise.id;
                let arrayOfId = strId.split("ProductVariant/");
                if (arrayOfId.length == 2) {
                  shopifyIndexItem[arrayOfId[1]] = element.node;
                }
                element.node.variant = arrayOfId[1];
                console.log(JSON.stringify(element.node));
              });
              let subscribeStatus = false;

              rechargeCart?.data?.checkout?.line_items?.map((element) => {
                if (element.purchase_item_type == "subscription")
                  subscribeStatus = true;
                if (shopifyIndexItem[element.external_variant_id.ecommerce]) {
                  element.shopifyCart =
                    shopifyIndexItem[element.external_variant_id.ecommerce];
                }
              });

              if (subscribeStatus) {
                url = `https://checkout.rechargeapps.com/r/checkout/${rechargeCart?.data?.checkout?.token}`;
                price = rechargeCart?.data?.checkout?.subtotal_price;
                total = rechargeCart?.data?.checkout?.total_price;
                tax = rechargeCart?.data?.checkout?.total_tax;
              }
            }
            console.log({ aaaa: rechargeCart?.data?.checkout?.line_items });
            setRemoveState(false);
            setData({
              url,
              price,
              total,
              tax,
              lineItems: rechargeCart?.data?.checkout?.line_items || [],
              ShopItems: response?.data?.cart?.lines?.edges || [],
              version: "ENG",
              title: "Summary",
              subtotalLabel: "Subtotal",
              checkoutLabel: "Checkout",
              moneyBack: {
                title: "100% Satisfaction 30-Day money back guarantee",
                description:
                  "How does the 30 day guarantee work? Purchase with complete confidence, with our 30-day money back guarantee. We are confident you will be happy with your Bruno MD products, however, if for any reason you are dissatisfied with your purchase, we will refund your first order in full. We honor a full refund if our customer care department is contacted within 30 days from your first order date. There is no need to return the product; however, we welcome your feedback to help us improve the quality of our service.",
              },
            });
          })
          .catch((err) => {
            console.log({ err });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeItem = ({ shopifyCart, rechargeCart = null }) => {
    const { lineItemIdsToRemove } = shopifyCart;
    const {
      external_product_id,
      external_variant_id,
      subscription_preferences,
    } = rechargeCart ?? {};
    setRemoveState(true);

    if (rechargeCart == null) {
      if (lineItemIdsToRemove) {
        removeCartItems({
          lineIds: lineItemIdsToRemove,
        })
          .then((response) => {
            getCarts();
          })
          .catch((err) => {
            console.log({ err });
          });
      } else {
        getCarts();
      }
    } else {
      RechargeCartAItemRemove({
        item: {
          external_product_id,
          external_variant_id,
          subscription_preferences,
        },
      })
        .then((rechargeCart) => {
          setData({
            url: undefined,
            price: undefined,
            lineItems: [],
            version: "ENG",
            title: "Summary",
            subtotalLabel: "Subtotal",
            checkoutLabel: "Checkout",
            moneyBack: {
              title: "100% Satisfaction 30-Day money back guarantee",
              description:
                "How does the 30 day guarantee work? Purchase with complete confidence, with our 30-day money back guarantee. We are confident you will be happy with your Bruno MD products, however, if for any reason you are dissatisfied with your purchase, we will refund your first order in full. We honor a full refund if our customer care department is contacted within 30 days from your first order date. There is no need to return the product; however, we welcome your feedback to help us improve the quality of our service.",
            },
          });
          if (lineItemIdsToRemove) {
            removeCartItems({
              lineIds: lineItemIdsToRemove,
            })
              .then((response) => {
                getCarts();
              })
              .catch((err) => {
                console.log({ err });
              });
          } else {
            getCarts();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const qtyItem = ({ shopifyCart, rechargeCart = null }) => {
    setRemoveState(true);
    const { lineItemIdsToUpdate, id, qty } = shopifyCart;

    const {
      external_product_id,
      external_variant_id,
      subscription_preferences,
    } = rechargeCart ?? {};

    const lineItemsToUpdate = [
      { id, merchandiseId: lineItemIdsToUpdate, quantity: parseInt(qty.value) },
    ];

    if (rechargeCart == null) {
      if (lineItemsToUpdate) {
        updateCartItems({
          items: lineItemsToUpdate,
        })
          .then((response) => {
            console.log(response);
            getCarts();
          })
          .catch((err) => {
            console.log({ err });
          });
      } else {
        getCarts();
      }
    } else {
      RechargeCartAItemQTYUpdate({
        item: {
          external_product_id,
          external_variant_id,
          quantity: parseInt(qty.value),
          subscription_preferences,
        },
      })
        .then((rechargeCart) => {
          if (lineItemsToUpdate) {
            updateCartItems({
              items: lineItemsToUpdate,
            })
              .then((response) => {
                getCarts();
              })
              .catch((err) => {
                console.log({ err });
              });
          } else {
            getCarts();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <section className={styles.container}>
      <a href={"/collections/all-products"} className={styles.back}>
        ← Continue Shopping
      </a>
      <PageHead
        content={{
          title: "BrunoMD | Shopping Cart",
          description: "BrunoMD shopping cart",
        }}
      />
      <h1 className={styles.headLine}>Review order</h1>
      {cartData.lineItems?.length != 0 && (
        <div className={styles.cartContainerHolder}>
          {removeState ? (
            <div class="center-body" style={{ height: "200px" }}>
              <div class="loader-circle-2"></div>
            </div>
          ) : (
            <>
              {cartData.lineItems?.length != 0 ? (
                <CartItemList
                  items={cartData.lineItems}
                  content={{ removeBtnText: "Remove", QTYLabel: "QTY" }}
                  removeItem={removeItem}
                  qtyItem={qtyItem}
                />
              ) : (
                <div className={styles.cartEmptyText}>Cart is Empty</div>
              )}
            </>
          )}

          <NewsLetter
            content={{
              title: "Join our newsletter",
              portalId: "19647191",
              formId: "cb74b532-174c-4aa4-bb3e-59bcce283ad8",
              titleFont: "26px",
              formWidth: "auto",
            }}
          />
          <CartSummary data={cartData} />
        </div>
      )}
      {cartData.lineItems?.length == 0 && (
        <div className={styles.cartContainerHolder}>
          {removeState ? (
            <div class="center-body" style={{ height: "200px" }}>
              <div class="loader-circle-2"></div>
            </div>
          ) : (
            <>
              {cartData.lineItems?.length == 0 && cartData.ShopItems?.length ? (
                <CartItemShopify
                  items={cartData.ShopItems}
                  content={{ removeBtnText: "Remove", QTYLabel: "QTY" }}
                  removeItem={removeItem}
                  qtyItem={qtyItem}
                />
              ) : (
                <div className={styles.cartEmptyText}>Cart is Empty</div>
              )}
            </>
          )}

          <NewsLetter
            content={{
              title: "Join our newsletter",
              portalId: "19647191",
              formId: "cb74b532-174c-4aa4-bb3e-59bcce283ad8",
              titleFont: "26px",
              formWidth: "auto",
            }}
          />
          <CartSummary data={cartData} />
        </div>
      )}
    </section>
  );
};
export default Cart;
