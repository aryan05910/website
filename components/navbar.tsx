// components/navbar.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from '@material-tailwind/react';
import { Navbar, Collapse, IconButton } from '@material-tailwind/react';
import { MTTypography as Typography } from './MTTypography';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
      <li>
        <Typography variant="small" color="blue-gray" className="p-1 font-medium">
        <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
          <Link href="/" className="flex items-center hover:text-gray-500 transition-colors">
            Home
          </Link>
        </Typography>
      </li>
      {}
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Navbar fullWidth className="w-full bg-black text-white px-6 py-6 shadow-md rounded-none">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/favicon.ico" alt="Logo" className="h-8 w-8" />
         <Typography variant="h6" className="text-xl font-bold">
         <Typography variant="h6" className="text-xl font-bold">
            Aryan
          </Typography>
        </div>
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

      <Collapse open={openNav} className="lg:hidden">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
