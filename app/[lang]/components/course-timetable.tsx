import { CourseStoryblok } from "@/types"
import { RichText } from "@/app/components/rich-text"

export const CourseTimetable = ({
  timetable,
}: {
  timetable: CourseStoryblok["timetable"]
}) => {
  return (
    <div>
      <RichText
        document={timetable}
        classNameOverrides={{
          h6: "text-sm font-regular text-secondary",
        }}
      />
    </div>
  )
}
