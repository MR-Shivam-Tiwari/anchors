import { createContext, useContext, useEffect, useState } from 'react';

const CombinedContext = createContext();

export const CombinedProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('isDarkMode') === 'true' ? true : false
  );

  const [data, setData] = useState(null);

  const toggleDarkMode = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  const setContextData = (newData) => {
    setData(newData);
  };
  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <CombinedContext.Provider value={{ isDarkMode, toggleDarkMode, data, setContextData }}>
      {children}
    </CombinedContext.Provider>
  );
};

export const useCombinedContext = () => {
  return useContext(CombinedContext);
};