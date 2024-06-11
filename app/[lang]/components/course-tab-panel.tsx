"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

import { Container } from "@/app/components/structure"
import { Tab, TabGroup, TabList, TabPanel } from "@/app/components/tabs"
import { H2, Paragraph } from "@/app/components/typography"
import { CourseFaq } from "@/app/[lang]/components/course-faq"
import { CourseFees } from "@/app/[lang]/components/course-fees"
import { CourseOverview } from "@/app/[lang]/components/course-overview"
import { CourseTimetable } from "@/app/[lang]/components/course-timetable"
import { CourseHeader } from "@/app/[lang]/components/course-header"
import { TypeEnum } from "@/constants"
import { RichtextStoryblok, CoursePageStoryblok } from "@/types"
import { CourseMetaData } from "@/app/[lang]/components/course-meta-data"

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
  address: {
    name?: string
    street?: string
    postalCode?: string
    city?: string
  }
  headerLocation?: string
  headerPartTimeDuration?: string
  headerFullTimeDuration?: string
  headerStartDates?: string
  headerCollaboration?: string
  collaborationText?: RichtextStoryblok
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
  address,
  headerLocation,
  headerPartTimeDuration,
  headerFullTimeDuration,
  headerStartDates,
  headerCollaboration,
  collaborationText,
}: CourseTabPanelProps) => {
  const searchParams = useSearchParams()
  const tabParam = searchParams.get("tab") ?? tabs?.[0]?.toLowerCase()
  const initialTabIndex =
    tabs?.findIndex((tab) => tab.toLowerCase() === tabParam?.toLowerCase()) ?? 0
  const [tabIndex, setTabIndex] = useState(initialTabIndex)

  const handleRouteChange = (tabIndex: number) => {
    if (!tabs || !window || tabIndex < 0 || tabIndex >= tabs?.length) return

    setTabIndex(tabIndex)
    const tab = tabs?.[tabIndex].toLowerCase()
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}?tab=${tab}`
    )
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
                <div className="grid md:grid-cols-2 gap-8 grid-cols-1">
                  <CourseOverview courseOverview={overview} />

                  <CourseMetaData
                    fulltime={fulltime}
                    parttime={parttime}
                    type={type}
                    fulltimeDuration={fulltimeDuration}
                    parttimeDuration={parttimeDuration}
                    address={address}
                    headerLocation={headerLocation}
                    headerPartTimeDuration={headerPartTimeDuration}
                    headerFullTimeDuration={headerFullTimeDuration}
                    headerStartDates={headerStartDates}
                    headerCollaboration={headerCollaboration}
                    collaborationText={collaborationText}
                  />
                </div>
              )}
              {tab === "TIMETABLE" && <CourseTimetable timetable={timetable} />}
              {tab === "FAQS" && <CourseFaq faqs={allFaqs} />}
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
