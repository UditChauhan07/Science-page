import '@/styles/globals.css'
import Layout from "@/componets/Layout"
import { RouteGuard } from '@/componets/RouteGuard'
import { useEffect } from 'react';
import GeoRedirect from '@/utilities/GeoRedirect';
import PageHeadScript from '@/utilities/Head/script';
export default function App({ Component, pageProps }) {
  const version = 'ENG';
  const script = true;
  useEffect(()=>{
    // window.addEventListener("load", (event) => {
    //   console.log("page is fully loaded");
    //   if(document.getElementById("hubspot-conversations-iframe")){
    //     document.getElementById("hubspot-conversations-iframe").style.top = 0;
    //     document.getElementById("hubspot-conversations-iframe").style.height = '80%';
    //   }
    // });
  },[])
  if (Component?.hideLayout) {
    return (
      <RouteGuard version={version} >
        <GeoRedirect redirect />
        {!Component?.isHideScript && <PageHeadScript />}
        <Component {...pageProps} version={version} script={script}/>
      </RouteGuard>
    )
  } else {
    return (
      <RouteGuard version={version}>
        <Layout version={version} script={script}>
        <GeoRedirect redirect />
        <PageHeadScript/>
          <Component {...pageProps} version={version} script={script}/>
        </Layout>
      </RouteGuard>
    )
  }
}
