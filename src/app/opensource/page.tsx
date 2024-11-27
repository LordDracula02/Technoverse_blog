import React from 'react';
import CategoryPage from '../[category]/page';

const OpenSourcePage: React.FC = () => {
  return <CategoryPage params={{ category: 'opensource' }} />;
};

export default OpenSourcePage;