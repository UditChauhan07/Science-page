import styles from "./styles.module.css";

const CartItemShopify = ({ items, content, removeItem, qtyItem }) => {
  const { removeBtnText, QTYLabel } = content || null;
  function getPercent(value, discount) {
    return +value - +value * (discount / 100);
  }
  return (
    <div>
      {items.length &&
        items.map((element, i) => {
          let data = element.node;
          let variant = "";
          let product = "";
          let totalPrice = data.merchandise.price.amount * data.quantity;
          let subscription_preferences = "";
          return (
            <div className={styles.cartItem} key={i}>
              <img
                width="200"
                className={styles.productImage}
                src={data.merchandise.image.url}
                alt=""
              />
              <div className={styles.productBody}>
                <p className={styles.productName}>
                  {data.merchandise.product.title}
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
                      defaultValue={data.quantity}
                      type="number"
                      min="1"
                      className={styles.qtyInputHolder}
                      onChange={(event) => {
                        qtyItem({
                          shopifyCart: {
                            lineItemIdsToUpdate: data?.merchandise?.id,
                            id: data?.id,
                            qty: event.target,
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
                          lineItemIdsToRemove: data?.id,
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
        })}
    </div>
  );
};
export default CartItemShopify;
