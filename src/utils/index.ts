import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? true : !value);

export const cleanObject = (object: object) => {
  const result = {};
  Object.keys(object).forEach((key) => {
    // @ts-ignore
    const value = object[key];
    if (!isFalsy(value)) {
      // @ts-ignore
      result[key] = object[key];
    }
  });
  return result;
};

export const useMount = (cb: () => void) => {
  useEffect(() => {
    cb();
  }, []);
};

// const debounce = (func, delay = 500) => {
//   let timer;
//   return (...param) => {
//     if (timer) {
//       clearTimeout(timer);
//     }
//     timer = setTimeout(() => {
//       func(...param);
//     }, delay);
//   };
// };

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // 每次在value变化后，设置一个定时器
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    // 每次在上一个useEffect处理完以后再运行
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
};
