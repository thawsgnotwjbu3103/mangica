import Header from "../Header/Header";
import styles from "./Main.module.css"
import { useContext } from "react";
import { HomeContext } from "../../context/HomeContext";

export default ({ children }) => {
    const { isOpen } = useContext(HomeContext);
    return (
        <div className={`${styles.main__content} ${isOpen ? styles.open__sidebar : ""}`}>
            <Header />
            {children}
        </div>
    )
}