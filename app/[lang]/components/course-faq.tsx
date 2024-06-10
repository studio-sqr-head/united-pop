import { ISbStoryData } from "@storyblok/react"
import { FaqStoryblok } from "@/types"
import { Accordion } from "@/app/components/accordion"
import { H4, Paragraph } from "@/app/components/typography"

export const CourseFaq = ({
  faqs,
}: {
  faqs?: ISbStoryData<FaqStoryblok>[]
}) => {
  return (
    <div>
      <div className="flex flex-col gap-4 mb-8">
        <H4>Frequently Asked Questions</H4>
        <Paragraph variant="secondary">
          Here are some of the most frequently asked questions about this
          course. If you have any other questions, please feel free to reach out
          to us.
        </Paragraph>
      </div>

      <div className="flex flex-col gap-2">
        {faqs?.map(({ content }, index) => (
          <Accordion
            key={index}
            description={content?.description}
            title={content?.title}
          />
        ))}
      </div>
    </div>
  )
}
