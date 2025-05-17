import { useParams, Navigate } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import ServiceDetailComponent from '../components/services/ServiceDetail';
import { serviceCategories } from '../utils/constants';

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceCategories.find(category => category.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div>
      <PageHeader 
        title={service.title}
        subtitle="Comprehensive solutions tailored to your specific needs" 
      />
      <ServiceDetailComponent service={service} />
    </div>
  );
};

export default ServiceDetail;