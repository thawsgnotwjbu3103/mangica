import { HomeContext } from "../../context/HomeContext"
import { useContext, useEffect, useRef } from "react"
import styles from "./Header.module.css"
import { Link, BrowserRouter as Router } from "react-router-dom"
import { useState } from "react"

export default () => {
    const { isOpen, setIsOpen, width } = useContext(HomeContext);
    const [isFocus, setIsFocus] = useState(false);
    const [isScroll, setIsScroll] = useState(false);
    const ref = useRef(null);

    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleScroll = () => {
        const { offsetTop } = ref.current;
        console.log(offsetTop, window.scrollY)
        if(window.scrollY > offsetTop) {
            setIsScroll(true);
        } else {
            setIsScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])


    return (
        <div className={`${styles.header} ${isScroll ? styles.sticky : ""} ${isScroll && isOpen ? styles.fix : ""}`} ref={ref}>
            <div className="container d-flex justify-content-between align-items-center h-100 p-3">
                <div>
                    {!isOpen && (
                        <>
                            <span onClick={handleOpen} className={`fa-solid fa-xl fa-align-right ${styles.pointer}`}></span>
                            <Router>
                                <Link className={styles.link} to="/">NGFMANGA</Link>
                            </Router>
                        </>
                    )}
                </div>
                {width > 768 ? (
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
                    </div>
                ) : (
                    <div>
                        <i className="fa-solid fa-lg fa-magnifying-glass"></i>
                    </div>
                )}
            </div>
        </div>
    )
}