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

/**
 * Task Carlos
 */

import carlos from "./tasks/carlos/index.js";

console.log("===========================================");
// USE IIFE here
(function taskCarlos() {
  // Reduce Manual
  try {
    const reduce = carlos.reduceManuel([1, 2, 3, 4, 5, 6], carlos.callbackTotal);
    console.log(reduce);
  } catch (error) {
    console.log(error.message);
  }
  // Filter Manual
  try {
    const filter = carlos.filterManual([1, 2, 3, 4, 5, 6], carlos.callbackAngkaGenap);
    console.log(filter);
  } catch (error) {
    console.log(error.message);
  }
  // Cetak tabel perkalian
  // Success
  try {
    const perkalian = carlos.cetakTabel(5);
    console.log(perkalian);
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const perkalian = carlos.cetakTabel("abc");
    console.log(perkalian);
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const perkalian = carlos.cetakTabel(-1);
    console.log(perkalian);
  } catch (error) {
    console.log(error.message);
  }
  // Count Array
  try {
    const count = carlos.countArray([2, 3, 4, 5, 6]);;
    console.log(count);
  } catch (error) {
    console.log(error.message);
  }
})();
console.log("===========================================");

/**
 * Task Ridho
 */

import { ridho } from "./tasks/ridho/index.js";

console.log("===========================================");
(function taskRidho() {
  // Manual Reduce
  // Success
  try {
    console.log("Manual Reduce (Success)");
    const manualReduce = ridho.manualReduce([1,2,3,4,5], (acc, curr) => acc + curr);
    console.log(manualReduce);
  } catch (e) {
    console.log(e.message);
  }
  // Failed
  try {
    console.log("Manual Reduce (Failed)");
    const manualReduce = ridho.manualReduce("a", (acc, curr) => acc + curr);
    console.log(manualReduce);
  } catch (e) {
    console.log(e.message);
  }
  // Manual Filter
  // Success
  try {
    console.log("Manual Filter (Success)");
    const manualFilter = ridho.manualFilter([1,2,3,4,5,6], (num) => num > 3);
    console.log(manualFilter);
  } catch (e) {
    console.log(e.message);
  }
  // Failed
  try {
    console.log("Manual Filter (Failed)");
    const manualFilter = ridho.manualFilter("a", (num) => num > 3);
    console.log(manualFilter);
  } catch (e) {
    console.log(e.message);
  } 
  // Fungsi Cetak Tabel
  // Success
  try {
    console.log("Cetak Tabel (Success)");
    const cetakTabel = ridho.cetakTabel(3);
    console.log(cetakTabel);
  } catch (e) {
    console.log(e.message);
  }
  // Failed
  try {
    console.log("Cetak Tabel (Failed)");
    const cetakTabel = ridho.cetakTabel("abc");
    console.log(cetakTabel);
  } catch (e) {
    console.log(e.message);
  }
  // Fungsi Count Array
  // Success
  try {
    console.log("Count Array (Success)");
    const countArray = ridho.countArray([1,2,3,4,5]);
    console.log(countArray);
  } catch (e) {
    console.log(e.message);
  }
  // Failed
  try {
    console.log("Count Array (Failed)");
    const countArray = ridho.countArray("abc");
    console.log(countArray);
  } catch (e) {
    console.log(e.message);
  }
})();
console.log("===========================================");

/**
 * Task Marianus Given
 */

import given from "./tasks/given/index.js";

console.log("===========================================");
(function taskGiven() {
  //1-a manual reduce method
  //success
  try {
    const arr = [1, 2, 3, 4];
    const reduce = given.manualReduce(arr, given.callbackReduce, 1);
    console.log(`Success result : ${reduce}`);
  } catch (err) {
    console.log(err);
  }
  //failed
  try {
    const arr = 11;
    const reduce = given.manualReduce(arr, given.callbackReduce, 1);
    console.log(`Success result : ${reduce}`);
  } catch (err) {
    console.log(`Failed result : ${err}`);
  }

  //1-b manual filter method
  //success
  try {
    const words = ["spray", "elite", "exuberant", "destruction", "present"];
    const filter = given.filter(words);
    console.log(`Success result : ${filter}`);
  } catch (err) {
    console.log(`Failed result : ${err}`);
  }
  //failed
  try {
    const words = ["spray", "elite"];
    const filter = given.filter(words);
    console.log(`Success result : ${filter}`);
  } catch (err) {
    console.log(`Failed result : ${err}`);
  }

  //2 cetakTabel
  //success
  try {
    const number = 3;
    given.cetakTabel(number);
    console.log("Tabel perkalian berhasil dibuat");
  } catch (err) {
    console.log(`Failed result : ${err}`);
  }
  //failed
  try {
    const number = -10;
    given.cetakTabel(number);
    console.log("Tabel perkalian berhasil dibuat");
  } catch (err) {
    console.log(`\nFailed result : ${err}`);
  }
  //3 countArray
  //success
  try {
    const arr = [2, 2, 2, 2, 2];
    const result = given.countArray(arr);
    console.log(`Success result: ${result}`);
  } catch (err) {
    console.log(`Failed result : ${err}`);
  }
  //failed
  try {
    const arr = 2;
    const result = given.countArray(arr);
    console.log(`Success result: ${result}`);
  } catch (err) {
    console.log(`Failed result : ${err}\n`);
  }
})();
console.log("===========================================");
