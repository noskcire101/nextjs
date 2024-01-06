import { TiThMenu } from "react-icons/ti";
import useMenuItems from "../sidemenu/controller/useMenuItems";
import { IMenuItems } from "@/models/layout";
import MenuItems from "./menuItems";

interface Props {
  sideNavPosition: string;
  handleOpenSideMenu: () => void;
}

export default function Headermenu({
  sideNavPosition,
  handleOpenSideMenu,
}: Props) {
  const menuItems = useMenuItems();
  return (
    <nav className="bg-[var(--secondary-bg)]">
      <TiThMenu
        size={30}
        className={`${
          sideNavPosition === "left" ? "" : "right-0 top-0"
        } cursor-pointer fixed m-3`}
        onClick={handleOpenSideMenu}
      />
      <div
        className={`${
          sideNavPosition === "left" ? "ml-14" : "mr-14 justify-end"
        } flex`}
      >
        {menuItems.map((item: IMenuItems) => (
          <MenuItems
            key={item.name}
            sideNavPosition={sideNavPosition}
            item={item}
          />
        ))}
      </div>
    </nav>
  );
}
