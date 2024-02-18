import TrendingGamesList from "./components/trending-games-list";

export default function Trending({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | number | undefined };
}) {
  return (
    <div>
      Hello Trending
      <div>
        <TrendingGamesList page={searchParams.page as number} />
      </div>
    </div>
  );
}
