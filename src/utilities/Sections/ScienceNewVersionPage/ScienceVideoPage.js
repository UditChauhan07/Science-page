import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

function ScienceVideoPage() {
  return (
    <div>
      <div className={styles.scienceVideoPage}>
        <Link href="/science-video">
         <img src="/images/VideoSnap.webp"/>
        </Link>
      </div>
    </div>
  );
}

export default ScienceVideoPage;
