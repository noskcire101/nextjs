"use client";
import useToggleBooleanState from "@/hooks/common/useToggleBooleanState";
import Headermenu from "@/components/layout/navigationmenu/headermenu";
import Sidemenu from "@/components/layout/navigationmenu/sidemenu";

export default function NavigationMenu() {
  const sideNavPosition = "left";
  const {
    booleanState: isToggleMenu,
    setBooleanTrue: handleOpenMenu,
    setBooleanFalse: handleCloseMenu,
  } = useToggleBooleanState();

  return (
    <div className="fixed z-[99] w-full">
      <Headermenu
        sideNavPosition={sideNavPosition}
        handleOpenSideMenu={handleOpenMenu}
      />
      <Sidemenu
        isToggle={isToggleMenu}
        position={sideNavPosition}
        handleClose={handleCloseMenu}
      />
    </div>
  );
}
