

"use client";

import React from 'react';
import Link from 'next/link'; 
import { authClient } from "@/lib/auth-client";
import Image from 'next/image';

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  // console.log(user);

  const handleSignout = async () => {
    await authClient.signOut();
  };

  return (
    <div className="flex items-center gap-3 text-sm">
      {user ? (
        <div className="flex items-center gap-3">
          <Link href={"/profile"}>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
               <Image
                src={user?.image as string || "/profie-picture.jpg"}
                alt="Avatar"
                width={40}
             height={40}
             className="w-full h-full object-cover rounded-full"
             />
              </div>
            </div>
          </Link>

          <span className="font-semibold text-gray-700">{user?.name}</span>

          <button onClick={handleSignout} className="btn btn-error btn-xs text-white">
            Signout
          </button>
        </div>
      ) : (
        <div className="flex gap-1.5 sm:gap-3 items-center shrink-0">
          <Link
            href="/signin"
            className="px-2 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors whitespace-nowrap"
          >
            সাইন ইন
          </Link>
          <Link
            href="/signup"
            className="px-2.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-sm font-medium bg-[#00a859] text-white rounded-md hover:bg-emerald-700 transition-colors whitespace-nowrap"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;