export const sortArrayOfObjects = (array, sortBy, order) => {
  const compareObjectValues = (key, order) => {
    const innerSort = (a, b) => {
      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

      let comparisonResult = 0;

      if (varA > varB) {
        comparisonResult = 1;
      } else if (varA < varB) {
        comparisonResult = -1;
      }

      return order === "desc" ? comparisonResult * -1 : comparisonResult;
    };

    return innerSort;
  };

  return array.sort(compareObjectValues(sortBy, order));
};
