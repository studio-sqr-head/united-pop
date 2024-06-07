import { RichText } from "@/app/components/rich-text"
import { ISbRichtext } from "@storyblok/react"

export const CourseFees = ({ courseFees }: { courseFees?: ISbRichtext }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <RichText document={courseFees} />
      </div>
    </div>
  )
}
