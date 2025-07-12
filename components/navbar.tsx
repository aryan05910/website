// components/navbar.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import { Navbar, Collapse, IconButton } from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
      <li>
        <Link href="/" className="block p-1 font-medium text-blue-gray hover:text-gray-500 transition-colors">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" className="block p-1 font-medium text-blue-gray hover:text-gray-500 transition-colors">
          About
        </Link>
      </li>
      <li>
        <Link href="/projects" className="block p-1 font-medium text-blue-gray hover:text-gray-500 transition-colors">
          Projects
        </Link>
      </li>
      <li>
        <Link href="/contact" className="block p-1 font-medium text-blue-gray hover:text-gray-500 transition-colors">
          Contact
        </Link>
      </li>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 960) setOpenNav(false);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Navbar fullWidth {...({} as React.ComponentProps<typeof Navbar>)} className="w-full bg-black text-white px-6 py-6 shadow-md rounded-none">
      <div className="flex items-center justify-between">
        {/* Left: Logo + Name */}
        <div className="flex items-center space-x-2">
          <img src="/favicon.ico" alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-white">Aryan</span>
        </div>

        {/* Right: Nav links (desktop) + hamburger (mobile) */}
        <div className="flex items-center">
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-2 h-6 w-6 text-white lg:hidden"
            ripple={false}
            onClick={() => setOpenNav((o) => !o)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
      </div>

      {/* Mobile menu */}
      <Collapse open={openNav} className="lg:hidden">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
