import ReactDOM from "react-dom";
import App from "./App";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Checkout from "./Checkout";
import ThankYou from "./ThankYou";
import Styles from "./utils/styles";
import { Router } from "@reach/router";
import Header from "./components/header";
import "./i18n";
import { Bars } from "svg-loaders-react";

const Main = () => {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.ipgeolocation.io/ipgeo?apiKey=891717abedb44a3aaab0fd1f8bda0fad"
    )
      .then(rsp => rsp.json())
      .then(response => {
        i18n.changeLanguage(response.languages);
        setLoading(false);
      });
  }, [i18n]);

  return loading ? (
    <div className="loading">
      <Styles />
      <Bars fill="#FA8D0F" />
    </div>
  ) : (
    <>
      <Styles />
      <Header />
      <Router>
        <App path="/" />
        <Checkout path="/checkout" />
        <ThankYou path="/thank-you" />
      </Router>
    </>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
