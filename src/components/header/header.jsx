import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

function Header() {
    const { t } = useTranslation();


    useEffect(() => {
        const savedLang = localStorage.getItem("lang");
        if (savedLang) {
            i18n.changeLanguage(savedLang);
        }
    }, []);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang); 
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">

                <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="head-logo">
                        <img src="./images/Logo.svg" alt="error" />
                    </div>
                </div>

                <div className="collapse navbar-collapse d-flex align-items-center gap-2" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item d-flex gap-3">
                            <NavLink to="/" className="nav-link text-light">{t("Home")}</NavLink>
                            <NavLink to="/blog" className="nav-link text-light">{t("Blog")}</NavLink>
                            <NavLink to="/about" className="nav-link text-light">{t("About")}</NavLink>
                            <NavLink to="/register" className="nav-link text-light">{t("Register")}</NavLink>
                        </li>
                    </ul>

                    <form className="d-flex" role="search">
                        <button className="btn btn-light" type="button">{t("login")}</button>
                    </form>
                    <select
                        className="form-select w-auto"
                        onChange={(e) => changeLanguage(e.target.value)}
                        value={i18n.language} 
                    >
                        <option value="uz">UZ</option>
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                    </select>
                </div>
                <div className="menu d-none">
                    <img src="./images/icons8-menu.svg" alt="error" />
                </div>
            </div>
        </nav>
    );
}

export default Header;
