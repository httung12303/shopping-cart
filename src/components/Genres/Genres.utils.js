import { createQueryURL } from '../../utils';

async function genresLoader() {
  const url = createQueryURL('genres', {});
  const genres = await fetch(url, { mode: 'cors' })
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('The request was unsuccessful');
      }
      return response.json();
    })
    .then((result) => result.results);
  return { genres };
}

export { genresLoader };
