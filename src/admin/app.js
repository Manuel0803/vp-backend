//@ts-nocheck

import esTranslations from './translations/es.json';
import favicon from '../extensions/favicon.png';

const config = {
  locales: ["es"],
  tutorials: false,
  notifications: { releases: false },

  head: {
    favicon: favicon
  },

  translations: {
    es: {
      ...esTranslations,
    },
  },

  theme: {
    light: {
      colors: {
        primary100: "#FFF1E6",
        primary200: "#FFD9BD",
        primary300: "#FFC28F",
        primary400: "#FFA85C",
        primary500: "#F58C32",
        primary600: "#EE7923",
        primary700: "#D9651D",
        primary800: "#B65216",
        primary900: "#8F3F0F",

        alternative100: "#FDE9E0",
        alternative500: "#F44A09",

        neutral0: "#FFFFFF",
        neutral100: "#FFF9F2",
        neutral200: "#F2E8DC",
        neutral300: "#E6D7C7",
        neutral500: "#C39E7D",
        neutral700: "#5A5A5A",
        neutral900: "#2B2B2B",

        success500: "#4CAF50",
        warning500: "#FF9800",
        danger500: "#D02B20",
      },

      typography: {
        fontFamily:
          "'Montserrat', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      },

      borderRadius: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
      },
    },

    dark: {
      colors: {
        primary100: "#3E1F0D",
        primary200: "#5C2A12",
        primary300: "#7B3C18",
        primary400: "#A25525",
        primary500: "#EE7923",
        primary600: "#F58C32",
        primary700: "#D9651D",
        primary800: "#B65216",
        primary900: "#8F3F0F",

        alternative100: "#3F0F05",
        alternative500: "#F44A09",

        neutral0: "#1C1C1C",
        neutral100: "#262626",
        neutral200: "#333333",
        neutral300: "#444444",
        neutral500: "#A68A6F",
        neutral700: "#E5E5E5",
        neutral900: "#FFFFFF",

        success500: "#4CAF50",
        warning500: "#FF9800",
        danger500: "#D02B20",
      },

      typography: {
        fontFamily:
          "'Montserrat', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      },

      borderRadius: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
      },
    },
  },
};

export default { config };
