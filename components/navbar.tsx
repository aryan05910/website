'use client';
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
        <a href="/" className="flex items-center hover:text-gray-500 transition-colors">Home</a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
        <a href="#" className="flex items-center hover:text-gray-500 transition-colors">About</a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
        <a href="#" className="flex items-center hover:text-gray-500 transition-colors">Projects</a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
        <a href="#" className="flex items-center hover:text-gray-500 transition-colors">Contact</a>
      </Typography>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <Navbar fullWidth className="w-full bg-black text-white px-6 py-6 shadow-md rounded-none">
      <div className="flex items-center justify-between text-white">
        {/* LEFT side: Logo and name */}
        <div className="flex items-center space-x-2">
          <img src="/favicon.ico" alt="Logo" className="h-8 w-8" />
          <Typography variant="h6" className="text-xl font-bold">Aryan</Typography>
        </div>

        {/* RIGHT side: Nav links (desktop) + Menu icon (mobile) */}
        <div className="flex items-center">
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-2 h-6 w-6 text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
      </div>

      {/* Mobile Nav */}
      <Collapse open={openNav} className="lg:hidden">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
