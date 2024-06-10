"use client"

import { useMemo } from "react"
import {
  FacebookSvg,
  InstagramSvg,
  LinkedInSvg,
  YoutubeSvg,
} from "@/app/components/icons"
import { IconButton } from "@/app/components/button"

export const SocialMediaLinks = ({
  facebookUrl,
  instagramUrl,
  linkedInUrl,
  youtubeUrl,
}: {
  facebookUrl?: string
  instagramUrl?: string
  linkedInUrl?: string
  youtubeUrl?: string
}) => {
  const SOCIAL_MEDIA = useMemo(() => {
    return [
      {
        id: "facebook",
        href: facebookUrl,
        title: "Facebook",
        Svg: FacebookSvg,
      },
      {
        id: "instagram",
        href: instagramUrl,
        title: "Instagram",
        Svg: InstagramSvg,
      },
      {
        id: "linkedin",
        href: linkedInUrl,
        title: "LinkedIn",
        Svg: LinkedInSvg,
      },
      {
        id: "youtube",
        href: youtubeUrl,
        title: "YouTube",
        Svg: YoutubeSvg,
      },
    ]
  }, [facebookUrl, instagramUrl, linkedInUrl, youtubeUrl])

  return (
    <div className="flex gap-2">
      {SOCIAL_MEDIA.map(({ id, title, Svg, href }) => (
        <IconButton
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          key={id}
          href={{
            pathname: href,
          }}
          icon={<Svg />}
          iconDescription={title}
        />
      ))}
    </div>
  )
}
