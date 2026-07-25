export function filter(arr) { // menerima parameter array
  if (!Array.isArray(arr)) { // mengecek apakah input benar array
    throw new Error("Input harus berupa array");
  }
  const result = []; // menginisialisasi result sebagai array
  for (let i = 0; i < arr.length; i++) { //melakukan proses filter method
    const check = arr[i].length;
    if (check > 6) {
      result[result.length] = ` ${arr[i]}`;
    }
  }

  if(result.length === 0){ // mengembalikan pesan error jika tidak ada hasil yang sesuai
    throw new Error ("Kata dengan huruf lebih dari 6 tidak ditemukan");
  }
  console.log("\n-----Manual Filter-----\n");
  return result;
}
