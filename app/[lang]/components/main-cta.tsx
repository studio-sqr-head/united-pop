import { Button } from "@/app/components/button";
import { DownloadBrochureButton } from "@/app/[lang]/components/download-brochure-button";

export const MainCta = ({
  className,
  params,
}: {
  className: string;
  params: {
    lang: "nl" | "en";
  };
}) => {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      <DownloadBrochureButton />
      <Button
        variant="primary"
        size="medium"
        as="a"
        href={{
          pathname: "/contact",
          query: { lang: params.lang },
        }}
      >
        Enroll
      </Button>
    </div>
  );
};
