"use client"

import { useState, useEffect } from "react"
import { useParams, usePathname } from "next/navigation"

import { Container } from "@/app/components/structure"
import { Logo } from "@/app/components/logo"
import { Button, IconButton, Link } from "@/app/components/button"
import { Bars3Icon, CalendarIcon, XMarkIcon } from "@heroicons/react/20/solid"

const NavItems = ({ items }: { items: typeof NAV_ITEMS }) => {
  const { lang } = useParams()
  const pathname = usePathname()
  return (
    <>
      {items.map(({ id, path, title }) => {
        // check whether pathname includes the path
        if (id === "home") {
          var isActive = `/${lang}` === pathname
        } else {
          var isActive = pathname.includes(path)
        }

        return (
          <li key={id}>
            <Link
              active={isActive}
              href={{
                pathname: path,
                query: { lang },
              }}
            >
              {title}
            </Link>
          </li>
        )
      })}
    </>
  )
}

export const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { lang } = useParams()
  const pathname = usePathname()

  useEffect(() => {
    // on route change, close the menu
    setShowMenu(false)
  }, [pathname])

  // click away listener
  useEffect(() => {
    const handleClick = (e: any) => {
      if (showMenu && !e.target.closest("nav")) {
        setShowMenu(false)
      }
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [showMenu])

  return (
    <nav className="w-full relative h-full">
      <Container className="flex items-start justify-between py-4 md:py-6">
        <Logo />

        <div className="flex gap-8 align-center items-center md:hidden">
          <IconButton
            variant="secondary"
            onClick={() => setShowMenu(true)}
            icon={<Bars3Icon className="h-6 w-6 text-white" />}
            size="small"
          />
        </div>

        <ul
          className={`absolute top-0 top-0 left-0 right-0 bg-black flex flex-col py-4 px-8 gap-4 ${
            showMenu
              ? "opacity-100 w-full h-screen z-50`"
              : "opacity-0 pointer-events-none"
          } transition-all duration-300 ease-in-out`}
        >
          <div className="flex gap-8 align-center md:hidden justify-between w-full mb-4">
            <Logo />
            <IconButton
              variant="secondary"
              onClick={() => setShowMenu(false)}
              icon={<XMarkIcon className="h-8 w-8 text-white" />}
              size="small"
            />
          </div>

          <NavItems items={NAV_ITEMS} />

          <Button
            scroll={false}
            variant="secondary"
            size="small"
            as="a"
            href={{
              pathname: "/contact",
              query: { lang },
            }}
          >
            Make an Appointment
          </Button>
        </ul>

        <ul className="flex gap-8 align-center items-center hidden md:flex h-full">
          <NavItems items={NAV_ITEMS} />

          <Button
            scroll={false}
            variant="secondary"
            as="a"
            href={{
              pathname: "/contact",
              query: { lang },
            }}
            icon={<CalendarIcon className="h-4 w-4" />}
          >
            Make an Appointment
          </Button>
        </ul>
      </Container>
    </nav>
  )
}

const NAV_ITEMS = [
  {
    id: "home",
    title: "Home",
    path: "/",
    component: "link",
  },
  {
    id: "about",
    title: "About",
    path: "/about",
    component: "link",
  },
]
