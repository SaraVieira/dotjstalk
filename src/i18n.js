import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./translations/translations.json";

const lng = navigator.languages
  ? navigator.languages[0]
  : navigator.language || navigator.userLanguage || "en";

i18n.use(initReactI18next).init({
  resources,
  lng,
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
