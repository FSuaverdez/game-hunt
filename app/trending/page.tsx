import { Tektur } from "next/font/google";

import { cn } from "@/lib/utils";
import TrendingGamesList from "./components/trending-games-list";
import { Suspense } from "react";
import GamesListLoading from "@/components/games-list-loading";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Trending({
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | number | undefined };
}) {
  return (
    <div className="px-2 md:px-6 lg:px-10 min-h-screen pt-10">
      <div
        className={cn(
          "text-2xl lg:text-3xl font-bold flex justify-center items-center gap-x-4 w-fit hover:gap-x-8 transition-all",
          tektur.className
        )}
      >
        <h3>Trending Games</h3>
      </div>
      <div className="mt-5">
        <Suspense
          fallback={<GamesListLoading />}
          key={searchParams?.page as string}
        >
          <TrendingGamesList page={Number(searchParams?.page) || 1} />
        </Suspense>
      </div>
    </div>
  );
}
