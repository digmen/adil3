import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import Header from '../../components/Header';


import b1 from './images/pr1.png'
import b2 from './images/pr2.png'
import b3 from './images/pr3.png'
import b4 from './images/pr4.png'
import b5 from './images/pr5.png'
import './product.scss'

export default function Product() {
	const { t } = useTranslation()

	useEffect(() => {
		AOS.init({
			delay: 200, // задержка перед началом анимации (в миллисекундах)
			duration: 700, // длительность анимации (в миллисекундах)
			easing: 'ease', // функция сглаживания анимации
			mirror: false, // запуск анимации при прокрутке назад
		})
	}, [])

	return (
		<>
		<Header/>
		<div>
			<div className='about-5'>
				<div className='about_block_text'>
					<h1 className='about_title'>{t('product.product')}</h1>
				</div>
			</div>
			<div className='about_block_one'>
				<div className='container'>
					<h2>{t('product.product_intro_title')}</h2>
					<p>{t('product.product_intro_text')}</p>
				</div>
			</div>
			<div className='about_two_block2'>
				<div className='container'>
					{/* 1 */}
					<div className='card'>
						<div className='card-con1'>
							<h2>{t('product.textile_title')}</h2>
							<p>{t('product.textile_text')}</p>
						</div>
						<div className='card-con2'>
							<img src={b1} alt='' />
						</div>
					</div>
					{/* 2 */}
					<div className='card cont2'>
						<div className='card-con2'>
							<img src={b2} alt='' />
						</div>
						<div className='card-con1'>
							<h2>{t('product.auto_parts_title')}</h2>
							<p>{t('product.auto_parts_text')}</p>
						</div>
					</div>
					{/* 3 */}
					<div className='card'>
						<div className='card-con1'>
							<h2>{t('product.clothes_title')}</h2>
							<p>{t('product.clothes_text')}</p>
						</div>
						<div className='card-con2'>
							<img src={b3} alt='' />
						</div>
					</div>
					{/* 4 */}
					<div className='card cont2'>
						<div className='card-con2'>
							<img src={b4} alt='' />
						</div>
						<div className='card-con1'>
							<h2>{t('product.food_title')}</h2>
							<p>{t('product.food_text')}</p>
						</div>
					</div>
					{/* 5 */}
					<div className='card'>
						<div className='card-con1'>
							<h2>{t('product.why_us_title')}</h2>
							<p>{t('product.why_us_text')}</p>
						</div>
						<div className='card-con2'>
							<img src={b5} alt='' />
						</div>
					</div>
				</div>
			</div>
		</div>	
		</>
	)
}
