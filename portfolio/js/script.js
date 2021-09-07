const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close"),
  navLink = document.querySelectorAll(".nav_link"),
  container = document.querySelector(".nav_list");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show_menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show_menu");
  });
}
// if (navLink) {
//   navLink.forEach((n) => n.addEventListener("click", unLinkAction));
// }

// function unLinkAction() {
//   navMenu.classList.remove("show_menu");
// }

if (navLink) {
  navLink.forEach((e) => {
    e.addEventListener("click", () => {
      navMenu.classList.remove("show_menu");
    });
  });
}

// container.addEventListener("click", (e) => {
//   if (e.target.className == "nav_link") {
//     navMenu.classList.remove("show_menu");
//     e.preventDefault();
//   }
// });

/**==========ACORDION SKILLS============ */

const skillsContent = document.getElementsByClassName("skills_content"),
  skillsHeader = document.querySelectorAll(".skills_header");
function toggleSkills() {
  let itemClass = this.parentNode.className;
  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills_content skills_close";
  }
  if (itemClass === "skills_content skills_close") {
    this.parentNode.className = "skills_content skills_open";
  }
}

skillsHeader.forEach((e) => {
  e.addEventListener("click", toggleSkills);
});

/**=============QUALIFICATION TABS==================== */

const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification_active");
    });
    target.classList.add("qualification_active");

    tab.forEach((tab) => {
      tab.classList.remove("qualification_active");
    });
    tab.classList.add("qualification_active");
  });
});
