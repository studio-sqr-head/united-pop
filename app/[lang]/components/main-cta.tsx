import { EnrollButton } from "@/app/[lang]/components/enroll-button"
import { DownloadBrochureButton } from "@/app/[lang]/components/download-brochure-button"

export const MainCta = ({
  className,
  params,
}: {
  className: string
  params: {
    lang: "nl" | "en"
  }
}) => {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      <DownloadBrochureButton />
      <EnrollButton params={params} />
    </div>
  )
}
