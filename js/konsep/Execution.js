/** ======== Execution Context, Hoisting & Scope ====== */

let name = "Ranus"; // nama baru disimpan ke memory
console.log(name); // Pertama nama diisi dengan undifined kemudian

/** 1. Creation phase pada global Context */
// SEMUA VARIABEL DIISI DENGAN UNDIFINED Dan
// FUNCTION DIISI DENGAN FUNCTION ITU SENDIRI => link  javascirpt visualisation
// nama var = undifined
// nama func = fn() diisi dengan nama function itu sendiri
// => dinamakan phase hoisting

/** Execution phase */

let names = "Ranus";
console.log(names);
function a() {
  console.log("ini a");
  function b() {
    console.log("ini b");
    function c() {
      console.log("ini c");
    }
    c();
  }
  b();
}
a();

let angka = [1, 2, 2, 3, 4, 5, 6, 7, 8];

let e = angka.map(function (e) {
  return e;
});

console.log(e.join("*"));
