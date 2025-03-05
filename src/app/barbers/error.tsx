"use client";

import { useEffect } from "react";

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.error(`${error}`);
  }, [error]);
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="text-2xl text-red-500">Error fetching Barbers data</div>
    </div>
  );
}
