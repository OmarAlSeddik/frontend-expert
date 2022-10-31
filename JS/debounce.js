const debounce = (callback, delay, immediate = false) => {
  let timerID;
  // Can't use an arrow function because we need the function to have its "this" binding.
  return function (...args) {
    clearTimeout(timerID);
    if (immediate && timerID == null) {
      callback.apply(this, args);
    }
    timerID = setInterval(() => {
      if (!immediate) {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
        callback.apply(this, args);
      }
      // This is to keep track if we are waiting before calling the function again
      timerID = null;
    }, delay);
  };
};
