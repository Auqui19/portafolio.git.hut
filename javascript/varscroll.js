document.querySelector(".menu-btn").addEventListener("click", animacionbar);

var barradespegable = document.querySelector(".nav-list");
var barramenu1 = document.querySelector(".barra-btn1");
var barramenu2 = document.querySelector(".barra-btn2");
var barramenu3 = document.querySelector(".barra-btn3");

function animacionbar() {
  barradespegable.classList.toggle("show");
  barramenu1.classList.toggle("activebarra-btn1");
  barramenu2.classList.toggle("activebarra-btn2");
  barramenu3.classList.toggle("activebarra-btn3");
}

//SCROLL
var lastScrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function scrolloculto() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-500px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

//ScrollReveal
window.sr = ScrollReveal();

sr.reveal(".header-item h2", {
  duration: 1000,
  origin: "left",
  distance: "50px",
});

sr.reveal(".header-item h1", {
  duration: 2000,
  origin: "left",
  distance: "50px",
});

sr.reveal(".header-item h3", {
  duration: 3000,
  origin: "left",
  distance: "50px",
});

sr.reveal(".text-mi", {
  duration: 3000,
  origin: "left",
  distance: "100px",
});

sr.reveal(".picture-img", {
  duration: 3000,
  origin: "bottom",
  distance: "40px",
});

const typed = new Typed(".typed", {
  strings: ["soy programador web", "creo proyectos webs"],
  typeSpeed: 75,
  starDelay: 300,
  backSpeed: 75,
  smartBackspace: true,
  shuffle: false,
  backDelay: 1500,
  loop: true,
  loopCount: false,
  showCursor: true,
  cursorChar: "|",
  contentType: "html",
});

let mostrar_cajas_btn = document.getElementById("mostrar-cajas-btn");
let mostrar_cajas = document.getElementById("mostrar-cajas");

mostrar_cajas_btn.addEventListener("click", toggleBox);
function toggleBox() {
  mostrar_cajas.classList.toggle("mostrar");

  if (mostrar_cajas.classList.contains("mostrar")) {
    mostrar_cajas_btn.innerHTML = "Ver Menos";
  } else {
    mostrar_cajas_btn.innerHTML = "Ver Más";
  }
}
