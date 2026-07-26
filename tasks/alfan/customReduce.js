// membuat dan mengeksport function
export const customReduce = (arrs, callback, initVal) => {
  // membuat variabel result untuk digunakan sebagai accumulator
  // membuat pengkondisian jika initVal tidak ada maka accumulator berisi array indeks ke 0
  let result = initVal !== undefined ? initVal : arrs[0];

  // jika input bukan array maka error dan muncul peringatan
  if (!Array.isArray(arrs)) {
    throw new Error("Parameter harus berupa array");
  }

  // membuat loop untuk mengisi result
  for (let i = 0; i < arrs.length; i++) {
    // result = return dari callback
    result = callback(result, arrs[i]);
  }

  // return result untuk mengembalikan nilai
  return result;
};
