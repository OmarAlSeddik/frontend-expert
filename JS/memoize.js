const memoize = (callback, resolver) => {
  const cache = new Map();

  const getCacheKey = (args) => {
    return resolver != null ? resolver(...args) : JSON.stringify(args);
  };

  const memoized = (...args) => {
    const cacheKey = getCacheKey(args);
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    const output = callback(...args);
    cache.set(cacheKey, output);
    return output;
  };

  memoized.clear = () => {
    cache.clear();
  };

  memoized.delete = (...args) => {
    const cacheKey = getCacheKey(args);
    cache.delete(cacheKey);
  };

  memoized.has = (...args) => {
    const cacheKey = getCacheKey(args);
    return cache.has(cacheKey);
  };

  return memoized;
};
