"use client";

import { useLayoutEffect, useState } from "react";

const MOBILE_BREAKPOINT = 640;
export const useDetectMobileBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < MOBILE_BREAKPOINT) {
        setBreakpoint(true);
      } else {
        setBreakpoint(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  console.log(breakpoint);
  return breakpoint;
};
