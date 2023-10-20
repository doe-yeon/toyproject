import styles from './HomeCardSlide.module.css'

import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';


const HomeCardSlide = () => {
    return (
        <div style={{ width: '100%', height: '10em', overflowY: 'hidden' }}>
            <Swiper
                slidesPerView={3}
                spaceBetween={3}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><div className='styles.imgBox'><img src={'https://woowahan-cdn.woowahan.com/new_resources/image/card/fd5fe7ab1be14632999b6f261d27dcde.png'} /></div></SwiperSlide>
                <SwiperSlide><div className='styles.imgBox'><img src={'https://woowahan-cdn.woowahan.com/new_resources/image/card/fd5fe7ab1be14632999b6f261d27dcde.png'} /></div></SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>

        </div>
    )
}

export default HomeCardSlide