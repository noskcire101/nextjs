import { IMenuItems, ISubMenuItems } from "@/models/layout";
import { FaAngleDown } from "react-icons/fa6";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  mainMenuVariants,
  subMenuVariants,
} from "@/constant/framer-motion/navigationmenu";

interface Props {
  item: IMenuItems;
  sideNavPosition: string;
}

export default function MenuItems({ item, sideNavPosition }: Props) {
  const pathname = usePathname();
  const [openSubMenu, setOpenSubMenu] = useState<boolean | undefined>(false);
  const [activeMainMenu, setActiveMainMenu] = useState<boolean | undefined>(
    false
  );

  const isOpenMainMenu = useMemo(
    () => ({
      backgroundColor: activeMainMenu || openSubMenu ? "var(--tab-open)" : "",
    }),
    [activeMainMenu, openSubMenu]
  );
  const isActiveMainMenuTab = useCallback(
    (subItemPath: string) => ({
      backgroundColor:
        subItemPath.split("/")[1] === pathname.split("/")[1]
          ? "var(--tab-active)"
          : "",
    }),
    [pathname]
  );
  const isActiveSubMenu = useCallback(
    (subItemPath: string) => ({
      backgroundColor:
        subItemPath.split("/")[1] === pathname.split("/")[1] &&
        subItemPath.split("/")[2] === pathname.split("/")[2]
          ? "var(--tab-active)"
          : "",
    }),
    [pathname]
  );

  useEffect(() => {
    const shouldOpenSubMenu = (): boolean | undefined => {
      return item.submenu?.some(
        (subItem) => subItem.path.split("/")[1] == pathname.split("/")[1]
      );
    };
    return setActiveMainMenu(shouldOpenSubMenu());
  }, [item.submenu, pathname]);

  return (
    <>
      {item.submenu ? (
        <div className={"overflow-hidden"}>
          <motion.button
            variants={mainMenuVariants}
            style={isOpenMainMenu}
            whileHover="sizeIncrease"
            className={
              "cursor-pointer flex items-center text-base text-[white] m-0 p-4 "
            }
            onClick={() => {
              setOpenSubMenu((prev) => !prev);
            }}
          >
            {item.icon}
            <p className="mx-1">{item.name}</p>
            <FaAngleDown className="mt-1" />
          </motion.button>
          <div
            className={`${
              sideNavPosition === "left" ? "r-12" : ""
            } absolute bg-[var(--tab-open)] min-w-[160px] shadow-[0px_8px_16px_0px_rgba(255,255,255,0.1)] text-white overflow-hidden`}
          >
            {openSubMenu &&
              item.submenu.map((subItem: ISubMenuItems) => (
                <motion.div
                  key={`${item.name}-${subItem.name}`}
                  variants={subMenuVariants}
                  whileHover="sizeIncrease"
                  initial="closed"
                  animate="open"
                >
                  <Link
                    href={subItem.path}
                    style={isActiveSubMenu(subItem.path)}
                    onClick={() => {
                      setOpenSubMenu(false);
                    }}
                    className={
                      "float-none no-underline block text-left px-9 py-3 cursor-pointer"
                    }
                  >
                    {subItem.name}
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      ) : (
        <motion.div
          key={item.name}
          variants={mainMenuVariants}
          whileHover="sizeIncrease"
        >
          <Link
            href={item.path ? item.path : "#"}
            className="text-center flex items-center no-underline text-white hover:bg-[var(--tab-active)] p-4"
            style={isActiveMainMenuTab(item.path ? item.path : "")}
            onClick={() => {
              setOpenSubMenu(false);
            }}
          >
            {item.icon} <p className="ml-1">{item.name}</p>
          </Link>
        </motion.div>
      )}
    </>
  );
}
