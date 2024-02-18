import { Star } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "./ui/skeleton";

const GameCardLoading = () => {
  return (
    <Card className="border-none bg-[#161616] transition-all col-span-1 flex justify-between flex-col h-full">
      <CardHeader className="p-0">
        <div className="relative h-full max-h-52 md:min-h-36 w-full ">
          <Skeleton className="rounded-t-2xl object-cover object-center min-h-36 h-full" />
        </div>
      </CardHeader>
      <CardContent className="p-4 h-full flex flex-col justify-between">
        <CardTitle className="mb-2">
          <Skeleton className="h-6 w-full" />
          <div className="flex items-center gap-y-1 mt-2">
            <Skeleton className="h-4 w-4" />
            <span className="text-sm text-muted-foreground ml-1">
              <Skeleton className="h-4 w-10" />
            </span>
          </div>
        </CardTitle>
        <CardContent className="flex flex-col gap-y-2 justify-between p-0">
          <div className="flex items-center flex-wrap gap-y-1">
            {[1, 2, 3].map((number) => (
              <Badge key={number} className="mr-1" variant="secondary">
                <Skeleton className="h-3 w-8" />
              </Badge>
            ))}
          </div>
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default GameCardLoading;
