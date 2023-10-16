import { format } from 'date-fns';
import { add } from 'date-fns';

const API_KEY = 'cce1afeff5244ea484aafd00dcd07724';

function createQueryURL(query, params = {}) {
  const aggregatedParams = [
    ...Object.keys(params).map((key) => `${key}=${params[key]}`),
    `key=${API_KEY}`,
  ].join('&');
  return `https://api.rawg.io/api/${query}?${aggregatedParams}`;
}

function getDatesString(start, end) {
  const startDate = add(new Date(), { days: start });
  const endDate = add(new Date(), { days: end });
  return `${format(startDate, 'yyyy-MM-dd')},${format(endDate, 'yyyy-MM-dd')}`;
}

function getLastYearString() {
  const year = new Date().getFullYear() - 1;
  return `${format(new Date(year, 1, 1), 'yyyy-MM-dd')},${format(
    new Date(year, 12, 31),
    'yyyy-MM-dd'
  )}`;
}

async function fetchGames(params) {
  const games = await fetch(createQueryURL('games', params), {
    mode: 'cors',
  })
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('The request was unsuccessful.');
      }
      return response.json();
    })
    .then((json) => json.results.map((game) => game))
    .catch((error) => console.error('Error:', error.message));

  return games.map((game) => {
    const { background_image, name, platforms, rating, id } = game;
    return {
      id,
      background_image,
      name,
      platforms: platforms
        ? platforms.map((platform) => platform.platform.slug)
        : [],
      rating,
    };
  });
}

function getPlatformIcons(platforms) {
  const reducedPlatforms = [
    'pc',
    'macos',
    'playstation',
    'xbox',
    'nintendo',
    'android',
  ];
  const result = [];
  reducedPlatforms.forEach((p) => {
    if (platforms.filter((platform) => platform.startsWith(p)).length > 0) {
      result.push(`/img/platform/${p}.svg`);
    }
  });
  return result;
}

export {
  fetchGames,
  createQueryURL,
  getDatesString,
  getLastYearString,
  getPlatformIcons,
};
