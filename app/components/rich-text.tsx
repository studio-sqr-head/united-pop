import {
  render,
  NODE_HEADING,
  NODE_PARAGRAPH,
  MARK_LINK,
} from "storyblok-rich-text-react-renderer"

import { H1, H2, H3, H4, H5, H6, Paragraph } from "@/app/components/typography"
import { Link } from "@/app/components/button"

export const RichText = ({ document }: { document: any }) => {
  return (
    <div>
      {render(document, {
        markResolvers: {
          [MARK_LINK](children, { href }) {
            return <Link href={href as any}>{children}</Link>
          },
        },
        nodeResolvers: {
          [NODE_PARAGRAPH](children) {
            return <Paragraph>{children}</Paragraph>
          },
          [NODE_HEADING](children, props) {
            const { level } = props
            if (level === 1) return <H1>{children}</H1>
            if (level === 2) return <H2>{children}</H2>
            if (level === 3) return <H3>{children}</H3>
            if (level === 4) return <H4>{children}</H4>
            if (level === 5) return <H5>{children}</H5>
            if (level === 6) return <H6>{children}</H6>

            return null
          },
        },
      })}
    </div>
  )
}
