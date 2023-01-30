import styles from "../styles/Home.module.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { useContext, useEffect, useId } from "react";
import { HomeContext } from "../context/HomeContext"
import { BREAK_POINT_CONTAINER } from "../utils/constant";
import PopularSwiperItem from "../components/Home/PopularSwiperItem/PopularSwiperItem";
import ContainerLatest from "../components/Home/ContainerLatest/ContainerLatest";
import SwiperItem from "../components/Home/SwiperItem/SwiperItem";
import { popularData, latestUpdate, seasonalMangas, recentlyAdded } from "../utils/exampleData";
import chunkify from "../utils/chunkify";

export default () => {
    const { width, setTitle } = useContext(HomeContext);
    useEffect(() => {
        setTitle(null);
    }, [])

    return (
        <div className={`${styles.container__box} container mb-5`}>
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
                        loop={true}
                        mousewheel={true}
                        modules={[Pagination, Autoplay, Mousewheel]}
                        className="w-100 h-100"
                    >
                        {popularData && popularData.map((el) => (
                            <SwiperSlide key={useId()}>
                                <PopularSwiperItem data={el} />
                            </SwiperSlide>
                        ))}
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
                <div className={`d-flex gap-3 ${width > BREAK_POINT_CONTAINER ? "" : "flex-column"}`}>
                    {chunkify(latestUpdate.items, latestUpdate.per_item, true).map((el, idx) => (
                        <ContainerLatest key={useId()} data={el} />
                    ))}
                </div>
            </div>
            <div className={styles.box__items}>
                <h3 className={styles.main__title}>Seasonal Mangas</h3>
                <div style={styles.seasonal__slider}>
                    <Swiper
                        slidesPerView={3}
                        breakpoints={{
                            "768": {
                                slidesPerView: 5
                            }
                        }}
                        spaceBetween={20}
                        autoplay={{
                            delay: 2500
                        }}
                        loop={true}
                        modules={[Autoplay]}
                        className={styles.seasonal__swiper}
                    >
                        {seasonalMangas && seasonalMangas.map(el => (
                            <SwiperSlide key={useId()}>
                                <SwiperItem data={el} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className={styles.box__items}>
                <h3 className={styles.main__title}>Recenly Added</h3>
                <div style={styles.seasonal__slider}>
                    <Swiper
                        slidesPerView={3}
                        breakpoints={{
                            "768": {
                                slidesPerView: 5
                            }
                        }}
                        spaceBetween={20}
                        autoplay={{
                            delay: 2500
                        }}
                        loop={true}
                        modules={[Autoplay]}
                        className={styles.seasonal__swiper}
                    >
                        {recentlyAdded && recentlyAdded.map(el => (
                            <SwiperSlide key={useId()}>
                                <SwiperItem data={el} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}