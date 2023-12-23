import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        className="relative"
        src="/404.svg"
        alt="404"
        width={580}
        height={437}
        priority
      />
    </main>
  );
}
