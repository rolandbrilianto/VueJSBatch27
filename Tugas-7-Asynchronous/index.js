var readBooks = require("./callback.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];
const [bukuSatu, bukuDua, bukuTiga, bukuEmpat] = books;
//jawaban no 1
/*const bacaBuku = (remainingTime, books, i) => {
  readBooks(remainingTime, books[i], function (time) {
    const bukuSelanjutnya = i + 1;
    if (bukuSelanjutnya < books.length) {
      bacaBuku(time, books, bukuSelanjutnya);
    }
  });
};

bacaBuku(10000, books, 0);
*/

const waktuAwal = 10000;
console.log(`Waktu saya ada ${waktuAwal}`);
readBooks(waktuAwal, bukuSatu, (sisaWaktu1) => {
  readBooks(sisaWaktu1, bukuDua, (sisaWaktu2) => {
    readBooks(sisaWaktu2, bukuTiga, (sisaWaktu3) => {
      readBooks(sisaWaktu3, bukuEmpat, (waktuHabis) => {
        console.log(waktuHabis);
      });
    });
  });
});
