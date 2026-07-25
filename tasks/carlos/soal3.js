export const countArray = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Parameter harus berupa array");
  }
  let total = 1;
  for (let i = 0; i < arr.length; i++) {
    total *= arr[i];
  }
  return total;
};