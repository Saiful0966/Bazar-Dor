
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavLinks from './NavLinks';
import UserInfo from './UserInfo';

  // Date
const Navbar = () => {
  const currentDate = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className=" sticky top-0 z-50 bg-white w-full bg-[#f9fafb] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 py-2.5 sm:py-4 flex items-center justify-between gap-1 sm:gap-4">
        {/* Logo &  Date */}
        <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 shrink">
          <Link href="/" className="flex items-center gap-1.5 sm:gap-3 min-w-0">
            {/* icon  */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#00a859] rounded-lg flex items-center justify-center p-1 sm:p-1.5 shrink-0">
              <Image
                src="/logo-icon.png"
                alt="Logo Image"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <span className="text-base sm:text-xl font-bold text-gray-900 block leading-tight whitespace-nowrap">
                বাজার দর
              </span>
              <span className="text-[9px] sm:text-xs text-gray-500 block truncate max-w-[100px] xs:max-w-[130px] sm:max-w-none">
                {currentDate}
              </span>
            </div>
          </Link>
        </div>

        {/*  Buttons */}
        <UserInfo/>
        
      </div>

      {/* Navigation Links */}
      <NavLinks />

    </header>
  );
};

export default Navbar;