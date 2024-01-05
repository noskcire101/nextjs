import { TiThMenu } from "react-icons/ti";

interface Props {
  sideNavPosition: string;
  handleOpenSideMenu: () => void;
}

export default function Headermenu({
  sideNavPosition,
  handleOpenSideMenu,
}: Props) {
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
          sideNavPosition === "left" ? "ml-12" : "mr-12 justify-end"
        } flex`}
      >
        <a
          href="#home"
          className={
            "text-center no-underline text-white hover:bg-[var(--tab-active)] p-4"
          }
        >
          Home
        </a>
        <a
          href="#news"
          className={
            "text-center no-underline text-white hover:bg-[var(--tab-active)] p-4"
          }
        >
          News
        </a>
        <div className={"overflow-hidden"}>
          <button
            className={
              "cursor-pointer text-base text-[white] m-0 p-4 hover:bg-[var(--tab-active)] "
            }
          >
            Dropdown
            <i>x</i>
          </button>
          <div
            className={`${
              sideNavPosition === "left" ? "r-12" : ""
            } absolute bg-[var(--tab-open)] min-w-[160px] shadow-[0px_8px_16px_0px_rgba(255,255,255,0.1)] text-white`}
          >
            <a
              className={
                "float-none no-underline block text-left px-4 py-3 hover:bg-[var(--tab-active)] cursor-pointer"
              }
            >
              Link 1 asf asfas fasf as fasf drtw te awt wet
            </a>
            <a
              className={
                "float-none no-underline block text-left px-4 py-3 hover:bg-[var(--tab-active)] cursor-pointer"
              }
            >
              Link 2
            </a>
            <a
              className={
                "float-none  no-underline block text-left px-4 py-3 hover:bg-[var(--tab-active)] cursor-pointer"
              }
            >
              Link 3
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
