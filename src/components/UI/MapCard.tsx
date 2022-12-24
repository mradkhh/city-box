import React, {FC} from 'react';
import Image from "next/image";
import {GrayLocationIcon, XIcon} from "static/icons/icon";
import {Autoplay, Pagination} from "swiper";
import { Swiper, SwiperSlide} from "swiper/react";
import new1img from '../../../public/images/new1.png'
import new2img from '../../../public/images/new2.png'
import new3img from '../../../public/images/new3.png'
import styles from './styles/mapcard.module.scss'

interface MapCardProps {
    name: string,
    location: string
}


const MapCard: FC<MapCardProps> = ({ name, location }) => {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    breakpoints={{
                        320: {
                            slidesPerView: 3,
                            spaceBetween: 8,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        }
                    }}
                    effect={'fade'}
                    modules={[Autoplay, Pagination]}
                    pagination={{clickable: true}}
                    autoplay={{
                        delay: 1000,
                        pauseOnMouseEnter: true,
                        disableOnInteraction: false
                    }}
                    loop
                    className='swiper-container'
                >
                    <SwiperSlide>
                        <Image
                            src={new1img}
                            width={460}
                            height={315}
                            alt={'maps'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src={new2img}
                            width={460}
                            height={315}
                            alt={'maps'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src={new3img}
                            width={460}
                            height={315}
                            alt={'maps'}
                        />
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination swiper-pagination-black"></div>
                <span>
                    <XIcon/>
                </span>
            </div>
            <div className={styles.body}>
                <div className={styles.body_top}>
                    <h2>{name}</h2>
                    <div>
                        <span><GrayLocationIcon/></span>
                        {location}
                    </div>
                </div>
                <div className={styles.body__middle}>
                    <ul>
                        <li> <span>.</span> Ячейки всех размеров</li>
                        <li> <span>.</span> Видеонаблюдение</li>
                        <li> <span>.</span> Круглосуточный въезд</li>
                        <li> <span>.</span> Пропускная система</li>
                    </ul>
                </div>
                <p>Рядом выезд на проспект Энгельса, Суздальский проспект и КАД. Стоимость аренды начинается от 200 000 UZS</p>
                <button className="btn" type={'button'}>Забронировать</button>
            </div>
        </div>
    );
};

export default MapCard;