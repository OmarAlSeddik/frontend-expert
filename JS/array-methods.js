Array.prototype.myMap = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    newArray.push(callback(element, i, this));
  }
  return newArray;
};

Array.prototype.myFilter = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    if (callback(element, i, this) === true) newArray.push(element);
  }
  return newArray;
};

Array.prototype.myReduce = function (callback, initialValue) {
  let previousValue;
  if (initialValue != null) {
    previousValue = initialValue;
    for (let i = 0; i < this.length; i++) {
      const currentValue = this[i];
      previousValue = callback(previousValue, currentValue, i, this);
    }
  } else {
    previousValue = this[0];
    for (let i = 1; i < this.length; i++) {
      const currentValue = this[i];
      previousValue = callback(previousValue, currentValue, i, this);
    }
  }
  return previousValue;
};
