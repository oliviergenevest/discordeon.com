import React, {useRef, useEffect}  from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import {  ChevronCompactLeft, ChevronCompactRight } from '@styled-icons/bootstrap';

const Swiperdemo = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
     
   
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide style={{"background":"red"}}>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};
export default Swiperdemo;