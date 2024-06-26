import { Container, HeroSection } from "@/app/components/structure"
import { H3 } from "@/app/components/typography"
import { getDataProtectionGuidelines } from "@/api/page"
import { RichText } from "@/app/components/rich-text"

export default async function DataProtectionGuidelines({
  params,
}: {
  params: { lang: "en" | "nl" }
}) {
  const { dataProtectionGuidelinesPageContent } =
    await getDataProtectionGuidelines({ lang: params.lang })

  const { heroImage, title, body } = dataProtectionGuidelinesPageContent.content
  return (
    <div>
      <HeroSection
        height={"banner"}
        src={heroImage?.filename}
        alt={heroImage?.alt ?? "Hero Image"}
      />

      <div className="bg-slate">
        <Container className="py-16 max-w-3xl">
          <H3 className="mb-6">{title}</H3>
          <RichText
            document={body}
            classNameOverrides={{ p: "text-secondary" }}
          />
        </Container>
      </div>
    </div>
  )
}
