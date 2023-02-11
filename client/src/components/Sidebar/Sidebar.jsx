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

                    <Link to="/" className={styles.link}>MANGICA</Link>

                    <span onClick={handleClose} className={`fa-solid fa-xl fa-xmark ${styles.close__btn}`}></span>
                </div>

                <Link className={`${styles.link} ${styles.link__item} ${styles.link__item_active}`}>
                    <i className="fa-solid fa-door-open"></i>
                    <span className={styles.link__text}>Trang chủ</span>
                </Link>
                <div>
                    <div className={styles.item}>
                        <i className="fa-solid fa-user-group"></i>
                        <span className={styles.link__text}>Theo dõi</span>
                    </div>
                    <div className={styles.sub__items}>
                        <ul>
                            <li>
                                <Link className={`${styles.link} ${styles.link__item}`}>Thư viện</Link>
                            </li>
                            <li>
                                <Link className={`${styles.link} ${styles.link__item}`}>Yêu thích</Link>
                            </li>
                            <li>
                                <Link className={`${styles.link} ${styles.link__item}`}>Nhóm đã theo dõi</Link>
                            </li>
                            <li>
                                <Link className={`${styles.link} ${styles.link__item}`}>Lịch sử</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className={styles.item}>
                        <i className="fa-solid fa-book"></i>
                        <span className={styles.link__text}>Manga</span>
                    </div>
                    <div className={styles.sub__items}>
                        <ul>
                            <li>
                                <Link className={`${styles.link} ${styles.link__item}`}>Tìm kiếm</Link>
                            </li>
                            <li>
                                <Link className={`${styles.link} ${styles.link__item}`}>Manga mới thêm</Link>
                            </li>
                            <li>
                                <Link className={`${styles.link} ${styles.link__item}`}>Mới cập nhật</Link>
                            </li>
                            <li>
                                <Link className={`${styles.link} ${styles.link__item}`}>Random truyện</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className={styles.item}>
                        <i className="fa-solid fa-person"></i>
                        <span className={styles.link__text}>Cộng đồng</span>
                    </div>
                    <div className={styles.sub__items}>
                        <ul>
                            <li>
                                <Link className={`${styles.link} ${styles.link__item}`}>Diễn đàn</Link>
                            </li>
                            <li>
                                <Link className={`${styles.link} ${styles.link__item}`}>Người dùng</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className={styles.item}>
                        <i className="fa-solid fa-thumbtack"></i>
                        <span className={styles.link__text}>Mangica</span>
                    </div>
                    <div className={styles.sub__items}>
                        <ul>
                            <li>
                                <Link className={`${styles.link} ${styles.link__item}`}>Về chúng tôi</Link>
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
                <span className={styles.cpr}>@{new Date().getFullYear()} - Mangica</span>
            </div>
        </div>
    )
}