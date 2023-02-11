import styles from "../styles/Read.module.css"
import { useContext, useEffect, useState } from "react"
import { HomeContext } from "../context/HomeContext"
import { Link } from "react-router-dom"
import ScrollReader from "../components/Read/ScrollReader"
import { BREAK_POINT_HEADER } from "../utils/constant"

export default () => {
    const { setTitle, isOpen, width } = useContext(HomeContext);
    const arr = Array(20).fill("/manga_img.webp");
    useEffect(() => {
        setTitle(`Chainsaw Man - Chapter 113`)
    }, [])



    return (
        <>
            <div className={`${styles.container} container`}>
                <div className={styles.main__title}>
                    <span className={styles.title}>Chainsaw Man - Chapter 113</span>
                    <span className={styles.author}>Fujimoto Tatsuki</span>
                    <span className={styles.uploaded__team}>Upload bởi : Test-Group</span>
                </div>
                <div className={styles.navigator}>
                    {width < BREAK_POINT_HEADER && !isOpen ? (
                        <>
                            <Link className={styles.link}>&lt; Chapter 112</Link>
                            <Link className={styles.link}>Chapter 114 &gt;</Link>
                        </>
                    ) : <></>}
                </div>
                <div className={styles.reader__container}>
                    <ScrollReader images={arr} />
                </div>
                <div className={styles.navigator}>
                    {width < BREAK_POINT_HEADER && !isOpen ? (
                        <>
                            <Link className={styles.link}>&lt; Chapter 112</Link>
                            <Link className={styles.link}>Chapter 114 &gt;</Link>
                        </>
                    ) : <></>}
                </div>
                <div></div>
            </div>
        </>
    )
}