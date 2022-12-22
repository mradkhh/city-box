import React, {FC} from 'react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Hero: FC = () => {
    return (
        <section id="hero" className="hero__section">
            <div>
                <Swiper
                    spaceBetween={0}
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
                        <div className="hero__image">
                            <img src={'/images/hero.jpg'} alt="hero"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero__image">
                            <img src={'/images/hero.jpg'} alt="hero"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero__image">
                            <img src={'/images/hero.jpg'} alt="hero"/>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="hero__text">
                    <div className="hero container">
                        <div className="hero__left">
                            <h1>Склад во всех районах вашего города</h1>
                        </div>
                        <div className="hero__right">
                            <p>Мы поможем сопроводить сделку на покупку складов, от момента просмотра до получения ключей и полного пакета документов</p>
                            <button className="btn" type="button">Выбрать склад</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;