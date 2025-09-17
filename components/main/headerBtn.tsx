"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Loader2, ShoppingCartIcon } from "lucide-react";
import useUserStore from "@/app/store/authStore";

const HeaderBtn = () => {
  const [mounted, setMounted] = useState(false);
  const loggedIn = useUserStore((state) => state.isLoggedIn);
  const logout = useUserStore((state) => state.logout);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex items-center gap-3 md:gap-4">
      {/* Cart */}
      <Link
        href="/cart"
        title="Go to Cart"
        className="rounded-full p-2 hover:bg-muted transition"
      >
        <ShoppingCartIcon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
      </Link>

      {/* Login / Logout */}
      {mounted ? (
        loggedIn ? (
          <Button
            size="sm"
            onClick={logout}
            className="rounded-full px-5 py-2 text-xs font-medium shadow-sm hover:shadow-md transition"
          >
            Logout
          </Button>
        ) : (
          <Link href="/login" title="Login to your account">
            <Button
              size="sm"
              variant="destructive"
              className="rounded-full px-5 py-2 bg-blue-500 text-white hover:bg-blue-600 text-xs font-medium shadow-sm hover:shadow-md transition"
            >
              Login
            </Button>
          </Link>
        )
      ) : (
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-muted">
          <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
        </div>
      )}
    </div>
  );
};

export default HeaderBtn;
