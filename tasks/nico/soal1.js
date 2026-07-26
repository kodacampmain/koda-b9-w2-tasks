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
    let acc; // berfungsi sebagai accumulator yang dimana menyimpan hasil dari operasi sebelumnya.
    let start;

    /**
     * jadi sifat reduce ini ketika kita tidak memberikan initVal, maka acc(accumulator) akan mengambil nilai index ke-0 dan index perulangan akan dimulai dari index 1, karena elemen pertama sudah dipakai oleh si acc. Sebaliknya, jika kita memberikan nilai initVal, maka acc akan menerima nilai awal berupa nilai dari initVal dan index dimulai dari 0.
     */
    //validasi langsung ke initVal, sebelum assign ke acc. Apakah iniVal falsy
    if(!initVal){
        acc = arr[0];
        start = 1; // pemakaian initIndex = 0 diawal memang sedikit berulang secara assign value. Jadi saya letakkan didalam block if agar start  dapat memiliki nilai ketika terdapat kondisi yang sesuai. Saya tadinya memang agak bingung apakah assign nilai dengan kondisi langsung diindex dengan ternary atau tidak, sedangkan kondisi yang saya lakukan sama dengan block if diatas. Tapi ini dapat menjadi pelajaran dalam menentukan agar tidak mengulang logika yang sama.
    }else{
        acc = initVal;
        start = 0;
    }

    // start berfungsi terhadap perulangan yaitu index dimulai dari nilai berapa sesuai kondisi initVal.
    for(let i = start; i < arr.length; i++){
        acc = callback(acc, arr[i]);
        //tiap iterasi, callback dipanggil. Disini saya hanya pakai 2 argumen yang dibutuhkan yaitu acc dan arr[i] sebagai elemen saat ini. Hasil return callback akan menimpa acc dan begitu seterusnya sampai seluruh iterasi.
    }

    return acc; 
    //acc yang mempunyai hasil akhir akumulasi, dikembalikan sebagai output dari fungsi
}

//Fungsi Callback
export const getMaxVal = (acc, current) => {
    return current > acc ? current : acc;
};
/**
 * acc(previousValue), current(currentValue)
 * proses: jika current lebih besar dari acc, maka kembalikan nilai current sebagai nilai maximal sementara(acc). Kalau tidak, maka kembalikan nilai dari acc.
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