import React, {FC, useEffect, useState} from 'react';
import Link from "next/link";
import { Button, Modal } from 'antd';
import {BrandLogo, BurgerIcon, CloseIcon, InstagramIcon, PhoneIcon, TelegramIcon} from "static/icons/icon";


const Header: FC = ({  }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);


    // =-------------- BURGER MENU function -----------------=
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // =----------- HEADER background effect ------------------=
    useEffect(() => {
        const header = document.getElementById('header');
        window.addEventListener('scroll', function(e) {

            let scroll = this.scrollY;
            if(scroll > 60) {
                // @ts-ignore
                header.style.backgroundColor = 'var(--menu-blur)';
                // @ts-ignore
                header.style.backdropFilter = 'blur(8px)';
                return;
            } else if (scroll < 30) {
                // @ts-ignore
                header.style.backgroundColor = 'transparent';
                // @ts-ignore
                header.style.backdropFilter = 'none';
                return;
            }

        });
    }, [])

    return (
        <header id="header" className="header__section">
            <Modal open={isModalOpen} onCancel={handleCancel}>
                <span  onClick={handleCancel} className="ant-modal-close-btn"> <CloseIcon/> </span>
                <nav className="menu-nav">
                    <ul className="menu-nav-list">
                        <li>Услуги</li>
                        <li>Адреса складов</li>
                        <li>Оплата</li>
                        <li>Цены</li>
                        <li>Контакты</li>
                    </ul>
                </nav>
            </Modal>
           <div className="container">
                <div className="header">
                    <Link href={'/'}>
                        <a><BrandLogo/></a>
                    </Link>
                    <div className={'header__left'}>
                        <div className="header-socially">
                            <Link href={'/'}>
                                <a><InstagramIcon/></a>
                            </Link>
                            <Link href={'/'}>
                                <a><TelegramIcon/></a>
                            </Link>
                            <Link href={'/'}>
                                <a><PhoneIcon/></a>
                            </Link>
                        </div>
                        <div className="header__left-number">
                            <h6>+998 99 099 78 77</h6>
                            <div> <span>.</span> Сейчас работаем</div>
                        </div>
                        <div onClick={showModal} className="burger__menu">
                            <BurgerIcon/>
                        </div>
                    </div>
                </div>
           </div>
        </header>
    );
};

export default Header;