// === Single promise === \\
// Cara pertama
// let myPromise: Promise<string> = new Promise((resolve, reject) => {
//   let success: boolean = true;

//   if (success) {
//     resolve("Sukses");
//   } else {
//     reject("Gagal");
//   }
// });

// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Cara kedua
// const lulus: Boolean = true;
// const siswaLulus: Promise<string> = new Promise((resolve, reject) => {
//     lulus ? resolve('') : reject('');
// });

// siswaLulus
//     .then((hasil) => console.log('Selamat kamu lulus'))
//     .catch((hasil) => console.log('Coba lagi'));



// // === Promise all === \\
// interface Member {
//     id: number
//     name: string
//     isVip: boolean
// }

// interface Product {
//     id: number
//     name: string
//     price: number
// }

// const member = new Promise<Member[]> (resolve => {
//     setTimeout(() => {
//         resolve([
//             {
//                 id: 1,
//                 name: 'Afadz',
//                 isVip: true
//             }
//         ])
//     }, 4000);
// });

// const product = new Promise<Product[]> ((resolve, reject) => {
//     setTimeout(() => {
//         resolve([
//             {
//                 id: 1,
//                 name: 'Iphone',
//                 price: 5000
//             }
//         ])
//     }, 3000);
// });

// Promise.all([member, product]).then(response => console.log(response))