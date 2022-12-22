import React, {FC} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper";

interface GalleryProps {

}


const Gallery: FC<GalleryProps> = ({  }) => {
    return (
        <section id="gallery">
            <h2 className="text-center">Галерея</h2>
            <div>
                <Swiper
                    spaceBetween={24}
                    slidesPerView={1}
                    modules={[Autoplay, Pagination]}
                    pagination={{clickable: true}}
                    autoplay={{
                        delay: 2000,
                        pauseOnMouseEnter: true,
                        disableOnInteraction: false
                    }}
                    loop
                    className='swiper-container'
                >
                    <SwiperSlide>
                        <div className="gallery-img-wrapper">
                            <div className="hero__image">
                                <img src={'/images/gallery.png'} alt="hero"/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="gallery-img-wrapper">
                            <div className="hero__image">
                                <img src={'/images/gallery.png'} alt="hero"/>
                            </div>
                        </div>
                    </SwiperSlide>

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