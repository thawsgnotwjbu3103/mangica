import styles from "../styles/Title.module.css";
import { useContext, useEffect, useId } from "react";
import { HomeContext } from "../context/HomeContext"
import { BREAK_POINT_LEFT_COVER } from "../utils/constant";
import { Link } from "react-router-dom";

export default () => {
    const { width, setTitle } = useContext(HomeContext);
    const arr = [...Array(9).keys()];

    useEffect(() => {
        setTitle("Chainsaw Man")
    }, [])

    return (
        <div className={`${styles.main__container}`}>
            {width > BREAK_POINT_LEFT_COVER ? (
                <div className={styles.right__container}>
                    <div className={styles.right__cover}>
                        <img className={styles.right__cover_img} src={`/cover.png`} />
                        <div className={styles.right__cover_detail}>
                            <span>You are reading: </span>
                            <span className={styles.title}>CHAINSAW MAN</span>
                            <Link className={styles.author}>Fujimoto Tatsuki</Link>
                            <div className={styles.genres}>
                                <span className={styles.genres__container}>
                                    <span className={styles.genres__title}>Genres: </span>
                                    <span className={styles.genres__tags}>
                                        <Link className={styles.genres__tag}>ACTION</Link>
                                        <Link className={styles.genres__tag}>COMEDY</Link>
                                    </span>
                                </span>
                            </div>
                            <div className={styles.buy__now}>
                                <span className={styles.genres__title}>Like this one ?</span>
                                <Link target={"_blank"} className={styles.support__author}>SUPPORT THE AUTHOR</Link>
                            </div>
                            <div className={styles.description}>
                                <span className={styles.genres__title}>Summary: </span>
                                <span className={styles.text}>
                                    Broke young man + chainsaw dog demon = Chainsaw Man!
                                    The name says it all! Denji's life of poverty is changed forever when he merges with his pet chainsaw dog, Pochita!
                                    Now he's living in the big city and an official Devil Hunter. But he's got a lot to learn about his new job and chainsaw powers!
                                </span>
                            </div>
                            <div className={styles.link__container}>
                                <Link className={styles.link}>
                                    <i className="fa-solid fa-book-open-reader"></i>
                                    <span className={styles.genres__title}>
                                        Read
                                    </span>
                                </Link>
                                <Link className={styles.link}>
                                    <i className="fa-solid fa-bookmark"></i>
                                    <span className={styles.genres__title}>
                                        Add to library
                                    </span>
                                </Link>
                                <Link className={styles.link}>
                                    <i className="fa-regular fa-heart"></i>
                                    <span className={styles.genres__title}>
                                        Like
                                    </span>
                                </Link>
                                <Link className={styles.link}>
                                    <i className="fa-solid fa-bug"></i>
                                    <span className={styles.genres__title}>
                                        Report
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <img className={styles.right__item_img} src={`/cover.png`} />
                </div>
            ) : ""}
            <div className={`${styles.right__side}`}>
                <span className={styles.list__title}>List of chapters</span>
                <div className={styles.chapters__container}>
                    {arr && arr.map((el, idx) => (
                        <Link key={useId()} className={styles.chapter__items}>
                            <div className={styles.chapter__item}>
                                <span className={styles.chapter__no}>
                                    <i className="fa-regular fa-bookmark"></i> Ch.113
                                </span>
                                <span className={styles.group__name}>
                                    <i className="fa-regular fa-user"></i> Test-Group
                                </span>
                            </div>
                            <div className={styles.chapter__item}>
                                <span className={styles.chapter__no}>
                                    <i className="fa-regular fa-clock"></i> 4 minutes ago
                                </span>
                                <span className={styles.comment}>
                                    <i className="fa-regular fa-comment"></i> Comment
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className={styles.paginate}>
                    <Link className={styles.navigator}>
                        <i className="fa-solid fa-2xl fa-arrow-left"></i>
                    </Link>
                    <div className={styles.page__container}>
                        <Link className={`${styles.page__item} ${styles.active__page}`}>1</Link>
                        <Link className={`${styles.page__item}`}>2</Link>
                        <Link className={`${styles.page__item}`}>3</Link>
                        <Link className={`${styles.page__item}`}>4</Link>
                        <Link className={`${styles.page__item}`}>5</Link>
                    </div>
                    <Link className={styles.navigator}>
                        <i className="fa-solid fa-2xl fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}