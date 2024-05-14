import { useEffect, useState } from "react";
import { ExitIcon } from "@/utilities/SvgIcons";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import { AddtoCart, RecoverUser, orderInit } from "@/data/lib";
import { Decrypt, Destroy, AuthCheck, ShareDrive } from "@/data/Auth";

const Reorder = () => {
  const [order, setOrder] = useState();
  const [discount, setDiscount] = useState();
  const [subTotal, setSubTotal] = useState();
  const [points, setPoints] = useState(0);
  const [history, setHistory] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [modal, setModal] = useState(false);
  let router = useRouter();
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    orders: [],
    isLoggedIn: false,
  });
  const ignoreReorder = [
    "gid://shopify/ProductVariant/32357278679115",
    "gid://shopify/ProductVariant/32357278744651",
    "gid://shopify/ProductVariant/32357278711883",
  ];
  const [authenticated, setAuthenticated] = useState(true);

  function dateSort(a, b) {
    let dateA = new Date(a?.node?.processedAt).getTime();
    let dateB = new Date(b?.node?.processedAt).getTime();
    return dateA < dateB ? 1 : -1;
  }

  useEffect(() => {
    if (!AuthCheck()) {
      // router.push("/account/login");
      window.location.href = "https://www.brunomd.com/account/login";
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

    setModal(true);

    if (ShareDrive()) {
      let data = ShareDrive();
      if (!data) window.location.href = "/account";
      if (data.order) {
        setOrder(data);
      } else {
        window.location.href = "/account";
      }
    }
  }, []);

  const { email, firstName, lastName, isLoggedIn, orders } = customer;

  const reOrder = () => {
    console.log(orders);
    let id = order.id;
    let lineItems = [];
    orders.edges.map((element) => {
      if (element.node.id == id) {
        element.node.lineItems.edges.map((items) => {
          if (items.node) {
            console.log({ items });
            lineItems.push({
              merchandiseId: items.node.variant?.id,
              quantity: items.node.quantity,
            });
          }
        });
      }
    });
    AddtoCart({ lineItems, customerAccessToken: Decrypt() })
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
  };

  return (
    <div>
      {modal === true && (
        <div className={styles.modal}>
          <div className={styles.modalOverlayV2}></div>
          <div className={styles.modalContainer1}>
            <button
              onClick={() => setModal(false)}
              className={styles.exitButton1}
              style={{ border: `1px solid black` }}
            >
              <ExitIcon />
            </button>
            <div className={styles.modalCardContainerV2}>
              <div className={styles.OverflowDiv}>
                <h1 className={styles.title} style={{ color: "black" }}>
                  Keep Current Cart Items?
                </h1>
                <div
                  className={styles.expanded}
                  dangerouslySetInnerHTML={{
                    __html:
                      "Items from the order will be added to your shopping cart, but you already have some items in your cart now. Would you like to keep or remove your current shopping cart items before the order items are added?",
                  }}
                ></div>
                <button className={styles.clear}>Clear Items</button>
                <button onClick={() => reOrder()} className={styles.keep}>
                  Keep Items
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Reorder;
