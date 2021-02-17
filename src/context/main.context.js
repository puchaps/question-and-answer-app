import React, { useReducer } from "react";

import questions from "../data/data";
import mainReducer from "../reducer/main.reducer";

export const MainContext = React.createContext();

const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, questions);

  return (
    <MainContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
