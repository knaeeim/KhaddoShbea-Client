// import Swiper core and required modules
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Slider1 from "../Sliders/Slider1";
import Slider2 from "../Sliders/Slider2";
import Slider3 from "../Sliders/Slider3";
import Slider4 from "../Sliders/Slider4";

const Banner = () => {
    return (
        <div className="rounded-2xl overflow-hidden mt-8">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}>
                <SwiperSlide>
                    <Slider1></Slider1>
                </SwiperSlide>
                <SwiperSlide>
                    <Slider2></Slider2>
                </SwiperSlide>
                <SwiperSlide>
                    <Slider3></Slider3>
                </SwiperSlide>
                <SwiperSlide>
                    <Slider4></Slider4>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
