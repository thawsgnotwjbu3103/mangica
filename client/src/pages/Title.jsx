import styles from "../styles/Title.module.css";
import { useContext } from "react";
import { HomeContext } from "../context/HomeContext"
import { BREAK_POINT_LEFT_COVER } from "../utils/constant";

export default () => {
    const { width } = useContext(HomeContext);

    return (
        <div className={`${styles.main__container}`}>
            {width > BREAK_POINT_LEFT_COVER ? (
                <div className={styles.right__container}>
                    <div className={styles.right__cover}>
                        <img className={styles.right__cover_img} src={`/cover.png`}/>
                        <div className={styles.right__cover_detail}>
                            <span>You are reading: </span>
                            <span className={styles.title}>CHAINSAW MAN</span>
                            <span className={styles.author}>Fujimoto Tatsuki</span>
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