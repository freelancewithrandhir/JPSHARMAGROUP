import PageHeader from '../components/ui/PageHeader';
import Benefits from '../components/whyChooseUs/Benefits';
import Testimonials from '../components/whyChooseUs/Testimonials';

const WhyChooseUs = () => {
  return (
    <div>
      <PageHeader 
        title="Why Choose Us" 
        subtitle="Discover the advantages of working with JP Sharma Group for your documentation and attestation needs" 
      />
      <Benefits />
      <Testimonials />
    </div>
  );
};

export default WhyChooseUs;