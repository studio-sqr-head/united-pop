import { Button } from "@headlessui/react";
import clsx from "clsx";

export const MobileNavButton = ({
  children,
  onClick,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
}) => {
  const baseClasses =
    "flex flex-col gap-1 items-center justify-center h-full w-full text-primary text-sm p-2";
  const hoverClasses = "data-[hover]:bg-primary-800";

  const className = clsx(baseClasses, hoverClasses);
  return (
    <Button type="button" className={className} onClick={onClick}>
      {children}
    </Button>
  );
};

export const BottomNavigation = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <div className="md:hidden sticky bottom-0 left-0 z-50 w-full bg-slate border-t border-gray-800">
      <div className="grid h-full grid-cols-2 w-full max-w-6xl mx-auto border-l border-gray-800 border-r">
        {children}
      </div>
    </div>
  );
};
