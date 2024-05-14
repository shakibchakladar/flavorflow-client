// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
const img1="https://i.ibb.co/48r3y6W/davide-cantelli-jpkfc5-d-DI-unsplash.jpg"
const img2="https://i.ibb.co/KL6GsHh/carissa-gan-0-Jpjeqt-Syg-unsplash.jpg"
const img3="https://i.ibb.co/yByzwyz/stir-fried-kale-spicy-crispy-pork-wooden-table-thai-food-concept.jpg"
const text1='Present Your Healthful Resturant Food'
const text2='What you are Looking..?'
const Text3='We believe in quality'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

export default function Carousel() {
  return (
    <div className="container px-5 py-8">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide img={img1} text={text1}></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide img={img2} text={text2}></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide img={img3} text={Text3}></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
