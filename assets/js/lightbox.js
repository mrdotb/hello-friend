import './luminous.js';

const lightboxList = document.querySelectorAll(".lightbox")

lightboxList.forEach($lightbox => {
  new Luminous($lightbox)
})
