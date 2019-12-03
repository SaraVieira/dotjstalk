import React, { useState } from "react";
import { navigate } from "@reach/router";

import Card from "./components/Card";
import Input from "./components/Input";
import { Cards, Select } from "./components/Styled";
import { useTranslation } from "react-i18next";
import countries from "./utils/countries.json";

export default () => {
  const [showCards, setShowCards] = useState(false);
  const [showBilling, setShowBilling] = useState(false);
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
            <Input required full label={t("Name")} />
            <Input required type="email" full label={t("Email")} />
            <Input required full label={t("Street")} />
            <Input required type="text" label={t("Zip Code")} />
            <Input required type="text" label={t("City")} />
            <Input required type="text" label={t("Country")} />
            <Input required type="number" label={t("Phone Number")} full />
          </fieldset>
          <label>
            <input
              type="checkbox"
              checked={!showBilling}
              onClick={() => setShowBilling(!showBilling)}
            />
            Billing data equal to shipping data
          </label>
          {showBilling ? (
            <fieldset>
              <legend>{t("Billing Data")}</legend>
              <Input required full label={t("Name")} />
              <Input required full label={t("Street")} />
              <Input required type="text" label={t("Zip Code")} />
              <Input required type="text" label={t("City")} />
              <Select>
                <option selected>{t("Country")}</option>
                {countries.map(country => (
                  <option key={country.value} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </Select>
            </fieldset>
          ) : null}
          <fieldset>
            <legend>{t("Payment Data")}</legend>
            {showCards ? (
              <>
                <Input full required label={t("Name on Card")} />
                <Input full required type="number" label={t("Card Number")} />
                <Input required type="number" label={t("Expiration Month")} />
                <Input required type="number" label={t("Expiration Year")} />
                <Input required type="number" label={t("CCV")} />
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
