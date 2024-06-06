import { MetaDataChip } from "@/app/components/chip"
import { TYPES, TypeEnum } from "@/constants"
import { MainCta } from "@/app/[lang]/components/main-cta"

export const CourseHeader = ({
  fulltime,
  parttime,
  type,
  params,
  primaryButtonText,
  downloadBrochureButtonText,
}: {
  fulltime?: boolean
  parttime?: boolean
  type?: TypeEnum
  params: { lang: "en" | "nl"; slug: string }
  primaryButtonText?: string
  downloadBrochureButtonText?: string
}) => {
  return (
    <div className="mb-4 flex items-center gap-4 justify-between">
      <div className="flex gap-2 items-center">
        {fulltime && (
          <MetaDataChip variant="default" size="medium">
            Full-time
          </MetaDataChip>
        )}
        {parttime && (
          <MetaDataChip variant="default" size="medium">
            Part-time
          </MetaDataChip>
        )}
        {type && (
          <MetaDataChip variant="secondary" size="medium">
            {TYPES.find((t) => t.id === type)?.title}
          </MetaDataChip>
        )}
      </div>

      <MainCta
        className="hidden md:flex"
        params={params}
        primaryButtonText={primaryButtonText}
        downloadBrochureButtonText={downloadBrochureButtonText}
      />
    </div>
  )
}
