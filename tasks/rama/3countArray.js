function countArray(array) {
  // fungsi perkalian tiap element dalam array
  let hasil = 1; // inisialisasi variabel hasil dari 1

  //Perkondisian untuk cek input harus berupa array
  //Handling error tampilkan pesan "Input harus berupa array"
  if (!Array.isArray(array)) {
    throw new Error("Input harus berupa Array");
  }
  for (let i = 0; i < array.length; i++) {
    //lakukan perulangan dari index 0 - index terakhir array
    hasil = hasil * array[i]; // lakukan perkalian dari tiap element dalam array
  }
  return hasil; // kembalikan nhasil perkalian seluruh element array
}

export default countArray;
