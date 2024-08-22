import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Импортируйте ваши файлы с переводами
import translationEN from './locales/en/translation.json';
import translationTRK from './locales/trk/translation.json';

// Конфигурация i18next
i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: translationEN,
        },
        trk: {
            translation: translationTRK,
        },
    },
    lng: 'en', // Язык по умолчанию
    fallbackLng: 'en', // Язык, который будет использоваться, если перевод для текущего языка не найден

    interpolation: {
        escapeValue: false, // React уже экранирует значения, поэтому отключаем экранирование
    },
});

export default i18n;
