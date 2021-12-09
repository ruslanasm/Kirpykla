const menu = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .navbar');
const slides = document.querySelectorAll('.home .slide');




menu.onclick = () =>{
 menu.classList.toggle('fa-times')
 navbar.classList.toggle('active')
};



window.onscroll = () =>{
menu.classList.remove('fa-times')
navbar.classList.remove('active')
};




let index = 0;
function next(){
 slides[index].classList.remove('active');
 index = (index + 1) % slides.length;
 slides[index].classList.add('active');
};

function prev(){
slides[index].classList.remove('active');
index = (index - 1 + slides.length) % slides.length;
slides[index].classList.add('active');
};




var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 4000,
  disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});


AOS.init();


 
























