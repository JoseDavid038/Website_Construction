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

