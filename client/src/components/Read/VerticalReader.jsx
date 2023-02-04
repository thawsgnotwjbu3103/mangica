import { Swiper, SwiperSlide } from "swiper/react"
import styles from "./Styles.module.css"
import "swiper/css";
import "swiper/css/navigation";
import { Keyboard, Navigation } from "swiper"

export default ({ images, dir }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      keyboard={{
        enabled: true,
        onlyInViewport: false
      }}
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl: styles.next,
        prevEl: styles.prev
      }}
      dir={dir}
      modules={[Keyboard, Navigation]}
      className={styles.reader__vertical}
    >
      {images && images.map(el => (
        <SwiperSlide>
          <img className={styles.reader__img}  src={`${el}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}