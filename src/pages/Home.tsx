import Hero from '../components/home/Hero';
import Introduction from '../components/home/Introduction';
import QuickLinks from '../components/home/QuickLinks';
import CallToAction from '../components/home/CallToAction';

const Home = () => {
  return (
    <div>
      <Hero />
      <Introduction />
      <QuickLinks />
      <CallToAction />
    </div>
  );
};

export default Home;