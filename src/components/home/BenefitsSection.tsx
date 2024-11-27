import React from 'react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: 'Stay Ahead of Trends',
      description: 'Be the first to know about emerging technologies and industry shifts.',
      icon: '🚀',
    },
    {
      title: 'Expert Insights',
      description: 'Gain valuable perspectives from industry leaders and innovators.',
      icon: '🧠',
    },
    {
      title: 'Practical Knowledge',
      description: 'Learn about real-world applications of cutting-edge technologies.',
      icon: '🛠️',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Technoverse?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;