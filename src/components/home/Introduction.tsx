import { ShieldCheck, Clock, FileCheck } from 'lucide-react';

const Introduction = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Welcome to JP Sharma Group
          </h2>
          <p className="text-lg text-gray-600">
            With a reputation built on trust and expertise, JP Sharma Group has been providing comprehensive documentation and attestation services to businesses across Delhi and beyond. Our dedicated team ensures smooth, transparent, and efficient processes for all your documentation needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mb-6">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expertise & Trust</h3>
            <p className="text-gray-600">
              With years of experience in the industry, we've built a reputation for reliability and expertise in handling all types of documentation services.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mb-6">
              <Clock size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Time Efficiency</h3>
            <p className="text-gray-600">
              We understand the value of time in business operations. Our streamlined processes ensure quick turnarounds without compromising on quality or accuracy.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mb-6">
              <FileCheck size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Comprehensive Solutions</h3>
            <p className="text-gray-600">
              From EIA and APEDA services to attestation and documentation, we offer end-to-end solutions tailored to meet your specific business requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;