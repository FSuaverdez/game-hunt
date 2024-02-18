import { Skeleton } from "@/components/ui/skeleton";

const GameDetailsLoading = async () => {
  return (
    <div>
      <Skeleton className="max-h-60 h-60 w-full rounded-2xl bg-cover bg-center bg-no-repeat"></Skeleton>
      <div className="mt-5 flex flex-col gap-y-5">
        <div className="flex">
          <Skeleton className="h-8 w-28 mr-2" />
          <Skeleton className="h-8 w-20" />
        </div>

        <div className="mt-10">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-52 w-full mt-2" />
        </div>

        <div className="flex flex-wrap gap-x-4 mt-10">
          <Skeleton className=" h-36 w-96" />
          <Skeleton className=" h-36 w-96" />
          <Skeleton className=" h-36 w-96" />
        </div>
      </div>
    </div>
  );
};

export default GameDetailsLoading;
