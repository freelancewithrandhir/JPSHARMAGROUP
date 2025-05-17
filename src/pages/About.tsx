import PageHeader from '../components/ui/PageHeader';
import AboutContent from '../components/about/AboutContent';

const About = () => {
  return (
    <div>
      <PageHeader 
        title="About Us" 
        subtitle="Learn more about JP Sharma Group, our mission, values, and commitment to excellence" 
      />
      <AboutContent />
    </div>
  );
};

export default About;