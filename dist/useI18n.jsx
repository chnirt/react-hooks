"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useI18n = void 0;
var react_1 = require("react");
var react_i18next_1 = require("react-i18next");
/**
 * A custom hook to use `i18n` inside a React component
 */
function useI18n(locale) {
    var i18n = react_i18next_1.useTranslation().i18n;
    react_1.useEffect(function () {
        i18n.changeLanguage(i18n.language);
    }, [i18n]);
    var changeLanguage = function (lng) {
        i18n.changeLanguage(lng);
    };
    return {
        language: i18n.language,
        changeLanguage: changeLanguage,
    };
}
exports.useI18n = useI18n;
