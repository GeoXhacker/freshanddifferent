import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade
} from "swiper/modules";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css/bundle";
import image from "../../../assets/carousel/pic1.jpeg";
import image2 from "../../../assets/carousel/pic2.jpg";
import image3 from "../../../assets/carousel/pic3.jpg";
import styles from "./carousel.module.css";


export default function Carousel() {
  const containerMotion = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  // animation parameters for TEXT
  const headerMotion = {
    // movement = FADE-IN + UPWARDS movement
    hidden: { opacity: 0, y: 50 }, // INITIAL STAGE
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    }, // ANIMATION STAGE
  };

  // animation parameters for TEXT
  const textMotion = {
    // movement = FADE-IN + UPWARDS movement
    hidden: { opacity: 0, y: -50 }, // INITIAL STAGE
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    }, // ANIMATION STAGE
  };

  // animation parameters for IMAGE
  const imageMotion = {
    // movement = FADE-IN + SLIDE DOWN
    hidden: { opacity: 0 }, // INITIAL STAGE
    visible: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }, // ANIMATION STAGE
  };
  return (
    <Swiper
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Pagination, Autoplay, EffectFade]}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      effect="fade"
      loop
    >
      {/* <SwiperSlide>Slide 1</SwiperSlide> */}
      <SwiperSlide>
        <img src={image} class="block w-full" alt="..." />
        {/* <h1 className={styles.header}>React Is Awesome</h1> */}
        <div className={`${styles.header}`}>
        <div className="pb-44 pt-44 sm:pb-40 sm:pt-30 lg:pb-52 lg:pt-54">
            {/* HEADING TEXT */}
            <motion.div
              className="mx-auto sm:max-w-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={containerMotion}
            >
              <motion.h1
                className="flex justify-center text-center text-5xl lg:text-6xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-purple-500"
                variants={headerMotion}
              >
                Fresh & Different
              </motion.h1>
              <motion.h1
                className="flex justify-center text-center text-2xl lg:text-3xl font-semibold tracking-tight text-white mt-4"
                variants={headerMotion}
              >
                Style Your Game with Confidence.
              </motion.h1>
            </motion.div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={image2} class="block w-full" alt="Exotic Fruits" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image3} class="block w-full" alt="Exotic Fruits" />
      </SwiperSlide>
    </Swiper>
  );
}