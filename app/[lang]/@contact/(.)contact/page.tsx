"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Description,
} from "@headlessui/react";

import { IconButton } from "@/app/components/button";
import { HubSpotForm } from "@/app/components/hubspot-form";
import { H3, Paragraph } from "@/app/components/typography";

export default function Modal({ params }: { params: { lang: "en" | "nl" } }) {
  const { lang } = params;
  console.log(params);
  const router = useRouter();
  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <Dialog open onClose={onDismiss} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 filter backdrop-blur-lg">
        <DialogPanel className="relative max-w-3xl w-full p-12 bg-slate rounded-lg border border-gray-900 border-opacity-50">
          <IconButton
            onClick={onDismiss}
            className="absolute top-4 right-4 border-0"
            icon={<XMarkIcon className="h-10 w-10 text-primary" />}
            iconDescription="Close modal"
            variant="secondary"
          />

          <DialogTitle as="div">
            <H3>Get in touch</H3>
          </DialogTitle>
          <Description as="div">
            <Paragraph variant="secondary">
              Fill out the form below to get in touch with us.
            </Paragraph>
          </Description>
          <div className="mt-8">
            <HubSpotForm lang={lang ?? "en"} />
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
