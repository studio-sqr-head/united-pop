import {
  FacebookSvg,
  InstagramSvg,
  LinkedInSvg,
  YoutubeSvg,
} from "@/app/components/icons"

// move to env
export const STORYBLOK_BASE_URL = "https://api.storyblok.com/v2/cdn/stories"
export const HUBSPOT_SRC = `//js-eu1.hsforms.net/forms/embed/v2.js`
export const HUBSPOT_REGION = "eu1"
export const HUBSPOT_FORM_ID_EN = "38b95c65-2534-4a9c-b4af-4c96945436b4"
export const HUBSPOT_FORM_ID_NL = "0125f0e4-27e0-4fa1-ad0a-283b73fd3c4d"
export const FACEBOOK_URL = "https://www.facebook.com/UnitedPOPNetherlands/"
export const INSTAGRAM_URL = "https://www.instagram.com/unitedpopamsterdam/"
export const LINKEDIN_URL = "https://www.linkedin.com/school/unitedpop"
export const YOUTUBE_URL = "https://www.youtube.com/unitedpop"
export const BROCHURE_URL = "https://brochure.united-pop.com/#page=2"

export const formToLang = {
  en: HUBSPOT_FORM_ID_EN,
  nl: HUBSPOT_FORM_ID_NL,
}

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
]

export const TABS = [
  { id: "overview", name: "Overview" },
  { id: "timetable", name: "Timetable" },
  { id: "fees", name: "Fees" },
  { id: "faq", name: "FAQ" },
  { id: "contact", name: "Contact" },
]

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
]

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
]

export const SOCIAL_MEDIA = [
  {
    id: "facebook",
    href: FACEBOOK_URL,
    title: "Facebook",
    Svg: FacebookSvg,
  },
  {
    id: "instagram",
    href: INSTAGRAM_URL,
    title: "Instagram",
    Svg: InstagramSvg,
  },
  {
    id: "linkedin",
    href: LINKEDIN_URL,
    title: "LinkedIn",
    Svg: LinkedInSvg,
  },
  {
    id: "youtube",
    href: YOUTUBE_URL,
    title: "YouTube",
    Svg: YoutubeSvg,
  },
]

export const FAQ_ITEMS = [
  {
    title: "Is team pricing available?",
    description:
      "Yes! You can purchase a license that you can share with your entire team.",
  },
  {
    title: "Can I get a refund?",
    description: "Yes! You can get a refund within 30 days of purchase.",
  },
  {
    title: "Can I upgrade my license?",
    description: "Yes! You can upgrade your license at any time.",
  },
  {
    title: "Is there a free trial available?",
    description: "Yes! You can try out our software for free for 14 days.",
  },
  {
    title: "Do you offer discounts for students?",
    description:
      "Yes! We offer discounts for students who can provide a valid student ID.",
  },
  {
    title: "Can I cancel my subscription at any time?",
    description: "Yes! You can cancel your subscription at any time.",
  },
  {
    title: "Can I cancel my subscription at any time?",
    description: "Yes! You can cancel your subscription at any time.",
  },
]
