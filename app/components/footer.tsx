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

export const Footer = (): ReactElement => {
  return (
    <footer className="bg-black">
      <Container className="py-8">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center md:items-end">
          <SocialMediaLinks />
          <UnitedPopRightsReserved />
        </div>
      </Container>
    </footer>
  )
}
