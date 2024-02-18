import { Tektur } from "next/font/google";

import { cn } from "@/lib/utils";
import { getGameTrailers } from "@/lib/rawg";
import TrailersCarousel from "./trailers-carousel";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

interface GameTrailersProps {
  id: string;
}

const GameTrailers = async ({ id }: GameTrailersProps) => {
  const trailers = await getGameTrailers(id);

  if (!trailers) return null;

  if (trailers.length === 0) return null;

  return (
    <div className="relative mt-10">
      <div
        className={cn(
          "text-xl lg:text-2xl font-bold flex justify-center items-center gap-x-4 w-fit hover:gap-x-8 transition-all",
          tektur.className
        )}
      >
        <h3>Trailers</h3>
      </div>
      <TrailersCarousel trailers={trailers} />
    </div>
  );
};

export default GameTrailers;
