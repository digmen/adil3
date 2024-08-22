import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({
      easing: 'ease', // функция сглаживания анимации
      mirror: false, // запуск анимации при прокрутке назад
    });
  }, []);
  return (
    <div></div>
  )
}
