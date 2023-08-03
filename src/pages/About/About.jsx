import React from "react";
import { useTranslation } from "react-i18next";

import "./About.css";

export const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about_page" id="about">
      <h1 style={{ color: "red", textAlign: "center" }}>{t("about")}</h1>
    </div>
  );
};
