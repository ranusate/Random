const mhs = {
  nama: "Ranus",
  umur: 21,
  mk: {
    ppb: {
      tugas: 10,
    },
    uts: 20,
    uas: 50,
  },
};

function cetakMhs({
  nama,
  umur,
  mk: {
    uts,
    ppb: { tugas },
  },
}) {
  return `Nama Saya ${nama}, umur saya ${umur}, nilai uas untuk mk ${tugas}`;
}

// console.log(cetakMhs(mhs));

function jsa(as) {
  return as.reduce((p, c) => p + c);
}

let a = [1, 2, 3, 4, 5];
console.log(jsa(a));
