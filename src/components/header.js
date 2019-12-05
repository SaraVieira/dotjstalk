import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
import Logo from "./Logo";
import "../i18n";
import translations from "../translations/translations.json";
import { Link } from "@reach/router";
import { Button, FlagButton, HeaderComponent, Countries } from "./Styled";

function Header() {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <HeaderComponent>
      <Link to="/">
        <Logo />
      </Link>
      <div style={{ position: "relative" }}>
        <Button onClick={() => setOpen(!open)}>{t("Language")}</Button>
        {open ? (
          <Countries>
            {Object.keys(translations).map(language => (
              <li>
                <FlagButton onClick={() => i18n.changeLanguage(language)}>
                  <Flag
                    height="32"
                    fallback={<Flag code="US" height="32" />}
                    code={language.toUpperCase()}
                  />
                </FlagButton>
              </li>
            ))}
          </Countries>
        ) : null}
      </div>
    </HeaderComponent>
  );
}

export default Header;
