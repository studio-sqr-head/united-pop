import { Container, HeroSection } from "@/app/components/structure"
import { BottomNavigation } from "@/app/components/bottom-navigation"
import { BreadCrumbs } from "@/app/components/breadcrumbs"
import { MobileEnrollButton } from "@/app/[lang]/components/enroll-button"
import { DownloadBrochureMobileButton } from "@/app/[lang]/components/download-brochure-button"
import { getCourseBySlug, getCourseFees } from "@/api/course"
import { getAllFaqs } from "@/api/faq"
import { getGeneralContent } from "@/api/general"
import { CourseTabPanel } from "@/app/[lang]/components/course-tab-panel"

export default async function CoursePage({
  params,
}: {
  params: { lang: "en" | "nl"; slug: string }
}) {
  const { generalContent } = await getGeneralContent()
  const { courseFees } = await getCourseFees({ lang: params.lang })
  const { allFaqs } = await getAllFaqs({ lang: params.lang })
  const { course } = await getCourseBySlug({
    slug: params?.slug,
    lang: params.lang,
  })
  const {
    title,
    description,
    image,
    type,
    fulltime,
    parttime,
    overview,
    timetable,
    partimeDuration,
    fulltimeDuration,
    downloadBrochureUrl,
    downloadBrochureButtonText,
    primaryButtonText,
  } = course?.content
  const {
    courseFeesNotes,
    courseFeesTable,
    tabs,
    headerStartDates,
    collaborationText,
    headerCollaboration,
    headerFullTimeDuration,
    headerLocation,
    headerPartTimeDuration,
  } = courseFees?.content
  const { name, street, postalCode, city } = generalContent?.content
  return (
    <div>
      {image != null && (
        <HeroSection
          height={"banner"}
          src={image?.filename}
          alt={image?.alt ?? title ?? "Course Image"}
        />
      )}
      <div className="bg-slate text-white py-4 full-w">
        <Container as="section">
          <BreadCrumbs />
        </Container>
      </div>

      <CourseTabPanel
        tabs={tabs}
        allFaqs={allFaqs}
        description={description}
        downloadBrochureButtonText={downloadBrochureButtonText}
        feesNotes={courseFeesNotes}
        feesTable={courseFeesTable}
        fulltime={fulltime}
        overview={overview}
        params={params}
        parttime={parttime}
        primaryButtonText={primaryButtonText}
        timetable={timetable}
        title={title}
        type={type}
        fulltimeDuration={fulltimeDuration}
        parttimeDuration={partimeDuration}
        address={{
          name,
          street,
          postalCode,
          city,
        }}
        headerLocation={headerLocation}
        headerPartTimeDuration={headerPartTimeDuration}
        headerFullTimeDuration={headerFullTimeDuration}
        headerStartDates={headerStartDates}
        headerCollaboration={headerCollaboration}
        collaborationText={collaborationText}
      />

      <BottomNavigation>
        <DownloadBrochureMobileButton
          text={downloadBrochureButtonText}
          downloadBrochureUrl={downloadBrochureUrl}
        />
        <MobileEnrollButton params={params} text={primaryButtonText} />
      </BottomNavigation>
    </div>
  )
}
