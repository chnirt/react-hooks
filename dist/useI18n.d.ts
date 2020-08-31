/**
 * A custom hook to use `i18n` inside a React component
 */
export declare function useI18n(locale: string): {
    language: any;
    changeLanguage: (lng: string) => void;
};
