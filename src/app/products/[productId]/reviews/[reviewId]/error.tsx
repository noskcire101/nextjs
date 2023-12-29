"use client";

export default function ReviewError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{error.message}</p>
    </main>
  );
}
