export function reduceImplementation(arr, callback, initVal){
    //validasi apakah arr bertipe array
    //kalau kondisi sesuai(bukan array) maka fungsi akan berhenti dan melempar(throw) pesan error
    if(!Array.isArray(arr)){ 
        throw new Error("Berikan sebuah Param berupa Array");
    }

    // const simpan = arr.reduce()
    /**
     *reduce mempunyai fungsi callback sebagai argumennya, yang dimana fungsi callback itu sendiri mempunyai 4 parameter(previousValue, currentValue, currentIndex, array) yang akan dimasukkan sesuai kebutuhan disaat fungsi utama dipanggil.  
    */
    let tempMax = initVal; // berfungsi sebagai accumulator yang dimana menyimpan hasil dari operasi sebelumnya. tempMax ini menerima initValue yang diberikan
    let initIndex = 0;//berfungsi terhadap perulangan yaitu index dimulai dari nilai berapa, untuk nilai awal sesuai method reduce yaitu 0

    /**
     * jadi sifat reduce ini ketika kita tidak memberikan initVal, maka tempMax(accumulator) akan mengambil nilai index[0] pertama dan initIndex akan dimulai dari index 1, karena elemen pertama sudah dipakai oleh si tempMax. Sebaliknya, jika kita memberikan nilai initVal, maka tempMax akan menerima nilai awal berupa nilai dari initVal dan initIndex dimulai dari index pertama.
     */
    if(tempMax === undefined){
        tempMax = arr[0];
        initIndex = 1;
    }

    // perulangan dimulai dari initIndex sampai akhir array
    for(let i = initIndex; i < arr.length; i++){
        tempMax = callback(tempMax, arr[i]);
        //tiap iterasi, callback dipanggil. Disini saya hanya pakai 2 argumen yang dibutuhkan yaitu tempMax dan arr[i] sebagai elemen saat ini. Hasil return callback akan menimpa tempMax dan begitu seterusnya sampai seluruh iterasi.
    }

    return tempMax; 
    //tempMax yang mempunyai hasil akhir akumulasi, dikembalikan sebagai output dari fungsi
}

//Fungsi Callback
export const getMaxVal = (tempMax, current) => {
    return current > tempMax ? current : tempMax;
};
/**
 * tempMax(previousValue), current(currentValue)
 * proses: jika current lebih besar dari tempMax, maka kembalikan nilai current sebagai nilai maximal sementara(tempMax). Kalau tidak, maka kembalikan nilai dari tempMax.
 */

// ================================================

//Manual Filter
export function filterImplementation(arr, callback){
    //cek, jikalau arr bukan bertipe array, maka lempar pesan error.
    if(!Array.isArray(arr)){
        throw new Error("Berikan sebuah Param berupa Array");
    }

    const output = []; //init array baru
    for(let i = 0; i < arr.length; i++){
        const getVal = callback(arr[i]);
        //callback dipanggil dan diberikan nilai dari arr[i], lalu getVal akan menerima hasil return dari callback berupa nilai boolean
        if(getVal){ //cek, jika true, maka arr[i] kita push kedalam array output, begitu sampai iterasi selesai
            output.push(arr[i]);
        }
    }
    return output; //mengembalikan sebagai output dari fungsi berupa array
}

//Fungsi Callback - mengecek apakah nilai adalah genap, jika ya return nilai berupa boolean yaitu true, jika tidak, return false
export const getEvenVal = (num => {
    return num % 2 === 0;
})