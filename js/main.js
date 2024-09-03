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
  grabCursor: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// Show Scroll Up

const scrollUp = () =>{
  const scrollUp = document.getElementById('scrollup')

  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)
scrollUp();


// Scroll Sections Active Link

const sections = document.querySelectorAll('section[id]');

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
          sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Scroll Reveal Animation 

const sr = ScrollReveal({
  origin: 'top',
  distance: '100px',
  duration: 2500,
  delay: 400,
//  reset: true, // Animation repeat
})

sr.reveal(`.home__content , .services__data, .services__swiper , .footer__container`);
sr.reveal(`.home__images`, {origin: 'bottom', delay: 1000});
sr.reveal(`.about__images , .contact__img`, {origin: 'left'});
sr.reveal(`.about__data , .contact__data`, {origin: 'right'});
sr.reveal(`.projects__card`, {interval: 100});



