const dragonsShows = document.getElementsByClassName('js-aSol')
const dragonsClose = document.getElementsByClassName('js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')
const modal = document.querySelector('.modal')
function showDragons(){
    modal.classList.add('open')
}
function closeDragons(){
    modal.classList.remove('open')
}
dragonsClose[0].addEventListener('click',closeDragons)
dragonsShows[0].addEventListener('click',showDragons)
modal.addEventListener('click',closeDragons)
modalContainer.addEventListener('click',function (event) {
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