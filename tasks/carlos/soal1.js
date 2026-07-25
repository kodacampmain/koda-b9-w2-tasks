export const reduceManual = (array, callback, initialValue) => {
  let accumulator = initialValue;
  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    accumulator = callback(accumulator, currentValue, i, array);
  }
  return accumulator;
};

export const callbackTotal = (acc, curr) => {
  return acc + curr;
};

/**
 * Pada built in method reduce terdapat sebuah fungsi callback sebagai argumennya,
 * dimana callback ini memiliki 4 parameter yakni : previousValue, currentValue, 
 * currentIndex, dan array. 
 * 
 * Selain itu, reduce juga memiliki satu artgumen bernama initialValue, sebagai accumulator
 * tempat hasil fungsi callback dijalankan
 * 
 * reduce juga bekerja sebagai perulangan, dan dilanjutkan logika dari fungsi callback untuk
 * mengolah array yang digunakan
 * 
 * Jadi bisa dibilang tahap tahapnya adalah: 
 * 1. Fungsi menerima input array
 * 2. Kemudian fungsi melihat initialValue sebagai penampung output
 * 3. Dilakukan perulangan yang dimana perulangan ini berisi fungsi callback, sbg inisiator logika
 *    apa ingin digunakan pada fungsi tersebut
 * 4. Type data output akan sesuai dengan dengan initialValue
 * 5. Hasil return fungsi ini adalah initialValue, penampung hasil logika dari fungsi callbacknya
 */

export const filterManual = (array, callback) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    const checkCondition = callback(value, i, array);
    if (checkCondition) {
      result.push(value);
    }
  }
  return result;
};

export const callbackAngkaGenap = (val) => {
  return val % 2 === 0;
};

/**
 * Built in method filter() memiliki argumen callback dimana callback ini sendiri memiliki 3
 * parameter yakni : value, indeks dan array
 * 
 * callback dari method filter ini adalah penentu logika filtering dan jika sesuai, akan dimasukkan
 * ke dalam sebuah array penampung
 * 
 * Untuk alurnya: 
 * 1. Fungsi menerima input array
 * 2. Fungsi memiliki sebuah penampung tempat data yang sesaui dengan logika filtering
 * 3. fungsi melakukan perulangan, yang didalam perulangannya melakukan pengecekan validasi logika, 
 *    dan jika true, maka value yang sesuai akan di push ke dalam sebuah array baru
 * 4. Fungsi akan mereturnkan hasil filtering (result)
 */