import { useState } from "react";

const useLocalStorage = (key, initialValues) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    }
    localStorage.setItem(key, JSON.stringify(initialValues));
    return initialValues;
  });

  const setDarkMode = (value) => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setDarkMode];
};

export default useLocalStorage;
