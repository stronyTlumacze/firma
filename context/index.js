import React, { createContext, useReducer, useEffect, useState } from 'react';

export const NewContext = createContext();

const NewContextProvider = ({ children }) => {
  const [firstEnter, setFirstEnter] = useState(true);

  return (
    <NewContext.Provider value={{ firstEnter, setFirstEnter }}>
      {children}
    </NewContext.Provider>
  );
};

export default NewContextProvider;
