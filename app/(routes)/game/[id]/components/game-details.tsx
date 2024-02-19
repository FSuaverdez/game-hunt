import { Tektur } from "next/font/google";
import { Star } from "lucide-react";
import parse from "html-react-parser";
import { Suspense } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { getGame } from "@/lib/rawg";
import GameTrailers from "./game-trailers";
import GameScreenShots from "./game-screenshots";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

interface GameDetailsProps {
  id: string;
}

const GameDetails = async ({ id }: GameDetailsProps) => {
  const game = await getGame(id);

  return (
    <div>
      <div
        style={{
          backgroundImage: game?.background_image
            ? `url(${game?.background_image})`
            : "",
        }}
        className="max-h-60 h-60 w-full rounded-2xl bg-cover bg-center bg-no-repeat"
      >
        <div className="h-full w-full bg-black/50 flex flex-col justify-center items-center">
          <div
            className={cn(
              "text-2xl lg:text-4xl font-bold flex justify-center items-center gap-x-4 w-fit hover:gap-x-8 transition-all",
              tektur.className
            )}
          >
            <h3>{game.name}</h3>
          </div>

          <div className="flex items-center justify-center gap-y-1 mt-2 flex-wrap max-w-lg">
            {game.platforms.map((platform: Record<string, any>) => (
              <Badge
                key={platform.platform.id}
                className="mr-1"
                variant="secondary"
              >
                {platform.platform.name}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-y-1 mt-3">
            <Badge>
              <Star className="inline-block w-4 h-4" fill="white" />
              <span className="font-bold ml-1">
                {game.rating} / {game?.rating_top}
              </span>
            </Badge>
          </div>
        </div>
      </div>
      <div className="mt-5">
        {game?.released && (
          <div
            className={cn(
              "text-xl lg:text-2xl font-bold flex justify-center items-center gap-x-4 w-fit hover:gap-x-8 transition-all",
              tektur.className
            )}
          >
            <h3>Release Date:</h3>
            <h3 className="text-muted-foreground">
              {new Date(game.released).toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </h3>
          </div>
        )}
        {game?.website && (
          <Link
            href={game.website}
            className={cn(
              "text-xl lg:text-2xl font-bold flex justify-center items-center gap-x-4 w-fit hover:gap-x-8 transition-all ",
              tektur.className
            )}
          >
            <h3>Website:</h3>
            <h3 className="text-muted-foreground hover:underline hover:text-primary">
              {game?.website}
            </h3>
          </Link>
        )}
        {game?.developers?.length > 0 && (
          <div
            className={cn(
              "text-xl lg:text-2xl font-bold flex justify-center items-center gap-x-4 w-fit hover:gap-x-8 transition-all",
              tektur.className
            )}
          >
            <h3>Developers:</h3>
            <h3 className="text-muted-foreground">
              {game?.developers
                ?.map((developer: Record<string, any>) => developer.name)
                .join(", ")}
            </h3>
          </div>
        )}
        {game?.genres?.length > 0 && (
          <div
            className={cn(
              "text-xl lg:text-2xl font-bold flex justify-center items-center gap-x-4 w-fit hover:gap-x-8 transition-all",
              tektur.className
            )}
          >
            <h3>Genres:</h3>
            <h3 className="text-muted-foreground">
              {game?.genres
                ?.map((genre: Record<string, any>) => genre.name)
                .join(", ")}
            </h3>
          </div>
        )}
        <div
          className={cn(
            "text-xl lg:text-2xl font-bold flex flex-col justify-center items-center gap-x-4 w-fit hover:gap-x-8 transition-all mt-5",
            tektur.className
          )}
        >
          <h3>About</h3>
        </div>
        <p className="mt-2 text-muted-foreground description">
          {parse(game.description)}
        </p>
        <Suspense
          fallback={
            <div className="flex overflow-hidden gap-x-4 mt-5 gap-y-2 ">
              <Skeleton className=" h-60 w-96" />
              <Skeleton className=" h-60 w-96" />
              <Skeleton className=" h-60 w-96" />
            </div>
          }
          key={id}
        >
          <GameScreenShots id={id} />
        </Suspense>
        <Suspense
          fallback={
            <div className="flex overflow-hidden gap-x-4 mt-5 gap-y-2 ">
              <Skeleton className=" h-60 w-96" />
              <Skeleton className=" h-60 w-96" />
              <Skeleton className=" h-60 w-96" />
            </div>
          }
          key={id}
        >
          <GameTrailers id={id} />
        </Suspense>
      </div>
    </div>
  );
};

export default GameDetails;
