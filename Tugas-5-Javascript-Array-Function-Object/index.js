//No 1
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
//jawab no 1
for (let i = 0; i <= 4; i++) {
  daftarHewan.sort();
  console.log(daftarHewan[i]);
}

//no 2
function introduce(data) {
  var hasil = "Nama saya " + data.name + ", umur saya " + data.age + " tahun, alamat saya di " + data.address + ", dan saya punya hobby yaitu " + data.hobby;

  return hasil;
}

var data = { name: "John", age: 30, address: "Jalan Pelesiran", hobby: "Gaming" };

var perkenalan = introduce(data);
console.log(perkenalan); // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di Jalan Pelesiran, dan saya punya hobby yaitu Gaming"

//no 3

function hitung_huruf_vokal(str) {
  var hitungVokal = 0;
  for (var i = 0; i <= str.length - 1; i++) {
    if (
      str.charAt(i) == "a" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "i" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "u" ||
      str.charAt(i) == "A" ||
      str.charAt(i) == "U" ||
      str.charAt(i) == "I" ||
      str.charAt(i) == "E" ||
      str.charAt(i) == "O"
    ) {
      hitungVokal += 1;
    }
  }
  return hitungVokal;
}

var tes = hitung_huruf_vokal("ROlaND BriLIAnto");
console.log("Jumlah vokal nya ada : " + tes + " Huruf");

// no 4
function hitung(angka) {
  return angka * 2 - 2;
}
console.log(hitung(3));
