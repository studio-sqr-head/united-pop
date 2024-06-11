"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

import { Container } from "@/app/components/structure"
import { Tab, TabGroup, TabList, TabPanel } from "@/app/components/tabs"
import { H2, Paragraph } from "@/app/components/typography"
import { ContactDetails } from "@/app/[lang]/components/course-contact-details"
import { CourseFaq } from "@/app/[lang]/components/course-faq"
import { CourseFees } from "@/app/[lang]/components/course-fees"
import { CourseOverview } from "@/app/[lang]/components/course-overview"
import { CourseTimetable } from "@/app/[lang]/components/course-timetable"
import { CourseHeader } from "@/app/[lang]/components/course-header"
import { TypeEnum } from "@/constants"
import { RichtextStoryblok, CoursePageStoryblok } from "@/types"

interface CourseTabPanelProps {
  title: string
  description: string
  type: string
  overview?: RichtextStoryblok
  timetable?: RichtextStoryblok
  allFaqs: any
  feesTable: any
  feesNotes: any
  fulltime: any
  parttime: any
  params: any
  primaryButtonText?: string
  downloadBrochureButtonText?: string
  tabs: CoursePageStoryblok["tabs"]
  parttimeDuration?: string
  fulltimeDuration?: string
}

export const CourseTabPanel = ({
  title,
  description,
  type,
  overview,
  timetable,
  allFaqs,
  feesTable,
  feesNotes,
  fulltime,
  parttime,
  params,
  primaryButtonText,
  downloadBrochureButtonText,
  tabs,
  parttimeDuration,
  fulltimeDuration,
}: CourseTabPanelProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const tabParam = searchParams.get("tab") ?? tabs?.[0]?.toLowerCase()
  const initialTabIndex =
    tabs?.findIndex((tab) => tab.toLowerCase() === tabParam?.toLowerCase()) ?? 0
  const [tabIndex, setTabIndex] = useState(initialTabIndex)

  const handleRouteChange = (tabIndex: number) => {
    if (!tabs) return
    if (tabIndex < 0 || tabIndex >= tabs?.length) return

    setTabIndex(tabIndex)
    // ensure tab is scrolled into view

    const tab = tabs?.[tabIndex].toLowerCase()
    router.push(`?tab=${tab}`, { scroll: false })
  }

  useEffect(() => {
    if (tabParam !== tabs?.[tabIndex]?.toLowerCase()) {
      setTabIndex(
        tabs?.findIndex(
          (tab) => tab.toLowerCase() === tabParam?.toLowerCase()
        ) ?? 0
      )
    }
  }, [tabParam, tabs, tabIndex])

  useEffect(
    function tabScrollIntoView() {
      const tabId = tabs?.[tabIndex]
      if (!tabId) return
      const tab = document.getElementById(tabId)
      if (tab) {
        tab.scrollIntoView({ behavior: "smooth", block: "nearest" })
      }
    },
    [tabIndex, tabs]
  )

  return (
    <TabGroup onChange={handleRouteChange} selectedIndex={tabIndex}>
      <div className="full-w">
        <Container as="section" className="pt-4 md:pt-8">
          <CourseHeader
            fulltime={fulltime}
            parttime={parttime}
            type={type as TypeEnum}
            params={params}
            primaryButtonText={primaryButtonText}
            downloadBrochureButtonText={downloadBrochureButtonText}
          />
          <div className="flex justify-between items-start gap-4 mb-8 md:flex-row flex-col">
            <div className="flex flex-col gap-4">
              <H2>{title}</H2>
              <Paragraph variant="secondary">{description}</Paragraph>
            </div>
          </div>

          <TabList className="relative">
            {tabs?.map((name, index) => (
              <Tab
                id={name}
                name={name
                  .toLowerCase()
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
                key={index}
              />
            ))}
          </TabList>
        </Container>
      </div>

      <div className="bg-slate text-white full-w">
        <Container as="section" className="md:py-12 py-8 min-h-96">
          {tabs?.map((tab, index) => (
            <TabPanel key={index}>
              {tab === "OVERVIEW" && (
                <CourseOverview
                  courseOverview={overview}
                  type={type as TypeEnum}
                  fulltimeDuration={fulltimeDuration}
                  parttimeDuration={parttimeDuration}
                  fulltime={fulltime}
                  parttime={parttime}
                />
              )}
              {tab === "TIMETABLE" && <CourseTimetable timetable={timetable} />}
              {tab === "FAQS" && <CourseFaq faqs={allFaqs} />}
              {tab === "CONTACT" && <ContactDetails courseName={title} />}
              {tab === "FEES" && (
                <CourseFees feesTable={feesTable} feesNotes={feesNotes} />
              )}
            </TabPanel>
          ))}
        </Container>
      </div>
    </TabGroup>
  )
}
