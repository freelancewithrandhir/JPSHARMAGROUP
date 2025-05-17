import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { serviceCategories } from '../../utils/constants';

const ServicesList = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Comprehensive Services</h2>
          <p className="text-lg text-gray-600">
            At JP Sharma Group, we offer a wide range of documentation and attestation services to meet the diverse needs of businesses across different sectors. Our expert team ensures smooth processing and timely delivery of all services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category) => (
            <div 
              key={category.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
            >
              <div 
                className="h-56 bg-cover bg-center" 
                style={{ backgroundImage: `url(${category.image})` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <Link 
                  to={`/services/${category.id}`}
                  className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors"
                >
                  View Details <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;