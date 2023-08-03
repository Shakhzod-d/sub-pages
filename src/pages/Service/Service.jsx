import React from "react";

import "./Service.css";
import { useTranslation } from "react-i18next";

export const Service = () => {
  const { t } = useTranslation();

  return (
    <div className="service" id="services">
      <h1 style={{ color: "red", textAlign: "center" }}>{t("service")}</h1>
    </div>
  );
};
