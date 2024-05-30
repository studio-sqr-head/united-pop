"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { Container } from "@/app/components/layout";
import { H3, Paragraph, Subheading } from "../components/typography";
import { Button } from "../components/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Container className="flex flex-col items-center justify-center h-screen gap-4">
      <H3> An error occurred </H3>
      <Subheading> Please try again later</Subheading>
      <Paragraph> {error.message} </Paragraph>

      <div className="flex gap-4 mt-4">
        <Button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>

        <Button
          variant="secondary"
          href={{ pathname: "/", query: { lang: "en" } }}
        >
          Go back home
        </Button>
      </div>
    </Container>
  );
}
