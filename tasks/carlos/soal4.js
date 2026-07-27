/**
 * Uncaught ReferenceError: user is not defined
    at getUserData (app.js:15:10)
    at processUser (app.js:30:5)
    at main (app.js:50:2)

    Jenis Error: ReferenceError
    Terjadi karena program mencoba menjalankan variabel user namun tidak pernah dideklarasikan
    Lokasi error
    File : app.js
    Function : getUserData
    Line : 15

  TypeError: Cannot read properties of null (reading 'length')
    at processData (data.js:8:15)
    at handleRequest (server.js:20:5)
    at main (app.js:35:2)

    Jenis Error: TypeError
    Terjadi karena kode mencoba membaca properti .length dari sebuah variabel yang bernilai null
    Lokasi error
    File : data.js
    Function : processData
    Line : 8

  SyntaxError: Unexpected token ')'
    at script.js:5

    Jenis Error: SyntaxError
    Terjadi karena adanya penggunakan ')' yang kelebihan atau tempatnya tidak benar/salah lokasi
    Lokasi Error
    File : script.js
    Function : Global Scope
    Line : 5

  TypeError: Cannot set properties of undefined (setting 'status')
    at updateOrder (order.js:18:12)
    at processOrder (order.js:35:5)
    at checkout (cart.js:50:2)

    Jenis Error: TypeError
    Terjadi karena adanya penggunaan properti .status pada sebuah variabel yang bernilai undefined
    Lokasi Error
    File : order.js
    Function : updateOrder
    Line : 18

  RangeError: Maximum call stack size exceeded
    at recursiveFunction (app.js:10:3)
    at recursiveFunction (app.js:10:3)
    at recursiveFunction (app.js:10:3)
    ...

    Jenis Error : RangeError
    Terjadinya pemanggilan fungsi rekursif (pemanggilan fungsi dengan fungsi itu sendiri) yang berulang ulang dan tidak berhenti karena tiak memiliki kondisi berhenti
    Lokasi Error
    File : app.js
    Function : recursiveFunction
    Line : 10
 */