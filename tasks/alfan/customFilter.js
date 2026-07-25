export const customFilter = (arrs, callback) => {
  const result = [];

  if (!Array.isArray(arrs)) {
    throw new Error("Parameter harus berupa array");
  }

  for (let i = 0; i < arrs.length; i++) {
    const n = arrs[i];

    if (callback(n, i)) {
      result.push(n);
    }
  }

  return result;
};
