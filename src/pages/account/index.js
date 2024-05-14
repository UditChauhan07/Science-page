import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/account.module.css";
import { Decrypt, Destroy, AuthCheck, ShareDrive } from "@/data/Auth";
import { AddtoCart, RecoverUser, orderInit, RechargeCart } from "@/data/lib";
import { useRouter } from "next/navigation";
import PageHead from "@/utilities/Head";
import SEO from "../../../json/SEO.json";
import Loader2 from "@/utilities/Loader/index2";
import {
  fetchRechargeCart,
  getCartList,
  addCartItems,
  getProduct,
} from "@/data/lib";

const Index = () => {
  let router = useRouter();
  const [customer, setCustomer] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    orders: [],
    isLoggedIn: false,
  });
  const [points, setPoints] = React.useState(0);
  const [history, setHistory] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [itemNumber, setItemNumber] = React.useState(0);

  const ignoreReorder = [
    "gid://shopify/ProductVariant/32357278679115",
    "gid://shopify/ProductVariant/32357278744651",
    "gid://shopify/ProductVariant/32357278711883",
  ];
  const [authenticated, setAuthenticated] = React.useState(true);
  const [currentShippingInterval, setCurrentShippingInterval] = useState(30);

  function dateSort(a, b) {
    let dateA = new Date(a?.node?.processedAt).getTime();
    let dateB = new Date(b?.node?.processedAt).getTime();
    return dateA < dateB ? 1 : -1;
  }
  useEffect(() => {
    if (!AuthCheck()) {
      router.push("/account/login");
      // window.location.href = "https://www.brunomd.com/account/login";
    }
    let data = Decrypt();
    if (data == null) {
      Destroy(router);
    }
    RecoverUser({ token: data })
      .then((response) => {
        if (data) {
          if (response?.data?.data?.customer?.id) {
            setHistory(response?.yotpo?.history_items);
            setPoints(response?.yotpo?.points_balance);
            let data = response?.data?.data?.customer;
            data.isLoggedIn = true;
            data.orders.edges.sort(dateSort);
            setCustomer(data);
            setIsLoaded(true);
          } else {
            Destroy();
          }
        } else {
          setAuthenticated(false);
        }
      })
      .catch((err) => {
        console.log({ err });
      });
    fetchRechargeCart()
      .then((response) => {
        let { line_items } = response?.data?.checkout || [];
        if (line_items?.length && line_items?.length != 0) {
          setItemNumber(line_items?.length || 0);
          console.log(itemNumber);
        } else {
          getCartList().then((response) => {
            let shop_items_count =
              response?.data?.cart?.lines?.edges.length || 0;
            setItemNumber(shop_items_count || 0);
          });
        }
      })
      .catch((err) => {
        console.error({ err });
      });
  }, []);

  const { email, firstName, lastName, isLoggedIn, orders } = customer;
  const OrderDetail = (id) => {
    let order = {};
    orders.edges.map((element) => {
      if (element.node.id == id) order = element.node;
    });
    order.order = true;
    ShareDrive(order);
    router.push("/account/orders");
  };

  const editOrder = (id) => {
    let p = orderInit({ orderId: id })
      .then((response) => {
        let order = {};
        orders.edges.map((element) => {
          if (element.node.id == id) order = element.node;
        });
        order.edit = true;
        order.order = true;
        order.init = response;
        ShareDrive(order);
        router.push("/account/orders");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ReorderDetail = (id) => {
    console.log(id);
    let order = {};
    orders.edges.map((element) => {
      if (element.node.id == id) order = element.node;
    });
    order.order = true;
    ShareDrive(order);
    router.push("account/orders/reorder");
  };

  const reOrder = (id) => {
    let cId = localStorage.getItem("l8Z2364#TEa");
    let lineItems = [];
    let lineCartItems = [];
    let lineRechargeItems = [];
    let oneTimeDiscount = [];
    let subscribeStatus = false;
    orders.edges.map((element) => {
      var frequency = 30;
      if (element.node.id == id) {
        element.node.lineItems.edges.map((items) => {
          if (items.node) {
            console.log(items.node);
            let title = items.node.title;
            let quantity = items.node.quantity;
            if (title.includes("Auto renew")) {
              if (
                title.includes("Orange") ||
                title.includes("Dragon Fruit") ||
                title.includes("Strawberry")
              ) {
                frequency = 20;
              }
              subscribeStatus = true;
            }

            if (title.includes("Days")) {
              var titleArray = title.split("Ships every");
              if (titleArray.length > 0) {
                frequency = parseInt(titleArray[1].match(/\d+/));
              }
            }
            lineItems.push({
              merchandiseId: items.node.variant?.id,
              quantity: items.node.quantity,
            });
            let variantId = items.node.variant?.id;
            let variantIdFull = variantId.split("ProductVariant/");
            let productId = items.node.variant.product?.id;
            let productIdFull = productId.split("Product/");
            lineCartItems.push({
              external_product_id: {
                ecommerce: `${productIdFull[1]}`,
              },
              external_variant_id: {
                ecommerce: variantIdFull[1],
              },
              quantity,
            });
            lineRechargeItems.push({
              external_product_id: {
                ecommerce: `${productIdFull[1]}`,
              },
              external_variant_id: {
                ecommerce: variantIdFull[1],
              },
              quantity,
              subscription_preferences: {
                charge_interval_frequency: frequency,
                cutoff_day_of_month: null,
                cutoff_day_of_week: null,
                expire_after_specific_number_of_charges: null,
                interval_unit: "day",
                order_day_of_month: null,
                order_day_of_week: null,
                order_interval_frequency: frequency,
              },
            });
          }
        });
      }
    });
    if (!subscribeStatus) {
      RechargeCart({
        items: lineCartItems,
      })
        .then((response) => {
          if (response?.status == 200) {
            if (cId) {
              addCartItems({
                items: lineItems,
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
                          lineItems: lineItems,
                          customerAccessToken: Decrypt(),
                          discountCodeList: oneTimeDiscount,
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
                lineItems,
                customerAccessToken: Decrypt(),
                discountCodeList: oneTimeDiscount || [],
              })
                .then((response) => {
                  if (response?.data?.cartCreate?.cart) {
                    let id = response?.data?.cartCreate?.cart?.id;
                    localStorage.setItem("l8Z2364#TEa", id);
                    router.push("/cart");
                  }
                })
                .catch((err) => {
                  console.log({ err });
                });
            }
          } else {
            throw new Error(JSON.stringify(response?.data));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      RechargeCart({
        isNotToken: true,
        items: lineRechargeItems,
      })
        .then((response) => {
          if (response?.status == 200) {
            router.push("/cart");
          } else {
            throw new Error(response?.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  if (!isLoaded) return <Loader2 />;

  return (
    <section className={styles.accountSection}>
      <PageHead content={SEO["EU"]?.account?.SEO} />
      <h1 className={styles.accountHeader}>My Account</h1>
      {isLoggedIn && (
        <button
          onClick={() => Destroy(router)}
          className={`${styles.logout} ${styles.btnHover}`}
        >
          Log Out
        </button>
      )}
      <div>
        <div className={styles.accountContainer}>
          {orders?.edges?.length > 0 && (
            <div className={styles.orderContainer}>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Order Number</th>
                    <th scope="col">Date</th>
                    <th scope="col">Payment Status</th>
                    <th scope="col">Fulfillment Status</th>
                    <th scope="col">Total</th>
                    <th scope="col">Edit or Cancel</th>
                    <th scope="col">Reorder</th>
                  </tr>
                </thead>
                <tbody>
                  {orders?.edges?.length > 0 &&
                    orders?.edges?.map(
                      ({
                        node: {
                          orderNumber,
                          processedAt,
                          financialStatus,
                          originalTotalPrice,
                          fulfillmentStatus,
                          id,
                          lineItems,
                        },
                      }) => {
                        let orderId = id.split("Order/");
                        let show = true;
                        lineItems.edges.map((element) => {
                          if (
                            ignoreReorder.includes(element.node.variant?.id)
                          ) {
                            show = false;
                          }
                        });
                        return (
                          <tr key={id}>
                            <th className={styles.item}>
                              <div
                                className={styles.orderNumber}
                                onClick={() => OrderDetail(id)}
                              >
                                #{orderNumber}
                              </div>
                            </th>
                            <td className={styles.item}>
                              {new Date(processedAt).toLocaleDateString()}
                            </td>
                            <td className={styles.item}>{financialStatus}</td>
                            <td className={styles.item}>{fulfillmentStatus}</td>
                            <td className={styles.item}>
                              $
                              {parseFloat(originalTotalPrice?.amount).toFixed(
                                2
                              )}
                            </td>
                            <td>
                              <Link
                                className={styles.firstLink}
                                target="_blank"
                                href={`https://shopify-order-edit.herokuapp.com/order-editor/brunomd.myshopify.com/${orderId[1]}`}
                              >
                                Cancel Or Edit
                              </Link>

                              {/* {show && (
                                // <Link
                                //   target="_blank"
                                //   href={`https://shopify-order-edit.herokuapp.com/order-editor/reorder/brunomd.myshopify.com/${orderId[1]}`}
                                // >
                                //   Reorder
                                // </Link>
                              )} */}
                              {/* <button className={styles.firstLink}> Cancel Or Edit</button><br/>
                              <button className={styles.firstLink}>Reorder</button> */}
                            </td>
                            <td>
                              {" "}
                              <div
                                className="accountReorder"
                                onClick={() => reOrder(id)}
                              >
                                Reorder
                              </div>
                            </td>
                          </tr>
                        );
                      }
                    )}
                </tbody>
              </table>
            </div>
          )}

          <div className={styles.accountInfoContainer}>
            <p>Account Details</p>
            <div>
              <p>{[firstName, lastName].join(" ")}</p>
            </div>

            <div style={{ "margin-bottom": "20px" }}>
              <p>{email}</p>
            </div>
            <div style={{ color: "#56008c", marginBottom: "20px" }}>
              You Have <b>{points}</b> Points
            </div>

            {true && (
              <div>
                {false && (
                  <div>
                    <address>
                      <p>{defaultAddress.address1}</p>
                      {defaultAddress.address2 && (
                        <p>{defaultAddress.address2}</p>
                      )}
                      <p>
                        {defaultAddress.city}, {defaultAddress.province},{" "}
                        {defaultAddress.zip}
                      </p>
                      <p>{defaultAddress.country}</p>
                      {defaultAddress.phone && (
                        <a href={"tel:" + defaultAddress.phone}>
                          {defaultAddress.phone}
                        </a>
                      )}
                    </address>
                    <div></div>
                  </div>
                )}
              </div>
            )}
            <Link href="/account/addresses">
              <button
                className={`${styles.addressesButton} ${styles.btnHover}`}
              >
                View Addresses
              </button>
            </Link>
            <Link
              target="_blank"
              href="https://www.brunomd.com/tools/recurring/login"
            >
              {" "}
              <button
                className={`${styles.addressesButton2} ${styles.btnHover}`}
              >
                {" "}
                Manage Subscription{" "}
              </button>
            </Link>
            <Link
              target="_blank"
              href="https://www.brunomd.com/pages/rewards-page"
              style={{ width: "100%", marginLeft: "17px" }}
            >
              {" "}
              <button
                className={`${styles.addressesButton2} ${styles.btnHover}`}
                style={{ width: "100%" }}
              >
                {" "}
                My Rewards{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Index;
