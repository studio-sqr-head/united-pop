import { MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid"
import { Paragraph } from "@/app/components/typography"

export const PhoneNumber = ({
  variant,
  phoneNumber = "+31 20 760 6780",
  className,
}: {
  variant?: "primary" | "secondary"
  className?: string
  phoneNumber?: string
}) => {
  return (
    <a
      href={`tel:${phoneNumber}`}
      className={`hover:opacity-80 ${className} flex gap-2 items-center`}
    >
      <PhoneIcon className="w-5 h-5" />
      <Paragraph variant={variant}>{phoneNumber}</Paragraph>
    </a>
  )
}

export const AddressDetails = ({
  variant,
  address,
  className,
}: {
  variant?: "primary" | "secondary"
  className?: string
  address: {
    name?: string
    street?: string
    postalCode?: string
    city?: string
    addressUrl?: string
  }
}) => {
  return (
    <address className={`font-normal hover:opacity-80 not-italic ${className}`}>
      <a
        href={address?.addressUrl ?? "#"}
        target="_blank"
        rel="noreferrer"
        className="text-left flex gap-2"
      >
        <MapPinIcon className="w-5 h-5" />

        <div className="flex flex-col">
          <Paragraph variant={"primary"} className="font-semibold">
            {address?.name}
          </Paragraph>
          <Paragraph variant={variant}>{address?.street}</Paragraph>
          <Paragraph variant={variant}>
            {address?.postalCode} {address?.city}
          </Paragraph>
        </div>
      </a>
    </address>
  )
}
