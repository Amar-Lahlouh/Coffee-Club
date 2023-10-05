import "./Testinomials.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import TestinomialsData from "../Data/TestinomialsData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Testinomials() {
  useEffect(() => {
    AOS.init({ duration: 1700 });
    AOS.refresh();
  }, []);
  return (
    <div id="Testinomials" data-aos="zoom-in-right">
      <div className="top">
        <h1>Testinomials</h1>
      </div>

      <Swiper
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
        {TestinomialsData.map((item) => {
          return (
            <SwiperSlide>
              <div className="test-data">
                {" "}
                <div className="test-description">{item.description}</div>
                <div className="test-info">
                  <img src={item.image} alt="" />
                  <p className="name">{item.name}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
