export function manualReduce(array, callback, init) { //menerima parameter array, callback, dan initialValue
  let curr = null; //currenValue di definisikan dengan nilai null di awal
  const acc = init || array[0]; //accumulator akan di berina nilai initialValue jika ada jika tidak akan menggunakan value pertama array

  if (!Array.isArray(array)) { //mengecek apakah input dari paramater array benar 
    throw new Error("Input harus berupa array");
  }

  if (typeof init === "undefined") { // jika nilai initialValue tidak diberikan, nilai currenValue akan 1 jika diberikan nilai nya 0
    curr = 1;
  } else {
    curr = 0;
  }
  console.log("-----Manual Reduce-----\n");
  return callback(acc, curr, array); //membalikan hasil dari fungsi callback
}

export function callbackReduce(acc, curr, array) {// fungsi callback menerima parameter acc, curr dan array
  for (curr; curr < array.length; curr++) { //proses dari reduce method
    acc += array[curr];
  }

  return acc;
}