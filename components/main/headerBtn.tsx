import Link from "next/link";
import { Button } from "../ui/button";
import { ShoppingCartIcon } from "lucide-react";

const HeaderBtn = () => {

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

      <Link href="/login" title="Login to your account">
        <Button
          size="sm"
          variant="destructive"
          className="rounded-full px-5 py-2 bg-blue-500 text-white hover:bg-blue-600 text-xs font-medium shadow-sm hover:shadow-md transition"
        >
          Login
        </Button>
      </Link>
    </div>
  );
};

export default HeaderBtn;
