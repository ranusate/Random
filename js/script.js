// Dom Selection

//get element by id => return element
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "white";
judul.style.textAlign = "center";
judul.innerHTML = "Judul Halaman";

// get By Tag => return HTML colection
const p = document.getElementsByTagName("p");

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "orange";
  p[i].style.textAlign = "center";
  p[i].style.fontWeight = "bold";
  p[i].style.fontSize = "18px";
}

// get elements by class name => return HTML colection

const p1 = document.getElementsByClassName("p1");

// query selector => return element #Hanya satu kebalikan
const s1 = document.querySelector("#s2 p");

s1.style.backgroundColor = "blue";

const li = document.querySelector("section#s2 ul li:nth-child(2)");

li.style.backgroundColor = "green";

// query selector all => return node list

const all = document.querySelectorAll("p");
for (let i = 0; i < all.length; i++) {
  all[i].innerHTML = "Ubah semua p";
}

const btn = document.querySelector("button");
function show() {
  if (btn.classList.contains("of")) {
    btn.classList.replace("of", "on");
    btn.innerHTML = "OFF"
  } else {
    btn.classList.replace("on", "of");
    btn.innerHTML = "ON Kan"
  }
}
