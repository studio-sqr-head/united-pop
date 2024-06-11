import { ReactElement } from "react"

import { Container } from "@/app/components/structure"
import { Paragraph } from "@/app/components/typography"
import { SocialMediaLinks } from "@/app/components/socials"
import { AddressDetails } from "../[lang]/components/course-contact-details"

const UnitedPopRightsReserved = () => {
  return (
    <Paragraph className="text-sm" variant="secondary">
      © {new Date().getFullYear()} United Pop. All rights reserved.
    </Paragraph>
  )
}

export const Footer = ({
  facebookUrl,
  instagramUrl,
  linkedInUrl,
  youtubeUrl,
}: {
  facebookUrl?: string
  instagramUrl?: string
  linkedInUrl?: string
  youtubeUrl?: string
}): ReactElement => {
  return (
    <footer className="bg-black">
      <Container className="py-8">
        <div className="flex flex-col md:flex-row gap-8 justify-between md:items-center">
          <AddressDetails />
          <div className="flex justify-center md:justify-end flex-col gap-4">
            <SocialMediaLinks
              facebookUrl={facebookUrl}
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
