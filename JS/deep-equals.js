const deepEquals = (valueOne, valueTwo) => {
  if (typeof valueOne !== typeof valueTwo) return false;
  if (typeof valueOne !== "object") {
    // NaN is of type number, but is not strictly equal to itself.
    if (Number.isNaN(valueOne) && Number.isNaN(valueTwo)) return true;
    return valueOne === valueTwo;
  }
  // null is of type object.
  if (valueOne === null || valueTwo === null) return valueOne === valueTwo;
  // both values point to the exact same object.
  if (valueOne === valueTwo) return true;
  // arrays are of type object.
  if (Array.isArray(valueOne) && Array.isArray(valueTwo)) {
    if (valueOne.length !== valueTwo.length) return false;
    for (let i = 0; i < valueOne.length; i++) {
      if (!deepEquals(valueOne[i], valueTwo[i])) return false;
    }
    return true;
  }
  // if only one of the two values is an array and the other is an object.
  if (Array.isArray(valueOne) || Array.isArray(valueTwo)) return false;
  const valueOneKeys = Object.keys(valueOne);
  const valueTwoKeys = Object.keys(valueTwo);
  if (valueOneKeys.length !== valueTwoKeys.length) return false;
  for (const key of valueOneKeys) {
    if (!valueTwo.hasOwnProperty(key)) return false;
    if (!deepEquals(valueOne[key], valueTwo[key])) return false;
  }

  return true;
};
