// const img = document.querySelectorAll(".thumb");
const hero = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");
const container = document.querySelector(".container");

// const a = sa.getAttribute("src");

// sa.addEventListener("click", function () {
//   hero.setAttribute("src", a);
// });

// thumb.forEach((element) => {
//   const srcValue = element.getAttribute("src");
//   element.addEventListener("click", function (e) {
//     hero.setAttribute("src", srcValue);
//     e.preventDefault();
//     e.stopPropagation();
//   });
// });

container.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    hero.src = e.target.src;
    hero.classList.add("fade");

    setTimeout(() => {
      hero.classList.remove("fade");
    }, 500);

    thumbs.forEach((element) => {
      if (element.classList.contains("active")) {
        element.classList.remove("active");
        // } else {
        //     e.target.classList.add("active");
      }
      //   element.className = "thumb";
      e.target.classList.add("active");
    });
    e.preventDefault();
    e.stopPropagation();
  }
});
