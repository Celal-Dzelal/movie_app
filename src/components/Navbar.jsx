import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContextArea } from "../context/AuthContext";
import avatar from "../assets/icons/avatar.png";

export default function Navbar() {
  const { logOut, currentUser } = useContext(AuthContextArea);

  return (
    <Disclosure as="nav" className="bg-[#080705]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <Link className="pr-2 text-2xl font-semibold text-[#C3AC44]" to="/">
            DVS Cinema
          </Link>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <h5 className="mr-2 capitalize text-[#5A0A09] font-bold">
              {currentUser?.displayName}
            </h5>
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src={currentUser?.photoURL || avatar}
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <Link
                    to="/register"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Register
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Login
                  </Link>
                </MenuItem>
                <MenuItem>
                  <span
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden cursor-pointer"
                    onClick={() => logOut()}
                  >
                    Log out
                  </span>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
