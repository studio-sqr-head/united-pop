import { ReactElement } from "react"

import { Container } from "@/app/components/structure"
import { Paragraph } from "@/app/components/typography"
import { SocialMediaLinks } from "@/app/components/socials"

const UnitedPopRightsReserved = () => {
  return (
    <Paragraph className="text-sm">
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
    <footer className="bg-black border-t-2 border-gray-800">
      <Container className="py-8">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center md:items-end">
          <SocialMediaLinks
            facebookUrl={facebookUrl}
            instagramUrl={instagramUrl}
            linkedInUrl={linkedInUrl}
            youtubeUrl={youtubeUrl}
          />
          <UnitedPopRightsReserved />
        </div>
      </Container>
    </footer>
  )
}
