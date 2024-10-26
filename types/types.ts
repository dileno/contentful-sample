import { HomePage } from "./gen/TypeHomepage";

export interface HomepageCollection {
  items: HomePage[];
}

export interface ContentfulResponse {
  data: {
    homepageCollection: HomepageCollection;
  };
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  discountPercent?: number;
  ctaText: string;
  colorScheme: ColorScheme;
}

export type ColorScheme = keyof typeof colorSchemes;

export const colorSchemes = {
  orangeRed: {
    bg: "#fe6b40",
    text: "#212121",
    hover: "#e55b30",
  },
  secondOrange: {
    bg: "#ff8829",
    text: "#212121",
    hover: "#e67718",
  },
  lightOrange: {
    bg: "#ffb366",
    text: "#212121",
    hover: "#e6a15c",
  },
  limeGreen: {
    bg: "#a5c90f",
    text: "#212121",
    hover: "#94b40e",
  },
  darkGreen: {
    bg: "#6f9c3d",
    text: "#ffffff",
    hover: "#608936",
  },
} as const;