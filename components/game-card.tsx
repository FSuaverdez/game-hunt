import { Star } from "lucide-react";
import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const GameCard = ({ game }: { game: Record<string, any> }) => {
  return (
    <Link key={game.id} href={`/game/${game.id}`}>
      <Card className="border-none bg-[#161616] hover:scale-105 transition-all col-span-1 flex justify-between flex-col h-full">
        <CardHeader className="p-0">
          <div className="relative h-full max-h-52 md:min-h-36 w-full ">
            <Image
              src={game.background_image}
              alt={game.name}
              fill
              sizes="100vw"
              className="rounded-t-2xl object-cover object-center"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 h-full flex flex-col ">
          <CardTitle className="mb-2">
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <p className="text-xl font-bold truncate">{game.name}</p>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm max-w-xs text-center">{game.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <div className="flex items-center gap-y-1">
              <Star
                className="inline-block text-primary w-4 h-4"
                fill="#ea580c"
              />
              <span className="text-sm text-muted-foreground ml-1">
                {game.rating}/{game?.rating_top}
              </span>
            </div>
          </CardTitle>
          <CardContent className="flex flex-col gap-y-2 justify-between p-0">
            <div className="flex items-center flex-wrap gap-y-1">
              {game.parent_platforms
                .slice(0, 3)
                .map((platform: Record<string, any>) => (
                  <Badge
                    key={platform.platform.id}
                    className="mr-1"
                    variant="secondary"
                  >
                    {platform.platform.name}
                  </Badge>
                ))}
              {game.parent_platforms.length > 3 && (
                <Badge className="mr-1" variant="secondary">
                  +{game.parent_platforms.length - 3}
                </Badge>
              )}
            </div>
          </CardContent>
        </CardContent>
      </Card>
    </Link>
  );
};

export default GameCard;
