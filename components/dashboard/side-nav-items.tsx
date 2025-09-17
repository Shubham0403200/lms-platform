'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { DashboardRoutes } from '@/data';
import useUserStore from '@/app/store/authStore';
import { Loader2 } from 'lucide-react';

interface RouteItem {
  name: string;
  route: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface SideNavItemsProps {
  closeSheet?: () => void;
}

const SideNavItems: React.FC<SideNavItemsProps> = ({ closeSheet }) => {

  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [filteredRoutes, setFilteredRoutes] = useState<RouteItem[]>([]);
  const user = useUserStore((state: any) => state.user);

  useEffect(() => {
    if (user) {
      const roles = user.role || 'User'; 

      const updatedRoutes = DashboardRoutes.filter((link) => {
        switch (link.name) {
          case 'dashboard':
          case 'my Courses':
          case 'orders':
          case 'my Events':
            return true; 
          case 'admin':
          case 'work':  
          case 'analysis':
          case 'users':
            return roles.includes('Admin') || roles.includes('Developer');
          case 'settings':
          case 'mockTest':
          case 'Home':
            return true;
          case 'events':
          case 'courses':
          case 'blogs':
            return roles.includes('Admin') || roles.includes('Teacher') || roles.includes('Developer');
          default:
            return false; 
        }
      });

      setFilteredRoutes(updatedRoutes);
    }
    setMounted(true);
  }, [user]);

  if (!mounted) {
    return (
      <div className='w-full flex justify-center items-center'>
        <Loader2 className='animate-spin w-4 h-4' />
      </div> 
    )
  }; 

  return (
    <ul className="flex w-full flex-col items-start">
      {filteredRoutes.map((link) => {
        const newPathname = pathname.split('/');
        const linkLastSegment = link.route.split('/').pop(); 

        const isActive = newPathname[2] === linkLastSegment;
        const Icon = link.icon;

        return (
          <Link
            key={link.route}
            href={link.route}
            onClick={closeSheet}
            className={`${
              isActive ? 'bg-slate-200 text-slate-900 rounded-md' : 'text-slate-700'
            } font-medium whitespace-nowrap flex items-center text-normal capitalize hover:bg-slate-200 hover:rounded-md w-full pl-4 py-[0.23rem] transition-colors duration-100`}
          >
            <Icon className='h-4 w-4 mr-4' />
            <span className='text-[0.9rem]'>{link.name}</span>
          </Link>
        );
      })}
    </ul>
  );
};

export default SideNavItems;
