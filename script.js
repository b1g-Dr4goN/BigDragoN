const dragonsShows = document.getElementsByClassName('js-aSol')
const dragonsClose = document.getElementsByClassName('js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')
const modal = document.querySelector('.modal')
const menuBarShow = document.getElementsByClassName('js-menu-bar')
const menuBarClose = document.getElementsByClassName('js-menu-bar-close')
const menuBarContainer = document.querySelector('.js-menubar-modal-container')
const menuBar = document.querySelector('.menu-bar-modal')


function showDragons(){
    modal.classList.add('open')
    menuBar.classList.remove('open')
}
function closeDragons(){
    modal.classList.remove('open')
}
function showMenu(){
    menuBar.classList.add('open')
}
function closeMenu(){
    menuBar.classList.remove('open')
}
dragonsClose[0].addEventListener('click', closeDragons)
dragonsShows[0].addEventListener('click', showDragons)
dragonsShows[1].addEventListener('click', showDragons)
menuBarShow[0].addEventListener('click', showMenu)
menuBarClose[0].addEventListener('click', closeMenu)
modal.addEventListener('click',closeDragons)
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})
menuBar.addEventListener('click', closeMenu)
menuBarContainer.addEventListener('click', function (event){
    event.stopPropagation()
})



//SLIDE SHOW OF THE MODAL
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}