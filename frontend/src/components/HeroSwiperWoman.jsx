// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import CardSwiperWoman from "./CardSwiperWoman";

export default function HeroSwiperWoman() {
  return (
    <>
      <Swiper
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardSwiperWoman />
        </SwiperSlide>
        <SwiperSlide>
          <CardSwiperWoman />
        </SwiperSlide>
        <SwiperSlide>
          <CardSwiperWoman />
        </SwiperSlide>
        <SwiperSlide>
          <CardSwiperWoman />
        </SwiperSlide>
        <SwiperSlide>
          <CardSwiperWoman />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
