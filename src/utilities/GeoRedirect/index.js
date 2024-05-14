import React, { useEffect, useState } from "react";

const GeoRedirect = ({ redirect }) => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    getUserIpAddr();
  }, []);
  if (!redirect) return null;
  function getUserIpAddr() {
    var defaultSite = "https://brunomd.com/";
    var euSite = "https://brunomd.eu/";
    var deSite = "https://brunomd.de/";

    fetch("https://ipapi.co/country/")
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error("HTTP Error " + response.status);
        }
      })
      .then((country) => {
        if (country == "DE" || country == "IT") {
          if (country == "DE") {
            window.location = deSite;
          } else {
            window.location = euSite;
          }
        }
        setLoad(true);
      })
      .catch(function (error) {
        console.error({ error });
      });
    // }
  }
  //   if(!load)return (
  //    <div className={styles.wrapper}>
  //   <div className={styles.holder}>Loading ...
  //     <svg>
  //       <rect x="1" y="1"></rect>
  //     </svg>
  //   </div>
  // </div>
  //   )
  return <></>;
};

export default GeoRedirect;
