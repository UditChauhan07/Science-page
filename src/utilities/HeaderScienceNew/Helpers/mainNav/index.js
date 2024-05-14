import { CartIcon, SearchIcon } from "../../../SvgIcons/index";
import Link from "next/link";
import NavList from "../Navlist";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import MobileNav from "../MobileNav";
import Image from "next/image";
import { useMatchMedia } from "@/utilities/Sections/Hooks/useMatchMedia";
import {
  fetchRechargeCart,
  getCartList,
  updateCartAccount,
  getProductSearch,
} from "@/data/lib";
import { AuthCheck, Decrypt } from "@/data/Auth";
import { useAmp } from "next/amp";
import SearchBox from "../../SearchBox";
let cartKey = "l8Z2364#TEa";

const MainNav = ({ navMenuLinks, version, iconLink }) => {
  const loadAmp = useAmp();
  const [isMobile] = useMatchMedia("(max-width: 380px)", true);
  const [isSearchOpened, setIsSearchOpened] = useState(false);
  let [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [itemNumber, setItemNumber] = useState(0);
  const [isUser, setUser] = useState(AuthCheck() ? true : false);
  let cartUrl = iconLink?.cart || null;

  useEffect(() => {
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
    // let cartId = localStorage.getItem(cartKey);
    // let authenticate = Decrypt();
    // updateCartAccount({ cartId, customerAccessToken: AuthCheck() ? authenticate : null}).then((response2) => {
    //   console.log({ response2 });
    // }).catch((err2) => {
    //   console.error({ err2 });
    // })
  }, []);

  
  const Hamtoggle = (value) => {
    if (value) {
      if (document.getElementById("hubspot-messages-iframe-container"))
        document.getElementById("hubspot-messages-iframe-container").style.top =
          "3000px";
    } else {
      if (document.getElementById("hubspot-messages-iframe-container"))
        document.getElementById("hubspot-messages-iframe-container").style.top =
          "unset";
    }
    setIsMobileNavOpen(value);
  };
  return (
    <>
      {!isMobileNavOpen ? (
        <div className={styles.navContainer}>
          <div className={styles.logoWrapper}>
            {!isMobileNavOpen && (
              <a href={"/"} className={styles.logo}>
                {loadAmp ? (
                  <amp-img
                    width="300"
                    height="300"
                    src="/amp-image.jpg"
                    alt="a amp image"
                    layout="responsive"
                  />
                ) : (
                  <>
                    {" "}
                    {!isMobile ? (
                      <Image
                        alt="Bruno logo"
                        src={"/Bruno-White.webp"}
                        width={180}
                        height={30}
                        className={styles.LogoSize}
                      />
                    ) : (
                      <Image
                        alt="Bruno logo"
                        src={"/Bruno-White.webp"}
                        width={120}
                        height={20}
                      />
                    )}
                  </>
                )}
              </a>
            )}
            <div className={styles.navItemsContainer}>
              <NavList navMenuLinks={navMenuLinks} />
              <div className={styles.MobileNavContainer}>
                <div onClick={() => Hamtoggle(true)}>
                  <div
                    className={styles.burgerButtonContainer}
                    onClick={() => Hamtoggle(true)}
                  >
                    <button
                      className={styles.burgerLineContainer}
                      id="hamburger"
                      title="hamburger"
                    >
                      <span className={styles.burgerLineTop}></span>
                      <span className={styles.burgerLine}></span>
                      <span className={styles.burgerLineBottom}></span>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.iconContainer}>
                <SearchBox />
                <div>
                  <div className={styles.loginButton}>
                    <Link
                      href=""
                      className={styles.btnLink1}
                      alt="customer login"
                    >
                      <span
                        className={styles.loginText}
                        style={AuthCheck() ? { left: "-14px" } : {}}
                      >
                    Login
                      </span>
                    </Link>
                    <div
                      onClick={() => (window.location.href = cartUrl)}
                      className={styles.btnLink}
                    >
                      <CartIcon
                        number={itemNumber === 0 ? "" : itemNumber}
                        styles={{ paddingTop: "2px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <MobileNav
          navMenuLinks={navMenuLinks}
          setIsMobileNavOpenProp={Hamtoggle}
        />
      )}
    </>
  );
};

export default MainNav;
