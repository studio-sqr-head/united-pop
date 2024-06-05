"use client";

import { useRouter } from "next/navigation";
import { MobileNavButton } from "@/app/components/bottom-navigation";

import { Button } from "@/app/components/button";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export const EnrollButton = ({
  params,
}: {
  params: {
    lang: "en" | "nl";
  };
}) => {
  return (
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
  );
};

export const EnrollButtonMobile = ({
  params,
}: {
  params: {
    lang: "en" | "nl";
  };
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${params.lang}/contact`);
  };

  return (
    <MobileNavButton onClick={handleClick}>
      <ArrowRightIcon className="h-6 w-6 stroke-current stroke-1 text-secondary" />
      Enroll
    </MobileNavButton>
  );
};
