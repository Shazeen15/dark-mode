import { useState } from "react";

const useLocalStorage = (key, initialValues) => {
  const [storedValue, setStoredValue] = useState(() => {
    // function needs to check if we have a value in local storage already
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    }
    localStorage.setItem(key, JSON.stringify(initialValues));
    return initialValues;
  });
  // writing custom setter function that updates the state and sets the new value to the local storage
  const setDarkMode = (value) => {
    localStorage.setItem(key, JSON.stringify(key, value));
    setStoredValue(value);
  };
  return [storedValue, setDarkMode];
};

export default useLocalStorage;
