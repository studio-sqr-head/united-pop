"use client";

import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

import { Button } from "@/app/components/button";
import { MobileNavButton } from "@/app/components/bottom-navigation";

const useDownloadBrochure = () => {
  const downloadBrochure = () => {
    window.open("https://brochure.united-pop.com/#page=2");
  };
  return downloadBrochure;
};

export const DownloadBrochureButton = () => {
  const downloadBrochure = useDownloadBrochure();
  return (
    <Button variant="secondary" size="medium" onClick={downloadBrochure}>
      Download Brochure
    </Button>
  );
};

export const DownloadBrochureMobileButton = () => {
  const downloadBrochure = useDownloadBrochure();
  return (
    <MobileNavButton onClick={downloadBrochure}>
      <ArrowDownTrayIcon className="h-6 w-6 stroke-current stroke-1 text-secondary" />
      <span>Brochure</span>
    </MobileNavButton>
  );
};
