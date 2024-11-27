import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-4">Technoverse: Exploring the Boundless World of Technology</h1>
          <p className="text-xl mb-8">Dive into the latest trends and innovations in technology that are both priceless and affordable. Discover articles that empower you to navigate the ever-evolving tech landscape.</p>
          <div className="space-x-4">
            <Link href="/blog" className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors">
              Read
            </Link>
            <Link href="/categories" className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors">
              Explore
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image src="/hero-image.jpg" alt="Technology illustration" width={600} height={400} className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;