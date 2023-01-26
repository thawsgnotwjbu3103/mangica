import styles from "./Layout.module.css"
import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"

export default ({ children }) => {
  return (
    <div className={`${styles.app_layout}`}>
      <Sidebar />
      <div>
        <Header />
        {children}
      </div>
    </div>
  )
}