import { filterManual, reduceManual } from "./1builtin.js";
import cetakTabel from "./2cetakTabel.js";
import countArray from "./3countArray.js";

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(filterManual(number));
console.log(reduceManual(number));

cetakTabel(7);

const nilai = [1, 3, 5, 7, 9];
console.log(countArray(nilai));