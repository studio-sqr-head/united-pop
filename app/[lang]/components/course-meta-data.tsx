import { AddressDetails } from "@/app/[lang]/components/course-contact-details"
import { CourseStartDates } from "@/app/[lang]/components/course-start-date-chip"
import { RichText } from "@/app/components/rich-text"
import { Paragraph } from "@/app/components/typography"
import { START_DATES, TypeEnum } from "@/constants"
import { RichtextStoryblok } from "@/types"

// TODO: add to storyblok
export const CourseMetaData = ({
  type,
  fulltime,
  parttime,
  fulltimeDuration,
  parttimeDuration,
  address,
  headerLocation,
  headerPartTimeDuration,
  headerFullTimeDuration,
  headerStartDates,
  headerCollaboration,
  collaborationText,
}: {
  type?: string
  fulltime?: boolean
  parttime?: boolean
  fulltimeDuration?: string
  parttimeDuration?: string
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
}) => {
  return (
    <div className="p-8 bg-slate rounded h-fit border-2 border-gray-800">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Paragraph variant="secondary" className="text-sm">
            {headerLocation}
          </Paragraph>
          <AddressDetails variant="primary" address={address} />
        </div>

        {parttime && parttimeDuration != null && (
          <div className="flex flex-col gap-2">
            <Paragraph variant="secondary" className="text-sm">
              {headerPartTimeDuration}
            </Paragraph>
            <Paragraph>{parttimeDuration}</Paragraph>
          </div>
        )}

        {fulltime && fulltimeDuration != null && (
          <div className="flex flex-col gap-2">
            <Paragraph variant="secondary" className="text-sm">
              {headerFullTimeDuration}
            </Paragraph>
            <Paragraph>{fulltimeDuration}</Paragraph>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <Paragraph variant="secondary" className="text-sm">
            {headerStartDates}
          </Paragraph>
          <CourseStartDates dates={START_DATES} />
        </div>

        {type === TypeEnum.BACHELOR && (
          <div className="flex flex-col gap-2">
            <Paragraph variant="secondary" className="text-sm">
              {headerCollaboration}
            </Paragraph>
            <RichText document={collaborationText} />
          </div>
        )}
      </div>
    </div>
  )
}
