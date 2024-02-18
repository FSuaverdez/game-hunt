import { cn } from "@/lib/utils";
import { Tektur } from "next/font/google";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import GameCardLoading from "@/components/game-card-loading";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const HomeListLoading = async ({
  href,
  text,
}: {
  href: string;
  text: string;
}) => {
  return (
    <div className="flex flex-col justify-center gap-y-4">
      <Link
        href={href}
        className={cn(
          "text-2xl lg:text-3xl font-bold flex justify-center items-center gap-x-4 cursor-pointer w-fit hover:gap-x-8 transition-all",
          tektur.className
        )}
      >
        <h3>{text}</h3>
        <ArrowRight className="text-4xl" />
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-x-5 gap-y-5  px-5 md:px-2 ">
        {[1, 2, 3, 4].map((number: number) => {
          return <GameCardLoading key={number} />;
        })}
      </div>
    </div>
  );
};

export default HomeListLoading;
