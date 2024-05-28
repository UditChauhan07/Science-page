import React, { useState, useEffect } from "react";

import Handler from "./handler";
const PurchaseBox = ({data, variantId,ActiveBox=null,IsActiveStatusHandler=null})=>{
    useEffect(()=>{
    },[data])
    if(!data) return null
    return(
        <Handler data={data} variantId={variantId} ActiveBox={ActiveBox} IsActiveStatusHandler={IsActiveStatusHandler}/>
    )
}

export default PurchaseBox;