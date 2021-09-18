/**
 * Function declaralition
 * @param {*} name
 * @returns
 */

function hy(name) {
  return `Hy ${name}`;
}

/**
 * Function Experssion
 * @param {*} msg
 * @returns
 */
let showMsg = function (msg) {
  return `${msg}`;
};

/**
 * Arrow function
 * @param {*} age
 * @returns
 */
const showAge = (age) => {
  return `My age ${age}`;
};

/**
 * Jika cuman satu parameter
 * Tidak perlu return dan {}
 * @param {*} age
 * @returns
 */
const showAges = (age) => `My age ${age}`;

let mhs = ["Radianus", "Raba", "Ate"];

/**
 * Function expression
 */
let jmlhHuruf = mhs.map(function (name) {
  return name.length;
});

/**
 * Arrow function
 *
 */
let hrufJmlh = mhs.map((name) => name.length);

/**
 * Arrow function
 * return object
 * s
 */
let hrufJmlhObject = mhs.map((name) => ({ name: name, huruf: name.length }));

// console.log(hy("Ranus"));
// console.log(showMsg("How Are you?"));
// console.log(showAge(22));
// console.log(jmlhHuruf);
// console.log(hrufJmlh);
// console.table(hrufJmlhObject);

/** ========= PERILAKU ARROW FUNCTION / CONTEXT THIS ============== */

/**
 * constructor fn
 * Contructor function tidak bisa diubah ke arrow function
 * Arrow function tidak memiliki konsep THIS.
 */

function Mhs(name, age) {
  this.name = "Ranus";
  this.age = "22";
}

Mhs.prototype.jur = "IT";

let mhss = new Mhs();
console.log(mhss.jur);
