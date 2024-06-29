import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        // lng: "ar", //to set the main language but if using lang detector i'm not using it
        fallbackLng: "en", //default
        detection: {
        order: [
            "cookie",
            "htmlTag",
            "localStorage",
            "sessionStorage",
            "navigator",
            "path",
            "subdomain",
        ],
        caches: ["cookie"],
        },
        backend: {
        loadPath: "/locale/{{lng}}/{{ns}}.json",
        },
  });
