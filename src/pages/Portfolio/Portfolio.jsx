import React from "react";
import { useTranslation } from "react-i18next";

import "./Portfolio.css";

export const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <div className="portfolio" id="portfolio">
      <h1 style={{ color: "red", textAlign: "center" }}>{t("porfolio")}</h1>
    </div>
  );
};
