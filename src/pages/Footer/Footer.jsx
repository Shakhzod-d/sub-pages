import React from "react";

import "./Footer.css";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer" id="footer">
      <h1 style={{ color: "red", textAlign: "center" }}>{t("footer")}</h1>
    </div>
  );
};
