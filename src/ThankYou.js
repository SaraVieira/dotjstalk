import React from "react";
import { useTranslation } from "react-i18next";
import { Title } from "./components/Styled";

function ThankYou() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <Title>{t("Thank You")}</Title>
    </div>
  );
}

export default ThankYou;
