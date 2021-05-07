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

var fixedElem = document.getElementById('navbar');

var scrollbar = Scrollbar.init(
  document.getElementById('my-scrollbar'),
);
scrollbar.updatePluginOptions('overscroll', {
  effect: 'bounce',
});

// scrollbar.addListener(function(status) {
//    var offset = status.offset;
  
//   fixed.style.top = offset.y + 'px';
//   fixed.style.left = offset.x + 'px';
// });

// var Scrollbar = window.Scrollbar;
// Scrollbar.init(document.querySelector('#my-scrollbar'));
// Scrollbar.initAll();


// skeleton loader script //
setTimeout(() => {
  getData();
}, 3000);

function getData() {
  

  // let btn1 = document.querySelector(".btn-1");
  // btn1.innerHTML =
    
  // btn1.classList.remove("loading");
  // btn1.style.background = "none";


}
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


