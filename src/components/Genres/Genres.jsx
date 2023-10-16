import { useLoaderData, Link } from 'react-router-dom';

export default function Genres() {
  const { genres } = useLoaderData();
  return (
    <div>
      <h2 className='text-2xl font-bold mb-10'>Genres</h2>
      <div className='flex flex-col gap-8 md:grid md:grid-cols-2 xl:grid-cols-3'>
        {genres.map(({ id, name, image_background, slug }) => (
          <Link
            to={`./${slug}`}
            key={id}
            style={{
              backgroundImage: `url('${image_background}')`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
            className='h-56 flex bg-blend-overlay bg-slate-700 rounded-2xl justify-center items-center md:w-full'
          >
            <h2 className='text-2xl font-bold uppercase'>{name}</h2>
            {/* <img src={image_background} alt="" /> */}
          </Link>
        ))}
      </div>
    </div>
  );
}
