import { Accordion } from "@/app/components/accordion"
import { FAQ_ITEMS } from "@/constants"

export const CourseFaq = () => {
  return (
    <div className="flex flex-col gap-4">
      {FAQ_ITEMS.map((item, index) => (
        <Accordion key={index} {...item} />
      ))}
    </div>
  )
}
