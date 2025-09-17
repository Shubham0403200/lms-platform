'use client';
import { BellRingIcon, Loader2, Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import MobileSide from './mobile-side';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';
import SearchCommand from './search-command';
import { Notifications } from './notifications';
import { useUserContext } from '@/backend/actions/userContext'; 
import useNotifications from '@/lib/fetchNotification';
import { Notify } from '@/backend/models/Notifications';
import UserNav from './user-nav';

const Navbar = () => {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const { user, role, isLoggedIn } = useUserContext(); 
  const userId = user?.id;

  useEffect(() => {
    if (isLoggedIn) {
      setLoading(false);
    }
  }, [isLoggedIn]);

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const getTitle = () => {
    if (pathname === '/dashboard') {
      return 'Dashboard';
    } else if (pathname === '/dashboard/my-courses') { 
      return 'Courses';
    } else if (pathname === '/dashboard/my-events') { 
      return 'Events';
    } else if (pathname.startsWith('/dashboard')) {
      const pathSegments = pathname.split('/').filter(Boolean);
      return pathSegments[1] ? pathSegments[1] : 'Dashboard';
    } 
    return 'Dashboard';
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notify[]>([]); 
  const allNotifications = useNotifications(userId); 

  useEffect(() => {
    setNotifications(allNotifications); 
  }, [allNotifications]);

  const refreshNotifications = () => {
    setNotifications(allNotifications); 
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const isUserRoleValid = (role: string | undefined): role is string => role !== undefined;

  return (
    <div className="relative flex items-center p-3 border-b bg-white justify-between">
      <div className="absolute top-4 left-4 flex md:hidden">
        <MobileSide />
      </div>
      <h5 className="ml-8 md:ml-0 text-h4-clamp font-semibold capitalize">
        {getTitle()}
      </h5>
      {loading ? (
        <Loader2 className="w-3 h-3 animate-spin" />
      ) : (
        <div className="flex items-center gap-x-2">
          {isUserRoleValid(role) && ['Admin', 'Developer', 'Teacher'].includes(role) && (
            <Button size="sm" variant="outline" className='p-2' onClick={handleSearchClick}>
              <Search className="w-4 h-4" />
            </Button>
          )}
          <SearchCommand isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} userRole={role} />
          <Button size="sm" variant="outline" className='relative p-2' onClick={toggleDrawer}>
            <BellRingIcon className="w-4 h-4" />
            <span className="absolute w-6 h-6 -top-2 -right-2 bg-red-500 rounded-full text-xs p-1 text-white ">
              {notifications.filter((not:any) => not.status === "UnRead").length}
            </span>
          </Button>
          {isDrawerOpen && (
            <Notifications 
              refreshNotifications={refreshNotifications} 
              isOpen={isDrawerOpen} 
              userId={userId} 
              onClose={toggleDrawer} 
              notifications={notifications} 
            />
          )}
          {/* If user is not Admin, show their role */}
          {pathname === '/management' && role !== 'Admin' && role && (
            <div className="ml-4 text-sm text-gray-600">
              {role}
            </div>
          )}
          <UserNav />
        </div>
      )}
    </div>
  );
};

export default Navbar;
