import React, { createContext, useState, useContext } from "react";

const ActiveStatContext = createContext({
  activeStat: "submit",
  setActiveStat() {},
});

export const ActiveStateProvider = ({ children }) => {
  const [activeStat, setActiveStat] = useState("submit");
  return (
    <ActiveStatContext.Provider value={{ activeStat, setActiveStat }}>
      {children}
    </ActiveStatContext.Provider>
  );
};

export const useActiveStat = () => useContext(ActiveStatContext);
