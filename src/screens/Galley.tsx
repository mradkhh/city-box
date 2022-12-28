import React, {FC, useRef} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation} from "swiper";
import "swiper/css/navigation";
import {ChevronLeft, ChevronRight} from "static/icons/icon";

interface GalleryProps {

}


const Gallery: FC<GalleryProps> = ({  }) => {

    const swiperRef = useRef<SwiperCore>();
    return (
        <section id="gallery">
            <h2 className="text-center">Галерея</h2>
            <div>
                <Swiper
                    spaceBetween={24}
                    slidesPerView={1}
                    modules={[Navigation]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 8,
                        },
                        992: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        }
                    }}
                    navigation={{
                        prevEl: '.prev',
                        nextEl: '.next',
                    }}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    centeredSlides={true}
                    loop
                    className='swiper-container-gallery'
                >
                    <SwiperSlide>
                        <div className="gallery-img-wrapper">
                            <div className="hero__image">
                                <img src={'/images/gallery.png'} alt="gallery"/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="gallery-img-wrapper">
                            <div className="hero__image">
                                <img src={'/images/container.png'} alt="gallery"/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="gallery-img-wrapper">
                            <div className="hero__image">
                                <img src={'/images/hero.jpg'} alt="gallery"/>
                            </div>
                        </div>
                    </SwiperSlide>

                    <div className="swiper-btn swiper-btn-prev" onClick={() => swiperRef.current?.slidePrev()} >
                        <ChevronLeft/>
                    </div>
                    <div className="swiper-btn swiper-btn-next" onClick={() => swiperRef.current?.slideNext()} >
                        <ChevronRight/>
                    </div>
                </Swiper>
            </div>
            <div className="container">
                <div className="gallery">

                </div>
            </div>
        </section>
    );
};

export default Gallery;