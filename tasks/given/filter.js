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


