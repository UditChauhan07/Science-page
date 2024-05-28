import { useState } from "react";

import styles from "./styles.module.css";
import { Star, StarGroup } from "@/utilities/SvgIcons";

const Amazon = ({ content }) => {
  const pageSize = 6; // Number of reviews per page
  const [currentPage, setCurrentPage] = useState(1);
  if (!content) return null;

  const Card = ({ content }) => {
    if (content == null) return null;
    return (
      <div className={styles.amazon_r_t}>
        <div className={styles.profile_i}>{content.name[0]}</div>

        <div className={styles.ama_content} id={styles.ScrollRight}>
          <div className={styles.amzon_rtp}>
            <div>
              <h3>{content.name}</h3>{" "}
            </div>
            <div>
              <p>{content.date}</p>
            </div>
          </div>
          {content?.star && (
            <StarGroup star={content?.star} color={"#FFBF42"} />
          )}
          <p>
            <span>{content.subTitle}</span>
            <p
              dangerouslySetInnerHTML={{
                __html: content.review,
              }}
            />
          </p>
        </div>
      </div>
    );
  };

  const totalReviews = content?.ratings?.length || 0;
  const totalPages = Math.ceil(totalReviews / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedReviews = content?.ratings?.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className={styles.assw_rew}>
        <section className={styles.amazon_rev}>
          <div className={styles.amazon_views}>
            <div className={styles.amazon1}>
              <div className={styles.amazona}>
                Verified{" "}
                {content.image && (
                  <img
                    src={content.image.src}
                    alt={content.image.alt ? content.image.alt : "amazon"}
                    height={"auto"}
                    width={"auto"}
                  />
                )}{" "}
                Reviews
              </div>
              <div className={styles.amazonb}>
                <span>{content?.star}</span>
                {content?.star && (
                  <StarGroup star={content?.star} color={"#FFBF42"} />
                )}
                &nbsp;
                {content?.ratings?.length &&
                  content?.ratings.length + " Review"}
              </div>
            </div>
            <div className={styles.awqefe}>
              <div className={styles.ama_review}>
                {paginatedReviews &&
                  paginatedReviews.map((rating, index) => {
                    if (rating.link) {
                      return (
                        <div className={styles.asd_ads} key={index}>
                          <a
                            href={rating.link}
                            className={styles.ama_box}
                            target="_blank"
                          >
                            <Card content={rating} />
                          </a>
                        </div>
                      );
                    } else {
                      return (
                        <div className={styles.ama_box} key={index}>
                          <Card content={rating} />
                        </div>
                      );
                    }
                  })}
              </div>
            </div>
            <div className={styles.ama_pagination}>
              {currentPage > 1 && (
                <button onClick={() => handlePageChange(currentPage - 1)}>
                  {"<"}
                </button>
              )}

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={index + 1 === currentPage ? styles.activePage : ""}
                >
                  {index + 1}
                </button>
              ))}

              {currentPage < totalPages && (
                <button onClick={() => handlePageChange(currentPage + 1)}>
                  {">"}
                </button>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Amazon;
