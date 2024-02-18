import { cn } from "@/lib/utils";
import { Tektur } from "next/font/google";
import Link from "next/link";

import { ArrowRight } from "lucide-react";
import { getTop } from "@/lib/rawg";

import GameCard from "@/components/game-card";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const HomeTop = async () => {
  const { results } = await getTop(1, 4);

  return (
    <div className="flex flex-col justify-center gap-y-4">
      <Link
        href="/trending"
        className={cn(
          "text-2xl lg:text-3xl font-bold flex justify-center items-center gap-x-4 cursor-pointer w-fit hover:gap-x-8 transition-all",
          tektur.className
        )}
      >
        <h3>Top Games of All Time</h3>
        <ArrowRight className="text-4xl" />
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-x-5 gap-y-5  px-5 md:px-2 ">
        {results.map((game: Record<string, any>) => {
          return <GameCard key={game.id} game={game} />;
        })}
      </div>
    </div>
  );
};

export default HomeTop;
