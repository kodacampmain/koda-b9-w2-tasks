const countArray = (nums) => {
    let result = nums[0]
    
    for (let i = 1; i < nums.length; i++){
       result *= nums[i]
    }

    return result
}

console.log(countArray([1,2,3,4,5]))
console.log(countArray([2,2,2,2,2]))