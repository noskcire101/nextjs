"use client";
import useToggleBooleanState from "@/hooks/common/useToggleBooleanState";
import Headermenu from "@/components/layout/navigationmenu/headermenu";
import Sidemenu from "@/components/layout/navigationmenu/sidemenu";

export default function NavigationMenu() {
  const sideNavPosition = "left";
  const {
    booleanState: isToggleSideMenu,
    setBooleanTrue: handleOpenSideMenu,
    setBooleanFalse: handleCloseSideMenu,
  } = useToggleBooleanState();
  return (
    <div className="fixed z-[99] w-full">
      <Headermenu
        sideNavPosition={sideNavPosition}
        handleOpenSideMenu={handleOpenSideMenu}
      />
      <Sidemenu
        isToggle={isToggleSideMenu}
        position={sideNavPosition}
        handleClose={handleCloseSideMenu}
      />
    </div>
  );
}
