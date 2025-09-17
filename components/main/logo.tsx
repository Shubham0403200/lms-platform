import { cn } from "@/lib/utils";
import mainLogo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  location?: string;
}

export const Logo: React.FC<LogoProps> = ({ location }) => {
  const isMobile = location === "mobileNav";

  return (
    <Link
      href="/"
      title="Go to homepage"
      className="flex items-center gap-2"
    >
      <Image
        src={mainLogo}
        alt="IELTS Strategies 101 logo"
        width={48}
        height={48}
        className="shrink-0"
      />
      <div
        className={cn(
          "flex-col mb-1",
          isMobile ? "flex" : "hidden lg:flex"
        )}
      >
        <h1 className="font-bold text-2xl leading-none">IELTS</h1>
        <h4 className="font-semibold text-[0.65rem] tracking-wide">
          STRATEGIES 101
        </h4>
      </div>
    </Link>
  );
};
