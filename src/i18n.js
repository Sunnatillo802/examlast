
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    uz: {
      translation: {
        Home: "Bosh sahifa",
        Blog: "Blog",
        About: "Biz haqimizda",
        Register: "Ro‘yxatdan o‘tish",
        register: "Ro‘yxatdan ",
        login:"Kirish",
      },
    },
    en: {
      translation: {
        Home: "Home",
        Blog: "Blog",
        About: "About",
        Register: "Register",
        register: "Register",
        login:"login"
      },
    },
    ru: {
      translation: {
        Home: "Главная",
        Blog: "Блог",
        About: "О нас",
        Register: "Регистрация",
        register: "Регистрация",
        login:"Вход",
      },
    },
  },
  lng: "uz",
  fallbackLng: "uz",
  interpolation: { escapeValue: false },
});

export default i18n;
