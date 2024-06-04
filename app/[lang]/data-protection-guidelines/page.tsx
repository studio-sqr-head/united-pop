import { Container, HeroSection } from "@/app/components/structure";
import { H3, Paragraph } from "@/app/components/typography";

const data = {
  hero: {
    alt: "Hero Image",
    src: "/hero.jpeg",
  },

  header: "Data Protection Guidelines",
  paragraph:
    "United Pop is an academy for music and media. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};

export default function DataProtectionGuidelines() {
  const { hero, header, paragraph } = data;
  return (
    <div>
      <HeroSection
        height={"banner"}
        src={hero.src}
        alt={hero.alt}
        imageClassName="filter brightness-75"
      />

      <div className="bg-slate">
        <Container className="py-16 max-w-3xl">
          <H3>{header}</H3>
          <Paragraph variant="secondary">{paragraph}</Paragraph>
        </Container>
      </div>
    </div>
  );
}
