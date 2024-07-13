console.error("%cWelcome", "color:red; font-size:30px");
let active = document.querySelectorAll(".description-reviews .text-info p");
let activeFrist = document.querySelector(
  ".description-reviews .text-info p:first-of-type"
);
let activeLast = document.querySelector(
  ".description-reviews .text-info p:last-of-type"
);
let title = document.querySelectorAll(".description-reviews .title h2");

title.forEach(function (el) {
  el.onclick = function () {
    active.forEach((e) => e.classList.add("d-none"));
    if (el.classList.contains("description")) {
      activeFrist.classList.remove("d-none");
      activeFrist.classList.add("active-info");
    } else {
      activeLast.classList.remove("d-none");
      activeLast.classList.add("active-info");
    }
  };
});
