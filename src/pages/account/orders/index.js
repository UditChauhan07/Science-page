import { ShareDrive } from "@/data/Auth";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import PageHead from "@/utilities/Head";
import SEO from "../../../../json/SEO.json";

const OrderDetails = () => {
  const [order, setOrder] = useState();
  const [discount, setDiscount] = useState();
  const [subTotal, setSubTotal] = useState();
  useEffect(() => {
    if (ShareDrive()) {
      let data = ShareDrive();
      if (!data) window.location.href = "/account";
      if (data.order) {
        let itemPrice = 0;
        data.lineItems.edges.map((items) => {
          itemPrice += parseFloat(items.node?.originalTotalPrice?.amount);
        });
        let orderPrice = parseFloat(data.totalPrice.amount);
        let totalShippingPrice = parseFloat(data.totalShippingPrice.amount);
        let totalTax = parseFloat(data.totalTax.amount);
        let discountAmount = itemPrice - orderPrice;
        if (totalTax) {
          discountAmount += totalTax;
        }
        setSubTotal(orderPrice - (totalShippingPrice + totalTax));
        if (discountAmount == 0) setDiscount(0);
        else {
          let discount = (discountAmount * 100) / itemPrice;
          setDiscount(Math.round(discount));
        }
        setOrder(data);
      } else {
        window.location.href = "/account";
      }
    }
  }, []);
  return (
    <section className={styles.section}>
      <PageHead content={SEO["EU"]?.register?.SEO} />
      <div>
        <Link className={styles.backLink} href="/account">
          &#8592; Back To All Orders
        </Link>
        <h1 className={styles.header}>{order ? "Order Details" : "Orders"}</h1>
        {order && (
          <div className={styles.orderContainer}>
            <div className={styles.dflex}>
              <div className={styles.addressInfo}>
                <div className={styles.dflex}>
                  <p className={styles.infoBox}>Order Number</p>{" "}
                  <p className={styles.infoBoxWhite}>{order.name}</p>
                </div>
                <div className={styles.dflex}>
                  <p className={styles.infoBox}>Ordered On</p>{" "}
                  <p
                    className={styles.infoBoxWhite}
                    style={
                      order.successfulFulfillments?.length > 0
                        ? {}
                        : { borderBottom: "1px solid #ccc" }
                    }
                  >
                    {new Date(order.processedAt).toLocaleDateString()}
                  </p>
                </div>
                {order.successfulFulfillments?.length > 0 && (
                  <div className={styles.dflex}>
                    <p className={styles.infoBox}>Tracking Company</p>{" "}
                    <p className={styles.infoBoxWhite}>
                      {order.successfulFulfillments[0].trackingCompany}
                    </p>
                  </div>
                )}
                {order.successfulFulfillments?.length > 0 && (
                  <div className={styles.dflex}>
                    <p
                      className={styles.infoBox}
                      style={{ borderBottom: "1px solid #ccc" }}
                    >
                      Track Product
                    </p>{" "}
                    {order.successfulFulfillments[0].trackingInfo[0].url ? (
                      <a
                        className={styles.infoBoxWhiteLink}
                        href={
                          order.successfulFulfillments[0].trackingInfo[0].url
                        }
                        style={{
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        Click Here
                      </a>
                    ) : (
                      <p
                        className={styles.infoBoxWhiteLink}
                        style={{
                          borderBottom: "1px solid #ccc",
                        }}
                      ></p>
                    )}
                  </div>
                )}
              </div>
              <div>
                <p
                  style={{ fontWeight: "600", width: "100%" }}
                  class={styles.infoBox}
                >
                  Shipping To:
                </p>
                {order.shippingAddress ? (
                  <>
                    <p className={`${styles.infoBox} ${styles.shippingTextHolder}`}>
                      {order.shippingAddress?.address1}
                    </p>
                    {order.shippingAddress?.address2 && (
                      <p className={`${styles.infoBox} ${styles.shippingTextHolder}`}>
                        {order.shippingAddress?.address2}
                      </p>
                    )}
                    <p className={`${styles.infoBox} ${styles.shippingTextHolder}`}>
                      {order.shippingAddress?.city &&
                        order.shippingAddress?.city}
                      {/* {order.shippingAddress?.province && order.shippingAddress?.province+','},{" "} */}
                      {order.shippingAddress?.zip &&
                        ", " + order.shippingAddress?.zip}
                    </p>
                    <p className={`${styles.infoBox} ${styles.shippingTextHolder}`}>
                      {order.shippingAddress?.country}
                    </p>
                    {order.shippingAddress?.phone && (
                      <a
                        href={"tel:" + order.shippingAddress?.phone}
                        target="_blank"
                        className={`${styles.infoBox} ${styles.infoBoxWhiteLink} ${styles.shippingTextHolder}`}
                      >
                        {order.shippingAddress?.phone}
                      </a>
                    )}
                  </>
                ) : (
                  <p className={styles.noShipping}>
                    No Shipping Address
                  </p>
                )}
              </div>
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Product Image</th>
                  <th scope="col">Product Title</th>
                  <th scope="col">Product Quantity</th>
                  <th scope="col">Product Amount</th>
                </tr>
              </thead>
              <tbody>
                {order.lineItems.edges.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td className={styles.item}>
                        <img
                          src={item.node.variant?.image?.src}
                          className={styles.lineImage}
                        />
                      </td>
                      <td className={styles.item}>{item.node?.title}</td>
                      <td
                        className={styles.item}
                      >{`QTY: ${item.node?.quantity}`}</td>
                      <td className={styles.item}>
                        $
                        {parseFloat(item.node?.originalTotalPrice?.amount).toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className={styles.leftAlign}>
              {true && (
                <div className={styles.dflex1}>
                  <p className={styles.infoBox1} style={{ width: "200px" }}>
                    Discount Percentage:
                  </p>{" "}
                  <p className={styles.infoBoxWhite1}>{discount}%</p>
                </div>
              )}
              {/* {order?.discountApplications.edges[0].node.value.amount && <div className={styles.dflex1}><p className={styles.infoBox2} style={{width: '200px'}}>Discount Amount:</p>  <p className={styles.infoBoxWhite2}>${order.discountApplications.edges[0].node.value.amount}</p></div>} */}
              <div className={styles.dflex1}>
                <p className={styles.infoBox1} style={{ width: "200px" }}>
                  Sub Total:
                </p>{" "}
                <p className={styles.infoBoxWhite1}>
                  $
                  {subTotal.toFixed(2)}
                </p>
              </div>
              {order?.totalShippingPrice.amount && (
                <div className={styles.dflex1}>
                  <p className={styles.infoBox2} style={{ width: "200px" }}>
                    Shipping Charges:
                  </p>{" "}
                  <p className={styles.infoBoxWhite2}>
                    $
                    {parseFloat(order.totalShippingPrice.amount).toFixed(2)}
                  </p>
                </div>
              )}
              <div className={styles.dflex1}>
                <p className={styles.infoBox2} style={{ width: "200px" }}>
                  Total Tax:
                </p>{" "}
                <p className={styles.infoBoxWhite2}>
                  $
                  {parseFloat(order.totalTax.amount).toFixed(2)}
                </p>
              </div>
              <div className={styles.dflex1}>
                <p className={styles.infoBoxT} style={{ width: "200px" }}>
                  Total:
                </p>{" "}
                <p className={styles.infoBoxWhiteT}>
                  $
                  {parseFloat(order.totalPrice.amount).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        )}
        {false ? (
          // {order ? (

          <div>
            <p className={styles.date}>
              Ordered On: {new Date(order.processedAt).toLocaleDateString()}
            </p>
            <div className={styles.shippingWrapper}>
              <p className={styles.shipping}>Shipping To:</p>
              <div>
                <p>{order.shippingAddress.address1}</p>
                {order.shippingAddress.address2 && (
                  <p>{order.shippingAddress.address2}</p>
                )}
                <p>
                  {order.shippingAddress.city}, {order.shippingAddress.province}
                  , {order.shippingAddress.zip}
                </p>
                <p>{order.shippingAddress.country}</p>
                {order.shippingAddress.phone && (
                  <a href={"tel:" + order.shippingAddress.phone}>
                    {order.shippingAddress.phone}
                  </a>
                )}
              </div>
            </div>
            {order.lineItems.edges.map((item, i) => {
              return (
                <div className={styles.itemLine} key={i}>
                  <img
                    src={item.node.variant?.image?.transformedSrc}
                    className={styles.lineImage}
                  />
                  <p>{item.node?.title}</p>
                  <p>{`QTY: ${item.node?.quantity}`}</p>
                  <p>${item.node?.discountedTotalPrice.amount}</p>
                </div>
              );
            })}
            {order?.discountApplications.edges[0].node.value.amount && (
              <p className={styles.total}>
                Discount Amount: $
                {order.discountApplications.edges[0].node.value.amount}
              </p>
            )}
            {order?.discountApplications.edges[0].node.value.percentage && (
              <p className={styles.total}>
                Discount Amount:{" "}
                {order.discountApplications.edges[0].node.value.percentage}%
              </p>
            )}
            <p className={styles.total}>Total Tax: ${order.totalTax.amount}</p>
            <p className={styles.total}>Total: ${order.totalPriceV2.amount}</p>
          </div>
        ) : (
          <div>{/* Here you can display a list of orders */}</div>
        )}
      </div>
    </section>
  );
};
export default OrderDetails;
