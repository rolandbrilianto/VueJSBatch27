//Soal 1
var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";

//jawaban soal 1
let kata1 = pertama.substring(0, 5);

let kata2 = pertama.substring(12, 18);

let kata3 = kedua.substring(0, 8);

let kata4 = kedua.substring(8, 18);
let kata4Upper = kata4.toLocaleUpperCase();

let kataGabungan1 = kata1.concat(kata2);
let kataGabungan2 = kata3.concat(kata4Upper);
//FINAL ANSWER
console.log(kataGabungan1 + " " + kataGabungan2);

//Soal 2
var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";

//Jawaban no 2
let angkaPertama = parseInt(kataPertama);
let angkaKedua = parseInt(kataKedua);
let angkaKetiga = parseInt(kataKetiga);
let angkaKeempat = parseInt(kataKeempat);

let hasil = (angkaKeempat - angkaKetiga) * (angkaKedua + angkaPertama);

console.log(hasil);

//Soal 3 dan jawaban
var kalimat = "wah javascript itu keren sekali";

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 15); // do your own!
var kataKetiga = kalimat.substring(15, 18); // do your own!
var kataKeempat = kalimat.substring(19, 24); // do your own!
var kataKelima = kalimat.substring(25, 31); // do your own!

console.log("Kata Pertama: " + kataPertama);
console.log("Kata Kedua: " + kataKedua);
console.log("Kata Ketiga: " + kataKetiga);
console.log("Kata Keempat: " + kataKeempat);
console.log("Kata Kelima: " + kataKelima);
