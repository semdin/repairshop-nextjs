import { HomeIcon, File, UsersRound } from "lucide-react";
import Link from "next/link";

import { NavButton } from "@/components/NavButton";

export function Header() {
  return (
    <header className="animate-slide sticky top-0 z-20 h-12 border-b bg-background p-2">
      <div className="flex h-8 w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <NavButton href="/home" label="Home" icon={HomeIcon} />
          <Link href="/home" className="ml-0 flex justify-center gap-2">
            <h1 className="m-0 hidden text-xl font-bold sm:block">
              Computer Repair Shop
            </h1>
          </Link>
        </div>
        <div className="flex items-center">
          <NavButton href="/tickets" label="Tickets" icon={File} />
          <NavButton href="/customers" label="Customers" icon={UsersRound} />
        </div>
      </div>
    </header>
  );
}
