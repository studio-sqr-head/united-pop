import { ReactElement } from "react";

import { IconButton } from "@/app/components/button";
import { Container } from "@/app/components/structure";
import { Logo } from "@/app/components/logo";
import { Paragraph } from "@/app/components/typography";
import { SOCIAL_MEDIA } from "@/constants";

export const Footer = (): ReactElement => {
  return (
    <footer className="bg-black">
      <Container className="py-8">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center md:items-end">
          <div className="flex gap-2">
            {SOCIAL_MEDIA.map(({ id, title, Svg, href }) => (
              <IconButton
                as="a"
                key={id}
                href={{
                  pathname: href,
                }}
                icon={<Svg />}
                iconDescription={title}
              />
            ))}
          </div>
          <Paragraph className="text-white text-sm">
            © {new Date().getFullYear()} All rights reserved
          </Paragraph>
        </div>
      </Container>
    </footer>
  );
};
