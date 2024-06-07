import { AddressDetails } from "@/app/[lang]/components/course-contact-details"
import { Paragraph } from "@/app/components/typography"
import { START_DATES, TypeEnum, TYPES } from "@/constants"
import { CourseStartDates } from "@/app/[lang]/components/course-start-date-chip"
import { RichText } from "@/app/components/rich-text"

import { RichtextStoryblok } from "@/types"

export const CourseOverview = ({
  courseOverview,
  type,
}: {
  courseOverview?: RichtextStoryblok
  type: TypeEnum
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
        <CourseMetaData type={type} />
      </div>
    </div>
  )
}

const CourseMetaData = ({ type }: { type?: TypeEnum }) => {
  return (
    <div className="p-8 bg-slate rounded flex-1 h-fit border-2 border-gray-800">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Paragraph variant="secondary" className="text-sm">
            Location
          </Paragraph>
          <AddressDetails />
        </div>

        <div className="flex flex-col gap-2">
          <Paragraph variant="secondary" className="text-sm">
            Course Duration
          </Paragraph>
          <Paragraph>
            The {TYPES.find((t) => t.id === type)?.title} programme runs for 3
            years.
          </Paragraph>
        </div>

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
