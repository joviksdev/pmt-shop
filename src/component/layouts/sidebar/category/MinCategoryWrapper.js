import React from 'react';
import CategorySidebar from './MinCategorySidebar';
import SubCategorySidebar from './MinSubCategorySidebar';

const CategoryWrapper = () => {
  return (
    <div>
      <CategorySidebar />
      <SubCategorySidebar />
    </div>
  );
};

export default CategoryWrapper;
