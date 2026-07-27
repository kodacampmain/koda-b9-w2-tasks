function filterManual(arr, callback) {
  // fungsi filter yang bekerja seperti Array.filter()
  const result = []; // array untuk menampung hasil filter 

  //Perkondisian untuk cek apakah input berupa array
  // handling error input nilai harus berupa array
  if (!Array.isArray(arr)) {
    
    throw new Error("Input harus array") 
  }

  for (let i = 0; i < arr.length; i++) {
    // mengambil nilai array pada index ke-i
    const element = arr[i];

    // jika callback mengembalikan true,
    // maka element dimasukkan ke array hasil
    if (callback(element, i, arr)) {
      result.push(element);
    }
  }

  // mengembalikan array hasil filter
  return result;
}

function reduceManual(array, callback, initialValue) {
  // menentukan nilai awal accumulator
  let accumulator = initialValue;
  let startIndex = 0;

  // Perkondisian untuk cek nilai harus array
  // Handling error input nilai harus berupa array
  if (!Array.isArray(array)) {
    throw new Error("nilai harus angka")
    
  }

  // jika initialValue tidak diberikan,
  // gunakan element pertama sebagai accumulator
  if (initialValue === undefined) {
    accumulator = array[0];
    startIndex = 1;
  }

  // lakukan perulangan mulai dari startIndex
  for (let i = startIndex; i < array.length; i++) {
    // hasil callback menjadi accumulator berikutnya
    accumulator = callback(accumulator, array[i], i, array);
  }

  // mengembalikan hasil akhir
  return accumulator;
}

export { filterManual, reduceManual };