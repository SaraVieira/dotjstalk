import React from "react";
import amexIcon from "../images/amex.svg";
import discoverIcon from "../images/discover.svg";
import visaIcon from "../images/visa.svg";
import mastercardIcon from "../images/mastercard.svg";

export default ({ type, onClick }) => {
  switch (type) {
    case "American Express":
      return <img onClick={onClick} src={amexIcon} alt="American Express" />;
    case "Mastercard":
      return <img onClick={onClick} src={mastercardIcon} alt="Mastercard" />;
    case "Visa":
      return <img onClick={onClick} src={visaIcon} alt="Visa" />;
    case "Discover":
      return <img onClick={onClick} src={discoverIcon} alt="Discover" />;
    default:
      return null;
  }
};
