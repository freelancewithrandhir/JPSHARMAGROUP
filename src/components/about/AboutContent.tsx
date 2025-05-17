import { Award, Users, Clock, Globe } from 'lucide-react';

const AboutContent = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Company Overview */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About JP Sharma Group</h2>
          <p className="text-lg text-gray-600 mb-6">
            JP Sharma Group has established itself as a leading professional services provider specializing in EIA, APEDA, Attestation, and Documentation services. Based in Delhi, we serve clients across India and internationally, providing expert solutions that save time and money.
          </p>
          <p className="text-lg text-gray-600">
            Our team of experienced professionals is dedicated to delivering transparent, efficient, and reliable services tailored to meet the unique needs of each client. We pride ourselves on our commitment to excellence and our ability to navigate complex documentation requirements with ease.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mb-4">
              <Award size={32} />
            </div>
            <div className="text-4xl font-bold text-blue-700 mb-2">10+</div>
            <p className="text-gray-600 font-medium">Years of Experience</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mb-4">
              <Users size={32} />
            </div>
            <div className="text-4xl font-bold text-blue-700 mb-2">1000+</div>
            <p className="text-gray-600 font-medium">Satisfied Clients</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mb-4">
              <Clock size={32} />
            </div>
            <div className="text-4xl font-bold text-blue-700 mb-2">24/7</div>
            <p className="text-gray-600 font-medium">Customer Support</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mb-4">
              <Globe size={32} />
            </div>
            <div className="text-4xl font-bold text-blue-700 mb-2">50+</div>
            <p className="text-gray-600 font-medium">Countries Served</p>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To provide exceptional documentation and attestation services that simplify processes for our clients, allowing them to focus on their core business activities. We strive to be the most trusted partner for all documentation needs, delivering services with integrity, efficiency, and excellence.
            </p>
            <p className="text-gray-600">
              Our goal is to continually improve our services, stay updated with changing regulations, and provide innovative solutions that address the evolving needs of businesses in a global marketplace.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <ul className="space-y-4">
              <li className="flex">
                <span className="h-6 w-6 rounded-full bg-blue-700 text-white flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Integrity</h4>
                  <p className="text-gray-600">We uphold the highest standards of honesty and ethical conduct in all our dealings.</p>
                </div>
              </li>
              <li className="flex">
                <span className="h-6 w-6 rounded-full bg-blue-700 text-white flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Excellence</h4>
                  <p className="text-gray-600">We are committed to delivering superior service that exceeds client expectations.</p>
                </div>
              </li>
              <li className="flex">
                <span className="h-6 w-6 rounded-full bg-blue-700 text-white flex items-center justify-center mr-3 flex-shrink-0 mt-1">3</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Transparency</h4>
                  <p className="text-gray-600">We maintain clear and open communication with our clients throughout every process.</p>
                </div>
              </li>
              <li className="flex">
                <span className="h-6 w-6 rounded-full bg-blue-700 text-white flex items-center justify-center mr-3 flex-shrink-0 mt-1">4</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Innovation</h4>
                  <p className="text-gray-600">We continuously seek better ways to serve our clients and improve our processes.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;