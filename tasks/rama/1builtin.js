function filterManual(arr) {
  // fungsi filter angka ganjil dalam array
  const number = []; // array kosong untuk menampung angka ganjil
  for (let i = 0; i < arr.length; i++) {
    // lakukan perulangan mulai dari index 0 sampai index terakhir array
    const element = arr[i]; // mengambil nilai array dari index ke-i
    if (element % 2 !== 0) {
      // jika nilai modulus 2 = 0 (adalah angka ganjil)

      number.push(element); // tambahkan element arr ke variabel number
    }
  }
  return number; // kembalikan array yg berisi angka ganjil
}

function reduceManual(array) {
  //fungsi menjumlahkan angka dalam array
  let result = 0; // variabel kosong untuk menampung hasil akumulasi
  for (let a = 0; a < array.length; a++) {
    // lakukan perulangan mulai index 0 sampai index terakhir array
    result = result + array[a]; // menambahkan nilai array pada index ke a ke dalam result
  }
  return result; // kembalikan hasil penjumlahan seluruh element dalam array
}

export { filterManual, reduceManual };