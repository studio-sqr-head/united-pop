import { HubSpotForm } from "@/app/components/hubspot-form"
import { Container, HeroSection } from "@/app/components/structure"
import { H3, Paragraph } from "@/app/components/typography"
import { getContact } from "@/api/page"

export default async function Contact() {
  const { contactPageContent } = await getContact({ lang: "en" })
  const { hero, heading, subheading } = contactPageContent.content
  return (
    <div>
      <HeroSection
        height={"banner"}
        src={hero?.filename}
        alt={hero?.alt ?? "Contact image"}
      />

      <div className="bg-slate">
        <Container className="py-16 max-w-3xl">
          <H3>{heading}</H3>
          <Paragraph variant="secondary">{subheading}</Paragraph>

          <div className="mt-8">
            <HubSpotForm lang="en" target="hubspotFormPage" />
          </div>
        </Container>
      </div>
    </div>
  )
}
