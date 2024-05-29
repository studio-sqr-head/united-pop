import React, { ReactNode } from "react";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { Button as HeadlessUiButton } from "@headlessui/react";
import clsx from "clsx";
import { UrlObject } from "url";

interface ButtonProps extends Partial<NextLinkProps<string | UrlObject>> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  children: ReactNode;
  onClick?: (...args: any[]) => void;
  icon?: ReactNode;
  as?: "button" | "a";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  as = "button",
  disabled = false,
  children,
  onClick,
  icon,
  ...linkProps
}) => {
  const baseClasses =
    "rounded font-semibold text-center inline-flex items-center justify-center cursor-pointer focus:outline-none";
  const focusClasses =
    "data-[focus]:outline-1 data-[focus]:outline-white data-[focus]:ring-2 data-[focus]:ring-primary";
  const interactiveClasses = "transition-all ease-in-out duration-300";
  const disabledClasses =
    "data-[disabled]:cursor-not-allowed data-[disabled]:text-gray-400 data-[disabled]:opacity-50 data-[disabled]:border-gray-600 data-[disabled]:bg-gray-500";

  const hoverClasses = "data-[hover]:opacity-50";
  const activeClasses = "data-[active]:bg-primary-900";
  const variantClasses = {
    primary: clsx("bg-primary text-white", {
      [hoverClasses]: !disabled,
      [activeClasses]: !disabled,
    }),
    secondary: clsx("text-white border-2 border-white bg-transparent", {
      [hoverClasses]: !disabled,
      [activeClasses]: !disabled,
    }),
  };

  const sizeClasses = {
    small: "py-1 px-2 text-md",
    medium: "py-2 px-4 text-base",
    large: "py-3 px-6 text-lg",
  };

  const buttonClasses = clsx(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    focusClasses,
    interactiveClasses,
    disabledClasses
  );

  if (as === "a" && linkProps?.href) {
    return (
      <NextLink href={linkProps.href} passHref legacyBehavior {...linkProps}>
        <HeadlessUiButton as="a" className={buttonClasses} disabled={disabled}>
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </HeadlessUiButton>
      </NextLink>
    );
  }

  return (
    <HeadlessUiButton
      className={buttonClasses}
      disabled={disabled}
      as="button"
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </HeadlessUiButton>
  );
};

interface IconButtonProps extends Partial<NextLinkProps<string | UrlObject>> {
  icon: ReactNode;
  onClick?: () => void;
  iconDescription: string;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  className?: string;
  as?: "button" | "a";
  variant?: "primary" | "secondary";
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  iconDescription,
  size = "medium",
  disabled = false,
  className,
  as = "button",
  variant = "primary",
  ...linkProps
}) => {
  const baseClasses = "rounded-lg border flex items-center justify-center";
  const sizeClasses = {
    small: "p-1",
    medium: "p-2",
    large: "p-3",
  };
  const variantClasses = {
    primary: "text-primary border-primary",
    secondary: "text-secondary border-gray-500",
  };

  const hoverClasses = "hover:opacity-70";
  const interactiveClasses = "transition-all ease-in-out duration-300";
  const disabledClasses =
    "data-[disabled]:cursor-not-allowed disabled:opacity-50";

  const buttonClasses = clsx(
    baseClasses,
    sizeClasses[size],
    hoverClasses,
    disabledClasses,
    interactiveClasses,
    variantClasses[variant],
    className
  );

  if (as === "a" && linkProps?.href) {
    return (
      <NextLink href={linkProps.href} passHref legacyBehavior {...linkProps}>
        <HeadlessUiButton as="a" className={buttonClasses} disabled={disabled}>
          {icon}

          <span className="sr-only">{iconDescription}</span>
        </HeadlessUiButton>
      </NextLink>
    );
  }

  return (
    <HeadlessUiButton
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
    >
      <div className="text-orange-500">{icon}</div>
      <span className="sr-only">{iconDescription}</span>
    </HeadlessUiButton>
  );
};

interface LinkProps extends Partial<NextLinkProps<string | UrlObject>> {
  variant?: "primary" | "secondary";
  className?: string;
  children: ReactNode;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  active?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export const Link: React.FC<LinkProps> = ({
  children,
  size = "medium",
  variant = "primary",
  className,
  active = false,
  icon,
  iconPosition = "left",
  ...linkProps
}) => {
  const baseClasses =
    "font-semibold focus:outline-none rounded-xl inline-flex items-center justify-center";
  const interactiveClasses =
    "cursor-pointer transition-all ease-in-out duration-300";

  const variantClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
  };

  const sizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const linkClasses = clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    "hover:underline hover:opacity-50",
    { underline: active },
    interactiveClasses,
    className
  );

  if (linkProps?.href == null) {
    return;
  }

  return (
    <NextLink href={linkProps?.href} className={linkClasses} {...linkProps}>
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </NextLink>
  );
};
