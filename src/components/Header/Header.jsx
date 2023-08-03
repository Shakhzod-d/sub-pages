import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import { options } from "./helper";

import "./Header.css";
import { Link } from "react-router-dom";

function getLanguage() {
  let localStorageLanguage = localStorage.getItem("i18next");
  if (localStorageLanguage === "null") {
    return "uz";
  } else {
    return localStorageLanguage;
  }
}

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [language, setLanguage] = useState(getLanguage());
  const { i18n, t } = useTranslation(["home"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("uz");
    }
  }, [language]);

  const handleChange = ({ target: { value } }) => {
    localStorage.setItem("i18nextLng", value);
    setLanguage(value);
    i18n.changeLanguage(value);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">Your Logo</div>
      <nav className={`nav ${isMobileMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#home">{t("home")}</a>
          </li>
          <li>
            <a href="#about">{t("about")}</a>
          </li>
          <li>
            <a href="#services">{t("service")}</a>
          </li>
          <li>
            <a href="#portfolio">{t("portfolio")}</a>
          </li>
          <li>
            <a href="#portfolio">{t("contact")}</a>
          </li>
          <li>
            <a href="#portfolio">{t("footer")}</a>
          </li>
        </ul>
      </nav>
      <select name="" id="" onChange={handleChange}>
        {options?.map((itemObj, idx) => (
          <option value={itemObj.value} key={itemObj.id}>
            {itemObj.label}
          </option>
        ))}
      </select>
      <div
        className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
        onClick={handleMobileMenuToggle}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};
