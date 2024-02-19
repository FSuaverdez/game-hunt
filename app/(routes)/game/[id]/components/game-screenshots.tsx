import { Tektur } from "next/font/google";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { getGameScreenshots } from "@/lib/rawg";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

interface GameScreenShotsProps {
  id: string;
}

const GameScreenShots = async ({ id }: GameScreenShotsProps) => {
  const screenshots = await getGameScreenshots(id);

  if (!screenshots) return null;

  if (screenshots.length === 0) return null;

  return (
    <div className="relative mt-10">
      <div
        className={cn(
          "text-xl lg:text-2xl font-bold flex justify-center items-center gap-x-4 w-fit hover:gap-x-8 transition-all",
          tektur.className
        )}
      >
        <h3>Screenshots</h3>
      </div>
      <Carousel className="">
        <CarouselContent className="">
          {screenshots?.map(
            (screenshot: Record<string, any>, index: number) => (
              <div key={screenshot.id}>
                <CarouselItem key={index} className="basis-1/3">
                  <Link href={screenshot.image} passHref target="_blank">
                    <Image
                      src={screenshot.image}
                      blurDataURL="https://i.imgur.com/SlLQ79z.png"
                      alt={`Screenshot-${index}`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      quality={50}
                      className="rounded-2xl object-cover object-center w-full h-60 min-w-96"
                      placeholder="blur"
                    />
                  </Link>
                </CarouselItem>
              </div>
            )
          )}
        </CarouselContent>
        <div className="flex gap-x-10 justify-center mt-10">
          <CarouselPrevious className="relative inset-0 h-10 w-10 bg-primary" />
          <CarouselNext className="relative inset-0 h-10 w-10 bg-primary" />
        </div>
      </Carousel>
    </div>
  );
};

export default GameScreenShots;
