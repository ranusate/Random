// const ubahWarna = document.querySelector("#ubahWarna");

// ubahWarna.addEventListener("click", function () {
//   document.body.classList.toggle("warna-bg");
// });

// const tBaru = document.createElement("button");
// const textTBaru = document.createTextNode("Acak Warna");

// tBaru.appendChild(textTBaru);
// tBaru.setAttribute("type", "button");
// tBaru.setAttribute("id", "tBaru");

// ubahWarna.after(tBaru);

// tBaru.addEventListener("click", function () {
//   const r = Math.round(Math.random() * 255 + 1);
//   const g = Math.round(Math.random() * 255 + 1);
//   const b = Math.round(Math.random() * 255 + 1);
//   document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
// });

// const red = document.querySelector("input[name=red]");
// const green = document.querySelector("input[name=green]");
// const blue = document.querySelector("input[name=blue]");

// red.addEventListener("input", function () {
//   const r = red.value;
//   const g = green.value;
//   const b = blue.value;
//   document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
// });
// green.addEventListener("input", function () {
//     const r = red.value;
//     const g = green.value;
//     const b = blue.value;
//     document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
// });
// blue.addEventListener("input", function () {
//     const r = red.value;
//     const g = green.value;
//     const b = blue.value;
//     document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
// });

// const c = document.querySelector(".card");

// const close = document.querySelector(".close");

// close.addEventListener("click", function () {
//   c.remove(c)
//   c.style.display = 'none'
// });

// Kurang Efektif
// const close = document.querySelectorAll(".close");
// const card = document.querySelectorAll(".card");

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) {
//     // card[i].style.display = "none";
//     // close[i].parentElement.style.display = "none";
//     e.target.parentElement.style.display = 'none'
//   });
// }

// close.forEach((element) => {
//   element.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//   });
// });
// console.log('card :>> ', card);

const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
  }
});
