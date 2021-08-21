//no 1

function next_date(tanggal, bulan, tahun) {
  var objectHari = { year: "numeric", month: "long", day: "numeric" };
  const hariBaru = new Date(tahun, bulan - 1, tanggal + 1);
  console.log(hariBaru.toLocaleDateString("id", objectHari));
}

var tanggal = 2;
var bulan = 12;
var tahun = 2021;
next_date(tanggal, bulan, tahun);

//No 2
function jumlah_kata(kalimat) {
  return kalimat.split(" ").length;
}

var kalimat_1 = "Halo nama saya Roland Brilianto";
var kalimat_2 = "Saya Luffy";
console.log(jumlah_kata(kalimat_1));
console.log(jumlah_kata(kalimat_2));
