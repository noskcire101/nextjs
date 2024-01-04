"use client";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Sidemenu from "@/components/layout/sidemenu";
import useToggleBooleanState from "@/hooks/common/useToggleBooleanState";
import { TiThMenu } from "react-icons/ti";

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

const sideNavPosition = "left";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    booleanState: isToggleSideMenu,
    setBooleanTrue: handleOpenSideMenu,
    setBooleanFalse: handleCloseSideMenu,
  } = useToggleBooleanState();

  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body>
        <nav className="p-6 text-white bg-[#333]">
          <TiThMenu
            size={30}
            className={`${
              sideNavPosition === "left" ? "" : "right-0 top-0 m-5"
            } cursor-pointer fixed`}
            onClick={handleOpenSideMenu}
          />
          <p className="ml-10">Navbar</p>
        </nav>
        <Sidemenu
          isToggle={isToggleSideMenu}
          position={sideNavPosition}
          handleClose={handleCloseSideMenu}
        />
        <main>{children}</main>
        <h1>Footer</h1>
      </body>
    </html>
  );
}
