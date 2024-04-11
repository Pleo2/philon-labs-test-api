"use client"

import { useState } from "react";

export default function useLocalStorage(
  key: string,
  initialValue: string | object
) {
  const [storeValue, setStoreValue] = useState(() => {
    try {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
    } catch (error) {
        return initialValue
    }
  });

  const setValue = (value: string | object) => {
    try {
      setStoreValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };
  return [storeValue, setValue];
}
