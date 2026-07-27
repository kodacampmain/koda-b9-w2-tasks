/**
 * Function to print the result of multiplying n from 1 to 10
 * Input: n (number)
 * Output: a list of multiplication results between n and 1-10
 */
export const cetakTabel = (n) => {
  if (typeof n !== "number" || n < 1) {
    throw new Error(
      "Parameter harus bertipe data nomor dan harus nomor positif",
    );
  } else {
    for (let i = 1; i <= 10; i++) {
      console.log(`${n} x ${i} = ${n * i}`);
    }

    return "Berhasil mencetak tabel.";
  }
};

// cetakTabel("abc");
// cetakTabel(-1);
// cetakTabel(3);