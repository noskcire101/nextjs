import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products Page Title",
  description: "Products Page description",
  openGraph: {
    images: "https://photos.sphereshowcase.com/tBJczsgyzUAP3woETDr31.jpg",
  },
};

export default function Products() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>My Products</p>
    </main>
  );
}
