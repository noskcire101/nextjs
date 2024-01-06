import { IMenuItems, ISubMenuItems } from "@/models/layout";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  mainMenuVariants,
  subMenuVariants,
} from "@/constant/framer-motion/navigationmenu";
import { usePathname } from "next/navigation";
import { FaAngleDown } from "react-icons/fa6";

interface Props {
  item: IMenuItems;
  handleClose: () => void;
}

function MenuItems({ item, handleClose }: Props) {
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
    return (
      setOpenSubMenu(shouldOpenSubMenu()),
      setActiveMainMenu(shouldOpenSubMenu())
    );
  }, [item.submenu, pathname]);

  return (
    <>
      {item.submenu ? (
        <div style={isOpenMainMenu}>
          <motion.div
            variants={mainMenuVariants}
            whileHover="sizeIncrease"
            className="px-4 py-2 text-lg inline-flex w-full justify-start items-center cursor-pointer"
            key={item.name}
            onClick={() => {
              setOpenSubMenu((prev) => !prev);
            }}
          >
            {item.icon} <div className="mx-2 w-fit">{item.name}</div>{" "}
            <FaAngleDown className="mt-1" />
          </motion.div>
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
                  onClick={handleClose}
                  className="px-4 py-2 text-sm inline-flex w-full pl-9 justify-start items-center cursor-pointer"
                  style={isActiveSubMenu(subItem.path)}
                >
                  {subItem?.icon}{" "}
                  <div className="ml-2 w-fit">{subItem.name}</div>
                </Link>
              </motion.div>
            ))}
        </div>
      ) : (
        <motion.div
          key={item.name}
          variants={mainMenuVariants}
          whileHover="sizeIncrease"
        >
          <Link
            href={item.path ? item.path : "#"}
            className="px-4 py-2 text-lg inline-flex w-full justify-start items-center "
            style={isActiveMainMenuTab(item.path ? item.path : "")}
            onClick={() => {
              setOpenSubMenu(false);
              handleClose();
            }}
          >
            {item.icon} <div className="ml-2 w-fit">{item.name}</div>
          </Link>
        </motion.div>
      )}
    </>
  );
}

export default MenuItems;
