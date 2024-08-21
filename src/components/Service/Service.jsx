import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'We build fast, scalable, and secure websites that meet your business needs.',
      image: 'web-dev.png',
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'We design and develop mobile apps that are intuitive, user-friendly, and scalable.',
      image: 'mobile-app-dev.png',
    },
    {
      id: 5,
      title: 'UI/UX Design',
      description: 'We create user-centered designs that enhance user experience and drive business results.',
      image: 'ui-ux-design.png',
    },
  ];

  return (
    <section id="services" className="py-5 bg-white">
      <div className="container mx-auto p-4">
        <h2 className="text-center text-3xl font-bold text-[#534998]">Our Services</h2>
        <p className="text-center text-lg text-[#534998]">We offer a range of services to help you achieve your business goals.</p>
        <div className="flex flex-wrap justify-center">
          {services.map((service) => (
            <div key={service.id} className="w-full md:w-1/3 xl:w-1/3 p-4 flex">
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
                className="flex flex-col flex-grow"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
