import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import NavigationMenu from "@/components/layout/navigationmenu";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "This is a default tilte, will only appear if page doesnt have a title",
    template: "%s | Template title",
  },
  description: "This is a homepage description",
  openGraph: {
    images: "https://photos.sphereshowcase.com/tBJczsgyzUAP3woETDr31.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body>
        <NavigationMenu />
        <main>{children}</main>
        <h1>Footer</h1>
      </body>
    </html>
  );
}
