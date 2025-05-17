import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceDetailProps {
  service: {
    id: string;
    title: string;
    description: string;
    image: string;
    features: string[];
    services: {
      name: string;
      description: string;
    }[];
  };
}

const ServiceDetail = ({ service }: ServiceDetailProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div 
              className="h-64 bg-cover bg-center" 
              style={{ backgroundImage: `url(${service.image})` }}
            ></div>
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h1>
              <p className="text-lg text-gray-600 mb-6">{service.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link 
                to="/contact"
                className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors"
              >
                Inquire About This Service
              </Link>
            </div>
          </div>
          
          {/* Service List */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Services We Offer</h2>
            
            <div className="space-y-8">
              {service.services.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;