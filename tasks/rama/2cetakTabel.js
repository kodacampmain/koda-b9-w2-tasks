function cetakTabel(n) {
  // fungsi tabel perkalian dari sebuah angka
  if (typeof n !== "number" || n < 0) {
    // validasi jika nilai bukan angka dan angka tidak bernilai positif
    throw new Error("Parameter harus bertipe data nomor dan harus nomor positif"); // outputkan pesan
  }
  
  for (let i = 1; i <= 10; i++) {
    //lakukan perulangan dari 1 - 10

    console.log(`${n} x ${i} = ${n * i}`);
  } //cetak hasil perkalian dari nilai n setiap nilai i
}

export default cetakTabel;