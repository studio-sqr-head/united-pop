"use client";

import { Button } from "@/app/components/button";

export const DownloadBrochureButton = () => {
  const downloadBrochure = () => {
    window.open("https://brochure.united-pop.com/#page=2");
  };
  return (
    <Button variant="secondary" size="medium" onClick={downloadBrochure}>
      Download Brochure
    </Button>
  );
};
