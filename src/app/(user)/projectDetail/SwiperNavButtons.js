import React from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns" style={{marginTop:"-20px"}}>
      <BiLeftArrow onClick={() => swiper.slidePrev()} style={{color:"#55555B", cursor:"pointer", fontSize:"22px"}}/>
      <BiRightArrow onClick={() => swiper.slideNext() } style={{color:"#55555B", cursor:"pointer", fontSize:"22px"}} />
    </div>
  );
};
