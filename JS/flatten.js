const flattenArray = (array) => {
  return array.reduce((acc, curr) => acc.concat(flatten(curr)), []);
};

const flattenObject = (object) => {
  const flattenedObject = {};
  for (const [key, value] of Object.entries(object)) {
    const valueIsObject =
      typeof value === "object" && value !== null && !Array.isArray(value);
    const flattenedValue = flatten(value);
    if (valueIsObject) {
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
      Object.assign(flattenedObject, flattenedValue);
    } else {
      flattenedObject[key] = flattenedValue;
    }
  }
  return flattenedObject;
};

const flatten = (value) => {
  if (typeof value !== "object" || value === null) {
    return value;
  }
  return Array.isArray(value) ? flattenArray(value) : flattenObject(value);
};
