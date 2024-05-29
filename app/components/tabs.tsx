import React, { ReactNode } from "react";

import clsx from "clsx";
import {
  Tab as HeadlessUiTab,
  TabGroup as HeadlessUiTabGroup,
  TabList as HeadlessUiTabList,
  TabPanel as HeadlessUiTabPanel,
  TabPanels as HeadlessUiTabPanels,
} from "@headlessui/react";

export const Tabs = ({
  tabs,
}: {
  tabs: {
    name: string;
    component: () => ReactNode;
  }[];
}) => (
  <TabGroup>
    <TabList>
      {tabs.map(({ name }) => (
        <Tab key={name} name={name} />
      ))}
    </TabList>

    <TabPanels>
      {tabs.map(({ name, component }) => (
        <TabPanel key={name}>{component()}</TabPanel>
      ))}
    </TabPanels>
  </TabGroup>
);

export const Tab = ({ name }: { name: string }) => {
  const baseClasses =
    "px-3 py-2 font-semibold text-white cursor-pointer font-xl";
  const selectedClasses =
    "data-[selected]:border-b-4 data-[selected]:border-primary";
  const hoverClasses = "data-[hover]:bg-gray-800";
  const selectedHoverClasses = "data-[selected]:data-[hover]:bg-gray-800";
  const focusClasses =
    "focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white";

  return (
    <HeadlessUiTab
      key={name}
      className={clsx(
        baseClasses,
        selectedClasses,
        hoverClasses,
        selectedHoverClasses,
        focusClasses
      )}
    >
      {name}
    </HeadlessUiTab>
  );
};

export const TabGroup = ({ children }: { children: ReactNode }) => (
  <HeadlessUiTabGroup>{children}</HeadlessUiTabGroup>
);

export const TabList = ({ children }: { children: ReactNode }) => (
  <HeadlessUiTabList className="flex gap-4 overflow-x-auto">
    {children}
  </HeadlessUiTabList>
);

export const TabPanels = ({ children }: { children: ReactNode }) => (
  <HeadlessUiTabPanels className="mt-6">{children}</HeadlessUiTabPanels>
);

export const TabPanel = ({ children }: { children: ReactNode }) => (
  <HeadlessUiTabPanel>{children}</HeadlessUiTabPanel>
);
