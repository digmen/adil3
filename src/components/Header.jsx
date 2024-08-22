import React, { useState } from 'react';
import logo from './images/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './header.css'

export default function Header() {
    const [stateLng, setStateLng] = useState(true);
    const { t, i18n } = useTranslation();
    const location = useLocation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setStateLng(lng === 'en');
    };

    const [modal, setModal] = useState(false);

    const isActiveLink = (path) => location.pathname === path;

    return (
        <div className='header '>
            <div className='header_text container'>
                <div className='header_link_block'>
                    <Link to='/' className={`header_link_text ${isActiveLink('/') ? 'header_link_text_active' : 'header_link_text'}`}>{t('header.homeLink')}</Link>
                    <Link to='/about' className={`header_link_text ${isActiveLink('/about') ? 'header_link_text_active' : 'header_link_text'}`}>{t('header.homeLink2')}</Link>
                    <Link to='/product' className={`header_link_text ${isActiveLink('/product') ? 'header_link_text_active' : 'header_link_text'}`}>{t('header.homeLink3')}</Link>
                    <Link to='/' className={`header_link_text ${isActiveLink('/contact') ? 'header_link_text_active' : 'header_link_text'}`}>{t('header.homeLink5')}</Link>
                    <Link to='/service' className={`header_link_text ${isActiveLink('/service') ? 'header_link_text_active' : 'header_link_text'}`}>{t('header.homeLink4')}</Link>
                    <div className='header_logo'>
                        <img src={logo} alt='logo' />
                    </div>
                </div>

                <div className='header_language_block'>
                    <div className='header_language_block_text'>
                        <a href='tel:+905327614829' className='header_language_block_span'>+90 532 761 48 29</a>
                        <a href='#' className='header_language_block_span'>lotusgemicilik0@gmail.com</a>
                    </div>
                    <div className='header_language_btn'>
                        <button onClick={() => changeLanguage('en')} className={stateLng ? 'header_language_active' : 'header_language_default'}>EN</button>
                        <button onClick={() => changeLanguage('trk')} className={stateLng ? 'header_language_default' : 'header_language_active'}>TR</button>
                    </div>
                    <div className='header_burger'>
                        <div onClick={() => setModal(prev => !prev)} className='header_burger_block'>
                            <div className='header_burger_line'></div>
                            <div className='header_burger_line'></div>
                            <div className='header_burger_line'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={modal ? 'header_burger_modal_active' : 'header_burger_modal_default'}>
                <div className={modal ? 'header_burger_modal_block_active' : 'header_burger_modal_block_default'}>
                    <Link onClick={() => setModal(prev => !prev)} to='/' >{t('header.homeLink')}</Link>
                    <Link onClick={() => setModal(prev => !prev)} to='/about' >{t('header.homeLink2')}</Link>
                    <Link onClick={() => setModal(prev => !prev)} to='/product' >{t('header.homeLink3')}</Link>
                    <Link onClick={() => setModal(prev => !prev)} to='/service' >{t('header.homeLink4')}</Link>
                    <a onClick={() => setModal(prev => !prev)} href='#contact'  >{t('header.homeLink5')}</a>
                </div>
            </div>
        </div>
    );
}
