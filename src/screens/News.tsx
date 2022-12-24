import React, {FC} from 'react';
import new1img from "../../public/images/new1.png";
import new2img from "../../public/images/new2.png";
import new3img from "../../public/images/new3.png";
import Image from "next/image";
import {CalendarIcon} from "static/icons/icon";
import {Swiper, SwiperSlide} from "swiper/react";

interface NewsProps {

}


const News: FC<NewsProps> = ({  }) => {
    return (
        <section id="news">
            <div className="container">
                <div className="news">
                    <h2 className="text-center">Новости</h2>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.2,
                                spaceBetween: 16,
                                height: 381
                            },
                            568: {
                                slidesPerView: 2.2,
                                spaceBetween: 16,
                            },
                            992: {
                                slidesPerView: 3.3,
                                spaceBetween: 24,
                            }
                        }}
                        pagination={{clickable: true}}
                        className='swiper-container'
                    >
                        <SwiperSlide>
                            <div className="news-slide-item">
                                <Image
                                    src={new1img}
                                    width={364}
                                    height={381}
                                    layout={"responsive"}
                                    alt={'news photo'}
                                />
                                <div><span> <CalendarIcon/> </span> 23 ноябрь 2022</div>
                                <h5>Ожидание новых технологий</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news-slide-item">
                                <Image
                                    src={new2img}
                                    width={364}
                                    height={381}
                                    layout={"responsive"}
                                    alt={'news photo'}
                                />
                                <div><span> <CalendarIcon/> </span> 23 ноябрь 2022</div>
                                <h5>Задумались</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news-slide-item">
                                <Image
                                    src={new3img}
                                    width={364}
                                    height={381}
                                    layout={"responsive"}
                                    alt={'news photo'}
                                />
                                <div><span> <CalendarIcon/> </span> 23 ноябрь 2022</div>
                                <h5>Ожидание новых технологий</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news-slide-item">
                                <Image
                                    src={new3img}
                                    width={364}
                                    height={381}
                                    layout={"responsive"}
                                    alt={'news photo'}
                                />
                                <div><span> <CalendarIcon/> </span> 23 ноябрь 2022</div>
                                <h5>Ожидание новых технологий</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news-slide-item">
                                <Image
                                    src={new3img}
                                    width={364}
                                    height={381}
                                    layout={"responsive"}
                                    alt={'news photo'}
                                />
                                <div><span> <CalendarIcon/> </span> 23 ноябрь 2022</div>
                                <h5>Хранение ваших дорогих вещей вы можете доверить.</h5>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default News;