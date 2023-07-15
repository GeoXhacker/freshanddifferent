import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import image from "../../../assets/carousel/pic1.jpeg"
export default function Carousel(){
  return (
    <Swiper
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {/* <SwiperSlide>Slide 1</SwiperSlide> */}
      <SwiperSlide>
          <img src={image} class="block w-full" alt="..." />
          {/* <h1 className={styles.header}>React Is Awesome</h1> */}
        </SwiperSlide>
    </Swiper>
  );
};