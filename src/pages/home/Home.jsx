import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './home.css'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import swiperimg1 from './images/swiperimg1.png'
import swiperimg2 from './images/swiperimg2.png'
import swiperimg3 from './images/swiperimg3.png'
import swiperimg4 from './images/swiperimg4.png'
import swiperimg5 from './images/swiperimg5.png'
import swiperimg6 from './images/swiperimg6.png'

import homehand from "./images/homehandimg.png";
import questionImg from "./images/question_mark.png";

import location from './images/location.svg'
import phone from './images/phone.svg'
import mail from './images/mail.svg'

import arrow from './images/fi-rs-arrow-right.svg'

export default function Home() {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({
            delay: 200, // задержка перед началом анимации (в миллисекундах)
            duration: 700, // длительность анимации (в миллисекундах)
            easing: 'ease', // функция сглаживания анимации
            mirror: false, // запуск анимации при прокрутке назад
        });
    }, []);
    return (
        <div>
            <div className='home_hero'>
                <div className='home_hero_block_text'>
                    <h1 className='home_hero_title'>We are the best choice for cooperation</h1>
                    <span className='home_hero_text'>Choose us and you won't make a mistake</span>
                    <a href='#contact' className='home_hero_link'>Contact us</a>
                </div>
            </div>
            <div className='home_two_block '>
                <div className='home_stats_block container'>
                    <div className='home_stats_block_text'>
                        <h1>Numbers are telling our story</h1>
                        <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</span>
                    </div>
                    <div className='home_stats_block_table'>
                        <div className='home_stats_block_table_card'>
                            <h1>300K+</h1>
                            <span>Different Items</span>
                        </div>
                        <div className='home_stats_block_table_card'>
                            <h1>10K+</h1>
                            <span>Cooperating Brands</span>
                        </div>
                        <div className='home_stats_block_table_card'>
                            <h1>99%</h1>
                            <span>Glad Clients</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home_three_block'>
                <div className='container'>
                    <div className='home_three_title'>
                        <h1>ABOUT PRODUCTS</h1>
                    </div>
                    <div className='home_three_block_text'>
                        <p>Our products are the result of many years of cooperation and innovation. We strive to create high-quality products that combine advanced technology and attention to detail. Each stage of production is carefully monitored to ensure compliance with the highest standards of safety and efficiency. Our goal is to offer consumers reliable and innovative solutions that make their lives easier and more comfortable.</p>
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
                        className="mySwiper"
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
                                    <h1>Tools</h1>
                                    <span>Products from trusted and certified manufacturers.</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='home_swiper_card'>
                                <div className='home_swiper_card_block_img'>
                                    <img src={swiperimg2} alt='swiper img' />
                                </div>
                                <div className='home_swiper_card_block_text'>
                                    <h1>Food</h1>
                                    <span>Products for all needs and preferences.</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='home_swiper_card'>
                                <div className='home_swiper_card_block_img'>
                                    <img src={swiperimg3} alt='swiper img' />
                                </div>
                                <div className='home_swiper_card_block_text'>
                                    <h1>Computing</h1>
                                    <span>Great deals, flexible discount system and regular promotions.</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='home_swiper_card'>
                                <div className='home_swiper_card_block_img'>
                                    <img src={swiperimg4} alt='swiper img' />
                                </div>
                                <div className='home_swiper_card_block_text'>
                                    <h1>Textile</h1>
                                    <span>Consultations and assistance from qualified specialists.</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='home_swiper_card'>
                                <div className='home_swiper_card_block_img'>
                                    <img src={swiperimg5} alt='swiper img' />
                                </div>
                                <div className='home_swiper_card_block_text'>
                                    <h1>Clothing</h1>
                                    <span>Prompt delivery and convenient payment terms.s</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='home_swiper_card'>
                                <div className='home_swiper_card_block_img'>
                                    <img src={swiperimg6} alt='swiper img' />
                                </div>
                                <div className='home_swiper_card_block_text'>
                                    <h1>Factory </h1>
                                    <span>Long-term relationships and an individual approach to each client.</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </Swiper>
                </div>
            </div>
            <div className='home_five_block'>
                <div className='home_five_block_content container'>
                    <div className='home_five_block_list'>
                        <h1 className='home_five_block_list_title'>Support and Advice</h1>
                        <ul className='home_five_block_list_text'>
                            <li>Round-the-clock support: our team is always ready to answer all your questions and provide the necessary assistance.</li>
                            <li>Assortment consultations: assistance in selecting products and making an order.</li>
                            <li>Personal Manager: Each client is assigned a personal manager to promptly resolve all issues.</li>
                        </ul>
                    </div>
                    <div className='home_five_block_img'>
                        <img src={homehand} alt='home hand' />
                    </div>
                </div>
                <div className='home_five_block_content container'>
                    <div className='home_five_block_list'>
                        <h1 className='home_five_block_list_title'>Frequently Asked Questions (FAQ)</h1>
                        <ul className='home_five_block_list_text_two'>
                            <li>Question: What are the minimum order quantities?</li>
                            <li>Answer: The minimum order quantity depends on the product category and is negotiated individually.</li>
                            <li>Question: Do you provide product samples?</li>
                            <li>Answer: Yes, upon request, we can provide product samples for quality inspection.</li>
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
                        <h1>Are you ready to start cooperation? Contact us or leave your details for more detailed information and an individual offer:</h1>
                    </div>
                    <div className='home_six_block_form_contact' >
                        <div className='home_six_block_form'>
                            <form className='home_form'>
                                <input placeholder='First name' />
                                <input placeholder='Email' />
                                <button>
                                    Sumbit
                                    <img src={arrow} alt='arrow' />
                                </button>
                            </form>
                        </div>
                        <div className='home_six_block_contact'>
                            <div className='home_six_block_contact_text'>
                                <img src={location} alt='location' />
                                <span>Fulya mahallesi buyukdere cad.  Quasar no.76/188 sisli/Istanbul Turkey</span>
                            </div>
                            <div className='home_six_block_contact_text'>
                                <img src={phone} alt='location' />
                                <span>+90 532 761 48 29</span>
                            </div>
                            <div className='home_six_block_contact_text'>
                                <img src={mail} alt='location' />
                                <span>lotusgemicilik0@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
