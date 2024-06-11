import { RichText } from "@/app/components/rich-text"
import { RichtextStoryblok } from "@/types"

export const CourseOverview = ({
  courseOverview,
}: {
  courseOverview?: RichtextStoryblok
}) => {
  return (
    <RichText
      document={courseOverview}
      classNameOverrides={{
        p: "mb-4 text-primary",
        strong: "font-bold text-primary",
      }}
    />
  )
}
