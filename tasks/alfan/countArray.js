export const countArray = (arrs) => {
  let result = 1;

  if (!Array.isArray(arrs)) {
    throw new Error("Parameter harus berupa array");
  }

  for (let i = 0; i < arrs.length; i++) {
    if (typeof arrs[i] !== "number") {
      throw new Error("Isi di dalam array harus bertipe data integer");
    }

    result *= arrs[i];
  }

  return result;
};
