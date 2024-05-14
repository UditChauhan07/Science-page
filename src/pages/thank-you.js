import styles from "@/styles/thanks.module.css"
import PageHead from "@/utilities/Head";
import Link from "next/link";
import { useEffect } from "react";

const Thanks = ()=>{
    useEffect(()=>{
        localStorage.removeItem("l8Z2364#TEa");
        localStorage.removeItem("h2HZR£qu3")
    },[])
    return(
    <div className={styles.content}>
      <PageHead content={{title:'Thank You | Bruno MD',description:"Health and wellness products rooted in the heart of Italy, made from all-natural ingredients. Pharmaceutical grade supplements to fuel your future."}}/>
        <div className={styles.wrapperO}>
          <div className={styles.wrapperT}>
            <h1>Thank you !</h1>
            <p>Thank you for your order!</p>
            <Link href="/"><button className={styles.goHome}>
            ← go back home
            </button></Link>
          </div>
      </div>
      </div>)
}
export default Thanks;