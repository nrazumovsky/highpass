const searchBtn = document.querySelector('.header__btn');
const searchForm = document.querySelector('.form-search');
const searchClose = document.querySelector('.form-seacrh__btn');

searchBtn.addEventListener('click', function () {
  searchForm.classList.toggle('form-search--active');
});

searchClose.addEventListener('click', function () {
  searchForm.classList.toggle('form-search--active');
});
