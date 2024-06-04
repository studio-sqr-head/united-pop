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
  iconPosition?: "left" | "right";
}

// Using tailwind accessibilities classes so that we can also inject them into hubspot.
export const useGenerateButtonClasses = ({
  disabled = false,
  size = "medium",
  variant = "primary",
}: Pick<ButtonProps, "variant" | "size" | "disabled">): string => {
  const baseClasses =
    "rounded font-semibold text-center inline-flex items-center justify-center cursor-pointer focus:outline-none whitespace-nowrap";
  const interactiveClasses = "transition-all ease-in-out duration-300";
  const disabledClasses =
    "disabled:cursor-not-allowed disabled:text-gray-400 disabled:opacity-50 disabled:border-gray-600 disabled:bg-gray-500";

  const hoverClasses = {
    primary: "hover:opacity-50",
    secondary: "hover:bg-gray-800",
  };

  const activeClasses = "active:bg-primary-900";
  const variantClasses = {
    primary: clsx("bg-primary text-white border-2", {
      [activeClasses]: !disabled,
      [hoverClasses.primary]: !disabled,
    }),
    secondary: clsx("text-white border-2 border-white bg-transparent", {
      [activeClasses]: !disabled,
      [hoverClasses.secondary]: !disabled,
    }),
  };

  const sizeClasses = {
    small: "py-1 px-2 text-md",
    medium: "py-2 px-3 text-lg",
    large: "py-2 md:py-3 px-3 md:px-4 text-lg",
  };

  const buttonClasses = clsx(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    interactiveClasses,
    disabledClasses
  );

  return buttonClasses;
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  as = "button",
  disabled = false,
  children,
  onClick,
  icon,
  iconPosition = "left",
  ...linkProps
}) => {
  const buttonClasses = useGenerateButtonClasses({ variant, size, disabled });
  const render = (
    <>
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </>
  );
  if (as === "a" && linkProps?.href) {
    return (
      <NextLink href={linkProps.href} passHref legacyBehavior {...linkProps}>
        <HeadlessUiButton as="a" className={buttonClasses} disabled={disabled}>
          {render}
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
      {render}
    </HeadlessUiButton>
  );
};

interface IconButtonProps extends Partial<NextLinkProps<string | UrlObject>> {
  icon: ReactNode;
  onClick?: () => void;
  iconDescription?: string;
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
    small: "p-1 text-sm",
    medium: "p-2 text-base",
    large: "p-3 text-lg",
  };
  const variantClasses = {
    primary: "text-primary border-primary",
    secondary: "border-none",
  };

  const hoverClasses = {
    primary: "data-[hover]:opacity-50",
    secondary: "data-[hover]:bg-gray-800",
  };
  const interactiveClasses = "transition-all ease-in-out duration-300";
  const disabledClasses =
    "data-[disabled]:cursor-not-allowed disabled:opacity-50";

  const buttonClasses = clsx(
    baseClasses,
    sizeClasses[size],
    hoverClasses[variant],
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
