// import { User } from "@/backend/models/User";
// import { create } from "zustand";
// import { persist } from "zustand/middleware";
// import Cookies from "js-cookie";

// interface AuthState {
//   user: User | null;
//   token: string | null;
//   isLoggedIn: boolean;
//   setUser: (user: User | null) => void;
//   setToken: (token: string | null) => void;
//   setIsLoggedIn: (status: boolean) => void;
//   login: (user: User, token: string) => void;
//   logout: () => void;
// }

// const useUserStore = create<AuthState>()(
//   persist(
//     (set) => ({
//       user: null,
//       token: null,
//       isLoggedIn: false,
//       setUser: (user) => set({ user }),
//       setToken: (token) => {
//         set({ token });
//         if (token) {
//           Cookies.set("ielts-token", token, { expires: 1 }); // Set token in cookie, expires in 1 day
//         } else {
//           Cookies.remove("ielts-token"); // Remove token from cookie
//         }
//       },
//       setIsLoggedIn: (status) => set({ isLoggedIn: status }),
//       login: (user, token) => {
//         console.log("auth store token: ", token);
//         console.log("auth store user: ", user);
//         set({ user, token, isLoggedIn: true });
//         sessionStorage.setItem("ielts-101", JSON.stringify({ user, token }));
//         Cookies.set("ielts-token", token, { expires: 1 });
//       },
//       logout: () => {
//         set({ user: null, token: null, isLoggedIn: false });
//         sessionStorage.removeItem("ielts-101");
//         Cookies.remove("ielts-token", { path: '', domain: 'http://localhost:3000' });
//       },
//     }),
//     {
//       name: "ielts-101",
//       getStorage: () => sessionStorage,
//     }
//   )
// );

// export default useUserStore;

import { User } from "@/backend/models/User";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  setIsLoggedIn: (status: boolean) => void;
  login: (user: User, token: string) => void;
  logout: () => void;
}

const useUserStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isLoggedIn: false,
      setUser: (user) => set({ user }),
      setToken: (token) => {
        set({ token });
        if (token) {
          localStorage.setItem("ielts-token", token);
        } else {
          localStorage.removeItem("ielts-token");
        }
      },
      setIsLoggedIn: (status) => set({ isLoggedIn: status }),
      login: (user, token) => {
        set({ user, token, isLoggedIn: true });
        localStorage.setItem("ielts-token", token);
      },
      logout: () => {
        set({ user: null, token: null, isLoggedIn: false });
        localStorage.removeItem("ielts-token");
      },
    }),
    {
      name: "ielts-101",
      getStorage: () => localStorage,
    }
  )
);

export default useUserStore;
