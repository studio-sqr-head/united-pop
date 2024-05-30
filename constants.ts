import {
  FacebookSvg,
  InstagramSvg,
  LinkedInSvg,
  YoutubeSvg,
} from "@/app/components/socials";

export const STORYBLOK_BASE_URL = "https://api.storyblok.com/v2/cdn/stories";

export enum CategoryEnum {
  ALL = "ALL",
  "ACTING-VOICE-COMMUNICATION" = "ACTING-VOICE-COMMUNICATION",
  "DESIGN-FASHION-MAKEUP" = "DESIGN-FASHION-MAKEUP",
  "GAMES-FILM-PHOTOGRAPHY" = "GAMES-FILM-PHOTOGRAPHY",
  "MARKETING-MANAGEMENT" = "MARKETING-MANAGEMENT",
  "MUSIC-SOUND-PRODUCTION" = "MUSIC-SOUND-PRODUCTION",
}

export const START_DATES = [
  new Date(new Date().getFullYear(), 0, 1),
  new Date(new Date().getFullYear(), 3, 1),
  new Date(new Date().getFullYear(), 6, 1),
  new Date(new Date().getFullYear(), 9, 1),
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

// export const DUMMY_COURSES = [
//   {
//     image: "/music-production.jpeg",
//     title: "Music Production",
//     category: CategoryEnum.Music,
//     description:
//       "Design individual fashion items or entire collections and accessories. Trust your sense for what is trending and find a creative outlet for your design skills during all phases of work - from the initial idea and the draft pattern to manufacturing and producing. Design individual fashion items or entire collections and accessories.",
//     metadata: [
//       { key: "Duration", value: "6 months" },
//       { key: "Level", value: "Intermediate" },
//     ],
//     startDate: "August 1, 2024",
//     slug: "/music-production",
//     id: "music-production",
//   },
//   {
//     image: "/music-designer.jpeg",
//     title: "Music Design",
//     category: CategoryEnum.Music,
//     description:
//       "Design individual fashion items or entire collections and accessories. Trust your sense for what is trending and find a creative outlet for your design skills during all phases of work - from the initial idea and the draft pattern to manufacturing and producing. Design individual fashion items or entire collections and accessories.",

//     metadata: [
//       { key: "Duration", value: "6 months" },
//       { key: "Level", value: "Intermediate" },
//     ],
//     startDate: "August 1, 2024",
//     slug: "/music-design",
//     id: "music-design",
//   },
//   {
//     image: "/electronic-music-production.jpeg",
//     title: "Electronic Music Design",
//     category: CategoryEnum.Music,
//     description:
//       "Design individual fashion items or entire collections and accessories. Trust your sense for what is trending and find a creative outlet for your design skills during all phases of work - from the initial idea and the draft pattern to manufacturing and producing. Design individual fashion items or entire collections and accessories.",

//     metadata: [
//       { key: "Duration", value: "6 months" },
//       { key: "Level", value: "Intermediate" },
//     ],
//     startDate: "August 1, 2024",
//     slug: "/electronic-music-design",
//     id: "electronic-music-design",
//   },
//   {
//     image: "/songwriting.jpeg",
//     title: "Songwriting",
//     category: CategoryEnum.Music,
//     description:
//       "Design individual fashion items or entire collections and accessories. Trust your sense for what is trending and find a creative outlet for your design skills during all phases of work - from the initial idea and the draft pattern to manufacturing and producing. Design individual fashion items or entire collections and accessories.",

//     metadata: [
//       { key: "Duration", value: "6 months" },
//       { key: "Level", value: "Intermediate" },
//     ],
//     startDate: "August 1, 2024",
//     slug: "/songwriting",
//     id: "songwriting",
//   },
//   {
//     image: "/recording-mixing.jpeg",
//     title: "Recording & Mixing",
//     category: CategoryEnum.Music,
//     description: "Learn how to produce music with our industry experts",
//     metadata: [
//       { key: "Duration", value: "6 months" },
//       { key: "Level", value: "Intermediate" },
//     ],
//     startDate: "August 1, 2024",
//     slug: "/recording-mixing",
//     id: "recording-mixing",
//   },
//   {
//     image: "/music-audio-production.jpeg",
//     title: "Music & Audio Production",
//     category: CategoryEnum.Music,
//     description: "Learn how to produce music with our industry experts",
//     metadata: [
//       { key: "Duration", value: "6 months" },
//       { key: "Level", value: "Intermediate" },
//     ],
//     startDate: "August 1, 2024",
//     slug: "/music-audio-production",
//     id: "music-audio-production",
//   },
//   {
//     image: "/music-audio-production.jpeg",
//     title: "Games & Photography",
//     category: CategoryEnum.Games,
//     description: "Learn how to produce music with our industry experts",
//     metadata: [
//       { key: "Duration", value: "6 months" },
//       { key: "Level", value: "Intermediate" },
//     ],
//     startDate: "August 1, 2024",
//     slug: "/games-photography",
//     id: "games-photography",
//   },
//   {
//     image: "/communication.jpeg",
//     title: "Communication Design & Fashion",
//     category: CategoryEnum.Design,
//     description: "Learn how to produce music with our industry experts",
//     metadata: [
//       { key: "Duration", value: "6 months" },
//       { key: "Level", value: "Intermediate" },
//     ],
//     startDate: "August 1, 2024",
//     slug: "/communication-design-fashion",
//     id: "communication-design-fashion",
//   },
// ];

export const SOCIAL_MEDIA = [
  {
    id: "facebook",
    href: "https://www.facebook.com",
    title: "Facebook",
    Svg: FacebookSvg,
  },
  {
    id: "instagram",
    href: "https://www.instagram.com",
    title: "Instagram",
    Svg: InstagramSvg,
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com",
    title: "LinkedIn",
    Svg: LinkedInSvg,
  },
  {
    id: "youtube",
    href: "https://www.youtube.com",
    title: "YouTube",
    Svg: YoutubeSvg,
  },
];
