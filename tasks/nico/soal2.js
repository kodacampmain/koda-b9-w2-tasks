export default function cetakTabel(num){
    if(typeof num !== "number" || num < 1){
        throw new Error("Parameter harus bertipe data nomor dan harus nomor positif");
    }

    let output = "";
    for(let i = 1; i <= 10; i++){
        let hitung = 0;
        hitung = num * i

        output += `${num} x ${i} = ${hitung}\n`
    }

    return output;
}