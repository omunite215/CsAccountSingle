import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import MessageDropdown from "./MessageDropdown";
import NotificationsDropDown from "./NotificationsDropDown";
import UserDropdown from "./UserDropdown";
import { ModeToggle } from "./theme-switch";

const SiteHeader = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex items-center justify-start">
          <Link
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "text-2xl font-bold text-primary"
            )}
            href="/"
          >
            <Image
              src="/logo/logo.png"
              width={28}
              height={28}
              priority
              alt="logo"
              className="object-contain"
            />
            &nbsp;ComSec360
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-3">
            <ModeToggle />
            <NotificationsDropDown />
            <MessageDropdown />
            <UserDropdown />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
