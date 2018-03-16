export const styleGetter = (path) => (obj) => {
  return path.split('.').reduce((styleValue, current) => {
    return styleValue[current];
  }, obj);
};
