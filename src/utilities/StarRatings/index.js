import React, { memo,useEffect, useState } from 'react'

const StarRatings = ({ variantId,v3=false }) => {
  const [productId, setProductId] = useState(variantId);
//   setTimeout(()=> {
//     if (!document.getElementsByClassName(`yotpo-display-wrapper`)?.length){
//       window.location.reload()
//     }
// }, 3000)

  useEffect(() => {
    if(v3){
      (function e() {
        var e = document.createElement("script");
        (e.type = "text/javascript"),
          (e.async = true),
          (e.defer = true),
          (e.src = `https://cdn-widgetsrepository.yotpo.com/v1/loader/ahHyITcI0fkzYo7KejQeWGiBK2CXMKvLvTZ8KUBJ`);
        var t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(e, t);
      })();
    }else{
      (function e() { var e = document.createElement("script"); e.type = "text/javascript", e.async = true, e.src = `//staticw2.yotpo.com/ahHyITcI0fkzYo7KejQeWGiBK2CXMKvLvTZ8KUBJ/widget.js`; var t = document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e, t) })();
    }
}, [productId])

  return (
    <div style={{height: '40px',display: 'flex'}}>
      {productId && <div
        class="yotpo bottomLine yotpo-medium"
        style={{height:'auto'}}
        id={`star-${productId}`}
        data-yotpo-product-id={productId}
      ></div>}
    </div>

  )
}

export default memo(StarRatings)
