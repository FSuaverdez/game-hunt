import { Suspense } from "react";
import GameDetails from "./components/game-details";
import GameDetailsLoading from "./components/game-details-loading";
import { Metadata, ResolvingMetadata } from "next";
import { getGame } from "@/lib/rawg";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  const game = await getGame(id);

  return {
    title: `${game?.name} - GameHunt`,
    description: `GameHunt - ${game?.name} ${game?.description}`,
  };
}

const GamePage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div className="px-2 md:px-6 lg:px-10  pt-10">
      <Suspense fallback={<GameDetailsLoading />} key={id}>
        <GameDetails id={id} />
      </Suspense>
    </div>
  );
};

export default GamePage;
