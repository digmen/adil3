import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import './footer.css';

import logo from "./images/logo.svg";

export default function Footer() {
    const { t } = useTranslation()

    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer_block'>
                    <div className='footer_block_logo_text'>
                        <img src={logo} alt='logo' />
                        <a href='#'>Big deals, big opportunities</a>
                    </div>
                    <div className='footer_block_link_text'>
                        <div className='footer_block_link'>
                            <span>Menu</span>
                            <Link>Home</Link>
                            <Link>About</Link>
                            <Link>Service</Link>
                            <Link>Contact</Link>
                            <Link>Products</Link>
                        </div>
                        <div className='footer_block_phone_text'>
                            <div className='footer_block_phone'>
                                <span>Telephone Number</span>
                                <a href='tel:+905327614829'>+90 532 761 48 29</a>
                            </div>
                            <div className='footer_block_mail'>
                                <span>Our Mail</span>
                                <a href='#'>lotusgemicilik0@gmail.com</a>
                            </div>
                        </div>
                        <div className='footer_block_address'>
                            <span>Our Address</span>
                            <a href='#'>Fulya mahallesi buyukdere cad.  Quasar no.76/188 sisli/Istanbul Turkey</a>
                        </div>
                    </div>
                </div>
                <div className='footer_block_don_not_copyright'>
                    <span>© Saving your personal information</span>
                </div>
            </div>
        </div>
    )
}
