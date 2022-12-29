import React, {FC} from 'react';
import { Autoplay, Pagination, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Hero: FC = () => {


    const pagination = {
        clickable: false,
        dynamicBullets: true,
    };


    return (
        <section id="hero" className="hero__section">
            <div>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    modules={[Autoplay, Pagination, Lazy]}
                    pagination={pagination}
                    lazy={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false
                    }}
                    loop
                    className='swiper-container-hero'
                >
                    <SwiperSlide>
                        <div className="hero__image">
                            <img width={"100%"} src={'/images/hero.jpg'} alt="hero"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero__image">
                            <img width={"100%"} src={'/images/hero.jpg'} alt="hero"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero__image">
                            <img width={"100%"} src={'/images/hero.jpg'} alt="hero"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero__image">
                            <img width={"100%"} src={'/images/hero.jpg'} alt="hero"/>
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