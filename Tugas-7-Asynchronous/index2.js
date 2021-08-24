var readBooksPromise = require("./promise.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];
const [bukuSatu, bukuDua, bukuTiga, bukuEmpat] = books;
// Lanjutkan code untuk menjalankan function readBooksPromise
/*const bacaBuku = (remainingTime, books) => {
  let i = 0;
  readBooksPromise(remainingTime, books[i], function (time) {
    const bukuSelanjutnya = i + 1;
    if (bukuSelanjutnya < books.length) {
      bacaBuku(time, books, bukuSelanjutnya);
    }
  });
};

bacaBuku(10000, books, 0);

*/

const waktuAwal = 10000;

readBooksPromise(waktuAwal, bukuSatu).then((waktuSisa1) => {
  readBooksPromise(waktuSisa1, bukuDua).then((waktuSisa2) => {
    readBooksPromise(waktuSisa2, bukuTiga).then((waktuSisa3) => {
      readBooksPromise(waktuSisa3, bukuEmpat).catch((waktuHabis) => {
        console.log(waktuHabis);
      });
    });
  });
});
