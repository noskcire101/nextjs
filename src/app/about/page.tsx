import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page Title",
  description: "About Page description",
  openGraph: {
    images: "https://photos.sphereshowcase.com/tBJczsgyzUAP3woETDr31.jpg",
  },
};

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>About Me</p>
    </main>
  );
}
