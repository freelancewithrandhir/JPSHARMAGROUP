import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-5 blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Ready to simplify your documentation process?</h2>
            <p className="text-xl text-primary-50 max-w-2xl leading-relaxed">
              Contact us today to learn how JP Sharma Group can help your business save time and money with our expert services.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/contact" 
              className="bg-accent-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-600 transition-all shadow-soft text-center"
            >
              Contact Us
            </Link>
            <Link 
              to="/services" 
              className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all text-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;