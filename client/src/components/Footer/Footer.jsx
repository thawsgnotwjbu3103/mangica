import styles from "./Footer.module.css"

export default () => {
    return (
        <div className={`container ${styles.footer}`}>
            <span>@nfgmanga - 2023</span>
            <span>This website is inspired by <a className={styles.link} target="_blank" href="https://mangadex.org/">MangaDex</a></span>
        </div>
    )
}