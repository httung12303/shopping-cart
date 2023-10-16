import FeatureSection from './FeatureSection';

export default function Home() {
  const lastYear = new Date().getFullYear() - 1;
  const features = [
    {
      title: 'Trending',
      link: 'feature/trending',
      description: 'See what people are playing!',
    },
    {
      title: `Best Of ${lastYear}`,
      link: 'feature/last_year',
      description: 'Bangers from last year!',
    },
    {
      title: 'Best Of All Time',
      link: 'feature/all_time',
      description: 'GOATs of gaming!',
    },
    {
      title: 'Upcoming',
      link: 'feature/upcoming',
      description: "What's new?",
    },
  ];
  return (
    <div className='md:[&>*:nth-child(even)]:flex-row-reverse'>
      {features.map((feature, index) => (
        <FeatureSection key={index} {...feature} img={`img/feature/feature_${index}.svg`}></FeatureSection>
      ))}
    </div>
  );
}
