// useLocalStorage.js
import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  // Get the stored value from local storage or use the initial value
  const storedValue = localStorage.getItem(key) || initialValue;

  // Create a state variable to hold the current value
  const [value, setValue] = useState(storedValue);

  // Update local storage whenever the state changes
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;