import { HomeContext } from "../../context/HomeContext"
import { useContext, useEffect, useRef } from "react"
import styles from "./Header.module.css"
import { Link, BrowserRouter as Router } from "react-router-dom"
import { useState } from "react"
import { BREAK_POINT_HEADER } from "../../utils/constant"

export default () => {
    const { isOpen, setIsOpen, width } = useContext(HomeContext);
    const [isFocus, setIsFocus] = useState(false);
    const [isScroll, setIsScroll] = useState(false);
    const ref = useRef(null);

    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleScroll = () => {
        setIsScroll(window.scrollY > 0)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])


    return (
        <div className={`${styles.header} ${isScroll ? styles.scrolled : ""}`} ref={ref}>
            <div className="container d-flex justify-content-between align-items-center h-100 p-3">
                <div>
                    {!isOpen && (
                        <>
                            <span onClick={handleOpen} className={`fa-solid fa-xl fa-align-right ${styles.pointer}`}></span>
                            <Link className={styles.link} to="/">NGFMANGA</Link>
                        </>
                    )}
                </div>
                {width > BREAK_POINT_HEADER ? (
                    <div className={styles.right__items}>
                        <div className={styles.form__input}>
                            <form>
                                <input
                                    onBlur={() => setIsFocus(false)}
                                    onFocus={() => setIsFocus(true)}
                                    type="text"
                                    className={styles.text__input}
                                    placeholder="Search" />
                            </form>
                            <div className={styles.input__items}>
                                <span className={`${styles.input__item} ${isFocus ? styles.invisible : ""}`}>Ctrl</span>
                                <span className={`${styles.input__item} ${isFocus ? styles.invisible : ""}`}>k</span>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                        <div>
                            <i className="fa-regular fa-2xl fa-circle-user"></i>
                        </div>
                    </div>
                ) : (
                    <div className="d-flex align-items-center gap-4">
                        <i className="fa-solid fa-lg fa-magnifying-glass"></i>
                        <i className="fa-regular fa-lg fa-circle-user"></i>
                    </div>
                )}
            </div>
        </div>
    )
}