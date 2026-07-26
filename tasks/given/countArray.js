export function countArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input harus berupa array");
  }
  let results = 1;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      throw new Error("Input harus berupa array of integer");
    }
    results *= arr[i];
  }
  console.log("\n-----countArray-----\n");
  return results;
}

