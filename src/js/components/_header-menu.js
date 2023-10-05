const menu = document.querySelector('.header-menu');
const menuOpen = document.querySelector('.burger');
const menuClose = document.querySelector('.header-menu__btn');

menuOpen.addEventListener('click', function () {
  menu.classList.toggle('header-menu--active');
  document.body.classList.toggle('no-scroll');
});

menuClose.addEventListener('click', function () {
  menu.classList.toggle('header-menu--active');
  document.body.classList.toggle('no-scroll');
});
