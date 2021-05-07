// hamburger code
const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

// smooth scroll
var Scrollbar = window.Scrollbar;
Scrollbar.use(OverscrollPlugin);

// Initialise
var ScrollbarOptions = {
	damping: 0.04,
	thumbMinSize: 5,
	renderByPixel: true,
	alwaysShowTracks: true,
	continuousScrolling: true,
	plugins: {
		overscroll: {
			effect: 'bounce',
			damping: 0.15,
			maxOverscroll: 80
		}
	},
};
Scrollbar.init(document.querySelector('#my-scrollbar'),ScrollbarOptions);

//touch slider code 

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: -8,
  centeredSlides:true,
  grabCursor:true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


