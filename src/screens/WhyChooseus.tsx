import React, {FC} from 'react';
import styles from './WhyChooseUs.module.scss'
import {
    CreditCardIcon, LockIcon,
    OrangeLocationIcon,
    ShoppingBagIcon,
    SunIcon,
    SunriseIcon,
    ThumbsUpIcon,
    TruckIcon, VideoIcon
} from "static/icons/icon";

interface WhyChooseUsProps {

}


const WhyChooseUs: FC<WhyChooseUsProps> = ({  }) => {
    return (
        <section id="whyus">
            <div className="container">
                <div className="whyus">
                    <h2 className="text-center">Почему выбирают нас?</h2>
                    <div className="whyus-grid">
                        <div className="whyus-grid-item">
                            <span>
                                <SunIcon/>
                            </span>
                            <div>
                                <h6>Освещение и розетка</h6>
                                <p>Внутри каждого контейнера мы предоставляем освещение и розетку.</p>
                            </div>
                        </div>
                        <div className="whyus-grid-item">
                            <span><SunriseIcon/></span>
                            <div>
                                <h6>Освещение территории</h6>
                                <p>Из-за освещения территории, теперь контейнер доступен и ночью!</p>
                            </div>
                        </div>
                        <div className="whyus-grid-item">
                            <span><OrangeLocationIcon/></span>
                            <div>
                                <h6>Расположение</h6>
                                <p>Рядом с метро, торговыми центрами и производственной зоной.</p>
                            </div>
                        </div>
                        <div className="whyus-grid-item">
                            <span><ShoppingBagIcon/></span>
                            <div>
                                <h6>Большой выбор</h6>
                                <p>Много арендных площадей. Площадь наших контейнеров от 3,5 до 30 м².</p>
                            </div>
                        </div>
                        <div className="whyus-grid-item">
                            <span><ThumbsUpIcon/></span>
                            <div>
                                <h6>Доступ 24/7</h6>
                                <p>В любое время дня и ночи вы имеете доступ к своему контейнеру.</p>
                            </div>
                        </div>
                        <div className="whyus-grid-item">
                            <span><VideoIcon/></span>
                            <div>
                                <h6>Охрана 24 часа</h6>
                                <p>Безопасно, круглосуточная охрана, видеофиксация и сигнализация.</p>
                            </div>
                        </div>
                        <div className="whyus-grid-item">
                            <span><CreditCardIcon/></span>
                            <div>
                            <h6>Экономия</h6>
                            <p>Стоимость аренды контейнера на 40% ниже, чем у стандартных складов.</p>
                            </div>
                        </div>


                        <div className="whyus-grid-item">
                            <span><TruckIcon/></span>
                            <div>
                                <h6>Погрузка и разгрузка</h6>
                                <p>Подъезд к воротам контейнера без проблем, для разгрузки и погрузки.</p>
                            </div>
                        </div>


                        <div className="whyus-grid-item">
                            <span><LockIcon/></span>
                            <div>
                                <h6>Надежность</h6>
                                <p>Прочные запорные устройства, на которые можно повесить до 4 замков.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;