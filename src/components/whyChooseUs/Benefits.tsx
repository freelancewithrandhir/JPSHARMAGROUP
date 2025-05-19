import { Clock, DollarSign, Shield, Headphones, Route, FileText, IndianRupee } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock size={36} />,
      title: 'Save Time',
      description: 'Our streamlined processes and experienced team ensure quick turnarounds, saving you valuable time.'
    },
    {
      icon: <IndianRupee size={36} />,
      title: 'Save Money',
      description: 'Competitive pricing and efficient service delivery help reduce your operational costs.'
    },
    {
      icon: <Shield size={36} />,
      title: 'Guaranteed Quality',
      description: 'We maintain high standards in all our services, ensuring accuracy and reliability.'
    },
    {
      icon: <Headphones size={36} />,
      title: 'Dedicated Support',
      description: 'Our responsive customer service team is always ready to address your queries and concerns.'
    },
    {
      icon: <Route size={36} />,
      title: 'End-to-End Solutions',
      description: 'From initial documentation to final attestation, we handle the entire process seamlessly.'
    },
    {
      icon: <FileText size={36} />,
      title: 'Expert Knowledge',
      description: 'Our team stays updated with the latest regulations and documentation requirements.'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose JP Sharma Group</h2>
          <p className="text-lg text-gray-600">
            We pride ourselves on delivering exceptional service that sets us apart from others. Here's why clients trust us with their documentation and attestation needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-700 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;