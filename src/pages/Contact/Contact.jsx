import React from "react";
import { useTranslation } from "react-i18next";

import "./Contact.css";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact" id="contact">
      <h1 style={{ color: "red", textAlign: "center" }}>{t("contact")}</h1>
    </div>
  );
};
