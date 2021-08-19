//No 1
var nilai;
nilai = 77;

if (nilai >= 85) {
  console.log("A");
} else if (nilai >= 75 && nilai < 85) {
  console.log("B");
} else if (nilai >= 65 && nilai < 75) {
  console.log("C");
} else if (nilai >= 55 && nilai < 65) {
  console.log("D");
} else if (nilai < 55) {
  console.log("E");
}

//No 2
var tanggal = 02;
var bulan = 9;
var tahun = 2000;

switch (bulan) {
  case 9:
    bulan = "September";
    console.log(tanggal + " " + bulan + " " + tahun);
    break;
}

//No 3
//n=3
var n = 3;
var space = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    space += "#";
  }
  space += "\n";
}
console.log(space);

//n=7

var n = 7;
var space = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    space += "#";
  }
  space += "\n";
}
console.log(space);

//No 4
//Note Maap Mas saya pusing kalau gapakai Array hehehehe

const kata = ["I Love Programming", "I Love Javascript", "I Love VueJS"];

var panjang = kata.length;
var i = 0;
var j = 1;
var m = 10;
while (j <= m) {
  console.log(j + " - " + kata[i]);
  i += 1;
  j += 1;

  if (i == panjang) {
    console.log("#####");
    i = 0;
  }
}
