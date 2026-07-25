export const cetakTabel = (n) => {
  if (typeof n !== "number" || n < 1) {
    return "Parameter harus bertipe data nomor dan harus nomor positif";
  } else {
    let hasil ="";
    for (let i = 1; i <= 10; i++) {
      hasil += `${n} x ${i} = ${n*i}\n`;
    }
    return hasil;
  }
};
