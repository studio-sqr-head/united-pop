"use client"

import { ArrowDownTrayIcon } from "@heroicons/react/20/solid"

import { Button } from "@/app/components/button"
import { MobileNavButton } from "@/app/components/bottom-navigation"

const useDownloadBrochure = ({
  downloadBrochureUrl = "https://brochure.united-pop.com/#page=2",
}: {
  downloadBrochureUrl?: string
}) => {
  const downloadBrochure = () => {
    window.open(downloadBrochureUrl, "_blank")
  }
  return downloadBrochure
}

export const DownloadBrochureButton = ({
  text = "Download Brochure",
  downloadBrochureUrl,
}: {
  text?: string
  downloadBrochureUrl?: string
}) => {
  const downloadBrochure = useDownloadBrochure({ downloadBrochureUrl })
  return (
    <Button variant="secondary" size="medium" onClick={downloadBrochure}>
      {text}
    </Button>
  )
}

export const DownloadBrochureMobileButton = ({
  text = "Brochure",
  downloadBrochureUrl,
}: {
  text?: string
  downloadBrochureUrl?: string
}) => {
  const downloadBrochure = useDownloadBrochure({ downloadBrochureUrl })
  return (
    <MobileNavButton onClick={downloadBrochure}>
      <ArrowDownTrayIcon className="h-6 w-6 stroke-current stroke-1 text-primary" />
      <span>{text}</span>
    </MobileNavButton>
  )
}
