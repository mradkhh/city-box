import React, {FC} from 'react';
import { Checkbox } from 'antd';
import {MailIcon, OrangeLocationIcon, OrangePhoneIcon} from "static/icons/icon";

interface ContactUsProps {

}


const ContactUs: FC<ContactUsProps> = ({  }) => {

    function onChange () {
        console.log("change checkbox...")
    }
    return (
        <section id="contactus">
            <div className="container">
                <div className="contactus">
                    <h2 className="text-center">Свяжись с нами</h2>
                    <div className="contactus-content">
                        <div className="contactus-info">
                            <div className="contactus-info-item">
                                <span>
                                    <MailIcon/>
                                </span>
                                <div>
                                    <h4>Напишите нам</h4>
                                    <p>Наша дружная команда здесь, чтобы помочь.</p>
                                    <h6>hi@company.com</h6>
                                </div>
                            </div>
                            <div className="contactus-info-item">
                                <span>
                                    <OrangeLocationIcon/>
                                </span>
                                <div>
                                    <h4>Офис</h4>
                                    <p>Приходите поздороваться в наш офис HQ.</p>
                                    <h6>100 Smith StreetCollingwood VIC 3066 AU</h6>
                                </div>
                            </div>
                            <div className="contactus-info-item">
                                <span>
                                    <OrangePhoneIcon/>
                                </span>
                                <div>
                                    <h4>Телефон</h4>
                                    <p>пн-пт с 8:00 до 17:00.</p>
                                    <h6>+998 99 989 88 99</h6>
                                </div>
                            </div>
                        </div>
                        <form id="form">
                            <label htmlFor="name">Имя</label>
                            <input type="text" name="name" placeholder="Ваше имя"/>

                            <label htmlFor="name">Номер телефона</label>
                            <input type="text" name="name" placeholder={"+998 99 989 88  99"}/>

                            <label htmlFor="message">Сообщение</label>
                            <textarea name="message" id="message" cols="30" rows="10"/>

                            <Checkbox onChange={onChange}>
                                <p className="checkbox-label">Вы соглашаетесь с политикой конфиденциальности.</p>
                            </Checkbox>

                            <button className="btn" type="submit">Отправить сообщение</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;