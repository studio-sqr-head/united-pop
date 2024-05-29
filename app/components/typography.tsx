import { ReactNode, createElement } from "react";

const fontSize = {
  h1: "leading-tight text-5xl md:text-7xl font-bold",
  h2: "leading-tight text-3xl md:text-5xl font-bold",
  h3: "leading-tight text-2xl md:text-4xl font-bold",
  h4: "text-xl md:text-2xl font-bold",
  h5: "text-lg md:text-xl font-bold",
  h6: "text-lg md:text-lg font-bold",
  p: "text-normal font-normal",
  subheading: "text-xl",
};

const fontColor = {
  primary: "text-primary",
  secondary: "text-secondary",
};

interface TitleProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const H1 = ({ children, variant = "primary" }: TitleProps) => (
  <h1 className={`${fontSize.h1} ${fontColor[variant]} `}>{children}</h1>
);

const H2 = ({ children, variant = "primary" }: TitleProps) => (
  <h2 className={`${fontSize.h2} ${fontColor[variant]} `}>{children}</h2>
);

const H3 = ({ children, variant = "primary" }: TitleProps) => (
  <h3 className={`${fontSize.h3} ${fontColor[variant]} `}>{children}</h3>
);

const H4 = ({ children, variant = "primary" }: TitleProps) => (
  <h4 className={`${fontSize.h4} ${fontColor[variant]} `}>{children}</h4>
);

const H5 = ({ children, variant = "primary" }: TitleProps) => (
  <h5 className={`${fontSize.h5} ${fontColor[variant]} `}>{children}</h5>
);

const H6 = ({ children, variant = "primary" }: TitleProps) => (
  <h6 className={`${fontSize.h6} ${fontColor[variant]} `}>{children}</h6>
);

const Paragraph = ({
  className,
  variant = "primary",
  as = "p",
  ...rest
}: {
  className?: string;
  variant?: "primary" | "secondary";
  as?: "p" | "div" | "span";
  children: ReactNode;
}) => {
  return createElement(as, {
    className: `${fontSize.p} ${fontColor[variant]} ${className}`,
    ...rest,
  });
};

const Subheading = ({ children }: { children: ReactNode }) => (
  <Paragraph as="p" className={`${fontSize.subheading} ${fontColor.secondary}`}>
    {children}
  </Paragraph>
);

export { H1, H2, H3, H4, H5, H6, Paragraph, Subheading };
