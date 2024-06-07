import { Container, HeroSection } from "@/app/components/structure"
import { BottomNavigation } from "@/app/components/bottom-navigation"
import { BreadCrumbs } from "@/app/components/breadcrumbs"
import { Tab, TabGroup, TabList, TabPanel } from "@/app/components/tabs"
import { H2, Paragraph } from "@/app/components/typography"
import { ContactDetails } from "@/app/[lang]/components/course-contact-details"
import { CourseFaq } from "@/app/[lang]/components/course-faq"
import { CourseFees } from "@/app/[lang]/components/course-fees"
import { CourseOverview } from "@/app/[lang]/components/course-overview"
import { CourseTimetable } from "@/app/[lang]/components/course-timetable"
import { CourseHeader } from "@/app/[lang]/components/course-header"
import { EnrollButtonMobile } from "@/app/[lang]/components/enroll-button"
import { DownloadBrochureMobileButton } from "@/app/[lang]/components/download-brochure-button"
import { CourseStoryblok } from "@/types"
import { TABS, TypeEnum } from "@/constants"
import { getCourseBySlug } from "@/api/course"
import { getAllFaqs } from "@/api/faq"

export default async function CoursePage({
  params,
}: {
  params: { lang: "en" | "nl"; slug: string }
}) {
  const { allFaqs } = await getAllFaqs({ lang: params.lang })
  const { story: course } = await getCourseBySlug({
    slug: params?.slug,
    lang: params.lang,
  })
  const { content } = course
  const {
    title,
    description,
    image,
    type,
    fulltime,
    parttime,
    overview,
    fees,
    timetable,
    downloadBrochureUrl,
    downloadBrochureButtonText,
    primaryButtonText,
  } = content as CourseStoryblok

  return (
    <div>
      {image != null && (
        <HeroSection
          height={"banner"}
          src={image?.filename}
          alt={image?.alt ?? title ?? "Course Image"}
          imageClassName="filter brightness-75"
        />
      )}
      <div className="bg-slate text-white py-4 full-w">
        <Container as="section" className="max-w-6xl">
          <BreadCrumbs />
        </Container>
      </div>

      <TabGroup>
        <div className="full-w text-white pt-4 gradient bg-black">
          <Container as="section" className="max-w-6xl pt-8">
            <CourseHeader
              fulltime={fulltime}
              parttime={parttime}
              type={type as TypeEnum}
              params={params}
              primaryButtonText={primaryButtonText}
              downloadBrochureButtonText={downloadBrochureButtonText}
            />
            <div className="flex justify-between items-start gap-4 mb-12 md:flex-row flex-col">
              <div className="flex flex-col gap-4">
                <H2>{title}</H2>
                <Paragraph variant="secondary">{description}</Paragraph>
              </div>
            </div>

            <TabList>
              {TABS.map((tab, index) => (
                <Tab key={index} name={tab.name} />
              ))}
            </TabList>
          </Container>
        </div>

        <div className="bg-slate text-white full-w">
          <Container as="section" className="max-w-6xl py-8">
            {TABS.map(({ id }, index) => (
              <TabPanel key={index}>
                {id === "overview" && (
                  <CourseOverview
                    courseOverview={overview}
                    type={type as TypeEnum}
                  />
                )}
                {id === "timetable" && (
                  <CourseTimetable timetable={timetable} />
                )}
                {id === "faq" && <CourseFaq faqs={allFaqs} />}
                {id === "contact" && <ContactDetails courseName={title} />}
                {id === "fees" && <CourseFees courseFees={fees} />}
              </TabPanel>
            ))}
          </Container>
        </div>
      </TabGroup>

      <BottomNavigation>
        <DownloadBrochureMobileButton
          text={downloadBrochureButtonText}
          downloadBrochureUrl={downloadBrochureUrl}
        />
        <EnrollButtonMobile params={params} text={primaryButtonText} />
      </BottomNavigation>
    </div>
  )
}
