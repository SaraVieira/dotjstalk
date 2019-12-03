import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import Checkout from "./Checkout";
import ThankYou from "./ThankYou";
import Styles from "./utils/styles";
import { Router } from "@reach/router";
import Header from "./components/header";
import "./i18n";

const Main = () => (
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

ReactDOM.render(<Main />, document.getElementById("root"));
