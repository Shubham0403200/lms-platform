"use client";
import { useEffect, useState } from "react";
import { useSearch } from "@/backend/actions/useSearch";
import { useRouter } from "next/navigation";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { File, Loader2 } from "lucide-react";
import Link from "next/link";

interface SearchCommandProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  userRole: string | undefined; 
}

const SearchCommand: React.FC<SearchCommandProps> = ({ isOpen, setIsOpen, userRole }) => {
  const { query, setQuery, results, isSearching } = useSearch();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const isUserRoleValid = (role: string | undefined): role is string => role !== undefined;

    if (isUserRoleValid(userRole) && ['Admin', 'Developer', 'Teacher'].includes(userRole)) { 
      const down = (e: KeyboardEvent) => {
        if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          setIsOpen(true);
        }
      };
      document.addEventListener("keydown", down);
      return () => document.removeEventListener("keydown", down);
    }
  }, [setIsOpen, userRole]);

  if (!isMounted) {
    return null;
  }

  return (
    <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
      <CommandInput
        placeholder="Search Name, Course, Events, Blogs..."
        value={query}
        onValueChange={setQuery}
      />
      <CommandList>
        {isSearching ? (
          <div className="flex items-center justify-center p-2 w-full" >
              <Loader2 className='w-4 h-4 mr-2 animate-spin' />
              <span className="text-h6-clamp">Loading</span>
          </div>
        ) : (
          <>
            <CommandEmpty>No results found.</CommandEmpty>
            {results && (
              <>
                {results.users.length > 0 && (
                  <CommandGroup heading="Users">
                    {results.users.map((user: any) => (
                      <Link
                        key={user._id}
                        href={`/dashboard/users/${user.username}`}
                      >                      
                        <CommandItem
                            value={user.username}
                        >
                            <File className="mr-2 h-4 w-4" />
                            <span>{user.username}</span>
                        </CommandItem>
                      </Link>
                    ))}
                  </CommandGroup>
                )}

                {results.events.length > 0 && (
                  <CommandGroup heading="Events">
                    {results.events.map((event: any) => (
                      <Link
                        key={event._id}
                        href={`/dashboard/events/${event._id}`}
                      >                      
                        <CommandItem
                            value={event.eventName}
                        >
                            <File className="mr-2 h-4 w-4" />
                            <span>{event.eventName}</span>
                        </CommandItem>
                      </Link>
                    ))}
                  </CommandGroup>
                )}

                {results.courses.length > 0 && (
                  <CommandGroup heading="Courses">
                    {results.courses.map((course: any) => (
                      <Link
                        key={course._id}
                        href={`/dashboard/courses/${course._id}`}
                      >                      
                        <CommandItem
                            value={course.title}
                        >
                            <File className="mr-2 h-4 w-4" />
                            <span>{course.title}</span>
                        </CommandItem>
                      </Link>
                    ))}
                  </CommandGroup>
                )}

                {results.blogs.length > 0 && (
                  <CommandGroup heading="Blogs">
                    {results.blogs.map((blog: any) => (
                      <Link
                        key={blog._id}
                        href={`/dashboard/blogs/${blog._id}`}
                      >                      
                        <CommandItem
                            value={blog.blogTitle}
                        >
                            <File className="mr-2 h-4 w-4" />
                            <span>{blog.blogTitle}</span>
                        </CommandItem>
                      </Link>
                    ))}
                  </CommandGroup>
                )}

                {results.mockTests.length > 0 && (
                  <CommandGroup heading="Mock Tests">
                    {results.mockTests.map((mockTest: any) => (
                      <Link
                        key={mockTest._id}
                        href={`/dashboard/mockTest/${mockTest._id}`}
                      >                      
                        <CommandItem
                            value={mockTest.title}
                        >
                            <File className="mr-2 h-4 w-4" />
                            <span>{mockTest.title}</span>
                        </CommandItem>
                      </Link>
                    ))}
                  </CommandGroup>
                )}
              </>
            )}
          </>
        )}
      </CommandList>
    </CommandDialog>
  );
};

export default SearchCommand;
