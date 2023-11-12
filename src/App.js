import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import { GlobalStorage } from './Hooks/GlobalContext';

const App = () => {
  return (
    <GlobalStorage>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </GlobalStorage>
  );
};

export default App;
