import { RichText } from "@/app/components/rich-text"

export const CourseFees = ({ courseFees }: { courseFees?: string }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <RichText document={courseFees} />
      </div>
    </div>
  )
}
