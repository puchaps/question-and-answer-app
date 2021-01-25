import React, { useReducer } from 'react';

import { QURSTIONS } from '../data/data.js';
import mainReducer from '../reducer/main.reducer.js';

export const MainContext = React.createContext();

const MainProvider = ({ children }) => {
  const[state, dispatch] = useReducer(mainReducer, QURSTIONS);
    
  return (
    <MainContext.Provider value = {{
      state,
      dispatch
    }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;