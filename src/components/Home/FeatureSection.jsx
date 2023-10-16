import { Link } from 'react-router-dom';

export default function FeatureSection({ title, link, description, img }) {
  return (
    <section className='flex flex-col mb-4 md:flex-row md:justify-between md:items-center md:border-b-2 pb-8 md:border-slate-800 md:mb-16'>
      <div className='flex flex-col gap-2 mb-10'>
        <h2 className='text-xl font-bold'>{title}</h2>
        <p>
          {description}
        </p>
        <button className='border-2 border-slate-200 px-2 py-1 rounded-lg hover:bg-slate-200 hover:text-slate-950 w-fit'>
          <Link to={link}>See more</Link>
        </button>
      </div>
      <img src={img} alt="" className='w-60 self-center'/>
    </section>
  );
}
