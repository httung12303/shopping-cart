import { useLoaderData } from 'react-router-dom';
import GameCard from './GameCard';

export default function GameList() {
  const { title, games } = useLoaderData();
  return (
    <>
      <h2 className="text-2xl font-bold mb-10">{title}</h2>
      <div className="md:grid md:grid-cols-2 md:w-full md:gap-6 xl:grid-cols-3">
        {games.map((game) => (
          <GameCard {...game} key={game.id} />
        ))}
      </div>
    </>
  );
}
