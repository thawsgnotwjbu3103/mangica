import styles from "./Sidebar.module.css"
import { Link, BrowserRouter as Router } from "react-router-dom"
import { useContext } from "react"
import { HomeContext } from "../../context/HomeContext"

export default () => {
    const { isOpen, setIsOpen } = useContext(HomeContext);

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
            <div className="py-2 px-4 h-100">
                <div className={styles.brand}>

                    <Link to="/" className={styles.link}>NGFMANGA</Link>

                    <span onClick={handleClose} className={`fa-solid fa-xl fa-xmark ${styles.close__btn}`}></span>
                </div>

                <Link className={`${styles.link} ${styles.link__item} ${styles.link__item_active}`}>
                    <i className="fa-solid fa-door-open"></i>
                    <span className={styles.link__text}>Home</span>
                </Link>
                <div>
                    <div className={styles.item}>
                        <i className="fa-solid fa-user-group"></i>
                        <span className={styles.link__text}>Followed</span>
                    </div>
                    <div className={styles.sub__items}>
                        <ul>
                            <li>
                                <Link className={`${styles.link} ${styles.link__item}`}>Library</Link>
                            </li>
                            <li>
                                <Link className={`${styles.link} ${styles.link__item}`}>Favorites</Link>
                            </li>
                            <li>
                                <Link className={`${styles.link} ${styles.link__item}`}>Followed Group</Link>
                            </li>
                            <li>
                                <Link className={`${styles.link} ${styles.link__item}`}>Reading history</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className={styles.item}>
                        <i className="fa-solid fa-book"></i>
                        <span className={styles.link__text}>Mangas</span>
                    </div>
                    <div className={styles.sub__items}>
                        <ul>
                            <li>
                                <Link className={`${styles.link} ${styles.link__item}`}>Search</Link>
                            </li>
                            <li>
                                <Link className={`${styles.link} ${styles.link__item}`}>Recenly Added</Link>
                            </li>
                            <li>
                                <Link className={`${styles.link} ${styles.link__item}`}>Latest Updates</Link>
                            </li>
                            <li>
                                <Link className={`${styles.link} ${styles.link__item}`}>Random</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className={styles.item}>
                        <i className="fa-solid fa-person"></i>
                        <span className={styles.link__text}>Comunity</span>
                    </div>
                    <div className={styles.sub__items}>
                        <ul>
                            <li>
                                <Link className={`${styles.link} ${styles.link__item}`}>Forum</Link>
                            </li>
                            <li>
                                <Link className={`${styles.link} ${styles.link__item}`}>Users</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className={styles.item}>
                        <i className="fa-solid fa-thumbtack"></i>
                        <span className={styles.link__text}>NgfManga</span>
                    </div>
                    <div className={styles.sub__items}>
                        <ul>
                            <li>
                                <Link className={`${styles.link} ${styles.link__item}`}>About us</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.socials}>
                    <Link className={styles.link}>
                        <i className="fa-brands fa-2xl fa-facebook"></i>
                    </Link>
                    <Link className={styles.link}>
                        <i className="fa-brands fa-2xl fa-github"></i>
                    </Link>
                    <Link className={styles.link}>
                        <i className="fa-brands fa-2xl fa-twitter"></i>
                    </Link>
                </div>
                <span className={styles.cpr}>@2023 - NgfManga</span>
            </div>

        </div>
    )
}