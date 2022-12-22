import React, {FC} from 'react';
import {CreditCardIcon, OrangeLocationIcon, PenToolIcon, RocketIcon} from "static/icons/icon";

interface ListItem {
    text: string
}

const ListItem: FC<ListItem> = ({ text }) => {
    return <div className={'list__item'}> <span>.</span> {text} </div>
}


const ProcessWork: FC = ({  }) => {
    return (
        <section id="process__work">
            <div className="container">
                <div className="process">
                    <h2>Процесс работы</h2>
                    <div className="process__grid">
                        <div className="process__grid-item">
                            <div className="process__grid-icon">
                                <OrangeLocationIcon/>
                            </div>
                            <div>
                                <h4>Выберите склад</h4>
                                <ListItem text={'онлайн'}/>
                                <ListItem text={'по телефону'}/>
                            </div>
                        </div>
                        <div className="process__grid-item">
                            <div className="process__grid-icon">
                                <PenToolIcon/>
                            </div>
                            <h4>Заключите договор</h4>
                            <ListItem text={'онлайн'}/>
                            <ListItem text={'по телефону'}/>
                            <ListItem text={'на складе'}/>
                        </div>
                        <div className="process__grid-item">
                            <div className="process__grid-icon">
                                <CreditCardIcon/>
                            </div>
                            <h4>Оплатите услугу</h4>
                            <ListItem text={'онлайн'}/>
                            <ListItem text={'на складе'}/>
                        </div>
                        <div className="process__grid-item">
                            <div className="process__grid-icon">
                                <RocketIcon/>
                            </div>
                            <h4>Получите доступ</h4>
                            <ListItem text={'доступ на склад только по пропускам'}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessWork;