import styles from "./Sidebar.module.css"
import { Link, BrowserRouter as Router } from "react-router-dom"

export default () => {
  const handleClose = () => {

  }


  return (
    <div className={styles.sidebar}>
      <div className={styles.brand}>
        <Router>
          <Link to="/" className={styles.link}>NGFMANGA</Link>
        </Router>
        <i onClick={handleClose} className={`fa-solid fa-xl fa-xmark ${styles.close__btn}`}></i>
      </div>
    </div>
  )
}