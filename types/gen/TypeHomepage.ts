import type { Asset, Entry, EntryFields } from "contentful";
import { BasePage } from "../BasePage";

export interface TypeHomePageFields extends BasePage {
    heading?: EntryFields.Symbol;
    heroBanner?: Asset;
    duplexSection?: EntryFields.RichText;
    videoEmbed?: Asset;
}

export type TypeHomePage = Entry<TypeHomePageFields>;
export type HomePage = TypeHomePageFields;
