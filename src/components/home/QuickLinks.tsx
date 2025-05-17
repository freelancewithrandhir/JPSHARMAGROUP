import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { serviceCategories } from '../../utils/constants';

const QuickLinks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our full range of professional services designed to streamline your business documentation processes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCategories.map((category) => (
            <div 
              key={category.id}
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-all"
            >
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(${category.image})` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.shortDescription}
                </p>
                <Link 
                  to={`/services/${category.id}`}
                  className="inline-flex items-center text-blue-700 font-medium group-hover:text-blue-800 transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/services"
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;