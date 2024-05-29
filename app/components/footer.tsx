import { IconButton } from "@/app/components/button";
import { Container } from "@/app/components/layout";
import { Logo } from "@/app/components/logo";
import {
  FacebookSvg,
  InstagramSvg,
  LinkedInSvg,
  YoutubeSvg,
} from "@/app/components/socials";

const SOCIAL_MEDIA = [
  {
    id: "facebook",
    href: "https://www.facebook.com",
    title: "Facebook",
    Svg: FacebookSvg,
  },
  {
    id: "instagram",
    href: "https://www.instagram.com",
    title: "Instagram",
    Svg: InstagramSvg,
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com",
    title: "LinkedIn",
    Svg: LinkedInSvg,
  },
  {
    id: "youtube",
    href: "https://www.youtube.com",
    title: "YouTube",
    Svg: YoutubeSvg,
  },
];

export const Footer = () => {
  return (
    <footer className="bg-black">
      <Container className="py-8">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-end">
          <Logo />
          <p className="text-white text-sm">
            © {new Date().getFullYear()} United Pop.
          </p>
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
                size="small"
              />
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};
