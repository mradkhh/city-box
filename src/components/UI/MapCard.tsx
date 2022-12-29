import React, {FC} from 'react';
import Image from "next/image";
import {GrayLocationIcon, XIcon} from "static/icons/icon";
import {Autoplay, Pagination} from "swiper";
import { Swiper, SwiperSlide} from "swiper/react";
import {IWarehouseInfo} from "screens/Warehouse";
import new1img from '../../../public/images/new1.png'
import new2img from '../../../public/images/new2.png'
import new3img from '../../../public/images/new3.png'
import styles from './styles/mapcard.module.scss'

interface MapCardProps {
    info: IWarehouseInfo | undefined
    setCardInfo: (bool: boolean) => void
}


const MapCard: FC<MapCardProps> = ({ info, setCardInfo }) => {


    const pagination = {
        clickable: true,
        dynamicBullets: true,
    };

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
                    modules={[Autoplay, Pagination]}
                    pagination={pagination}
                    autoplay={{
                        delay: 1500,
                        pauseOnMouseEnter: true,
                        disableOnInteraction: false
                    }}
                    loop
                    className='swiper-container-card'
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
                <span onClick={() => setCardInfo(false)}>
                    <XIcon/>
                </span>
            </div>
            <div className={styles.body}>
                <div className={styles.body_top}>
                    <h2>{info?.country_name}</h2>
                    <div>
                        <span><GrayLocationIcon/></span>
                        {info?.warehouse_location}
                    </div>
                </div>
                <div className={styles.body__middle}>
                    <ul>
                        {
                            info?.warehouse_availability?.map((item: string, id: number) =>
                                <li key={id}> <span>.</span>{ item }</li>
                            )
                        }
                    </ul>
                </div>
                <p>{info?.more_info}</p>
                <button className="btn" type={'button'}>Забронировать</button>
            </div>
        </div>
    );
};

export default MapCard;