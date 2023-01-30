import styles from "../styles/Read.module.css"
import { useContext, useEffect, useState } from "react"
import { HomeContext } from "../context/HomeContext"
import { Link } from "react-router-dom"
import ReaderContainer from "../components/Read/ReaderContainer"

export default () => {
  const { setTitle } = useContext(HomeContext);
  const [readMode, setReadMode] = useState(0);
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
        <div className={styles.settings}>
          <div className={styles.config}>
            <label className={styles.label}>Reading mode: </label>
            <select onChange={(e) => setReadMode(e.target.value)} className={styles.select}>
              <option value="0">Webtoon</option>
              <option value="1">Left to Right</option>
              <option value="2">Right to Left</option>
            </select>
          </div>
          <div className={styles.config}>
            <label className={styles.label}>Jump to page: </label>
            <select className={styles.select}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
        <div className={styles.reader__container}>
          <ReaderContainer images={arr} option={readMode} />
        </div>
      </div>
    </>
  )
}