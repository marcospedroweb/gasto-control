import React from 'react';
import DivStatement from './DivStatement';
import DivCategories from './DivCategories';

const Main = () => {
  return (
    <div className="row justify-content-between align-items-center mt-4">
      <div className="col-12 col-lg-6">
        <DivStatement />
      </div>
      <div className="col-12 col-lg-6">
        <DivCategories />
      </div>
    </div>
  );
};

export default Main;
