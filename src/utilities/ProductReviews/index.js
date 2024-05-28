import React, { memo, useEffect, useState } from "react";

import styles from "./styles.module.css";
import Loader2 from "../Loader/index2";

const ProductReviews = ({ product, variantId, v3 = false }) => {
  const [productId, setProductId] = useState(
    product
      ? product?.variants?.edges?.length
        ? product?.variants?.edges[0].node.id.split("ProductVariant/").length ==
          2
          ? product?.variants?.edges[0].node.id.split("ProductVariant/")[1]
          : undefined
        : undefined
      : variantId
  );
  useEffect(() => {
    if (v3) {
      (function e() {
        var e = document.createElement("script");
        (e.type = "text/javascript"),
          (e.async = true),
          (e.defer = true),
          (e.src = `https://cdn-widgetsrepository.yotpo.com/v1/loader/ahHyITcI0fkzYo7KejQeWGiBK2CXMKvLvTZ8KUBJ`);
        var t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(e, t);
      })();
    } else {
      (function e() {
        var e = document.createElement("script");
        (e.type = "text/javascript"),
          (e.async = true),
          (e.defer = true),
          (e.src = `//staticw2.yotpo.com/ahHyITcI0fkzYo7KejQeWGiBK2CXMKvLvTZ8KUBJ/widget.js`);
        var t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(e, t);
      })();
    }
  }, [productId]);

  if (v3) {
    return (
      <div
        class="yotpo-widget-instance"
        data-yotpo-instance-id="520292"
        data-yotpo-product-id={productId}
      ></div>
    );
  } else {
    return (
      <div className={styles.wrapper}>
        {productId && (
          <div class="yotpo yotpo-main-widget" data-product-id={productId}>
            <Loader2 />
          </div>
        )}
      </div>
    );
  }
};

export default memo(ProductReviews);
