import {
  FacebookSvg,
  InstagramSvg,
  LinkedInSvg,
  YoutubeSvg,
} from "@/app/components/socials";

// move to env
export const STORYBLOK_BASE_URL = "https://api.storyblok.com/v2/cdn/stories";
export const HUBSPOT_SRC = `//js-eu1.hsforms.net/forms/embed/v2.js`;
export const HUBSPOT_REGION = "eu1";
export const HUBSPOT_FORM_ID_EN = "38b95c65-2534-4a9c-b4af-4c96945436b4";
export const HUBSPOT_FORM_ID_NL = "0125f0e4-27e0-4fa1-ad0a-283b73fd3c4d";

export const formToLang = {
  en: HUBSPOT_FORM_ID_EN,
  nl: HUBSPOT_FORM_ID_NL,
};

export enum CategoryEnum {
  ALL = "ALL",
  "ACTING-VOICE-COMMUNICATION" = "ACTING-VOICE-COMMUNICATION",
  "DESIGN-FASHION-MAKEUP" = "DESIGN-FASHION-MAKEUP",
  "GAMES-FILM-PHOTOGRAPHY" = "GAMES-FILM-PHOTOGRAPHY",
  "MARKETING-MANAGEMENT" = "MARKETING-MANAGEMENT",
  "MUSIC-SOUND-PRODUCTION" = "MUSIC-SOUND-PRODUCTION",
}

export const START_DATES = [
  new Date(new Date().getFullYear(), 3, 1), // April 1st
  new Date(new Date().getFullYear(), 9, 1), // October 1st
];

export const TABS = [
  { id: "overview", name: "Overview" },
  { id: "structure", name: "Structure" },
  { id: "fees", name: "Fees" },
  { id: "faq", name: "FAQ" },
  { id: "contact", name: "Contact" },
];

export enum TypeEnum {
  All = "ALL",
  BACHELOR = "BACHELOR",
  DIPLOMA = "DIPLOMA",
}

export const TYPES = [
  {
    title: "All",
    id: TypeEnum.All,
  },
  {
    title: "Diploma",
    id: TypeEnum.DIPLOMA,
  },
  {
    title: "Bachelor",
    id: TypeEnum.BACHELOR,
  },
];

export const CATEGORIES = [
  {
    title: "All",
    id: CategoryEnum.ALL,
  },
  {
    title: "Acting, Voice & Communication",
    id: CategoryEnum["ACTING-VOICE-COMMUNICATION"],
  },
  {
    title: "Design, Fashion & Makeup",
    id: CategoryEnum["DESIGN-FASHION-MAKEUP"],
  },
  {
    title: "Games, Film & Photography",
    id: CategoryEnum["GAMES-FILM-PHOTOGRAPHY"],
  },
  {
    title: "Marketing & Management",
    id: CategoryEnum["MARKETING-MANAGEMENT"],
  },
  {
    title: "Music & Sound Production",
    id: CategoryEnum["MUSIC-SOUND-PRODUCTION"],
  },
];

export const SOCIAL_MEDIA = [
  {
    id: "facebook",
    href: "https://www.facebook.com/UnitedPOPNetherlands/",
    title: "Facebook",
    Svg: FacebookSvg,
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/unitedpopamsterdam/",
    title: "Instagram",
    Svg: InstagramSvg,
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/school/unitedpop",
    title: "LinkedIn",
    Svg: LinkedInSvg,
  },
  {
    id: "youtube",
    href: "https://www.youtube.com/unitedpop",
    title: "YouTube",
    Svg: YoutubeSvg,
  },
];
