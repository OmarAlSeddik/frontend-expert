// const firstFunction = (...args, secondFunction) => {};
// const secondFunction = (error, value) => {};

const promisify = (callback) => {
  return function (...args) {
    return new Promise((resolve, reject) => {
      const handleErrorAndValue = (error, value) => {
        error == null ? resolve(value) : reject(error);
      };
      callback.call(this, ...args, handleErrorAndValue);
    });
  };
};
