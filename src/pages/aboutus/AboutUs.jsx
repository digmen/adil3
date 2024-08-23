import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import Header from '../../components/Header';

import './about.scss'
import b1 from './images/b1.png'
import b2 from './images/b2.png'
import b3 from './images/b3.png'
import b4 from './images/b4.png'

export default function AboutUs() {
	const { t } = useTranslation('')

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
			<div className='about'>
				<div className='about_block_text'>
					<h1 className='about_title'>{t('about.about')}</h1>
				</div>
			</div>
			<div className='about_two_block'>
				<div className='container'>
					{/* 1 */}
					<div className='card'>
						<div className='card-con1'>
							<h2>{t('about.history_title')}</h2>
							<p>{t('about.history_text')}</p>
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
							<h2>{t('about.growth_title')}</h2>
							<p>{t('about.growth_text')}</p>
						</div>
					</div>
					{/* 3 */}
					<div className='card'>
						<div className='card-con1'>
							<h2>{t('about.expansion_title')}</h2>
							<p>{t('about.expansion_text')}</p>
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
							<h2>{t('about.future_title')}</h2>
							<p>{t('about.future_text')}</p>
						</div>
					</div>
				</div>
			</div>
			<div className='about_tree_block'>
				<div className='container'>
					<h2>{t('about.sell_title')}</h2>
					<div className=''>
						<div className=''>
							<h2>{t('about.efficient_distribution_title')}</h2>
							<p>{t('about.efficient_distribution_text')}</p>
						</div>
						<div className=''>
							<h2>{t('about.direct_sales_title')}</h2>
							<p>{t('about.direct_sales_text')}</p>
						</div>
						<div className=''>
							<h2>{t('about.economies_of_scale_title')}</h2>
							<p>{t('about.economies_of_scale_text')}</p>
						</div>
					</div>
					<button>{t('about.contact_us')}</button>
				</div>
			</div>
		</div>
		</>
	)
}
