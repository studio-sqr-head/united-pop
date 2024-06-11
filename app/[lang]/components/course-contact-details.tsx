import { Paragraph } from "@/app/components/typography"

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
  }
}) => {
  return (
    <address
      className={`flex gap-2 flex-col font-normal hover:opacity-80 not-italic ${className}`}
    >
      <a
        href="https://www.google.com/maps/place/Q-Factory,+Atlantisplein+1,+Amsterdam"
        target="_blank"
        rel="noreferrer"
      >
        <Paragraph variant={variant} className="font-semibold">
          {address?.name}
        </Paragraph>
        <Paragraph variant={variant}>{address?.street}</Paragraph>
        <Paragraph variant={variant}>
          {address?.postalCode} {address?.city}
        </Paragraph>
      </a>
    </address>
  )
}
