import type { ReactNode } from "react"

export default function Layout(
  props: Readonly<{
    children: React.ReactNode
    params: { lang: "en" | "nl" }
    contact: ReactNode
  }>
) {
  const { children, contact } = props

  return (
    <>
      {children} {contact}
    </>
  )
}
