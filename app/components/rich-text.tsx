import {
  render,
  NODE_HEADING,
  NODE_PARAGRAPH,
  MARK_LINK,
  NODE_UL,
  NODE_LI,
  NODE_OL,
  MARK_BOLD,
  MARK_ANCHOR,
} from "storyblok-rich-text-react-renderer"

import { H1, H2, H3, H4, H5, H6, Paragraph } from "@/app/components/typography"
import { Link } from "@/app/components/button"

type Elements =
  | "p"
  | "b"
  | "strong"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "ul"
  | "ol"
  | "li"
  | "a"
export const RichText = ({
  document,
  classNameOverrides,
}: {
  document: any
  classNameOverrides?: { [key in Elements]?: string }
}) => {
  return (
    <div className="space-y-4 overflow-hidden break-words">
      {render(document, {
        markResolvers: {
          [MARK_ANCHOR](children) {
            return (
              <a className={`text-orange underline ${classNameOverrides?.a}`}>
                {children}
              </a>
            )
          },

          [MARK_LINK](children, { href }) {
            return <Link href={href as any}>{children}</Link>
          },
          [MARK_BOLD](children) {
            return (
              <strong className={classNameOverrides?.strong}>{children}</strong>
            )
          },
        },
        nodeResolvers: {
          [NODE_PARAGRAPH](children) {
            return (
              <Paragraph
                variant="primary"
                className={`mb-4 ${classNameOverrides?.p}`}
              >
                {children}
              </Paragraph>
            )
          },
          [NODE_OL](children) {
            return (
              <ol
                className={`space-y-2 list-decimal text-primary pl-8 ${classNameOverrides?.ol}`}
              >
                {children}
              </ol>
            )
          },
          [NODE_UL](children) {
            return (
              <ul
                className={`space-y-2 list-disc text-primary pl-8 ${classNameOverrides?.ul}`}
              >
                {children}
              </ul>
            )
          },
          [NODE_LI](children) {
            return <li className={classNameOverrides?.li}>{children}</li>
          },
          [NODE_HEADING](children, props) {
            const { level } = props
            if (level === 1)
              return (
                <H1 className={`${classNameOverrides?.h1} my-2`}>{children}</H1>
              )
            if (level === 2)
              return (
                <H2 className={`${classNameOverrides?.h2} my-2`}>{children}</H2>
              )
            if (level === 3)
              return (
                <H3 className={`${classNameOverrides?.h3} my-2`}>{children}</H3>
              )
            if (level === 4)
              return (
                <H4 className={`${classNameOverrides?.h4} my-2`}>{children}</H4>
              )
            if (level === 5)
              return (
                <H5 className={`${classNameOverrides?.h5} my-2`}>{children}</H5>
              )
            if (level === 6)
              return (
                // This is reserved for small, thin headings.
                <Paragraph
                  as="h6"
                  className={`my-2 font-sm text-secondary ${classNameOverrides?.h6}`}
                >
                  {children}
                </Paragraph>
              )

            return null
          },
        },
      })}
    </div>
  )
}
