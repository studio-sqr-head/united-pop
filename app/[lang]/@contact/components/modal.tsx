"use client"

import { useCallback } from "react"
import { useRouter } from "next/navigation"
import { XMarkIcon } from "@heroicons/react/24/solid"
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Description,
} from "@headlessui/react"

import { IconButton } from "@/app/components/button"
import { HubSpotForm } from "@/app/components/hubspot-form"
import { H3, Paragraph } from "@/app/components/typography"

export const ContactModal = ({
  heading,
  subheading,
  lang,
}: {
  heading?: string
  subheading?: string
  lang: "en" | "nl"
}) => {
  const router = useRouter()

  const onDismiss = useCallback(() => {
    router.back()
  }, [router])

  return (
    <Dialog open onClose={onDismiss} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center md:p-4 filter backdrop-blur-lg">
        <DialogPanel className="overflow-y-scroll relative h-full max-h-[90vh] md:h-auto md:max-w-xl w-full bg-slate md:rounded-lg border border-gray-800 border-opacity-50">
          <div className="flex justify-between items-center p-6 md:px-12 md:py-6 border-b border-gray-800 border-opacity-50">
            <DialogTitle as="div">
              <H3>{heading}</H3>
            </DialogTitle>
            <IconButton
              onClick={onDismiss}
              icon={<XMarkIcon className="h-6 w-6 stroke-current stroke-2" />}
              iconDescription="Close modal"
              variant="secondary"
            />
          </div>
          <div className="p-6 md:px-12 md:py-6">
            <Description as="div">
              <Paragraph variant="secondary">{subheading}</Paragraph>
            </Description>
            <div className="mt-4">
              <HubSpotForm lang={lang ?? "en"} />
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
