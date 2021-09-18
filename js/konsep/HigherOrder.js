/**
 *  ======= Higher order function ========
 * Function yang beroperasi pada function lain
 *
 * Contoh => FILTER, MAP, REDUCE
 *
 */

let angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// find angka >= 3

const newAngka = [];
for (let i = 0; i < angka.length; i++) {
  const element = angka[i];
  if (element >= 3) {
    newAngka.push(element);
  }
}

// gunakan filter

const newAngkas = angka.filter(function (e) {
  return e >= 3;
});

// Menggunakan map

const newAngkass = angka.map(function (a) {
  return a * 2;
});

// reduce => melakukan sesuatu pada array

const newAngkasss = angka.reduce(function (hasilDariPosess, currentValue) {
  return hasilDariPosess + currentValue;
});

// Method chaining

// dari arr angka mencari angka > 5 hasilnya * 3 dan jumlahkan

const hasil = angka
  .filter(function (a) {
    return a > 5;
  })
  .map(function (e) {
    return e * 3;
  })
  .reduce(function (ac, cv) {
    return ac + cv;
  });

// Menggunakan arrow function


const hasilArrow = angka
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .reduce((acc, cv) => acc + cv);

console.log(hasilArrow);
