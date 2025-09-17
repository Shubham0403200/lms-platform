import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  _id: string;
  username: string;
}

interface Event {
  _id: string;
  eventName: string;
}

interface Course {
  _id: string;
  title: string;
}

interface Blog {
  _id: string;
  blogTitle: string;
}

interface MockTest {
  _id: string;
  title: string;
}

interface SearchResults {
  users: User[];
  events: Event[];
  courses: Course[];
  blogs: Blog[];
  mockTests: MockTest[];
}


export const useSearch = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResults>({
    users: [],
    events: [],
    courses: [],
    blogs: [],
    mockTests: [],
  });
  const [isSearching, setIsSearching] = useState<boolean>(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query) {
        setIsSearching(true);
        axios.get("/api/searchCommand", {
            params: { query },
          })
          .then((res) => {
            setResults(res.data.data); // Assuming `res.data.data` contains the search results
            setIsSearching(false);
          })
          .catch((err) => {
            console.error(err);
            setIsSearching(false);
          });
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return { query, setQuery, results, isSearching };
};
