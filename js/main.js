// menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// menu show

if(navToggle){
    navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu');
    })
}

// menu hidden

if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu');
  })
}

// remove menu mobile
// when we click on each nav__link, we remove  the show-menu close. 
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
  // const navMenu = document.getElementById('nav-menu'); no es necesario volverla a declarar.
  navMenu.classList.remove('show-menu');
}

navLink.forEach(n=> n.addEventListener('click', linkAction));


// change background header
// Add a class if the bottom offset is greater than 50 of the v
const bgHeader = () =>{
    const header = document.getElementById('header');
    this.scrollY >=50 ? header.classList.add('bg-header')
                      : header.classList.remove('bg-header');
}

window.addEventListener('scroll', bgHeader);
bgHeader();


// swiper services  
const swiperServices = new Swiper('.services__swiper', {
  loop: true,
  grabCursor:true,
  spaceBetween:24,
  slidesPerview: 'auto',
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
