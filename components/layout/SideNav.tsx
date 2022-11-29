import { Transition } from "@headlessui/react";
import { FC, PropsWithChildren } from "react";

interface SideNavProps extends PropsWithChildren {
  isOpen: boolean;
  setOpenNav?: (isOpen: boolean) => void;
}

const SideNav: FC<SideNavProps> = ({ isOpen, setOpenNav, children }) => {
  return (
    <Transition appear show={isOpen}>
      <Transition.Child
        enter="ease-out duration-200"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="ease-in duration-200"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
        className="fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto bg-white shadow-lg"
      >
        {children}
      </Transition.Child>
      <Transition.Child
        enter="ease-out duration-0 "
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-0"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        onClick={() => setOpenNav && setOpenNav(false)}
      >
        <div className="fixed inset-0 z-40 bg-black bg-opacity-25" />
      </Transition.Child>
    </Transition>
  );
};

export default SideNav;
