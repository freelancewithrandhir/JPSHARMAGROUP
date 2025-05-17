import PageHeader from '../components/ui/PageHeader';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import Map from '../components/contact/Map';

const Contact = () => {
  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with us for any inquiries or to request a quote for our services" 
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <ContactForm />
            <ContactInfo />
          </div>
          
          <div className="h-[400px]">
            <Map />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;