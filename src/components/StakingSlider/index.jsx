import React from 'react'
import './StakingSlider.scss'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation,Autoplay } from "swiper";

export default function StakingSlider() {
  return (
    <div className="staking-slider">
        <Swiper
            modules={[Pagination, Navigation,Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                768: {
                    slidesPerView: 1,
                },
                // when window width is >= 768px
                1000: {
                    slidesPerView: 1,
                },
            }}
            navigation={true}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="staking-slide-item-wrap">
                    <img src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/performance/esports/es-04-media-hd.jpg.asset.1611648734779.jpg" alt="" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="staking-slide-item-wrap">
                    <img src="https://i.pcmag.com/imagery/lineups/06dxdkd5h3MmSKAaMczRpbQ-1..v1569492889.jpg" alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
