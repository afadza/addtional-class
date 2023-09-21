// HOF (Higher Order Function) digunakan untuk Array Manipulation.
/* 
Backend membuat RESTfull API dengan format JSON berbentuk Array of object
Frontend menerima data dari backend
dan dimanipulasi dengan HOF
*/

// === forEach === \\
// Befungsi untuk perulangan dan menampilkan/ menjalankan fungsi disetiap elemen yg ada didalam array
// const number: number[] = [1, 2, 3, 4, 5, 6];
// number.forEach((num) => {
//     if(num % 2 === 0) {
//         console.log(num);
//     }
// });

// === map === \\
// Berfungsi untuk membuat array baru
// let number: number[] = [1, 2, 3, 4, 5, 6];
// number = number.map((num) => {
//     return num * 2
// })
// console.log(number);

// === filter === \\
// Berfungsi untuk membuat array baru yang kondisinya terpenuhi
// let number: number[] = [1, 2, 3, 4, 5, 6];
// number = number.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(number);

// === reduce === \\
// Berfungsi untuk melakukan operasi akumulasi pada elemen-elemen dalam sebuah array sehingga menghasilkan satu nilai tunggal
// let number: number[] = [1, 2, 3, 4, 5, 6];
// let result = number.reduce((previous, current) => {
//     return previous + current
// }, 0);
// console.log(result);

// === find === \\
// Berfungsi untuk menampilkan element pertam saja yang ada pada array apabila kondisi sudah terpenuhi
// let number: number[] = [1, 2, 3, 4, 5, 6];
// let result = number.find((num) => {
//     return num > 2
// });
// console.log(result);

// === some & every === \\
// 1. some = akan menghasilkan nilai true apabila ada salah 1 dari elemen array yang terpenuhi
// let number: number[] = [1, 2, 3, 4, 5, 6];
// let result = number.some(num => num % 2 === 0)
// console.log(result);

// 2. every = akan menghasilkan nilai false apabila ada salah 1 dari elemen array yang tidak terpenuhi
// let number: number[] = [1, 2, 3, 4, 5, 6];
// let result = number.every(num => num % 2 === 0)
// console.log(result);

// === indexOf & includes === \\
// 1. indexOf = untuk mencari elemen array ada di posisi index keberapa
// let number: number[] = [1, 2, 3, 4, 5, 6];
// let result = number.indexOf(4)
// console.log(result);

// 2. include = berfungsi untuk mencari apakah angka yang ada didalam includes() ada didalam elemen array atau tidak
// let number: number[] = [1, 2, 3, 4, 5, 6];
// let result = number.includes(7)
// console.log(result);

// === push & pop === \\
// 1. push = berfungsi untuk menambahkan elemen kedalam array
// let number: number[] = [1, 2, 3, 4, 5, 6];
// let result = number.push(7, 8)
// console.log(number);

// 2. pop = berfungsi untuk menghapus elemen terakhir pada array dan me return elemen tersebut kedalam array baru
// let number: number[] = [1, 2, 3, 4, 5, 6];
// let result = number.pop()
// console.log(number) // output [1, 2, 3, 4, 5]
// console.log(result) // output 6

// === shift & unshift === \\
// 1. shif = berfungsi untuk menghapus elemen pertama pada array dan me return elemen pertama kedalam array baru
// let number: number[] = [1, 2, 3, 4, 5, 6];
// let result = number.shift()
// console.log(result);
// console.log(number);

// 2. unshift = berfungsi untuk menambahkan elemen baru di index pertama pada array
// let number: number[] = [1, 2, 3, 4, 5, 6];
// let result = number.unshift(0)
// console.log(number); // output [0, 1, 2, 3, 4, 5, 6]
// console.log(result); // output 7 karena ada 7 index didalam array