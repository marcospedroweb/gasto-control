import React from 'react';
import CardCategory from './CardCategory';

const DivCategories = () => {
  return (
    <div className="row justify-content-between align-items-center row-gap-3">
      <CardCategory />
      <CardCategory />
      <CardCategory />
      <CardCategory />
      <CardCategory />
      <CardCategory />
    </div>
  );
};

export default DivCategories;
