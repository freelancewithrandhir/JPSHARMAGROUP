const Map = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full min-h-[400px]">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.0285393710225!2d77.12986731508563!3d28.80238668234642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b1523589e71%3A0x1e4de76f492e3ff6!2sAlipur%2C%20Delhi%2C%20110036!5m2!1sm!1s"
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