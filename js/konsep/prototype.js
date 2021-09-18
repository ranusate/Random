/** PROTOTYPE */

// Contruct function
function Mahasiswa(name, energi) {
  this.name = name;
  this.energi = energi;
}

Mahasiswa.prototype.makan = (porsi) => {
  this.energi += porsi;
  return `Selamat makan ${this.name}, Energi kamu bertambah, jadi ${this.energi}`;
};

Mahasiswa.prototype.main = function (jam) {
  this.energi -= jam;
  return `Energi kamu berkurang ${jam}, total energi kamu jadi ${this.energi}`;
};

Mahasiswa.prototype.tidur = function (jam) {
  this.energi += jam * 2;
  return `Selamat tidur ${this.name}, kamu tidur ${jam} jam, Energi kamu jadi ${this.energi}`;
};

let joko = new Mahasiswa("Joko", 10);
console.log(joko);
console.log(joko.makan(20));
console.log(joko.main(20));
console.log(joko.tidur(12));

// Versi Clas

class Student {
  constructor(name, energi) {
    this.name = name;
    this.energi = energi;
  }

  hy(jam) {
    return `Hallo ${this.name}, Energi kamu = ${this.energi}, jam ${jam}`;
  }

  sleep() {
    return `I'am sleep ${this.name}`;
  }
}

let s = new Student("Ranus", 10);
console.log(s.hy(10));
console.log(s.sleep());
