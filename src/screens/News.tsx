import React, {FC} from 'react';
import new1img from "../../public/images/new1.png";
import new2img from "../../public/images/new2.png";
import new3img from "../../public/images/new3.png";
import Image from "next/image";
import {CalendarIcon} from "static/icons/icon";

interface NewsProps {

}


const News: FC<NewsProps> = ({  }) => {
    return (
        <section id="news">
            <div className="container">
                <div className="news">
                    <h2 className="text-center">Новости</h2>
                    <div className="news-grid">
                        <div className="news-grid-item">
                            <Image
                                src={new1img}
                                width={450}
                                height={381}
                                alt={'news photo'}
                            />
                            <div><span> <CalendarIcon/> </span> 23 ноябрь 2022</div>
                            <h5>Ожидание новых технологий</h5>
                        </div>
                        <div className="news-grid-item">
                            <Image
                                src={new2img}
                                width={450}
                                height={381}
                                alt={'news photo'}
                            />
                            <div><span> <CalendarIcon/> </span> 23 ноябрь 2022</div>
                            <h5>Задумались, где хранить зимние вещи?</h5>
                        </div>
                        <div className="news-grid-item">
                            <Image
                                src={new3img}
                                width={450}
                                height={381}
                                alt={'news photo'}
                            />
                            <div><span> <CalendarIcon/> </span> 23 ноябрь 2022</div>
                            <h5>Хранение ваших дорогих вещей вы можете доверить.</h5>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;