// This file was generated by the storyblok CLI.
// DO NOT MODIFY THIS FILE BY HAND.
import type { ISbStoryData } from "storyblok"
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
  component: "about page"
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
  timetable?: TableStoryblok
  fees: RichtextStoryblok
  component: "course"
  _uid: string
  [k: string]: any
}

export interface CoursePageStoryblok {
  tabs?: ("" | "OVERVIEW" | "TIMETABLE" | "FEES" | "FAQS" | "CONTACT")[]
  component: "course page"
  _uid: string
  [k: string]: any
}

export interface DataProtectionGuidelinesStoryblok {
  title?: string
  body?: RichtextStoryblok
  heroImage?: AssetStoryblok
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

export interface HomePageStoryblok {
  heroImage?: AssetStoryblok
  heroTitle?: string
  heroSubtitle?: string
  heroPrimaryCta?: string
  heroSecondaryCta?: string
  courseSectionTitle?: string
  courseSectionSubtitle?: string
  component: "home page"
  _uid: string
  [k: string]: any
}

export interface NavbarStoryblok {
  primaryButtonText?: string
  component: "navbar"
  _uid: string
  [k: string]: any
}

export interface PageStoryblok {
  content?: (
    | AboutPageStoryblok
    | CourseStoryblok
    | CoursePageStoryblok
    | DataProtectionGuidelinesStoryblok
    | FaqStoryblok
    | HomePageStoryblok
    | NavbarStoryblok
    | PageStoryblok
  )[]
  component: "page"
  _uid: string
  [k: string]: any
}
