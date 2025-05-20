import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { serviceCategories } from '../../utils/constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-700">
            JP Sharma Group
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors hover:text-blue-700 ${
                location.pathname === '/' ? 'text-blue-700' : 'text-gray-800'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors hover:text-blue-700 ${
                location.pathname === '/about' ? 'text-blue-700' : 'text-gray-800'
              }`}
            >
              About Us
            </Link>
            <div className="relative group">
              <button 
                className={`flex items-center font-medium transition-colors hover:text-blue-700 ${
                  location.pathname.includes('/services') ? 'text-blue-700' : 'text-gray-800'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  toggleServices();
                }}
              >
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className={`absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ${
                isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                <div className="py-2">
                  <Link 
                    to="/services" 
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700"
                  >
                    All Services
                  </Link>
                  {serviceCategories.map((category) => (
                    <Link 
                      key={category.id}
                      to={`/services/${category.id}`} 
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700"
                    >
                      {category.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link 
              to="/why-choose-us" 
              className={`font-medium transition-colors hover:text-blue-700 ${
                location.pathname === '/why-choose-us' ? 'text-blue-700' : 'text-gray-800'
              }`}
            >
              Why Choose Us
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors hover:text-blue-700 ${
                location.pathname === '/contact' ? 'text-blue-700' : 'text-gray-800'
              }`}
            >
              Contact
            </Link>
            {/* <Link 
              to="/contact" 
              className="bg-blue-700 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-800 transition-colors"
            >
              Get a Quote
            </Link> */}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-800" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col py-4 bg-white rounded-lg shadow-lg">
            <Link 
              to="/" 
              className="px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700"
            >
              About Us
            </Link>
            <button 
              className="flex items-center justify-between px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700"
              onClick={toggleServices}
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 bg-gray-50 ${
              isServicesOpen ? 'max-h-96' : 'max-h-0'
            }`}>
              <Link 
                to="/services" 
                className="block px-6 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700"
              >
                All Services
              </Link>
              {serviceCategories.map((category) => (
                <Link 
                  key={category.id}
                  to={`/services/${category.id}`} 
                  className="block px-6 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700"
                >
                  {category.title}
                </Link>
              ))}
            </div>
            <Link 
              to="/why-choose-us" 
              className="px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700"
            >
              Why Choose Us
            </Link>
            <Link 
              to="/contact" 
              className="px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700"
            >
              Contact
            </Link>
            {/* <Link 
              to="/contact" 
              className="mx-4 mt-2 bg-blue-700 text-white py-2 rounded-md font-medium hover:bg-blue-800 transition-colors text-center"
            >
              Get a Quote
            </Link> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;