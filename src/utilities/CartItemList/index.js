import styles from "./styles.module.css";

const CartItemList = ({ items, content, removeItem, qtyItem }) => {
  const { removeBtnText, QTYLabel } = content || null;
  function getPercent(value, discount) {
    return +value - +value * (discount / 100);
  }
  return (
    <div>
      {items.length &&
        items.map(
          (
            {
              external_product_id,
              title,
              external_variant_id,
              images,
              quantity,
              total_price,
              subscription_preferences,
              shopifyCart,
            },
            i
          ) => {
            let totalPrice = total_price;
            return (
              <div className={styles.cartItem} key={i}>
                <img
                  width="200"
                  className={styles.productImage}
                  src={images.small}
                  alt={images?.imageAlt}
                />
                <div className={styles.productBody}>
                  <p className={styles.productName}>
                    {title}
                    {subscription_preferences.order_interval_frequency && (
                      <em>
                        &nbsp;(
                        {"Delivery every: " +
                          subscription_preferences.order_interval_frequency +
                          " " +
                          subscription_preferences.interval_unit}
                        )&nbsp;
                      </em>
                    )}
                  </p>
                  <p className={styles.productPrice}>
                    $ {parseFloat(totalPrice)}
                  </p>
                  <div className={styles.productActions}>
                    <div className={styles.productActionsQuantity}>
                      <span className={styles.productActionsQuantityLabel}>
                        {QTYLabel}:&nbsp;
                      </span>
                      <input
                        defaultValue={quantity}
                        type="number"
                        min="1"
                        className={styles.qtyInputHolder}
                        onChange={(event) => {
                          qtyItem({
                            shopifyCart: {
                              lineItemIdsToUpdate: shopifyCart?.merchandise?.id,
                              id: shopifyCart?.id,
                              qty: event.target,
                            },
                            rechargeCart: {
                              subscription_preferences,
                              external_variant_id,
                              external_product_id,
                            },
                          });
                        }}
                      />
                    </div>
                    <button
                      className={`${styles.productActionsRemove} ${styles.btnHover}`}
                      onClick={() =>
                        removeItem({
                          shopifyCart: {
                            lineItemIdsToRemove: shopifyCart?.id,
                          },
                          rechargeCart: {
                            subscription_preferences,
                            external_variant_id,
                            external_product_id,
                          },
                        })
                      }
                    >
                      {removeBtnText}
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        )}
    </div>
  );
};
export default CartItemList;
