import React, { createContext, useState } from "react";

export const DataProvider = createContext();

export const DataContext = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [theme, setTheme] = useState("light");

  const initialValues = {
    sesion: {
      isLogged,
      setIsLogged,
    },
    preferences: {
      theme,
      setTheme,
    },
  };

  return (
    <DataProvider.Provider value={initialValues}>
      {children}
    </DataProvider.Provider>
  );
};
