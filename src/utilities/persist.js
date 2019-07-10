import { useState } from 'react';

const get = (key) => JSON.parse(localStorage.getItem(key));
const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  return value;
};

export const useLocalStorage = (key, initialValue, reducer) => {
  const [ storedValue, setStoredValue ] = useState(() => {
    const val = get(key) || set(key, initialValue);
    return val;
  });

  const setter = (stateOrAction) => {
    const newValue = reducer ? reducer(storedValue, stateOrAction) : stateOrAction;
    set(key, newValue);
    setStoredValue(newValue);
  };

  return [ storedValue, setter ];
};
