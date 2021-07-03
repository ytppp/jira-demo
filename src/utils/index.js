export const isFalsy = (value) => (value === 0 ? true : !value);

export const cleanObject = (object) => {
  const result = {};
  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (!isFalsy(value)) {
      result[key] = object[key];
    }
  });
  return result;
};
