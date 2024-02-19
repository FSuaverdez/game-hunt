import { Suspense } from "react";
import GameDetails from "./components/game-details";
import GameDetailsLoading from "./components/game-details-loading";

export async function generateMetadata() {
  return {
    title: `GameHunt - Explore the Gaming World`,
    description: `GameHunt is a website that allows you to search for games, find trending games, and see the top games of all time. Explore the gaming world with GameHunt.`,
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
