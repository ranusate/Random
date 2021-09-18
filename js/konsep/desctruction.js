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

function jsa(arr) {
  return arr.reduce((p, v) => p + v);
}

// function jumlah(as) {
//   let j = 0;
//   as.forEach((e) => {
//     j += e;
//   });
//   return j;
// }
let a = [1, 2, 3, 4, 5];
let j = 0;

a.forEach((e) => {
  return (j += e);
});

