function countArray(array) {
  // fungsi perkalian tiap element dalam array
  let hasil = 1; // inisialisasi variabel hasil dari 1
  for (let i = 0; i < array.length; i++) {
    //lakukan perulangan dari index 0 - index terakhir array
    hasil = hasil * array[i]; // lakukan perkalian dari tiap element dalam array
  }
  return hasil; // kembalikan nhasil perkalian seluruh element array
}

export default countArray;
