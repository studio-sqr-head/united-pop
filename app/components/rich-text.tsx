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

export const RichText = ({ document }: { document: any }) => {
  return (
    <div>
      {render(document, {
        markResolvers: {
          [MARK_ANCHOR](children) {
            return <a>{children}</a>
          },

          [MARK_LINK](children, { href }) {
            return <Link href={href as any}>{children}</Link>
          },
          [MARK_BOLD](children) {
            return <strong>{children}</strong>
          },
        },
        nodeResolvers: {
          [NODE_PARAGRAPH](children) {
            return (
              <Paragraph variant="primary" className="mb-2">
                {children}
              </Paragraph>
            )
          },
          [NODE_OL](children) {
            return (
              <ol className="space-y-2 list-decimal text-primary pl-8">
                {children}
              </ol>
            )
          },
          [NODE_UL](children) {
            return (
              <ul className="space-y-2 list-disc text-primary pl-8">
                {children}
              </ul>
            )
          },
          [NODE_LI](children) {
            return <li>{children}</li>
          },
          [NODE_HEADING](children, props) {
            const { level } = props
            if (level === 1) return <H1 className="my-2">{children}</H1>
            if (level === 2) return <H2 className="my-2">{children}</H2>
            if (level === 3) return <H3 className="my-2">{children}</H3>
            if (level === 4) return <H4 className="my-2">{children}</H4>
            if (level === 5) return <H5 className="my-2">{children}</H5>
            if (level === 6) return <H6 className="my-2">{children}</H6>

            return null
          },
        },
      })}
    </div>
  )
}
