import React from 'react';
import Link from 'next/link';

const FeaturesSection: React.FC = () => {
  const categories = [
    {
      title: 'Discover the Latest Trends in Tech and Innovation Today',
      description: 'Dive into our blog categories to stay updated on the tech that matters.',
      link: '/blog',
      linkText: 'Explore',
      icon: '🔍',
    },
    {
      title: 'ConsumerTech: Your Guide to the Latest Gadgets and Devices',
      description: 'Uncover reviews and insights on the gadgets that enhance your life.',
      link: '/consumer-tech',
      linkText: 'Learn',
      icon: '📱',
    },
    {
      title: 'AutoFocus: Innovations in Automotive Technology and Trends',
      description: 'Explore the future of driving with our insights into automotive advancements.',
      link: '/auto-focus',
      linkText: 'Discover',
      icon: '🚗',
    },
    {
      title: 'OpenSource: Exploring the World of Open-Source Software',
      description: 'Delve into the collaborative world of open-source projects and technologies.',
      link: '/open-source',
      linkText: 'Contribute',
      icon: '🌐',
    },
    {
      title: 'AI & ML: Advancements in Artificial Intelligence and Machine Learning',
      description: 'Stay informed about the latest breakthroughs in AI and machine learning.',
      link: '/ai-ml',
      linkText: 'Analyze',
      icon: '🤖',
    },
    {
      title: 'FinTech: Revolutionizing Finance Through Technology',
      description: 'Discover how technology is reshaping the financial landscape.',
      link: '/fin-tech',
      linkText: 'Invest',
      icon: '💰',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Explore Our Diverse Categories of Technology Insights and Innovations
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <Link href={category.link} className="text-blue-600 hover:underline">
                {category.linkText} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;