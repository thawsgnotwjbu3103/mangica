import styles from "../styles/Read.module.css"
import { useContext, useEffect, useState } from "react"
import { HomeContext } from "../context/HomeContext"
import { Link } from "react-router-dom"
import ScrollReader from "../components/Read/ScrollReader"

export default () => {
  const { setTitle } = useContext(HomeContext);
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
          <span className={styles.uploaded__team}>Uploaded By: Test-Group</span>
        </div>
        <div className={styles.navigator}>
          <Link className={styles.link}>
            <i className="fa-solid fa-arrow-left"></i> Previous chapter
          </Link>
          <Link className={styles.link}>
            Next chapter <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        <div className={styles.reader__container}>
          <ScrollReader images={arr} />
        </div>
      </div>
    </>
  )
}