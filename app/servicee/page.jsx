import React from 'react';

const ServicePage = () => {
  // Dummy data for services
  const services = [
    {
      id: 1,
      title: 'Drilling Services',
      description: 'We offer expert drilling services using state-of-the-art equipment and techniques to extract valuable resources efficiently.',
      icon: 'fa-tools' // Assuming you're using Font Awesome icons
    },
    {
      id: 2,
      title: 'Geo Sciences Analysis',
      description: 'Our team of geologists and scientists provides comprehensive geo sciences analysis to identify potential mining sites and assess geological risks.',
      icon: 'fa-globe-americas'
    },
    {
      id: 3,
      title: 'Mapping Solutions',
      description: 'Utilizing advanced mapping technologies, we create detailed maps and models for accurate visualization and planning of mining operations.',
      icon: 'fa-map-marked-alt'
    }
    // Add more services as needed
  ];

  return (
    <div className="service-page">
      <h1>Welcome to Neocene Solutions</h1>
      <h2>Our Services</h2>
      <div className="services">
        {services.map(service => (
          <div className="service" key={service.id}>
            <div className="service-icon">
              <i className={`fas ${service.icon}`}></i>
            </div>
            <div className="service-details">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
