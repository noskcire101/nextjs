"use client";

export default function UsersError({ error }: { error: Error }) {
  return <p>{error.message}</p>;
}
