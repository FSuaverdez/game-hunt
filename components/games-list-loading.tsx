import GameCardLoading from "./game-card-loading";

const GamesListLoading = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-x-5 gap-y-5 px-5 md:px-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number: number) => {
          return <GameCardLoading key={number} />;
        })}
      </div>
    </div>
  );
};

export default GamesListLoading;
