import styles from "./Styles.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";


export default ({ images }) => {
  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={"auto"}
      freeMode={true}
      scrollbar={true}
      mousewheel={true}
      modules={[FreeMode, Scrollbar, Mousewheel]}
      className={styles.reader__item}
    >
      <SwiperSlide>
        {images && images.map(el => (
          <img className={styles.reader__img} src={el} />
        ))}
      </SwiperSlide>
    </Swiper>
  )
}