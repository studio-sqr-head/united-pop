import { HubSpotForm } from "@/app/components/hubspot-form"
import { Container, HeroSection } from "@/app/components/structure"
import { H3, Paragraph } from "@/app/components/typography"

const data = {
  hero: {
    alt: "Hero Image",
    src: "/hero.jpeg",
  },

  header: "Get in touch",
  paragraph: "Fill out the form below to get in touch with us.",
}
export default function Contact() {
  const { hero, header, paragraph } = data
  return (
    <div>
      <HeroSection height={"banner"} src={hero.src} alt={hero.alt} />

      <div className="bg-slate">
        <Container className="py-16 max-w-3xl">
          <H3>{header}</H3>
          <Paragraph variant="secondary">{paragraph}</Paragraph>

          <div className="mt-8">
            <HubSpotForm lang="en" />
          </div>
        </Container>
      </div>
    </div>
  )
}
