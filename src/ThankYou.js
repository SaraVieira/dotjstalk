import React from "react";
import { useTranslation } from "react-i18next";
import { Main } from "./components/Styled";

function ThankYou() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <Main>
        <h1>{t("Thank You")}</h1>
      </Main>
    </div>
  );
}

export default ThankYou;
