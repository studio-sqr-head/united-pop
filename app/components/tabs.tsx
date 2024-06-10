import React, { ReactNode } from "react"
import clsx from "clsx"

import {
  Tab as HeadlessUiTab,
  TabGroup as HeadlessUiTabGroup,
  TabList as HeadlessUiTabList,
  TabPanel as HeadlessUiTabPanel,
  TabPanels as HeadlessUiTabPanels,
} from "@headlessui/react"

export const Tab = ({
  name,
  className,
}: {
  name: string
  className?: string
}) => {
  const baseClasses =
    "px-3 py-2 font-semibold text-white cursor-pointer font-xl border-b-4 border-transparent transition-colors ease-in-out duration-200 hover:bg-gray-800"
  const selectedClasses =
    "data-[selected]:border-b-4 data-[selected]:border-primary"
  const hoverClasses = "data-[hover]:bg-gray-800"
  const selectedHoverClasses = "data-[selected]:data-[hover]:bg-gray-800"
  const focusClasses =
    "focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white"

  return (
    <HeadlessUiTab
      key={name}
      className={clsx(
        baseClasses,
        selectedClasses,
        hoverClasses,
        selectedHoverClasses,
        focusClasses,
        className
      )}
    >
      {name}
    </HeadlessUiTab>
  )
}

export const TabGroup = ({
  children,
  className,
  onChange,
  selectedIndex,
}: {
  children: ReactNode
  className?: string
  onChange?: (index: number) => void
  selectedIndex?: number
}) => {
  return (
    <HeadlessUiTabGroup
      className={className}
      onChange={onChange}
      selectedIndex={selectedIndex}
    >
      {children}
    </HeadlessUiTabGroup>
  )
}

export const TabList = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <HeadlessUiTabList
      className={`flex gap-2 md:gap-4 overflow-x-auto no-scrollbar ${className}`}
    >
      {children}
    </HeadlessUiTabList>
  )
}

export const TabPanels = ({ children }: { children: ReactNode }) => (
  <HeadlessUiTabPanels className="mt-6">{children}</HeadlessUiTabPanels>
)

export const TabPanel = ({ children }: { children: ReactNode }) => (
  <HeadlessUiTabPanel>{children}</HeadlessUiTabPanel>
)
