export enum Category {
  All = "ALL",
  Acting = "ACTING-VOICE-COMMUNICATION",
  Design = "DESIGN-FASHION-MAKEUP",
  Games = "GAMES-FILM-PHOTOGRAPHY",
  Marketing = "MARKETING-MANAGEMENT",
  Music = "MUSIC-SOUND-PRODUCTION",
}

export const CATEGORIES = [
  {
    title: "All",
    id: Category.All,
  },
  {
    title: "Acting, Voice & Communication",
    id: Category.Acting,
  },
  {
    title: "Design, Fashion & Makeup",
    id: Category.Design,
  },
  {
    title: "Games, Film & Photography",
    id: Category.Games,
  },
  {
    title: "Marketing & Management",
    id: Category.Marketing,
  },
  {
    title: "Music & Sound Production",
    id: Category.Music,
  },
];

export const DUMMY_COURSES = [
  {
    image: "/music-production.jpeg",
    title: "Music Production",
    category: Category.Music,
    description:
      "Design individual fashion items or entire collections and accessories. Trust your sense for what is trending and find a creative outlet for your design skills during all phases of work - from the initial idea and the draft pattern to manufacturing and producing. Design individual fashion items or entire collections and accessories.",
    metadata: [
      { key: "Duration", value: "6 months" },
      { key: "Level", value: "Intermediate" },
    ],
    startDate: "August 1, 2024",
    slug: "/music-production",
    id: "music-production",
  },
  {
    image: "/music-designer.jpeg",
    title: "Music Design",
    category: Category.Music,
    description:
      "Design individual fashion items or entire collections and accessories. Trust your sense for what is trending and find a creative outlet for your design skills during all phases of work - from the initial idea and the draft pattern to manufacturing and producing. Design individual fashion items or entire collections and accessories.",

    metadata: [
      { key: "Duration", value: "6 months" },
      { key: "Level", value: "Intermediate" },
    ],
    startDate: "August 1, 2024",
    slug: "/music-design",
    id: "music-design",
  },
  {
    image: "/electronic-music-production.jpeg",
    title: "Electronic Music Design",
    category: Category.Music,
    description:
      "Design individual fashion items or entire collections and accessories. Trust your sense for what is trending and find a creative outlet for your design skills during all phases of work - from the initial idea and the draft pattern to manufacturing and producing. Design individual fashion items or entire collections and accessories.",

    metadata: [
      { key: "Duration", value: "6 months" },
      { key: "Level", value: "Intermediate" },
    ],
    startDate: "August 1, 2024",
    slug: "/electronic-music-design",
    id: "electronic-music-design",
  },
  {
    image: "/songwriting.jpeg",
    title: "Songwriting",
    category: Category.Music,
    description:
      "Design individual fashion items or entire collections and accessories. Trust your sense for what is trending and find a creative outlet for your design skills during all phases of work - from the initial idea and the draft pattern to manufacturing and producing. Design individual fashion items or entire collections and accessories.",

    metadata: [
      { key: "Duration", value: "6 months" },
      { key: "Level", value: "Intermediate" },
    ],
    startDate: "August 1, 2024",
    slug: "/songwriting",
    id: "songwriting",
  },
  {
    image: "/recording-mixing.jpeg",
    title: "Recording & Mixing",
    category: Category.Music,
    description: "Learn how to produce music with our industry experts",
    metadata: [
      { key: "Duration", value: "6 months" },
      { key: "Level", value: "Intermediate" },
    ],
    startDate: "August 1, 2024",
    slug: "/recording-mixing",
    id: "recording-mixing",
  },
  {
    image: "/music-audio-production.jpeg",
    title: "Music & Audio Production",
    category: Category.Music,
    description: "Learn how to produce music with our industry experts",
    metadata: [
      { key: "Duration", value: "6 months" },
      { key: "Level", value: "Intermediate" },
    ],
    startDate: "August 1, 2024",
    slug: "/music-audio-production",
    id: "music-audio-production",
  },
  {
    image: "/music-audio-production.jpeg",
    title: "Games & Photography",
    category: Category.Games,
    description: "Learn how to produce music with our industry experts",
    metadata: [
      { key: "Duration", value: "6 months" },
      { key: "Level", value: "Intermediate" },
    ],
    startDate: "August 1, 2024",
    slug: "/games-photography",
    id: "games-photography",
  },
  {
    image: "/communication.jpeg",
    title: "Communication Design & Fashion",
    category: Category.Design,
    description: "Learn how to produce music with our industry experts",
    metadata: [
      { key: "Duration", value: "6 months" },
      { key: "Level", value: "Intermediate" },
    ],
    startDate: "August 1, 2024",
    slug: "/communication-design-fashion",
    id: "communication-design-fashion",
  },
];
