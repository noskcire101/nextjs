import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs Page Title",
  description: "Blogs Page description",
  openGraph: {
    images: "https://photos.sphereshowcase.com/tBJczsgyzUAP3woETDr31.jpg",
  },
};

export default function Blogs() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>My Blog</p>
    </main>
  );
}
