import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Encrypt } from "@/data/Auth";
import { GetUserDetails } from "@/data/lib";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
export { RouteGuard };

function RouteGuard({ children, version }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    let path = router.asPath;

    let newPath = path.split("/account/reset/");
    let newPath1 = path.split("/tools/");
    let discountUrl = path.split("/discount/");
    let autologin = path.split("/OsdEmAm6nBvEx2L/");
    if (autologin.length == 2) {
      let removeStr = autologin[1].split("auto/");
      if (removeStr.length == 2) {
        let split = removeStr[1].split("/");
        if (split.length == 2) {
          GetUserDetails({
            loginFields: { email: atob(split[0]), password: atob(split[1]) },
            handler: { router, Encrypt: Encrypt, setLoginErrors: [] },
          })
            .then((response) => {
              var errors =
                response?.data?.customerAccessTokenCreate?.customerUserErrors ||
                [];
              if (errors.length != 0) {
                confirmAlert({
                  title: "Alert",
                  message: errors[0].message,
                  buttons: [
                    {
                      label: "Ok",
                      onClick: () =>
                        (window.location.href =
                          "https://www.brunomd.com/pages/mylogout"),
                    },
                  ],
                });
              } else {
                Encrypt(
                  response?.data?.customerAccessTokenCreate?.customerAccessToken
                );
                router.push("/account");
              }
            })
            .catch((err) => {
              alert(err);
              console.log({ err });
            });
        } else {
          router.push("/");
        }
      } else {
        router.push("/");
      }
    }
    if (discountUrl.length == 2) {
      // if(discountUrl[1] == "CYBER20"){
      //     window.location.href = "https://www.brunomd.com/cart/28093101572171:1,28093297033291:1,31082440360011:1?discount=CYBER20"
      // }
      let discount = discountUrl[1].split("?");
      // return
      if (discount.length == 2) {
        let discountValue = discount[0];
        let productArray1 = discount[1].split("%2F");
        let productArray2 = discount[1].split("/");
        window.location.href =
          "https://www.brunomd.com/cart/14072627003467:1?discount=" +
          discountValue;
      }
    } else if (newPath.length == 2) {
      window.location.href =
        "https://www.brunomd.com/account/reset/" + newPath[1];
    } else if (newPath1.length == 2) {
      window.location.href = "https://www.brunomd.com/tools/" + newPath1[1];
      // }else if(path == "/rewards-page"){
      //     window.location.href = "https://www.brunomd.com/pages/rewards-page";
    } else {
      let check = router.asPath.split("#");
      let check1 = check[0].split("?");
      if (check1[0] == "/account/login") {
        window.location.href = "https://www.brunomd.com/account/login";
      }
      if (check1[0] == "/rewards-page") {
        window.location.href = "https://www.brunomd.com/pages/rewards-page";
      }
      authCheck(check1[0]);
    }

    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);
    router.events.on("routeChangeComplete", authCheck);

    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };
  }, []);

  function authCheck(url) {
    let publicPaths = [];
    if (version == "ENG")
      publicPaths = [
        "/",
        "/terms-of-service",
        "/social-responsibility",
        "/collections/[collezioni]",
        "/collections/vision",
        "/collections/joints",
        "/collections/immunity",
        "/collections/skin",
        "/collections/bone-health",
        "/collections/heart",
        "/faqs",
        "/rewards-page",
        "/reviews",
        "/science",
        "/become-an-affiliate",
        "/return-and-cancellation-policy",
        "/privacy-policy",
        "/our-story",
        "/collections/all-products",
        "/contact-us",
        "/shipping-policy",
        "/cart",
        "/products/[product]",
        "/products/royal-collagen-peptides-stick-packs-dragon-fruit-20-units",
        "/products/royal-collagen-peptides-stick-packs-strawberry-acai-20-units",
        "/products/royal-collagen-peptides-stick-packs-blood-orange-20-units",
        "/products/royal-collagen-peptides",
        "/products/bluerex-vision-60-caps-30-servings",
        "/products/riboflam-90-v-caps-30-servings",
        "/products/cholestq10-60-v-caps-30-servings",
        "/products/tendoactive-plus-20-sticks",
        "/404-page",
        "/run",
        "/cart",
        "/account/login",
        "/account/register",
        "/account/forgot-password",
        "/account",
        "/account/addresses",
        "/account/address",
        "/account/orders",
        "/account/orders/edit",
        "/_error",
        "/cholestq10",
        "/people-v4",
        "/people_bogfs",
        "/hearstcollection",
        "/people",
        "/men",
        "/women",
        "/bicycling",
        "/bluerex",
        "/pages/royal-collagen-peptides",
        "/thank-you",
        "/pages/temp",
        "/pages/people",
        "/pages/people-wo-script",
        "/pages/run",
        "/pages/run-wo-script",
        "/pages/cholestq10",
        "/pages/cholestq10-wo-script",
        "/pages/blurex",
        "/pages/blurex-wo-script",
        "/scienceNew",
        "/scienceNew01",
        "/ScienceNewVersionPage",
        "/science-phytosome",
        "/science-video",
        "/science-clinical",
        "/science-human",
        "/Endeavor",
        "/science-tab",
        "/science-tab?tab=0",
        "/science-tab?tab=1",
        "/science-tab?tab=2",


      ];
    // console.log(publicPaths.includes(url), { publicPaths, url });
    if (!publicPaths.length) {
      publicPaths = ["/404-page"];
    }
    // publicPaths.includes(url)
    if (publicPaths.includes(url)) {
      setAuthorized(true);
    } else {
      if (
        url == "/account/login?checkout_url=https://brunomd.com/rewards-page"
      ) {
        window.location.href = "/account/login";
      } else if (
        url == "/account/login?checkout_url=http://localhost:5000/rewards-page"
      ) {
        window.location.href = "/account/login";
      } else {
        window.location.href = "/404-page";
        setAuthorized(false);
      }
    }
  }

  return authorized && children;
}
