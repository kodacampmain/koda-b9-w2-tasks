// membuat dan mengeksport function
export const customFilter = (arrs, callback) => {
  // membuat array kosong untuk menampung nilai dari callback
  const result = [];

  // jika input bukan array maka akan error dan muncul peringatan
  if (!Array.isArray(arrs)) {
    throw new Error("Parameter harus berupa array");
  }

  // membuat loop untuk mengambil masing masing nilai yang ada di dalam array
  for (let i = 0; i < arrs.length; i++) {
    // membuat pengkondisian untuk mengambil nilai truthy dari callback
    if (callback(arrs[i], i)) {
       // jika calback dengan argument arrs[i] bernilai true maka result di tambah (push) dengan nilai arrs[i]
      result.push(arrs[i]);
    }
  }

  // return result untuk menghasilkan array baru
  return result;
};
