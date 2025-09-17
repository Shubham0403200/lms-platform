import useUserStore from "@/app/store/authStore";
import { useUserContext } from "@/backend/actions/userContext";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {DropdownMenu,DropdownMenuContent,DropdownMenuGroup,DropdownMenuItem,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuTrigger,} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserNav = () => {  

  const { user } = useUserContext();
  const logout = useUserStore((state) => state.logout);
  const router = useRouter(); 

  const handleLogout = () => {
    logout();
    router.push("/");
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-9 w-9">
            <AvatarFallback>{user?.username.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal overflow-hidden">
          <div className="flex flex-col space-y-1">
            <p className="text-sm line-clamp-1  font-medium leading-none">{user?.username}</p>
            <p className="text-xs line-clamp-1  leading-none text-muted-foreground">
              {user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/dashboard/subscription">
            <DropdownMenuItem className='text-xs font-medium' >
              Subscriptions
            </DropdownMenuItem>
          </Link>
          <Link href='/dashboard/settings'>
            <DropdownMenuItem className='text-xs font-medium' >
              Profile
            </DropdownMenuItem>
          </Link>
          <Link href='/dashboard/orders'>
            <DropdownMenuItem className='text-xs font-medium' >
              Orders
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='text-xs font-medium'  onClick={handleLogout} >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserNav;
