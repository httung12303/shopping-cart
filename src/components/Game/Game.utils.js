import { createQueryURL } from '../../utils';

async function gameLoader({ params }) {
  const id = params.id;
  const game = await fetch(createQueryURL(`games/${id}`)).then((response) => {
    if (response.status >= 400) {
      throw new Error('The request was unsuccessful');
    }
    return response.json();
  });
  return { game };
}

export { gameLoader };
