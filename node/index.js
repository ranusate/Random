// Object Literal
//  Tidak efectif untuk object yang banyak
let student = {
  name: "ranus",
  makan: makan(),
};
let as = {
  name: "ranus",
  makan: function (jam) {
    `Selamat tidur boss ku....!!! ${jam}`;
  },
};

function makan(name) {
  return `Selamat makan ${name}`;
}

// Function Declaration

function Mhs(name, age) {
  let mhs = {};
  mhs.name = name;
  mhs.age = age;
  mhs.makan = makan(name);
  return mhs;
}

let joko = Mhs("Joko", 21);
let edi = Mhs("Edi", 21);

console.log(joko);
console.log(edi);

// Constructor Declaration

function DMhs(name, age) {
  this.name = name;
  this.age = age;
  this.makan = makan(name);
}
let a = new DMhs("Jon", 1);
console.log(a);
