// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import CardProductHome from "./CardProductHome";

export default function HorizontalSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiperHorizantale"
      >
        <SwiperSlide className="swiper-media">
          <CardProductHome />
        </SwiperSlide>
        <SwiperSlide className="swiper-media">
          <CardProductHome />
        </SwiperSlide>
        <SwiperSlide className="swiper-media">
          <CardProductHome />
        </SwiperSlide>
        <SwiperSlide className="swiper-media">
          <CardProductHome />
        </SwiperSlide>
        <SwiperSlide className="swiper-media">
          <CardProductHome />
        </SwiperSlide>
        <SwiperSlide className="swiper-media">
          <CardProductHome />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
