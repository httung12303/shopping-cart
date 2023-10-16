import {
  createQueryURL,
  fetchGames,
  getDatesString,
  getLastYearString,
} from '../../utils';

async function featuredGamesLoader({ params }) {
  const feature = params.feature;
  let queryParams = null;
  let title = 'null';
  if (feature === 'trending') {
    title = 'Trending';
    queryParams = {
      ordering: '-added',
      dates: getDatesString(-7, 0),
    };
  }
  if (feature === 'last_year') {
    title = `Best of ${new Date().getFullYear() - 1}`;
    queryParams = {
      ordering: '-added',
      dates: getLastYearString(),
    };
  }
  if (feature === 'all_time') {
    title = 'Best Of All Time';
    queryParams = {
      ordering: '-added',
    };
  }
  if (feature === 'upcoming') {
    title = 'Upcoming';
    queryParams = { dates: getDatesString(1, 30) };
  }
  const games = await fetchGames(queryParams);
  return { title, games };
}

async function genreGameListLoader({ params }) {
  const genreSlug = params.genre;
  const genreNamePromise = fetch(createQueryURL(`genres/${genreSlug}`))
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('The request was unsuccessful');
      }
      return response.json();
    })
    .then((response) => response.name);
  const [games, genreName] = await Promise.all([
    fetchGames({ genres: genreSlug, ordering: '-released' }),
    genreNamePromise,
  ]);
  return { title: genreName, games };
}

async function queryLoader({ params }) {
  const { search } = params;
  const games = await fetchGames({ search });
  return { title: `Search results for "${search}"`, games };
}

export { featuredGamesLoader, genreGameListLoader, queryLoader };
