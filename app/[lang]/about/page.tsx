import { Container, HeroSection } from "@/app/components/structure"
import { H2, H4, Paragraph } from "@/app/components/typography"
import { Accordion } from "@/app/components/accordion"

import { getAbout } from "@/api/page"
import { getAllFaqs } from "@/api/faq"
import { RichText } from "@/app/components/rich-text"

export default async function About({
  params,
}: {
  params: { lang: "en" | "nl" }
}) {
  const { aboutPageContent } = await getAbout({ lang: params.lang })
  const { heroImage, title, body, faqTitle, faqSubtitle } =
    aboutPageContent.content
  const { allFaqs } = await getAllFaqs({ lang: params.lang })

  return (
    <div>
      {heroImage != null && (
        <HeroSection
          height={"banner"}
          src={heroImage?.filename}
          alt={heroImage?.alt ?? "Hero Image"}
        />
      )}

      <div className="bg-slate">
        <Container className="py-8 max-w-3xl">
          <div className="mb-4 w-full flex flex-col gap-4">
            <H2>{title}</H2>
            <RichText
              document={body}
              classNameOverrides={{
                p: "text-secondary",
                b: "text-white",
              }}
            />
          </div>

          <div className="mt-8 w-full">
            <div className="mb-4 w-full flex flex-col gap-2">
              <H4>{faqTitle}</H4>
              <Paragraph variant="secondary">{faqSubtitle}</Paragraph>
            </div>

            <div className="flex flex-col gap-4 w-full">
              {allFaqs.map(({ content, uuid }) => (
                <Accordion
                  key={uuid}
                  title={content?.title}
                  description={content?.description}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
