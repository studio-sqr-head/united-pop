import { getContact } from "@/api/page"
import { ContactModal } from "@/app/[lang]/@contact/components/modal"

export default async function Modal({
  params,
}: {
  params: { lang: "en" | "nl" }
}) {
  const { lang } = params
  const { contactPageContent } = await getContact({ lang })
  const { heading, subheading } = contactPageContent.content

  return <ContactModal heading={heading} subheading={subheading} lang={lang} />
}
