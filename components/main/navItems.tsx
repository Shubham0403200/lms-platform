'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { NavigationData } from '@/data';
import useUserStore from '@/app/store/authStore';

interface NavItemsProps {
  closeSheet?: () => void;
}

const NavItems: React.FC<NavItemsProps> = ({ closeSheet }) => {
  const pathname = usePathname();

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(useUserStore.getState().isLoggedIn);
  }, []);

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-4 md:gap-2 md:flex-row">
      {NavigationData.map((link) => {
        const isActive = pathname === link.route;
        
        if (link.name === 'dashboard' && !loggedIn ) {
          return null;
        }


        return (
          <li
            key={link.route}
            onClick={closeSheet}
            className={`${
              isActive && 'text-slate-950'
            }  font-medium whitespace-nowrap text-sm ml-2 md:text-h6-clamp capitalize text-slate-700  `}
          >
            <Link href={link.route}>{link.name}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems