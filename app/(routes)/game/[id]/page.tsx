import { Suspense } from "react";
import GameDetails from "./components/game-details";
import GameDetailsLoading from "./components/game-details-loading";

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
