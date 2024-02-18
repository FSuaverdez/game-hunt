import { cn } from "@/lib/utils";
import { Tektur } from "next/font/google";
import HomeTrending from "./components/home-trending";
import HomeTop from "./components/home-top";
import { Suspense } from "react";
import HomeListLoading from "./components/home-list-loading";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <div className="px-2 md:px-6 lg:px-10 min-h-screen pt-10">
      <div className="mb-10">
        <h2
          className={cn(
            "text-2xl md:text-3xl lg:text-4xl font-bold",
            tektur.className
          )}
        >
          Welcome to <span className="text-primary">GameHunt</span>
        </h2>
        <p className="mt-1 lg:mt-2 md:text-lg text-muted-foreground">
          GameHunt is a website that allows you to search for games, find
          trending games, and see the top games of all time.
        </p>
      </div>
      <div className="flex flex-col gap-y-10 md:gap-y-6 h-full">
        <Suspense
          fallback={<HomeListLoading href="/trending" text="Trending Games" />}
        >
          <HomeTrending />
        </Suspense>
        <Suspense
          fallback={
            <HomeListLoading href="/top-games" text="Top Games of All Time" />
          }
        >
          <HomeTop />
        </Suspense>
      </div>
    </div>
  );
}
