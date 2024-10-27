import type { Entry, EntryFields } from "contentful";
import { BasePage } from "../BasePage";

export interface TypeLandingPageFields extends BasePage {
    heading: EntryFields.Symbol;
    body?: EntryFields.RichText;
}

export type TypeLandingPage = Entry<TypeLandingPageFields>;
export type LandingPage = TypeLandingPageFields;
