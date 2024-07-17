import React, { useState } from "react";
import styles from "./styles.module.css";
import { useMatchMedia } from "../Sections/Hooks/useMatchMedia";
import Blogs from "../Blog";
import Accordion from "../Accordion";
import Link from "next/link";
import ProductsBlogData from "../../../json/productBlog.json";

const Tabs = ({ data, productColorTheme, productString }) => {
  const [isTab] = useMatchMedia("(max-width: 800px)", false);
  const [modal, setModal] = React.useState(false);
  const [imageSource, setImageSource] = React.useState("/");
  const [activeTab, setActiveTab] = useState(0);
  let BlogData = ProductsBlogData[productString];
  if (BlogData) {
    BlogData = BlogData.Blog;
  }
  // console.log("ddddd" + JSON.stringify(BlogData.details));

  if (!data) return null;
  let width = 0;
  data.map((e) => {
    width += e.title.length * 12;
  });
  const handler = (value) => {
    setActiveTab(value);
  };
  const handleClick = (e, element) => {
    setImageSource(element.src);
    setModal(true);
  };
  return (
    <>
      {!isTab && (
        <div className={styles.active} id="According">
          <div className={styles.app}>
            <div className={styles.box1}>
              <div
                className={styles.tabs}
                id={"productTab"}
                style={{ width: `${width}px` }}
              >
                {data &&
                  data.map((e, i) => {
                    if (activeTab == i) {
                      return (
                        <div
                          key={i}
                          onClick={() => handler(i)}
                          className={styles.tab}
                          style={{ color: productColorTheme }}
                        >
                          {e.title}
                          <div
                            className={styles.hr}
                            style={{ backgroundColor: productColorTheme }}
                          ></div>
                        </div>
                      );
                    } else {
                      return (
                        <div
                          onClick={() => handler(i)}
                          className={styles.tab}
                          key={i}
                        >
                          {e.title}
                          <div className={styles.hr}></div>
                        </div>
                      );
                    }
                  })}
              </div>
            </div>
            <div className={styles.contents}>
              <>
                {data &&
                  data.map((e, i) => {
                    return (
                      <div
                        key={i}
                        className={
                          activeTab == i ? styles.activeContent : styles.content
                        }
                      >
                        {e?.blog && BlogData ? (
                          <Blogs categories={BlogData.details} />
                        ) : e?.faq ? (
                          <div style={{ padding: "0 3rem" }}>
                            <div className={styles.titleContainer}>
                              <h2>Questions</h2>
                              <Link href={`/faqs`}>View all FAQs</Link>
                            </div>
                            <Accordion items={e.details} />
                          </div>
                        ) : (
                          <div
                            className={styles.accordDesc}
                            style={{ height: "50vh", overflow: "unset" }}
                          >
                            {e.details && (
                              <>
                                {e.facts && e.factImage && (
                                  <p
                                    style={{
                                      color: productColorTheme,
                                      marginBottom: "2rem",
                                      cursor: "pointer",
                                    }}
                                    onClick={(event) =>
                                      handleClick(event, e.factImage)
                                    }
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill={productColorTheme}
                                      class="bi bi-zoom-in"
                                      viewBox="0 0 16 16"
                                    >
                                      {" "}
                                      <path
                                        fill-rule="evenodd"
                                        d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                                      />{" "}
                                      <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z" />{" "}
                                      <path
                                        fill-rule="evenodd"
                                        d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
                                      />{" "}
                                    </svg>
                                    &nbsp;SUPPLEMENT FACTS
                                  </p>
                                )}
                                {e.details.length > 0 &&
                                  e.details.map((e1, i1) => {
                                    return (
                                      <div
                                        key={`tab-${i1}`}
                                        dangerouslySetInnerHTML={{ __html: e1 }}
                                        className={styles.detailHolder}
                                      />
                                    );
                                  })}
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
              </>
            </div>
            {modal === true && (
              <div className={styles.modal}>
                <div className={styles.modalOverlay}></div>
                <div className={styles.modalContainer}>
                  <button
                    onClick={() => setModal(false)}
                    className={styles.exitButton}
                  >
                    <svg
                      width="40"
                      height="40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="white" fill-rule="evenodd">
                        <path fill={productColorTheme} d="M0 0h40v40H0z" />
                        <path
                          fill="#fff"
                          fill-rule="nonzero"
                          d="M16.93 25.416l3.267-3.266 3.069 3.07 2.09-2.09-3.07-3.07 3.13-3.13-2.338-2.337-3.13 3.13-3.078-3.078-2.09 2.089 3.079 3.078-3.266 3.266z"
                        />
                      </g>
                    </svg>
                  </button>
                  <img
                    src={imageSource}
                    alt={"..."}
                    className={styles.ing}
                    width={500}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {isTab && (
        <>
          <div className={styles.app}>
            <div className={styles.box2}>
              <>
                {data &&
                  data.map((e, i) => {
                    if (activeTab == i) {
                      return (
                        <>
                          <div
                            key={i}
                            onClick={() => handler(i)}
                            className={styles.accordTitle}
                            style={{
                              color: productColorTheme,
                              "background-color": "#F7F7F7",
                            }}
                          >
                            <div className={styles.accordFlex}>
                              <div>{e.title}</div>
                              <div
                                className={styles.upArrow}
                                style={{ color: productColorTheme }}
                              >
                                <svg
                                  class="flickity-button-icon"
                                  viewBox="0 0 100 100"
                                >
                                  <path
                                    d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                                    class="arrow"
                                    transform="translate(100, 100) rotate(180) "
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          {e?.blog & BlogData ? (
                            <Blogs categories={BlogData.details} />
                          ) : e?.faq ? (
                            <div style={{ padding: "0 3rem" }}>
                              <div className={styles.titleContainer}>
                                <h2>Questions</h2>
                                <Link href={`/faqs`}>View all FAQs</Link>
                              </div>
                              <Accordion items={e.details} />
                            </div>
                          ) : (
                            <div
                              className={styles.accordDesc}
                              style={{ height: "50vh", width: "85%" }}
                            >
                              {e.details && Array.isArray(e.details) ? (
                                <>
                                  {e.facts && e.factImage && (
                                    <p
                                      style={{
                                        color: productColorTheme,
                                        marginBottom: "2rem",
                                        cursor: "pointer",
                                      }}
                                      onClick={(event) =>
                                        handleClick(event, e.factImage)
                                      }
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill={productColorTheme}
                                        class="bi bi-zoom-in"
                                        viewBox="0 0 16 16"
                                      >
                                        {" "}
                                        <path
                                          fill-rule="evenodd"
                                          d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                                        />{" "}
                                        <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z" />{" "}
                                        <path
                                          fill-rule="evenodd"
                                          d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
                                        />{" "}
                                      </svg>
                                      &nbsp;SUPPLEMENT FACTS
                                    </p>
                                  )}
                                  {e.details.map((element, index) => {
                                    return (
                                      <div
                                        dangerouslySetInnerHTML={{
                                          __html: element,
                                        }}
                                        key={index}
                                      />
                                    );
                                  })}
                                </>
                              ) : (
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: e.details,
                                  }}
                                />
                              )}
                            </div>
                          )}
                        </>
                      );
                    } else {
                      return (
                        <div
                          key={i}
                          onClick={() => handler(i)}
                          className={styles.accordTitle}
                        >
                          <div className={styles.accordFlex}>
                            <div>{e.title}</div>
                            <div className={styles.downArrow}>
                              <svg
                                class="flickity-button-icon"
                                viewBox="0 0 100 100"
                              >
                                <path
                                  d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                                  class="arrow"
                                  transform="translate(100, 100) rotate(180) "
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                {modal === true && (
                  <div className={styles.modal}>
                    <div className={styles.modalOverlay}></div>
                    <div className={styles.modalContainer}>
                      <button
                        onClick={() => setModal(false)}
                        className={styles.exitButton}
                      >
                        <svg
                          width="40"
                          height="40"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="white" fill-rule="evenodd">
                            <path fill={productColorTheme} d="M0 0h40v40H0z" />
                            <path
                              fill="#fff"
                              fill-rule="nonzero"
                              d="M16.93 25.416l3.267-3.266 3.069 3.07 2.09-2.09-3.07-3.07 3.13-3.13-2.338-2.337-3.13 3.13-3.078-3.078-2.09 2.089 3.079 3.078-3.266 3.266z"
                            />
                          </g>
                        </svg>
                      </button>
                      <img
                        src={imageSource}
                        alt={"..."}
                        className={styles.ing}
                      />
                    </div>
                  </div>
                )}
              </>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Tabs;
