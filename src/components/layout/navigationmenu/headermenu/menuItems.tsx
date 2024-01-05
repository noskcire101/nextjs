import { IMenuItems, ISubMenuItems } from "@/models/layout";
import Link from "next/link";

interface Props {
  item: IMenuItems;
  sideNavPosition: string;
}

export default function MenuItems({ item, sideNavPosition }: Props) {
  const openSubMenu = true;

  return (
    <>
      {item.submenu ? (
        <div className={"overflow-hidden"}>
          <button
            className={
              "cursor-pointer flex items-center text-base text-[white] m-0 p-4 hover:bg-[var(--tab-active)] "
            }
          >
            {item.icon}
            <p className="ml-1">{item.name}</p>
          </button>
          <div
            className={`${
              sideNavPosition === "left" ? "r-12" : ""
            } absolute bg-[var(--tab-open)] min-w-[160px] shadow-[0px_8px_16px_0px_rgba(255,255,255,0.1)] text-white`}
          >
            {openSubMenu &&
              item.submenu.map((subItem: ISubMenuItems) => (
                <Link
                  key={`${item.name}-${subItem.name}`}
                  href={subItem.path}
                  className={
                    "float-none no-underline block text-left px-9 py-3 hover:bg-[var(--tab-active)] cursor-pointer"
                  }
                >
                  {subItem.name}
                </Link>
              ))}
          </div>
        </div>
      ) : (
        <Link
          key={item.name}
          href={item.path ? item.path : "#"}
          className="text-center flex items-center no-underline text-white hover:bg-[var(--tab-active)] p-4"
        >
          {item.icon} <p className="ml-1">{item.name}</p>
        </Link>
      )}
    </>
  );
}
