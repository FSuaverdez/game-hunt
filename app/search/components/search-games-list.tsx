import GameCard from "@/components/game-card";
import GameListPagination from "@/components/game-list-pagination";
import { searchGames } from "@/lib/rawg";

interface SearchGamesListProps {
  page: number;
  query: string;
}

const SearchGamesList = async ({ page, query }: SearchGamesListProps) => {
  if (!page) {
    page = 1;
  }

  if (!page) {
    return;
  }
  const { results } = await searchGames(query, page, 12);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-x-5 gap-y-5 px-5 md:px-2">
        {results.map((game: Record<string, any>) => {
          return <GameCard key={game.id} game={game} />;
        })}
      </div>
    </div>
  );
};

export default SearchGamesList;
