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
 * Task Alfan Nurfaiz
 */

import alfan from "./tasks/alfan/index.js";

console.log("===========================================");
// Use IIFE here
(function taskAlfan() {
  // 1-a Custom reduce method
  // Success
  try {
    const numbers = [10, 20, 30, 40];
    const totalSum = alfan.customReduce(numbers, (acc, curr) => acc + curr, 0);

    console.log(" ");
    console.log("1a.Custom reduce");
    console.log("Success: " + totalSum);
  } catch (error) {
    console.log("Failed: " + error.message);
  }
  // Failed
  try {
    const numbers = 10;
    const totalSum = alfan.customReduce(numbers, (acc, curr) => acc + curr, 0);

    console.log(" ");
    console.log("1a.Custom reduce");
    console.log("Success: " + totalSum);
  } catch (error) {
    console.log("Failed: " + error.message);
  }
  // 1-b Custom filter method
  // Success
  try {
    const arrs = [1, 2, 3, 4, 5];
    const filtered = alfan.customFilter(arrs, (arr=> arr !== 1 ));

    console.log(" ");
    console.log("1b.Custom filter");
    console.log("Success: ", filtered);
  } catch (error) {
    console.log("Failed: " + error.message);
  }
  // Failed
   try {
    const arrs = 1;
    const filtered = alfan.customFilter(arrs, (arr=> arr !== 1 ));

    console.log(" ");
    console.log("1b.Custom filter");
    console.log("Success: ", filtered);
  } catch (error) {
    console.log("Failed: " + error.message);
  }
  // 2 Cetak tabel
  // Success
  try {
    console.log(" ");
    console.log("2.Cetak tabel");
    
    alfan.cetakTabel(3);

    console.log("Cetak tabel sukses!");
  } catch (error) {
    console.log("Failed: " + error.message);
  }
  // Failed
  try {
    console.log(" ");
    console.log("2.Cetak tabel");
    
    alfan.cetakTabel("");

    console.log("Cetak tabel sukses!");
  } catch (error) {
    console.log("Failed: " + error.message);
  }
  // 3 Count array
  // Success
  try {
    const count = alfan.countArray([1, 2, 3, 4, 5]);

    console.log(" ");
    console.log("3.Hasil count array");
    console.log("Success: " + count);
  } catch (error) {
    console.log("Failed: " + error.message);
  }
  // Failed
  try {
    const count = alfan.countArray([1, "a", 2, 3]);
    
    console.log(" ");
    console.log("3.Hasil count array");
    console.log("Success: " + count);
  } catch (error) {
    console.log("Failed: " + error.message);
  }
})();
console.log("===========================================");