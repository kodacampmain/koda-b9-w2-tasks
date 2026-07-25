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