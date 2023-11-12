import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  //Aqui se coloca as variaveis globais

  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};
