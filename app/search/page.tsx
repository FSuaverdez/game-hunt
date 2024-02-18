import { Tektur } from "next/font/google";

import { cn } from "@/lib/utils";
import SearchInput from "./components/search-input";
import { Suspense } from "react";
import GamesListLoading from "@/components/games-list-loading";
import SearchGamesList from "./components/search-games-list";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Search({
  searchParams,
}: {
  searchParams: { q: string; page: string };
}) {
  return (
    <div className="px-2 md:px-6 lg:px-10 min-h-screen pt-10">
      <div
        className={cn(
          "text-2xl lg:text-3xl font-bold flex justify-center items-center gap-x-4 w-fit hover:gap-x-8 transition-all",
          tektur.className
        )}
      >
        <h3>Search Games</h3>
      </div>
      <SearchInput query={(searchParams?.q as string) || ""} />
      <div className="mt-5">
        <Suspense
          fallback={<GamesListLoading numberOfGames={8} />}
          key={searchParams?.page as string}
        >
          <SearchGamesList
            query={searchParams?.q || ""}
            page={Number(searchParams?.page) || 1}
          />
        </Suspense>
      </div>
    </div>
  );
}
