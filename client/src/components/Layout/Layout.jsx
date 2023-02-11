import styles from "./Layout.module.css"
import { HomeProvider, HomeContext } from "../../context/HomeContext"
import Sidebar from "../Sidebar/Sidebar"
import Main from "../Main/Main"
import ScrollToTop from "../../utils/ScrollToTop"

export default ({ children }) => {
    return (
        <HomeProvider>
            <ScrollToTop>
                <div className={`${styles.app_layout}`}>
                    <Sidebar />
                    <Main children={children} />
                </div>
            </ScrollToTop>
        </HomeProvider>
    )
}