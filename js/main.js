let bindAll = function () {
  let menuElements = document.querySelectorAll('.b-nav-tab');
  for (let i = 0; i < menuElements.length; i++) {
    menuElements[i].addEventListener('click', change, false);
  }
};

let clear = function () {
  let menuElements = document.querySelectorAll('.b-nav-tab');
  for (let i = 0; i < menuElements.length; i++) {
    menuElements[i].classList.remove('active');
    let id = menuElements[i].getAttribute('id');
    document.querySelector(`[data-tab = ${id}]`).classList.remove('active');
  }
};

let change = function (e) {
  clear();
  e.target.classList.add('active');
  let id = e.currentTarget.getAttribute('id');
  document.querySelector(`[data-tab = ${id}]`).classList.add('active');
};

bindAll();
let paginations = document.querySelector('.pagination');
let paginationPages = document.querySelectorAll('.pagination-page');
let slider = document.querySelector('.intro-slider');
paginations.addEventListener('click', (e) => {
  if (e.target.classList[0] === 'pagination-page') {
    for (let i = 0; i < 3; i++) {
      paginationPages[i].classList.remove('active');
    }
    e.target.classList.add('active');
    slider.setAttribute(
      'style',
      `transform:translate3d(-${e.target.id}00vw, 0px, 0px)`
    );
  }
});

let lickBlock = document.querySelector('.menu');
lickBlock.addEventListener('click', (e) => {
  if (e.target.tagName === 'path') {
    e.target.parentNode.parentNode.classList.toggle('active');

    if (e.target.parentNode.parentNode.classList.contains('active')) {
      e.target.parentNode.parentNode.children[2].textContent++;
    } else {
      e.target.parentNode.parentNode.children[2].textContent--;
    }
  }
});
