import axios from "axios";

export const rawgAxios = axios.create({
  baseURL: "https://api.rawg.io/api",
  headers: {
    "Content-Type": "application/json",
  },
  params: { key: process.env.RAWG_API_KEY },
});

export const getTrendingGames = async (page: number, pageSize: number) => {
  const response = await rawgAxios.get("/games/lists/main", {
    params: {
      discover: true,
      ordering: "-relevance",
      page_size: pageSize || 20,
      page: page,
    },
  });

  return response.data;
};

export const getTopYear = async (
  page: number,
  year: number,
  pageSize: number
) => {
  const response = await rawgAxios.get("/games", {
    params: {
      dates: `${year}-01-01,${year}-12-31`,
      ordering: "-relevance",
      page_size: pageSize || 20,
      page: page,
    },
  });

  return response.data;
};

export const getTop = async (page: number, pageSize: number) => {
  const response = await rawgAxios.get("/games", {
    params: {
      ordering: "-added",
      page_size: pageSize || 20,
      page: page,
    },
  });

  return response.data;
};

export const getGame = async (id: string) => {
  const response = await rawgAxios.get(`/games/${id}`);

  return response.data;
};

export const searchGames = async (
  query: string,
  page: number,
  pageSize: number
) => {
  const response = await rawgAxios.get("/games", {
    params: {
      search: query,
      page_size: 20,
      page: page,
    },
  });

  return response.data.results;
};

export const getGameScreenshots = async (id: string) => {
  const response = await rawgAxios.get(`/games/${id}/screenshots`);

  return response.data.results;
};

export const getGameStores = async (id: string) => {
  const response = await rawgAxios.get(`/games/${id}/stores`);

  return response.data.results;
};

export const getGameTrailers = async (id: string) => {
  const response = await rawgAxios.get(`/games/${id}/movies`);

  return response.data.results;
};

export const getGameSeries = async (id: string) => {
  const response = await rawgAxios.get(`/games/${id}/game-series`);

  return response.data.results;
};

export const getGameSuggestions = async (id: string) => {
  const response = await rawgAxios.get(`/games/${id}/suggested`);

  return response.data.results;
};

export const getGameAchievements = async (id: string) => {
  const response = await rawgAxios.get(`/games/${id}/achievements`);

  return response.data.results;
};

export const getGameGenres = async (id: string) => {
  const response = await rawgAxios.get(`/games/${id}/genres`);

  return response.data.results;
};

export const getGamePlatforms = async (id: string) => {
  const response = await rawgAxios.get(`/games/${id}/platforms`);

  return response.data.results;
};

export const getGameDevelopers = async (id: string) => {
  const response = await rawgAxios.get(`/games/${id}/developers`);

  return response.data.results;
};

export const getGamePublishers = async (id: string) => {
  const response = await rawgAxios.get(`/games/${id}/publishers`);

  return response.data.results;
};

export const getGameCreators = async (id: string) => {
  const response = await rawgAxios.get(`/games/${id}/creators`);

  return response.data.results;
};

export const getGameTags = async (id: string) => {
  const response = await rawgAxios.get(`/games/${id}/tags`);

  return response.data.results;
};

export const getGameStoresByGame = async (id: string) => {
  const response = await rawgAxios.get(`/games/${id}/stores`);

  return response.data.results;
};

export const getGamePurchases = async (id: string) => {
  const response = await rawgAxios.get(`/games/${id}/purchases`);

  return response.data.results;
};

export const getGameDownloadableContents = async (id: string) => {
  const response = await rawgAxios.get(`/games/${id}/additions`);

  return response.data.results;
};
