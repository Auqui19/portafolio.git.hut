document.querySelector(".menu-btn").addEventListener("click", animacionbar);

var barradespegable = document.querySelector(".nav-list")
var barramenu1 = document.querySelector(".barra-btn1");
var barramenu2 = document.querySelector(".barra-btn2");
var barramenu3 = document.querySelector(".barra-btn3");

function animacionbar(){
    barradespegable.classList.toggle("show");
    barramenu1.classList.toggle("activebarra-btn1");
    barramenu2.classList.toggle("activebarra-btn2");
    barramenu3.classList.toggle("activebarra-btn3");
    
}

//SCROLL  
var lastScrollTop = 0;
    navbar = document.getElementById('navbar');
window.addEventListener('scroll', function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        navbar.style.top="-80px";
    } else {
        navbar.style.top="0";
    }
    lastScrollTop  = scrollTop;
})

//ScrollReveal
window.sr =ScrollReveal();

    sr.reveal('.header-item h2', {
        duration: 1000,
        origin: 'left',
        distance: '50px'
    });

    sr.reveal('.header-item h1', {
        duration: 2000,
        origin: 'left',
        distance: '50px'
    });

    sr.reveal('.header-item h3', {
        duration: 3000,
        origin: 'left',
        distance: '50px'
    });

    sr.reveal('.text-mi', {
        duration: 3000,
        origin: 'left',
        distance: '100px'
    });

    sr.reveal('.picture-img', {
        duration: 3000,
        origin: 'right',
        distance: '100px'
    });


