import { useState } from 'react';

const get = (key) => JSON.parse(localStorage.getItem(key));
const set = (key, value) => localStorage.setItem(key, JSON.stringify(value)) && value;

const K = (state) => state;

export const useLocalStorage = (key, initialValue, reducer = K) => {
  const [ storedValue, setStoredValue ] = useState(() => {
    const val = get(key) || set(key, initialValue);
    return val;
  });

  const dispatch = (action) => {
    const newValue = reducer(storedValue, action);
    set(key, newValue);
    setStoredValue(newValue);
  };

  return [ storedValue, dispatch ];
};
