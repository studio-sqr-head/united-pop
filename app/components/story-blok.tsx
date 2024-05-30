"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { env } from "@/env";

storyblokInit({
  accessToken: env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
});

export function StoryblokProvider({ children }: { children: React.ReactNode }) {
  return children;
}
