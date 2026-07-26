/**
 * Task Fakhri
 */

import fakhri from "./tasks/fakhri/index.js";

console.log("===========================================");
// Use IIFE here
(function taskFakhri() {
  // Convert Celcius to Fahrenheit
  // Success
  try {
    const fahrenheit = fakhri.celciusToFahrenheit(10);
    console.log(fahrenheit);
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const fahrenheit = fakhri.celciusToFahrenheit("10", 30);
    console.log(fahrenheit);
  } catch (error) {
    console.log(error.message);
  }
  // Counting Changes Nominal
  // Success
  try {
    const changes = fakhri.cashier(250_000, 375_000);
    console.log(changes);
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const changes = fakhri.cashier("250_000", "375_000");
    console.log(changes);
  } catch (error) {
    console.log(error.message);
  }
})();
console.log("===========================================");

/**
 * Task Rama
 */

import rama from "./tasks/rama/index.js";

console.log("===========================================");

// gunakan IIFE 
(function taskRama() {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Task 1 - Filter Manual
  // callback mengembalikan true jika angka ganjil
  console.log(rama.filterManual(number, (item) => item % 2 !== 0));

  // Task 1 - Reduce Manual
  console.log(rama.reduceManual(number,(accumulator, currentValue) => accumulator + currentValue,0));

  // Task 2 - Cetak tabel perkalian
  rama.cetakTabel(7);

  // Task 3 - Perkalian seluruh elemen array
  const nilai = [1, 3, 5, 7, 9];
  console.log(rama.countArray(nilai));
})();

console.log("===========================================");

