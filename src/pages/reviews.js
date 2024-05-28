import React from "react"
import PageHead from "@/utilities/Head"
import { HomeGallery } from "@/utilities/HomeGallery"
import ProductReviews from "@/utilities/ProductReviews"

export default function Reviews() {

    return (
        <section>
            <PageHead content={{title:'Reviews | Bruno MD',description:"We are confident that you will be satisfied with your Bruno MD products, however, if you are not satisfied with your purchase, we will refund your entire first order."}}/>
            {/* <h1>Our believers</h1> */}
            <HomeGallery id={'5e7cf7950a4044179b4ab843'} galleryId={'61f851d08d183b19ec9105cf'} title={'Our Believers'}/>
            <ProductReviews variantId={'1547402084427'} />
        </section>
    )
}
