import styles from "../styles/Home.module.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { HomeContext } from "../context/HomeContext"

export default () => {
    const { width } = useContext(HomeContext);
    const arr = [...Array(5).keys()]


    return (
        <div className={styles.container__box}>
            <div className={styles.box__items}>
                <h3 className={styles.main__title}>Popular New Title</h3>
                <div className={styles.slider}>
                    <Swiper
                        direction={"vertical"}
                        pagination={{
                            clickable: true,
                            bulletActiveClass: styles.active__item
                        }}
                        autoplay={{
                            delay: 2500,
                            pauseOnMouseEnter: true
                        }}
                        speed={3000}
                        loop={true}
                        modules={[Pagination, Autoplay]}
                        className="w-100 h-100"
                    >
                        <SwiperSlide>
                            <div className={styles.swiper__items}>
                                <div className={styles.item__bg} style={{ background: "url('/cover.png')" }}></div>
                                <div className={styles.item__content}>
                                    <div className={styles.item__img}>
                                        <img className={styles.image} src="/cover.png" />
                                    </div>
                                    <div className={styles.detail}>
                                        <span className={styles.title}>Chainsaw Man</span>
                                        <span className={styles.tags}>
                                            <span className={styles.tag_item}>ACTION</span>
                                            <span className={styles.tag_item}>COMEDY</span>
                                        </span>
                                        <span className={styles.description}>
                                            Broke young man + chainsaw dog demon = Chainsaw Man!
                                            The name says it all! Denji's life of poverty is
                                            changed forever when he merges with his pet chainsaw dog,
                                            Pochita! Now he's living in the big city and an official Devil Hunter.
                                            But he's got a lot to learn about his new job and chainsaw powers!
                                        </span>
                                        <Link className={styles.link}>Read Now</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.swiper__items}>
                                <div className={styles.item__bg} style={{ background: "url('/cover.png')" }}></div>
                                <div className={styles.item__content}>
                                    <div className={styles.item__img}>
                                        <img className={styles.image} src="/cover.png" />
                                    </div>
                                    <div className={styles.detail}>
                                        <span className={styles.title}>Chainsaw Man</span>
                                        <span className={styles.tags}>
                                            <span className={styles.tag_item}>ACTION</span>
                                            <span className={styles.tag_item}>COMEDY</span>
                                        </span>
                                        <span className={styles.description}>
                                            Broke young man + chainsaw dog demon = Chainsaw Man!
                                            The name says it all! Denji's life of poverty is
                                            changed forever when he merges with his pet chainsaw dog,
                                            Pochita! Now he's living in the big city and an official Devil Hunter.
                                            But he's got a lot to learn about his new job and chainsaw powers!
                                        </span>
                                        <Link className={styles.link}>Read Now</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.swiper__items}>
                                <div className={styles.item__bg} style={{ background: "url('/cover.png')" }}></div>
                                <div className={styles.item__content}>
                                    <div className={styles.item__img}>
                                        <img className={styles.image} src="/cover.png" />
                                    </div>
                                    <div className={styles.detail}>
                                        <span className={styles.title}>Chainsaw Man</span>
                                        <span className={styles.tags}>
                                            <span className={styles.tag_item}>ACTION</span>
                                            <span className={styles.tag_item}>COMEDY</span>
                                        </span>
                                        <span className={styles.description}>
                                            Broke young man + chainsaw dog demon = Chainsaw Man!
                                            The name says it all! Denji's life of poverty is
                                            changed forever when he merges with his pet chainsaw dog,
                                            Pochita! Now he's living in the big city and an official Devil Hunter.
                                            But he's got a lot to learn about his new job and chainsaw powers!
                                        </span>
                                        <Link className={styles.link}>Read Now</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.swiper__items}>
                                <div className={styles.item__bg} style={{ background: "url('/cover.png')" }}></div>
                                <div className={styles.item__content}>
                                    <div className={styles.item__img}>
                                        <img className={styles.image} src="/cover.png" />
                                    </div>
                                    <div className={styles.detail}>
                                        <span className={styles.title}>Chainsaw Man</span>
                                        <span className={styles.tags}>
                                            <span className={styles.tag_item}>ACTION</span>
                                            <span className={styles.tag_item}>COMEDY</span>
                                        </span>
                                        <span className={styles.description}>
                                            Broke young man + chainsaw dog demon = Chainsaw Man!
                                            The name says it all! Denji's life of poverty is
                                            changed forever when he merges with his pet chainsaw dog,
                                            Pochita! Now he's living in the big city and an official Devil Hunter.
                                            But he's got a lot to learn about his new job and chainsaw powers!
                                        </span>
                                        <Link className={styles.link}>Read Now</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className={styles.box__items}>
                <div className="d-flex justify-content-between align-items-center">
                    <h3 className={styles.main__title}>Latest Updates</h3>
                    <Link className={styles.link}>
                        <i className="fa-solid fa-2xl fa-arrow-right"></i>
                    </Link>
                </div>
                <div className={`d-flex gap-3 ${width > 768 ? "" : "flex-column"}`}>
                    <div className={styles.container__latest}>
                        {arr.map((el, idx) => (
                            <div key={idx} className={styles.manga__item}></div>
                        ))}
                    </div>
                    <div className={styles.container__latest}>
                        {arr.map((el, idx) => (
                            <div key={idx} className={styles.manga__item}></div>
                        ))}
                    </div>
                    <div className={styles.container__latest}>
                        {arr.map((el, idx) => (
                            <div key={idx} className={styles.manga__item}></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}