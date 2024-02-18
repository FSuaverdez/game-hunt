"use client";

import Link from "next/link";
import {
  ArrowUpSquare,
  Flame,
  HomeIcon,
  Search,
  TrendingUp,
} from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { Tektur } from "next/font/google";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const routes = [
  {
    href: "/",
    label: "Home",
    icon: HomeIcon,
    color: "text-primary",
  },
  {
    href: "/search",
    label: "Search Games",
    icon: Search,
    color: "text-primary",
  },
  {
    href: "/trending",
    label: "Trending Games",
    icon: Flame,
    color: "text-primary",
  },
  {
    href: "/top-games",
    label: "Top Games of All Time",
    icon: ArrowUpSquare,
    color: "text-primary",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full text-white">
      <div className="px-10 py-2">
        <Link href="/" className="flex items-center text w-fit">
          <span className="border-2 md:border-4 rounded-2xl border-primary px-2 py-1">
            <h1
              className={cn("text-lg md:text-2xl font-bold", tektur.className)}
            >
              GameHunt
            </h1>
          </span>
        </Link>
        <div className="space-y-1 mt-10">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
