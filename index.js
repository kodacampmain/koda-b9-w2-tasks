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
    const manualReduce = ridho.manualReduce([], (acc, curr) => acc + curr);
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
    const manualFilter = ridho.manualFilter([], (num) => num > 3);
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