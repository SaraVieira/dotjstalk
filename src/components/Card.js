import React from "react";
import amexIcon from "../images/amex.svg";
import discoverIcon from "../images/discover.svg";
import visaIcon from "../images/visa.svg";
import masterCardIcon from "../images/mastercard.svg";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
  border: none;

  :hover {
    background: transparent;
  }
`;

export default ({ type, onClick }) => {
  switch (type) {
    case "American Express":
      return (
        <Button onClick={onClick}>
          <img src={amexIcon} alt="American Express" />
        </Button>
      );
    case "Mastercard":
      return (
        <Button onClick={onClick}>
          <img src={masterCardIcon} alt="Mastercard" />
        </Button>
      );
    case "Visa":
      return (
        <Button onClick={onClick}>
          <img src={visaIcon} alt="Visa" />
        </Button>
      );
    case "Discover":
      return (
        <Button onClick={onClick}>
          <img src={discoverIcon} alt="Discover" />
        </Button>
      );
    default:
      return null;
  }
};
