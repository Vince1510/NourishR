const en = {
    alt: {
        logoLight: "The logo of Nourish R made for the light-theme",
        logoDark: "The logo of Nourish R made for the dark-theme",
    },
    home: {
        title: "Welcome to Nourish", // Extra R in the text
    },
};

export type TranslationDictionary = typeof en;
export type Language = 'en' | 'nl';

export const translations: Record<Language, TranslationDictionary> = {
    en,
    nl: {
        alt: {
            logoLight: "Het logo van Nourish R gemaakt voor het lichte thema",
            logoDark: "Het logo van Nourish R gemaakt voor het donkere thema",
        },
        home: {
            title: "Welkom bij Nourish", // Extra R in the text
        },
    }
};