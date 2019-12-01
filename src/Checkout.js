import React, { useState } from "react";
import { navigate } from "@reach/router";

import Card from "./components/Card";
import { Cards } from "./components/Styled";
import { useTranslation } from "react-i18next";

export default () => {
  const [showCards, setShowCards] = useState(false);
  const { t } = useTranslation();

  const onSubmit = e => {
    e.preventDefault();
    navigate("/thank-you");
  };
  return (
    <>
      <main className="App">
        <form style={{ width: 800 }} onSubmit={onSubmit}>
          <h2>{t("Checkout")}</h2>
          <fieldset>
            <legend>{t("Your Data")}</legend>
            <input
              required
              type="text"
              className="full"
              placeholder={t("Name")}
            />
            <input
              required
              type="email"
              className="full"
              placeholder={t("Email")}
            />
            <input
              required
              type="text"
              className="full"
              placeholder={t("Street")}
            />
            <input required type="text" placeholder={t("Zip Code")} />
            <input required type="text" placeholder={t("City")} />
            <input required type="text" placeholder={t("Country")} />
            <input
              required
              type="number"
              placeholder={t("Phone Number")}
              className="full"
            />
          </fieldset>

          <fieldset>
            <legend>{t("Billing Data")}</legend>
            <input
              required
              type="text"
              className="full"
              placeholder={t("Name")}
            />
            <input
              required
              type="text"
              className="full"
              placeholder={t("Street")}
            />
            <input required type="text" placeholder={t("Zip Code")} />
            <input required type="text" placeholder={t("City")} />
            <input required type="text" placeholder={t("Country")} />
          </fieldset>
          <fieldset>
            <legend>{t("Payment Data")}</legend>
            {showCards ? (
              <>
                <input
                  className="full"
                  required
                  type="text"
                  placeholder={t("Name on Card")}
                />
                <input
                  className="full"
                  required
                  type="number"
                  placeholder={t("Card Number")}
                />
                <input
                  required
                  type="number"
                  placeholder={t("Expiration Month")}
                />
                <input
                  required
                  type="number"
                  placeholder={t("Expiration Year")}
                />
                <input required type="number" placeholder={t("CCV")} />
              </>
            ) : (
              <>
                <h4>{t("Select your Card Type")}</h4>
                <Cards>
                  <Card
                    type="American Express"
                    onClick={() => setShowCards(true)}
                  />
                  <Card type="Mastercard" onClick={() => setShowCards(true)} />
                  <Card type="Discover" onClick={() => setShowCards(true)} />
                  <Card type="Visa" onClick={() => setShowCards(true)} />
                </Cards>
              </>
            )}
          </fieldset>
          <button
            style={{ marginTop: "2rem", width: "100%" }}
            required
            type="submit"
          >
            {t("Pay")}
          </button>
        </form>
      </main>
    </>
  );
};
