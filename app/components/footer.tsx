import { ReactElement } from "react"

import { Container } from "@/app/components/structure"
import { Paragraph } from "@/app/components/typography"
import { SocialMediaLinks } from "@/app/components/socials"
import {
  AddressDetails,
  PhoneNumber,
} from "../[lang]/components/course-contact-details"

const UnitedPopRightsReserved = () => {
  return (
    <Paragraph className="text-sm" variant="secondary">
      © {new Date().getFullYear()} United Pop. All rights reserved.
    </Paragraph>
  )
}

export const Footer = ({
  tiktokUrl,
  instagramUrl,
  linkedInUrl,
  youtubeUrl,
  address,
  phoneNumber,
}: {
  tiktokUrl?: string
  instagramUrl?: string
  linkedInUrl?: string
  youtubeUrl?: string
  phoneNumber?: string
  address: {
    name?: string
    street?: string
    postalCode?: string
    city?: string
    addressUrl?: string
  }
}): ReactElement => {
  return (
    <footer className="bg-black pb-12 md:pb-0 border-t border-slate border-opacity-50">
      <Container className="md:py-8 py-12">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
          <div className="flex flex-col gap-2">
            <AddressDetails
              variant="secondary"
              address={address}
              className={"text-center md:text-start"}
            />
            <PhoneNumber variant="secondary" phoneNumber={phoneNumber} />
          </div>
          <div className="flex justify-center md:justify-end flex-col gap-4 order-first md:order-none">
            <SocialMediaLinks
              tiktokUrl={tiktokUrl}
              instagramUrl={instagramUrl}
              linkedInUrl={linkedInUrl}
              youtubeUrl={youtubeUrl}
            />
          </div>
          <UnitedPopRightsReserved />
        </div>
      </Container>
    </footer>
  )
}
