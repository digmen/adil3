import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import b1 from './images/sr1.png'
import b2 from './images/sr2.png'
import b3 from './images/sr3.png'
import './service.scss'

export default function Service() {
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
		<div>
			<div className='service'>
				<div className='about_block_text'>
					<h1 className='about_title'>{t('service.service')}</h1>
				</div>
			</div>
			<div className='about_two_block-2'>
				<div className='container grid-container'>
					{/* 1 */}
					<div className='card-con1-1'>
						<h2>{t('service.individual_terms_title')}</h2>
						<ul>
							<li>{t('service.individual_terms_text.item1')}</li>
							<li>{t('service.individual_terms_text.item2')}</li>
							<li>{t('service.individual_terms_text.item3')}</li>
						</ul>
					</div>
					<div className='card-con2-2'>
						<img src={b1} alt='' />
					</div>
					{/* 2 */}
					<div className='card-con2-2 conteiner-order'>
						<img src={b2} alt='' />
					</div>
					<div className='card-con1-1 conteiner-order-2'>
						<h2>{t('service.logistics_delivery_title')}</h2>
						<ul>
							<li>{t('service.logistics_delivery_text.item1')}</li>
							<li>{t('service.logistics_delivery_text.item2')}</li>
							<li>{t('service.logistics_delivery_text.item3')}</li>
						</ul>
					</div>
					{/* 3 */}
					<div className='card-con1-1 '>
						<h2>{t('service.product_range_title')}</h2>
						<ul>
							<li>{t('service.product_range_text.item1')}</li>
							<li>{t('service.product_range_text.item2')}</li>
							<li>{t('service.product_range_text.item3')}</li>
						</ul>
					</div>
					<div className='card-con2-2'>
						<img src={b3} alt='' />
					</div>
				</div>
			</div>
			<div className='about_tree_block-3'>
				<div className='container'>
					<h2>{t('service.reliable_partner')}</h2>
				</div>
			</div>
		</div>
	)
}
