import React, {FC} from 'react';
import {BrandLogo, FacebookIcon, LinkedinIcon, TwitterIcon} from "static/icons/icon";
import Link from "next/link";

interface FooterProps {

}


const Footer: FC<FooterProps> = ({  }) => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer-logo">
                        <Link href={'/'}>
                            <a><BrandLogo/></a>
                        </Link>
                        <p>Создавайте удивительные цифровые впечатления, которые делают мир более счастливым.</p>
                    </div>
                    <div className="footer-nav">
                        <div className="footer-nav-item">
                            <h6>Товар</h6>
                            <ul>
                                <li>
                                    <Link href={'/'}>
                                        <a>Обзор</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <a>Функции</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <a>Решения</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <a>Учебники</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <a>Цены</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <a>Релизы</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-nav-item">
                            <h6>Ресурсы</h6>
                            <ul>
                                <li>
                                    <Link href={'/'}>
                                        <a>Блог</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <a>Новостная </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <a>События</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <a>Справочный центр</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <a>Учебники</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <a>Поддерживать</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-nav-item">
                            <h6>Компания</h6>
                            <ul>
                                <li>
                                    <Link href={'/'}>
                                        <a>О нас</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <a>Карьера </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <a>Press</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <a>Новости</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <a>Галерея</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <a>Контакт</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-nav-item">
                            <h6>Юридический</h6>
                            <ul>
                                <li>
                                    <Link href={'/'}>
                                        <a>Условия</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <a>Конфиденциальность </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <a>Cookies</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <a>Лицензии</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <a>Настройки</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="copyright">
                <div className="container">
                    <div className="copyright">
                        <h5 >
                            © Все права защищены.
                        </h5>
                        <div className="copyright-socially">
                            <ul>
                                <li>
                                    <Link href={'/'}>
                                        <a><TwitterIcon/></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <a><LinkedinIcon/></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <a><FacebookIcon/></a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;