import styles from "./Styles.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import { useId } from "react";


export default ({ images }) => {
    return (
        <div className={styles.img__container}>
            {images && images.map(el => (
                <img key={useId()} src={el} className={`img-fluid`} />
            ))}
        </div>
    )
}