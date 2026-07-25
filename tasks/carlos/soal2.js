export const cetakTabel = (n) => {
  if (typeof n !== "number" || n < 1) {
    console.log("Parameter harus bertipe data nomor dan harus nomor positif")
  } else {
    for (let i = 1; i <= 10; i++) {
      console.log(`${n} x ${i} = ${n*i}`)
    }
  }
}
