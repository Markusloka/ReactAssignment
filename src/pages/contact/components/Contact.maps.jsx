import React from "react";

const MapComponent = () => {
  return (
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2638.8811824494874!2d18.06235573773808!3d59.33536593124302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77e001d880a3%3A0x2c29d3c569e23670!2sNorrmalm%2C%20Stockholm!5e0!3m2!1ssv!2sse!4v1700222961978!5m2!1ssv!2sse"
      width="100%"
      height="620px"
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default MapComponent;
