export default function countArray(arr){
    
    if(!Array.isArray(arr)){
        throw new Error("Berikan sebuah param berupa Array")
    }

    let output = 1;

    for(let i = 0; i < arr.length; i++){
        output *= arr[i]
    }

    return output
}
