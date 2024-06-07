import { ReactNode, createElement } from "react"

const fontSize = {
  h1: "leading-tight text-5xl md:text-7xl font-bold",
  h2: "leading-tight text-3xl md:text-5xl font-bold",
  h3: "leading-tight text-2xl md:text-4xl font-bold",
  h4: "text-xl md:text-2xl font-bold",
  h5: "text-lg md:text-xl font-bold",
  h6: "text-lg md:text-lg font-bold",
  p: "text-normal font-normal",
  subheading: "text-xl",
}

const fontColor = {
  primary: "text-primary",
  secondary: "text-secondary",
}

interface TitleProps {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  className?: string
}

const H1 = ({ children, variant = "primary", className }: TitleProps) => (
  <h1 className={`${fontSize.h1} ${fontColor[variant]} ${className}`}>
    {children}
  </h1>
)

const H2 = ({ children, variant = "primary", className }: TitleProps) => (
  <h2 className={`${fontSize.h2} ${fontColor[variant]} ${className}`}>
    {children}
  </h2>
)

const H3 = ({ children, variant = "primary", className }: TitleProps) => (
  <h3 className={`${fontSize.h3} ${fontColor[variant]} ${className}`}>
    {children}
  </h3>
)

const H4 = ({ children, variant = "primary", className }: TitleProps) => (
  <h4 className={`${fontSize.h4} ${fontColor[variant]} ${className}`}>
    {children}
  </h4>
)

const H5 = ({ children, variant = "primary", className }: TitleProps) => (
  <h5 className={`${fontSize.h5} ${fontColor[variant]} ${className}`}>
    {children}
  </h5>
)

const H6 = ({ children, variant = "primary", className }: TitleProps) => (
  <h6 className={`${fontSize.h6} ${fontColor[variant]} ${className}`}>
    {children}
  </h6>
)

const Paragraph = ({
  className,
  variant = "primary",
  as = "p",
  ...rest
}: {
  className?: string
  variant?: "primary" | "secondary"
  as?: "p" | "div" | "span"
  children: ReactNode
}) => {
  return createElement(as, {
    className: `${fontSize.p} ${fontColor[variant]} ${className}`,
    ...rest,
  })
}

const Subheading = ({
  children,
  variant = "secondary",
  as = "p",
}: {
  children: ReactNode
  variant?: "primary" | "secondary"
  as?: "p" | "div" | "span"
}) => {
  const fontColor = variant === "primary" ? "text-primary" : "text-secondary"
  return (
    <Paragraph as={as} className={`${fontSize.subheading} ${fontColor}`}>
      {children}
    </Paragraph>
  )
}

export { H1, H2, H3, H4, H5, H6, Paragraph, Subheading }
