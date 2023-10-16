import { useLoaderData } from 'react-router-dom';
import { getPlatformIcons } from '../../utils';

function isGameInCart(game, cart) {
  return cart.filter((cartGame) => cartGame.id === game.id).length === 0;
}

function processPlatforms(game) {
  const platforms = game.platforms.map((p) => p.platform.slug);
  return { ...game, platforms };
}

export default function Game({ addGame, removeGame, cart }) {
  const { game } = useLoaderData();
  const { name, description_raw, background_image, rating, released, website } =
    game;
  const platforms = getPlatformIcons(
    game.platforms.map((p) => p.platform.slug)
  );
  const genres = game.genres.map((g) => g.name);
  return (
    <div className='xl:grid xl:grid-cols-5 xl:gap-6'>
      <img className='w-full xl:col-span-3 xl:h-full xl:rounded-2xl' src={background_image} alt="" />
      <div className='xl:col-span-2'>
        <div className="flex items-center justify-between my-3">
          <h2 className="text-2xl font-bold">{name}</h2>
          <div className="text-slate-500">
            <span className="fa-regular fa-star mr-2"></span>
            <span>{rating}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-slate-500 text-lg font-bold">$4.99</div>
          {isGameInCart(game, cart) ? (
            <button
              className="border-2 rounded-md w-20 py-1 font-bold"
              onClick={() => addGame(processPlatforms(game))}
            >
              Add
            </button>
          ) : (
            <button
              className="border-2 rounded-md w-20 py-1 bg-slate-200 text-slate-950 font-bold"
              onClick={() => removeGame(game)}
            >
              Remove
            </button>
          )}
        </div>
        <div className="grid grid-cols-2 w-full gap-3 my-2">
          <div>
            <h3 className="text-lg text-slate-500 mb-1">Platforms</h3>
            <div className="flex gap-3">
              {platforms.map((platform) => (
                <img className="w-6" src={platform} alt="" key={platform} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg text-slate-500 mb-1">Genres</h3>
            <div>{genres.join(', ')}</div>
          </div>
          <div>
            <h3 className="text-lg text-slate-500 mb-1">Released</h3>
            <div>{released}</div>
          </div>
          <div>
            <h3 className="text-lg text-slate-500 mb-1">Website</h3>
            <div>
              <a
                className="block w-full overflow-hidden whitespace-nowrap text-ellipsis"
                href={website}
              >
                {website}
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-medium text-slate-500 mb-2">About</h3>
          <div className="whitespace-pre-line max-h-56 overflow-y-auto">
            {description_raw}
          </div>
        </div>
      </div>
    </div>
  );
}
