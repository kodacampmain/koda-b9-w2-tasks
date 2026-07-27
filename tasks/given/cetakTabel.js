export function cetakTabel(n) {
  if (typeof n !== "number" || n < 0) {
    throw new Error ("Parameter harus bertipe data nomor dan harus nomor positif");
  }
  console.log("\n-----Cetak Tabel-----\n");
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} X ${i} = ${n * i}`);
  }
}

