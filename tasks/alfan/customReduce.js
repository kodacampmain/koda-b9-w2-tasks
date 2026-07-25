export const customReduce = (arrs, callback, initVal) => {
  let result = initVal !== undefined ? initVal : arrs[0];

  if (!Array.isArray(arrs)) {
    throw new Error("Parameter harus berupa array");
  }

  for (let i = 0; i < arrs.length; i++) {
    result = callback(result, arrs[i]);
  }

  return result;
};
