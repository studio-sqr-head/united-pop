import { ISbStoryData } from "@storyblok/react"
import { FaqStoryblok } from "@/types"
import { Accordion } from "@/app/components/accordion"
import { H4 } from "@/app/components/typography"

export const CourseFaq = ({
  faqs,
}: {
  faqs?: ISbStoryData<FaqStoryblok>[]
}) => {
  return (
    <div className="flex flex-col gap-4">
      <H4>Frequently Asked Questions</H4>

      {faqs?.map(({ content }, index) => (
        <Accordion
          key={index}
          description={content?.description}
          title={content?.title}
        />
      ))}
    </div>
  )
}
