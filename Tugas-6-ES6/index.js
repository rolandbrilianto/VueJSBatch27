//no 1

const hitungPersegiPanjang = (panjang, lebar) => {
  let keliling = 2 * (panjang + lebar);
  let luas = panjang * lebar;
  console.log(`Luas Persegi Panjang dengan panjang ${panjang} dan lebar ${lebar} adalah ${luas}`);
  console.log(`Keliling Persegi Panjang dengan panjang ${panjang} dan lebar ${lebar} adalah ${keliling}`);
};

hitungPersegiPanjang(6, 2);

//no2
/*const newFunction = function literal(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(firstName + " " + lastName);
    },
  };
};

//Driver Code
newFunction("William", "Imoh").fullName();
*/

//jawaban no 2
const nama = (namaDepan, namaBelakang) => {
  let namaLengkap = {
    firstName: namaDepan,
    lastName: namaBelakang,
  };
  // const { firstName, lastName } = namaLengkap;
  console.log(`${namaLengkap.firstName} ${namaLengkap.lastName}`);
};
nama("Roland", "Brilianto");

// no 3
const newObject = {
  firstName: "Muhammad",
  lastName: "Iqbal Mubarok",
  address: "Jalan Ranamanyar",
  hobby: "playing football",
};
//jawaban no 3
const { firstName, lastName, address, hobby } = newObject;

console.log(`${firstName} ${lastName} ${address} ${hobby}`);

//no 4
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];
//Driver Code
console.log(combined);

//no 5
const planet = "earth";
const view = "glass";
var before = "Lorem " + view + "dolor sit amet, " + "consectetur adipiscing elit," + planet;
let after = `Lorem ${view}dolor sit amet, consectetur adipiscing elit, ${planet}`;

console.log(before);
console.log(after);
