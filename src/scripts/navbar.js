const header = document.querySelector("header");
const overlay = document.querySelector("#overlay");
const closeBtn = document.querySelector(".closebtn");
const sidenavBtn = document.querySelector("#sidenav__button");
const arrow = document.querySelector(".dropdown__label-container img");
const label = document.querySelector(".dropdown__label");

if (window.scrollY > 0) {
  header.classList.remove("transparent");
}

document.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    header.classList.add("transparent");
    arrow.src = "/icons/arrow.svg";
    label.style.color = "white";

    // Agrega transparencia cuando el scroll está en 0
  } else {
    header.classList.remove("transparent"); // Elimina transparencia al hacer scroll
    arrow.src = "/icons/arrow-alpha.svg";
    label.style.color = "black";
  }
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("overlay").style.width = "100%";
  overlay.style.opacity = "0.8";
  document.getElementById("overlay").style.minHeight = "100%";
  overlay.style.opacity = "0.8";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("overlay").style.opacity = "0";
  setTimeout(() => {
    overlay.style.width = "0%";
  }, 500);
}

overlay.addEventListener("click", closeNav);
closeBtn.addEventListener("click", closeNav);
sidenavBtn.addEventListener("click", openNav);
