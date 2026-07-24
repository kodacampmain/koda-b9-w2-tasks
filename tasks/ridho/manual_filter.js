export const manualFilter = (arr, callback, ) => {
  // Declare variabel result sebagai array penampung hasil filter, dan berfungsi sebagai nilai yg di-return
  const result = [];
  // Variabel ini merupakan indeks untuk array 'result' (incremented jika callback/filternya true)
  let resIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    // Execute callback untuk memeriksa apakah elemen ke-i dalam array memenuhi kondisi filter (yg ditetapkan dalam fungsi callback)
    // Jika callback me-return nilai truthy, masukkan elemen tersebut ke dalam array 'result'
    if (callback(arr[i], i, arr)) {
      result[resIndex] = arr[i];
      resIndex++; // Naikkan counter index array result
    }
  }

  return result;
};

console.log(manualFilter([1,2,3,4,5,6], (num) => num > 3));