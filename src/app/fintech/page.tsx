import React from 'react';
import CategoryPage from '../[category]/page';

const FinTechPage: React.FC = () => {
  return <CategoryPage params={{ category: 'fintech' }} />;
};

export default FinTechPage;