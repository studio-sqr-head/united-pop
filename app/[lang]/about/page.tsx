import { Container, Divider, HeroSection } from "@/app/components/structure";
import { H2, H3, H4, Paragraph } from "@/app/components/typography";
import { Accordion } from "@/app/components/accordion";
import { FAQ_ITEMS } from "@/constants";

const data = {
  hero: {
    alt: "Hero Image",
    src: "/hero.jpeg",
  },

  header: "About us",
  paragraph:
    "United Pop is an academy for music and media. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};

export default function About() {
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
        <Container className="py-8 max-w-3xl">
          <div className="mb-4 w-full flex flex-col gap-2">
            <H2>{header}</H2>
            <Paragraph variant="secondary">{paragraph}</Paragraph>
          </div>

          <div className="mt-8 w-full">
            <div className="mb-4 w-full flex flex-col gap-2">
              <H4>FAQ</H4>
              <Paragraph variant="secondary">
                Frequently asked questions about United Pop.
              </Paragraph>
            </div>

            <div className="flex flex-col gap-4 w-full">
              {FAQ_ITEMS.map((item) => (
                <Accordion
                  key={item?.title}
                  title={item?.title}
                  description={item?.description}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
