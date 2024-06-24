"use client"

import { useMemo } from "react"
import {
  TiktokSvg,
  InstagramSvg,
  LinkedInSvg,
  YoutubeSvg,
} from "@/app/components/icons"
import { IconButton } from "@/app/components/button"

export const SocialMediaLinks = ({
  tiktokUrl,
  instagramUrl,
  linkedInUrl,
  youtubeUrl,
}: {
  tiktokUrl?: string
  instagramUrl?: string
  linkedInUrl?: string
  youtubeUrl?: string
}) => {
  const SOCIAL_MEDIA = useMemo(() => {
    return [
      {
        id: "tiktok",
        href: tiktokUrl,
        title: "TikTok",
        Svg: TiktokSvg,
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
  }, [tiktokUrl, instagramUrl, linkedInUrl, youtubeUrl])

  return (
    <div className="flex gap-2">
      {SOCIAL_MEDIA.map(({ id, title, Svg, href }) => {
        if (href == null) return null
        return (
          <IconButton
            as="a"
            externalLink
            target="_blank"
            rel="noopener noreferrer"
            key={id}
            href={href}
            icon={<Svg />}
            iconDescription={title}
          />
        )
      })}
    </div>
  )
}
