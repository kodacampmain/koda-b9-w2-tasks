function filter(arr, callback) { // menerima parameter array dan callback
  if (!Array.isArray(arr)) { // mengecek apakah input benar array
    throw new Error("Input harus berupa array");
  }
  const result = []; // menginisialisasi result sebagai array
  for (let i = 0; i < arr.length; i++) { //melakukan proses filter method
    if(callback(arr[i])){ // menegecek apakah callback mengembalikan nilai yang benar
      result[result.length] = callback(arr[i]); // memasukan nilai yang di kembalikan callback kedalam array resultl
    }
  }

  if (result.length === 0) { // mengembalikan pesan error jika tidak ada elemen dalam array yang sesuai ketentuan di callbackFilter(lebih dari 6 huruf)
    throw new Error("Kata dengan huruf lebih dari 6 tidak ditemukan");
  }
  console.log("\n-----Manual Filter-----\n");
  return result;
}

function callbackFilter(ele) { // memmbuat callbackFilter yang menerima parameter elemen
  const check = ele.length; // membuat variabel check yang mengambil panjang dari elemen
  if (check > 6) { // mengecek panjang dari elememen
    return ele; // mengembalikan elemen yang sudah sesaui
  }
  return ;
}

console.log(filter(words, callbackFilter))
