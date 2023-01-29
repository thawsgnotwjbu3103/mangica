import styles from "../styles/Title.module.css";
import { useContext } from "react";
import { HomeContext } from "../context/HomeContext"
import { BREAK_POINT_LEFT_COVER } from "../utils/constant";
import { Link } from "react-router-dom";

export default () => {
  const { width } = useContext(HomeContext);

  return (
    <div className={`${styles.main__container}`}>
      {width > BREAK_POINT_LEFT_COVER ? (
        <div className={styles.right__container}>
          <div className={styles.right__cover}>
            <img className={styles.right__cover_img} src={`/cover.png`} />
            <div className={styles.right__cover_detail}>
              <span>You are reading: </span>
              <span className={styles.title}>CHAINSAW MAN</span>
              <Link className={styles.author}>Fujimoto Tatsuki</Link>
              <div className={styles.genres}>
                <span className={styles.genres__container}>
                  <span className={styles.genres__title}>Genres: </span>
                  <span className={styles.genres__tags}>
                    <Link target={"_blank"} className={styles.genres__tag}>ACTION</Link>
                    <Link className={styles.genres__tag}>COMEDY</Link>
                  </span>
                </span>
              </div>
              <div className={styles.buy__now}>
                <span className={styles.genres__title}>Like this one ?</span>
                <Link target={"_blank"} className={styles.support__author}>SUPPORT THE AUTHOR</Link>
              </div>
            </div>
          </div>
          <img className={styles.right__item_img} src={`/cover.png`} />
        </div>
      ) : ""}
      <div className="container">
        Right side
      </div>
    </div>
  )
}