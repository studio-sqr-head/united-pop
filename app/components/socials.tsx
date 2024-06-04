import { IconButton } from "@/app/components/button";
import { SOCIAL_MEDIA } from "@/constants";

export const SocialMediaLinks = () => {
  return (
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
  );
};
