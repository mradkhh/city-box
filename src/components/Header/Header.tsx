import React, {FC, useEffect, useState} from 'react';
import Link from "next/link";
import { Modal } from 'antd';
import styles from './Header.module.scss'
import {BrandLogo, BurgerIcon, CloseIcon, InstagramIcon, PhoneIcon, TelegramIcon} from "static/icons/icon";


const Header: FC = ({  }) => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [ isOpenSocially, setIsOpenSocially ] = useState<boolean>(true)

const date = new Date()
const isWeekend = (date.getDay() === 6) || (date.getDay()  === 0);
const isFreeDay = ( date.getHours() < 17 ) && (date.getHours() >= 8)
    const isFreeTime = (!isFreeDay || isWeekend)

    // =-------------- BURGER MENU function -----------------=
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
    // =----------- HEADER background effect ------------------=
        const header: any = document.getElementById('header');
        window.addEventListener('scroll', function(e) {
            let scroll: number = window.scrollY;
            if(scroll > 60) {
                header.style.backgroundColor = 'var(--menu-blur)';
                header.style.backdropFilter = 'blur(8px)';
                return;
            } else if (scroll < 30) {
                header.style.backgroundColor = 'transparent';
                header.style.backdropFilter = 'none';
                return;
            }
        });

        let oldScrollY: number = window.scrollY;
        window.onscroll = function(e) {
            if(oldScrollY < window.scrollY){
                setIsOpenSocially(false)
            } else {
                setIsOpenSocially(true)
            }
            oldScrollY = window.scrollY;
        }
    }, [])

    return (
        <header id="header" className="header__section">
            <Modal open={isModalOpen} onCancel={handleCancel}>
                <span  onClick={handleCancel} className="ant-modal-close-btn"> <CloseIcon/> </span>
                <nav className="menu-nav">
                    <ul className="menu-nav-list">
                        <li onClick={handleCancel} >
                            <Link href="#process__work">
                                <a>Услуги</a>
                            </Link>
                        </li>
                        <li onClick={handleCancel} >
                            <Link href="#warehouse">
                                <a>Адреса складов</a>
                            </Link>
                        </li>
                        <li onClick={handleCancel} >
                            <Link href="#contactus">
                                <a>Оплата</a>
                            </Link>
                        </li>
                        <li onClick={handleCancel} >
                            <Link href="#boxsize">
                                <a>Цены</a>
                            </Link>
                        </li>
                        <li onClick={handleCancel} >
                            <Link href="#contactus">
                                <a>Контакты</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </Modal>
           <div className="container">
                <div className="header">
                    <Link href={'/'}>
                        <a><BrandLogo/></a>
                    </Link>
                    <div className={'header__left'}>
                        <div className={isOpenSocially ? "header-socially header-socially-open" : "header-socially header-socially-close"}>
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
                            <div> <span style={{backgroundColor: isFreeTime ? 'var(--red)' : 'var(--green)'}}>.</span> {
                                isFreeTime ? "Сейчас неработаем" : "Сейчас работаем"
                            }</div>
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