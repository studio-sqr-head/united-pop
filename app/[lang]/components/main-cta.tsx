import { EnrollButton } from "@/app/[lang]/components/enroll-button"
import { DownloadBrochureButton } from "@/app/[lang]/components/download-brochure-button"

export const MainCta = ({
  className,
  params,
  primaryButtonText,
  downloadBrochureButtonText,
  downloadBrochureUrl,
}: {
  className: string
  params: {
    lang: "nl" | "en"
  }
  primaryButtonText?: string
  downloadBrochureButtonText?: string
  downloadBrochureUrl?: string
}) => {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      <DownloadBrochureButton
        text={downloadBrochureButtonText}
        downloadBrochureUrl={downloadBrochureUrl}
      />
      <EnrollButton params={params} text={primaryButtonText} />
    </div>
  )
}
