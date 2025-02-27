import React, { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "./reducers";

export const StoreContext = createContext();

export const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchData() {}
    fetchData();
  }, [dispatch]);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};
