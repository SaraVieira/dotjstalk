import React from "react";
import { useTranslation } from "react-i18next";
import product from "./images/product.png";
import { Link } from "@reach/router";
import { Main } from "./components/Styled";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <Main>
        <img src={product} alt="Unicorn Dust Filter Coffee" />
        <div>
          <h1>{t("title")}</h1>
          <h3>{t("Filter Coffee")}</h3>
          <p>{t("lorem")}</p>
          <h4>12.5€ - 250g</h4>
          <button style={{ width: "100%" }}>
            <Link style={{ color: "white" }} to="/checkout">
              {t("buy")}
            </Link>
          </button>
        </div>
      </Main>
    </div>
  );
}

export default App;
