export const cetakTabel = (num) => {
  if (typeof num !== "number" || num < 1) {
    throw new Error("Parameter harus bertipe data nomor dan harus positif");
  }

  for (let i = 1; i <= 10; i++) {
    let baris = "";

    baris += `${num} x ${i} = ${num * i}`;

    console.log(baris);
  }
};
