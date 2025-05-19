const Map = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full min-h-[400px]">
      <iframe 
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111948.02513539772!2d77.04380322112223!3d28.738195219430338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dabdddd0ef8df%3A0xbdec6f2328047b7f!2sJ%20P%20Sharma%20Group!5e0!3m2!1sen!2sin!4v1747638775403!5m2!1sen!2sin" 
         width="100%" 
        height="100%" 
        className="border-0 min-h-[400px]"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="JP Sharma Group Location"
      ></iframe>
    </div>
  );
};

export default Map;