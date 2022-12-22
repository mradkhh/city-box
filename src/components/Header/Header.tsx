import React, {FC} from 'react';
import Link from "next/link";
import {BrandLogo, BurgerIcon, InstagramIcon, PhoneIcon, TelegramIcon} from "static/icons/icon";
interface HeaderProps {

}


const Header: FC<HeaderProps> = ({  }) => {
    return (
        <header id="header" className="header__section">
           <div className="container">
                <div className="header">
                    <Link href={'/'}>
                        <a><BrandLogo/></a>
                    </Link>
                    <div className={'header__left'}>
                        <Link href={'/'}>
                            <a><InstagramIcon/></a>
                        </Link>
                        <Link href={'/'}>
                            <a><TelegramIcon/></a>
                        </Link>
                        <Link href={'/'}>
                            <a><PhoneIcon/></a>
                        </Link>
                        <div className="header__left-number">
                            <h6>+998 99 099 78 77</h6>
                            <div> <span>.</span> Сейчас работаем</div>
                        </div>
                        <div className="burger__menu">
                            <BurgerIcon/>
                        </div>
                    </div>
                </div>
           </div>
        </header>
    );
};

export default Header;