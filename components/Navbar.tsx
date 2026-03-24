"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", exact: true },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/creative", label: "Creative" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-3 left-4 z-50">
      <nav className="backdrop-blur-xl bg-white dark:bg-black rounded-md px-2 py-1 shadow-sm border-2 border-black dark:border-white">
        <ul className="flex items-center space-x-1">
          {navItems.map(({ href, label, exact }) => {
            const isActive = exact
              ? pathname === href
              : pathname.startsWith(href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "inline-flex h-10 items-center justify-center px-4 py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground",
                    isActive && "text-foreground"
                  )}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
