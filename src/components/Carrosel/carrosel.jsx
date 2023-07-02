import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./carrosel.scss";

import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import listaImagens from "./listaImages";

export default function Carrosel() {

    
    

    return (

        <>

            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 50,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                modules={[EffectCoverflow, Pagination,Autoplay]}
                className="mySwiper"
            >
                {listaImagens.map((item,index)=>{
                    return(
                        <>
                        <SwiperSlide key={index}>
                            <img src={item}></img>
                        </SwiperSlide>
                        
                        </>
                    )
                })}
            </Swiper>
        </>
    )
}