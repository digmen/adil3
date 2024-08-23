import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../../components/Header';
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './home.css'

import swiperimg1 from './images/swiperimg1.png'
import swiperimg2 from './images/swiperimg2.png'
import swiperimg3 from './images/swiperimg3.png'
import swiperimg4 from './images/swiperimg4.png'
import swiperimg5 from './images/swiperimg5.png'
import swiperimg6 from './images/swiperimg6.png'

import homehand from './images/homehandimg.png'
import questionImg from './images/question_mark.png'

import location from './images/location.svg'
import mail from './images/mail.svg'
import phone from './images/phone.svg'

import arrow from './images/fi-rs-arrow-right.svg'

export default function Home() {
    const { t } = useTranslation()

    useEffect(() => {
        AOS.init({
            delay: 200, // задержка перед началом анимации (в миллисекундах)
            duration: 700, // длительность анимации (в миллисекундах)
            easing: 'ease', // функция сглаживания анимации
            mirror: false, // запуск анимации при прокрутке назад
        })
    }, [])


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        fetch('https://vercel-lotus.vercel.app/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email }),
        })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(errorData => {
                        throw new Error(errorData.error)
                    })
                }
                return response.json()
            })
            .then(data => {
                console.log(data.status);

            })
            .catch(error => {
                console.error('Ошибка:', error);
            })
    }


    return (
        <>
        <Header/>
         <div>
            <div className='home_hero'>
                <div className='home_hero_block_text'>
                    <h1 className='home_hero_title'>{t('home.home_hero_title')}</h1>
                    <span className='home_hero_text'>{t('home.home_hero_text')}</span>
                    <a href='#contact' className='home_hero_link'>{t('home.home_hero_link')}</a>
                </div>
            </div>
            <div className='home_two_block '>
                <div className='home_stats_block container'>
                    <div className='home_stats_block_text'>
                        <h1>{t('home.home_stats_title')}</h1>
                        <span>{t('home.home_stats_text')}</span>
                    </div>
                    <div className='home_stats_block_table'>
                        <div className='home_stats_block_table_card'>
                            <h1>300K+</h1>
                            <span>{t('home.home_stats_items.item1')}</span>
                        </div>
                        <div className='home_stats_block_table_card'>
                            <h1>10K+</h1>
                            <span>{t('home.home_stats_items.item2')}</span>
                        </div>
                        <div className='home_stats_block_table_card'>
                            <h1>99%</h1>
                            <span>{t('home.home_stats_items.item3')}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home_three_block'>
                <div className='container'>
                    <div className='home_three_title'>
                        <h1>{t('home.home_products_title')}</h1>
                    </div>
                    <div className='home_three_block_text'>
                        <p>{t('home.home_products_text')}</p>
                        <div className='home_camera_img'></div>
                    </div>
                </div>
            </div>
            <div className='home_four_block'>
                <div className='container'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={90}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Navigation]}
                        loop
                        className='mySwiper'
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            375: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            425: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 5,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className='home_swiper_card'>
                                <div className='home_swiper_card_block_img'>
                                    <img src={swiperimg1} alt='swiper img' />
                                </div>
                                <div className='home_swiper_card_block_text'>
                                    <h1>{t('home.home_swiper.tools.title')}</h1>
                                    <span>{t('home.home_swiper.tools.text')}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='home_swiper_card'>
                                <div className='home_swiper_card_block_img'>
                                    <img src={swiperimg2} alt='swiper img' />
                                </div>
                                <div className='home_swiper_card_block_text'>
                                    <h1>{t('home.home_swiper.food.title')}</h1>
                                    <span>{t('home.home_swiper.food.text')}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='home_swiper_card'>
                                <div className='home_swiper_card_block_img'>
                                    <img src={swiperimg3} alt='swiper img' />
                                </div>
                                <div className='home_swiper_card_block_text'>
                                    <h1>{t('home.home_swiper.computing.title')}</h1>
                                    <span>{t('home.home_swiper.computing.text')}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='home_swiper_card'>
                                <div className='home_swiper_card_block_img'>
                                    <img src={swiperimg4} alt='swiper img' />
                                </div>
                                <div className='home_swiper_card_block_text'>
                                    <h1>{t('home.home_swiper.textile.title')}</h1>
                                    <span>{t('home.home_swiper.textile.text')}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='home_swiper_card'>
                                <div className='home_swiper_card_block_img'>
                                    <img src={swiperimg5} alt='swiper img' />
                                </div>
                                <div className='home_swiper_card_block_text'>
                                    <h1>{t('home.home_swiper.clothing.title')}</h1>
                                    <span>{t('home.home_swiper.clothing.text')}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='home_swiper_card'>
                                <div className='home_swiper_card_block_img'>
                                    <img src={swiperimg6} alt='swiper img' />
                                </div>
                                <div className='home_swiper_card_block_text'>
                                    <h1>{t('home.home_swiper.factory.title')}</h1>
                                    <span>{t('home.home_swiper.factory.text')}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <div className='swiper-button-next'></div>
                        <div className='swiper-button-prev'></div>
                    </Swiper>
                </div>
            </div>
            <div className='home_five_block'>
                <div className='home_five_block_content container'>
                    <div className='home_five_block_list'>
                        <h1 className='home_five_block_list_title'>
                            {t('home.home_support_title')}
                        </h1>
                        <ul className='home_five_block_list_text'>
                            <li>{t('home.home_support_items.item1')}</li>
                            <li>{t('home.home_support_items.item2')}</li>
                            <li>{t('home.home_support_items.item3')}</li>
                        </ul>
                    </div>
                    <div className='home_five_block_img'>
                        <img src={homehand} alt='home hand' />
                    </div>
                </div>
                <div className='home_five_block_content container'>
                    <div className='home_five_block_list'>
                        <h1 className='home_five_block_list_title'>
                            {t('home.home_faq_title')}
                        </h1>
                        <ul className='home_five_block_list_text_two'>
                            <li>{t('home.home_faq_items.question1')}</li>
                            <li>{t('home.home_faq_items.answer1')}</li>
                            <li>{t('home.home_faq_items.question2')}</li>
                            <li>{t('home.home_faq_items.answer2')}</li>
                        </ul>
                    </div>
                    <div className='home_five_block_img'>
                        <img src={questionImg} alt='home question' />
                    </div>
                </div>
            </div>
            <div className='home_six_block' id='contact'>
                <div className='container'>
                    <div className='home_title_form'>
                        <h1>{t('home.home_contact_title')}</h1>
                    </div>
                    <div className='home_six_block_form_contact'>
                        <div className='home_six_block_form'>
                            <form className='home_form' onSubmit={handleSubmit}>
                                <input
                                    placeholder={t('home.home_form.first_name')}
                                    type='text'
                                    id='name'
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    required
                                />
                                <input
                                    placeholder={t('home.home_form.email')}
                                    type='email'
                                    id='email'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required />
                                <button type='submit'>
                                    {t('home.home_form.submit')}
                                    <img src={arrow} alt='arrow' />
                                </button>
                            </form>
                        </div>
                        <div className='home_six_block_contact'>
                            <div className='home_six_block_contact_text'>
                                <img src={location} alt='location' />
                                <span>{t('home.home_contact.location')}</span>
                            </div>
                            <div className='home_six_block_contact_text'>
                                <img src={phone} alt='phone' />
                                <span>{t('home.home_contact.phone')}</span>
                            </div>
                            <div className='home_six_block_contact_text'>
                                <img src={mail} alt='mail' />
                                <span>{t('home.home_contact.mail')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
