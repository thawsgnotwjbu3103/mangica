import { Link } from "react-router-dom"
import styles from "../Styles.module.css"

export default ({data}) => {
    return (
        <Link to={`/title/${data.id}/${data.slug}`} className={styles.link__nohover}>
            <div className={styles.season__item_slider}>
                <img className={styles.season__item_img} src={`/${data.imagefile}`} />
            </div>
        </Link>
    )
}