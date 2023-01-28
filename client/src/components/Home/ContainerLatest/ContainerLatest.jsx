import styles from "../Styles.module.css";
import { Link } from "react-router-dom";
import { useId } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"

export default ({ data }) => {
    dayjs.extend(relativeTime);
    return (
        <div className={styles.container__latest}>
            {data && data.map((el) => (
                <Link to={`/read/${el.id}/${el.slug}`} key={useId()} className={`${styles.link} w-100`}>
                    <div className={styles.manga__item}>
                        <img className={styles.manga__cover} src={`/${el.imagefile}`} />
                        <div className={styles.manga__detail}>
                            <span className={styles.manga__title}>{el.title}</span>
                            <span className={styles.manga__chapter}>Chapter {el.chapter}</span>
                            <span className={styles.manga__update}>Updated {dayjs(el.created_at).fromNow(true)}</span>
                            <span className={styles.manga__interact}>
                                <span>
                                    <i className="fa-solid fa-xs fa-heart"></i> {el.like}
                                </span>
                                <span>
                                    <i className="fa-solid fa-comment"></i> {el.comment}
                                </span>
                            </span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}