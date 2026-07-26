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
    // membuat variable n untuk mengambil nilai dari masing masing array
    const n = arrs[i];

    // membuat pengkondisian untuk mengambil nilai truthy dari callback
    if (callback(n, i)) {
      // jika calback dengan argument n,i bernilai true maka result di tambah (push) dengan nilai n
      result.push(n);
    }
  }

  // return result untuk menghasilkan array baru
  return result;
};
