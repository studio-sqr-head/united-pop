import { AddressDetails } from "@/app/[lang]/components/course-contact-details"
import { Paragraph } from "@/app/components/typography"
import { START_DATES, TypeEnum } from "@/constants"
import { CourseStartDates } from "@/app/[lang]/components/course-start-date-chip"
import { RichText } from "@/app/components/rich-text"
import { RichtextStoryblok } from "@/types"

export const CourseOverview = ({
  courseOverview,
  type,
  fulltime,
  parttime,
  fulltimeDuration,
  parttimeDuration,
}: {
  courseOverview?: RichtextStoryblok
  type: TypeEnum
  fulltime?: boolean
  parttime?: boolean
  fulltimeDuration?: string
  parttimeDuration?: string
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <RichText
        document={courseOverview}
        classNameOverrides={{
          p: "mb-4 text-primary",
          strong: "font-bold text-primary",
        }}
      />
      <div className="md:max-w-sm full-w">
        <CourseMetaData
          fulltime={fulltime}
          parttime={parttime}
          type={type}
          fulltimeDuration={fulltimeDuration}
          parttimeDuration={parttimeDuration}
        />
      </div>
    </div>
  )
}

const CourseMetaData = ({
  type,
  fulltime,
  parttime,
  fulltimeDuration,
  parttimeDuration,
}: {
  type?: TypeEnum
  fulltime?: boolean
  parttime?: boolean
  fulltimeDuration?: string
  parttimeDuration?: string
}) => {
  return (
    <div className="p-8 bg-slate rounded flex-1 h-fit border-2 border-gray-800">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Paragraph variant="secondary" className="text-sm">
            Location
          </Paragraph>
          <AddressDetails />
        </div>

        {parttime && parttimeDuration != null && (
          <div className="flex flex-col gap-2">
            <Paragraph variant="secondary" className="text-sm">
              Part-time Duration
            </Paragraph>
            <Paragraph>{parttimeDuration}</Paragraph>
          </div>
        )}

        {fulltime && fulltimeDuration != null && (
          <div className="flex flex-col gap-2">
            <Paragraph variant="secondary" className="text-sm">
              Full-time Duration
            </Paragraph>
            <Paragraph>{fulltimeDuration}</Paragraph>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <Paragraph variant="secondary" className="text-sm">
            Start Dates
          </Paragraph>
          <CourseStartDates dates={START_DATES} />
        </div>

        {type === TypeEnum.BACHELOR && (
          <div className="flex flex-col gap-2">
            <Paragraph variant="secondary" className="text-sm">
              In collaboration with
            </Paragraph>
            <Paragraph>
              The Bachelor (Hons) programmes delivered by United POP are
              validated by the University of West London and comply with the
              requirements of the UK Quality Assurance Agency for Higher
              Education and the Framework for Qualifications of the European
              Higher Education Area (FQ-EHEA).
            </Paragraph>
          </div>
        )}
      </div>
    </div>
  )
}
