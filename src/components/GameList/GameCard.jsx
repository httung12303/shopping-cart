import { Link } from 'react-router-dom';
import { getPlatformIcons } from '../../utils';

export default function GameCard(game) {
  const platformIcons = getPlatformIcons(game.platforms);
  return (
    <Link to={`/games/${game.id}`} className='w-[300px] md:w-full'>
      <div className="flex flex-col mb-10 rounded-3xl overflow-hidden">
        <div
          className="h-56 w-full md:h-48"
          style={{
            backgroundImage: `url(${game.background_image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="relative flex flex-col gap-4 p-4 bg-slate-800">
          <div className="flex flex-row gap-2">
            {platformIcons.map((icon) => (
              <img className="w-4" src={icon} alt="" key={icon.slice(0, -4)} />
            ))}
          </div>
          <h3 className="text-xl font-bold">{game.name}</h3>
          <div className="absolute top-4 right-4 text-slate-400">{'$4.99'}</div>
        </div>
      </div>
    </Link>
  );
}
