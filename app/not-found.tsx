import { H2, Subheading, Paragraph } from "@/app/components/typography"
import { Button } from "@/app/components/button"
import { Container } from "@/app/components/structure"
import { getNotFound } from "@/api/page"

export async function NotFound() {
  const { notFoundPageContent } = await getNotFound({ lang: "en" })
  const { heading, subtitle, text, button } = notFoundPageContent.content
  return (
    <Container className="flex flex-col items-center justify-center h-screen gap-4">
      <H2>{heading}</H2>
      <Subheading>{subtitle}</Subheading>
      <Paragraph>{text}</Paragraph>
      <div className="flex gap-4 mt-4">
        <Button href={{ pathname: "/", query: { lang: "en" } }} as="a">
          {button}
        </Button>
      </div>
    </Container>
  )
}
export default NotFound
