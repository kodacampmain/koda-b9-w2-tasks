export const manualReduce = (arr, callback, initialValue) => {
  // Variabel accumulator disini merupakan penampung hasil dari penggabungan (reduce) untuk tiap elemen pada array
  // Variabel accumulator, diinisialisasi dengan men-set valuenya sama dengan initialValue
  let accumulator = initialValue
  let start = 0

  // Jika parameter initialValue tidak ada, maka elemen pertama pada array akan dijadikan initial value untuk accumulator, serta iterasi dimulai dari 1 (start = 1)
  if (!initialValue) {
    accumulator = arr[0]
    start = 1
  }

  for (let i = start; i < arr.length; i++) {
    // Jalankan callback dengan membawa accumulator saat ini dan elemen array terbaru (current)
    // Return dari callback akan menimpa (re-assign) accumulator untuk dipakai di iterasi berikutnya
    // Pada setiap iterasi, panggil fungsi callback dengan 4 argumen (based on MDN):
    // 1. accumulator: hasil kumulatif/sementara dari iterasi sebelumnya
    // 2. arr[i]     : elemen array saat ini (current value)
    // 3. i          : indeks array saat ini (current index)
    // 4. arr        : array asal secara keseluruhan
    accumulator = callback(accumulator, arr[i], i, arr)
  }

  return accumulator
}

console.log(manualReduce([1,2,3,4,5], (acc, curr) => acc + curr));