import PageHeader from '../components/ui/PageHeader';
import ServicesList from '../components/services/ServicesList';

const Services = () => {
  return (
    <div>
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive documentation, attestation, and certification services to streamline your business processes" 
      />
      <ServicesList />
    </div>
  );
};

export default Services;