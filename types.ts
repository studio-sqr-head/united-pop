// This file was generated by the storyblok CLI.
// DO NOT MODIFY THIS FILE BY HAND.
export interface RichtextStoryblok {
  type: string
  content?: RichtextStoryblok[]
  marks?: RichtextStoryblok[]
  attrs?: any
  text?: string
  [k: string]: any
}

export interface AssetStoryblok {
  alt?: string
  copyright?: string
  id: number
  filename: string
  name: string
  title?: string
  focus?: string
  [k: string]: any
}

export interface AboutPageStoryblok {
  title?: string
  body?: RichtextStoryblok
  heroImage?: AssetStoryblok
  faqTitle?: string
  faqSubtitle?: string
  description?: string
  metaTitle?: string
  metaDescription?: string
  metaImage?: AssetStoryblok
  component: "about page"
  _uid: string
  [k: string]: any
}

export interface ContactPageStoryblok {
  heading?: string
  subheading?: string
  hero?: AssetStoryblok
  metaTitle?: string
  metaDescription?: string
  metaImage?: AssetStoryblok
  component: "contact page"
  _uid: string
  [k: string]: any
}

export interface CourseStoryblok {
  image: AssetStoryblok
  title: string
  description: string
  category: string
  fulltime?: boolean
  parttime?: boolean
  type: string
  location?: string
  overview: RichtextStoryblok
  primaryButtonText?: string
  downloadBrochureButtonText?: string
  downloadBrochureUrl?: string
  timetable?: RichtextStoryblok
  partimeDuration?: string
  fulltimeDuration?: string
  component: "course"
  _uid: string
  [k: string]: any
}

export interface TableStoryblok {
  thead: {
    _uid: string
    value?: string
    component: number
    [k: string]: any
  }[]
  tbody: {
    _uid: string
    body: {
      _uid?: string
      value?: string
      component?: number
      [k: string]: any
    }[]
    component: number
    [k: string]: any
  }[]
  [k: string]: any
}

export interface CoursePageStoryblok {
  courseFeesTable?: TableStoryblok
  courseFeesNotes?: RichtextStoryblok
  tabs?: ("" | "OVERVIEW" | "TIMETABLE" | "FEES" | "FAQS")[]
  headerLocation?: string
  headerPartTimeDuration?: string
  headerFullTimeDuration?: string
  headerStartDates?: string
  headerCollaboration?: string
  collaborationText?: RichtextStoryblok
  component: "course page"
  _uid: string
  [k: string]: any
}

export interface DataProtectionGuidelinesStoryblok {
  title?: string
  body?: RichtextStoryblok
  heroImage?: AssetStoryblok
  metaTitle?: string
  metaDescription?: string
  component: "data protection guidelines"
  _uid: string
  [k: string]: any
}

export interface FaqStoryblok {
  title?: string
  description?: RichtextStoryblok
  component: "faq"
  _uid: string
  [k: string]: any
}

export interface GeneralStoryblok {
  tiktokurl?: string
  youtubeUrl?: string
  linkedInUrl?: string
  instagramUrl?: string
  logo: AssetStoryblok
  favicon16x16?: AssetStoryblok
  favicon32x32?: AssetStoryblok
  appleTouchIcon?: AssetStoryblok
  androidChrome192x192?: AssetStoryblok
  androidChrome512x512?: AssetStoryblok
  hubspotFormId: string
  metaDataName?: string
  metaDataShortName?: string
  metaDataDescription?: string
  opengraphImage?: AssetStoryblok
  name?: string
  street?: string
  postalCode?: string
  city?: string
  phoneNumber?: string
  addressUrl?: string
  component: "general"
  _uid: string
  [k: string]: any
}

export interface HomePageStoryblok {
  heroImage?: AssetStoryblok
  heroTitle?: string
  heroSubtitle?: string
  heroPrimaryCta?: string
  heroSecondaryCta?: string
  courseSectionTitle?: string
  courseSectionSubtitle?: string
  metaTitle?: string
  metaDescription?: string
  metaImage?: AssetStoryblok
  heroTertiaryCta?: string
  heroTertiaryCtaDate?: string
  component: "home page"
  _uid: string
  [k: string]: any
}

export interface NotFoundStoryblok {
  heading?: string
  subtitle?: string
  text?: string
  button?: string
  component: "not found"
  _uid: string
  [k: string]: any
}

export interface PageStoryblok {
  content?: (
    | AboutPageStoryblok
    | ContactPageStoryblok
    | CourseStoryblok
    | CoursePageStoryblok
    | DataProtectionGuidelinesStoryblok
    | FaqStoryblok
    | GeneralStoryblok
    | HomePageStoryblok
    | NotFoundStoryblok
    | PageStoryblok
  )[]
  component: "page"
  _uid: string
  [k: string]: any
}
