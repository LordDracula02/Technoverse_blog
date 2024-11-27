// src/app/page.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import BlogListSection from '@/components/home/BlogListSection';
import BenefitsSection from '@/components/home/BenefitsSection';

const NewsletterSection = dynamic(() => import('@/components/home/NewsletterSection'), {
  ssr: false
});

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <BlogListSection />
      <BenefitsSection />
      <NewsletterSection />
    </>
  );
};

export default HomePage;