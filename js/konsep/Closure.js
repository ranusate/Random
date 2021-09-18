/** ========Closure======= */

/**
 * Closure => Kombinasi didalam function tersebut > Mozilla
 * Closure => function yang mengembalikan function yang lain
 *
 */

function init() {
  let name = "Ranus";
  function hy() {
    // Closure
    // tidak ada variabel didalam function
    // Tapi jika ada variabel name dalam function hy() makan bukan closure lagi
    console.log(name);
  }

  //   jika mengembalikan function hy() memungkinkan menggunakan function factory
  // return hy;
  hy();
}

init();

/**
 *
 *  Alasan menggunakan closure untuk membuat function factory
 *  dan seolah-olah membuat private method
 */

function inits() {
  //   function hys(name) {
  //     // Closure
  //     // tidak ada variabel didalam function
  //     // Tapi jika ada variabel name dalam function hy() makan bukan closure lagi
  //     console.log(name);
  //   }
  //   return hys;

  //   atau

  return function (name) {
    console.log(name);
  };
}

let ins = inits();
ins("Ate");

/**
 *  =======================================================
 *  Alasan menggunakan closure untuk membuat function factory
 *  dan seolah-olah membuat private method
 */

function salam(waktu) {
  return function (name) {
    console.log(`Hallo ${name}, selamat ${waktu}`);
  };
}

// Factory function dari function yang lain.

let pagi = salam("Pagi");
let siang = salam("siang");
let malam = salam("Malam");
pagi("Ranus");
siang("Ranus");
malam("Ranus");

let add = function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
};

let a = add();
console.log(a());
console.log(a());
console.log(a());

let adds = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

console.log(adds());
console.log(adds());
console.log(adds());
console.log(adds());

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}

MyObject.prototype.getName = function () {
  return this.name;
};
MyObject.prototype.getMessage = function () {
  return this.message;
};
let sa = new MyObject("ranu", "ddsfsfsdf");
console.log(sa.getMessage());
