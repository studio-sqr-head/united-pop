import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { IconButton } from "@/app/components/button";
import { H6, Paragraph } from "@/app/components/typography";

export const Accordion = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Disclosure as="div" className="flex flex-col divide-gray-500">
      <DisclosureButton
        className="group flex gap-2 hover:opacity-70 cursor-pointer"
        as="div"
      >
        <div className="flex-grow flex items-center">
          <H6>{title}</H6>
        </div>
        <div>
          <IconButton
            variant="secondary"
            size="small"
            iconDescription="Toggle Answer"
            className="border-none"
            icon={
              <ChevronDownIcon className="w-8 group-data-[open]:rotate-180 stroke-2" />
            }
          />
        </div>
      </DisclosureButton>
      <DisclosurePanel>
        <Paragraph variant="secondary">{description}</Paragraph>
      </DisclosurePanel>
    </Disclosure>
  );
};
