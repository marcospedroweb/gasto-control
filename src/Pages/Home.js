import React from 'react';
import Header from '../Components/Header';
import Main from '../Components/Main';

const Home = () => {
  return (
    <div className="container-xxl">
      <h1 className="mt-4 mb-3 text-center">Gasto Control</h1>
      <Header />
      <Main />
    </div>
  );
};

export default Home;
