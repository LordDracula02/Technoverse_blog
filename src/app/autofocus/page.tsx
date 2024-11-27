import React from 'react';
import CategoryPage from '../[category]/page';

const AutoFocusPage: React.FC = () => {
  return <CategoryPage params={{ category: 'autofocus' }} />;
};

export default AutoFocusPage;