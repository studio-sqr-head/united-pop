import { ReactNode } from "react"
import { Paragraph } from "./typography"

export const List = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => (
  <ul className={`list-disc list-inside gap-4 flex flex-col ${className}`}>
    {children}
  </ul>
)

export const ListItem = ({
  icon,
  textPrimary,
  textSecondary,
  cta,
  className,
}: {
  icon?: ReactNode
  textPrimary?: string
  textSecondary?: string
  cta?: ReactNode
  className?: string
}) => (
  <li className={`flex gap-2 items-center ${className}`}>
    {icon && <span className="mr-2">{icon}</span>}
    <div>
      <div className="flex items-center gap-2">
        <Paragraph>{textPrimary}</Paragraph>
        {cta && cta}
      </div>
      {textSecondary && (
        <Paragraph variant="secondary" className="text-sm">
          {textSecondary}
        </Paragraph>
      )}
    </div>
  </li>
)
