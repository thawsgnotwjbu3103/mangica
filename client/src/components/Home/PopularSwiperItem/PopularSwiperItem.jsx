import { useId } from "react";
import styles from "../Styles.module.css";
import { Link } from "react-router-dom";

export default ({ data }) => {
    return (
        <div className={styles.swiper__items}>
            <div className={styles.item__bg} style={{ background: `url('/${data.imagefile}')` }}></div>
            <div className={styles.item__content}>
                <div className={styles.item__img}>
                    <img className={styles.image} src={`/${data.imagefile}`} />
                </div>
                <div className={styles.detail}>
                    <span className={styles.title}>{data.title}</span>
                    <span className={styles.author}>{data.author}</span>
                    <span className={styles.tags}>
                        {data.tags && data.tags.map((tag) => (
                            <Link to={"#"} key={useId()} className={styles.tag_item}>{tag}</Link>
                        ))}
                    </span>
                    <span className={styles.description}>{data.description}</span>
                    <Link to={`/title/${data.id}/${data.slug}`} className={styles.link}>Read Now</Link>
                </div>
            </div>
        </div>
    )
}