"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";

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
    <div className="h-full min-h-screen w-full flex flex-col justify-center items-center">
      <div className="flex flex-col gap-y-5 items-center justify-center">
        <h2 className="font-bold text-primary text-2xl">
          Something went wrong!
        </h2>
        <Button
          variant="default"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          <ReloadIcon className="w-4 h-4 mr-2" />
          Try again
        </Button>
      </div>
    </div>
  );
}
