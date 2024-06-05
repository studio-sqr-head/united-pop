import { Paragraph } from "@/app/components/typography"

export const ContactDetails = ({ courseName }: { courseName?: string }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <Paragraph>
          If you specific questions about the {courseName} program, feel free to
          contact us. We are happy to help!
        </Paragraph>
      </div>

      <div className="flex flex-col gap-2">
        <Paragraph className="text-sm" variant="secondary">
          Address
        </Paragraph>
        <AddressDetails />
      </div>

      <div className="flex flex-col gap-2">
        <Paragraph className="text-sm" variant="secondary">
          Phone
        </Paragraph>
        <a href="tel:+31207606780" className="hover:underline">
          <Paragraph>+31 20 760 6780</Paragraph>
        </a>
      </div>

      <div className="flex flex-col gap-2">
        <Paragraph className="text-sm" variant="secondary">
          Email
        </Paragraph>
        <Paragraph className="hover:underline">
          <a href="mailto:amsterdam@united-pop.nl">amsterdam@united-pop.nl</a>
        </Paragraph>
      </div>
    </div>
  )
}

export const AddressDetails = () => {
  return (
    <address className="flex gap-2 flex-col font-normal hover:underline">
      <a
        href="https://www.google.com/maps/place/Q-Factory,+Atlantisplein+1,+Amsterdam"
        target="_blank"
        rel="noreferrer"
      >
        <Paragraph>United POP B.V.</Paragraph>
        <Paragraph>Q-Factory, Atlantisplein 1</Paragraph>
        <Paragraph>1093 NE Amsterdam</Paragraph>
      </a>
    </address>
  )
}
