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

// skeleton loader script //
setTimeout(() => {
  getData();
}, 2000);

function getData() {
  let img = document.querySelector(".img");
  img.innerHTML = "<img src ='./assets/images/logo.png'/>";
  img.classList.remove("loading");

  let name = document.querySelector(".name");
  name.innerHTML = "Ajit Yadav";
  name.classList.remove("loading");

  let about = document.querySelector(".about");
  about.innerHTML = "COMPUTER SCIENCE STUDENT";
  about.classList.remove("loading");

  let line1 = document.querySelector(".line-1");
  line1.innerHTML = "Tech Nerd";
  line1.classList.remove("loading");

  let line2 = document.querySelector(".line-2");
  line2.innerHTML = " looking forward to work with innovative";
  line2.classList.remove("loading");

  let line3 = document.querySelector(".line-3");
  line3.innerHTML =" and hardworking people.";
  line3.classList.remove("loading");

  let btn1 = document.querySelector(".btn-1");
  btn1.innerHTML = "<a class='card-button' href='https://github.com/Mr-Internetix'>checkout github </a>";
  btn1.classList.remove("loading");
  // btn1.classList.add("card-button");

  let btn2 = document.querySelector(".btn-2");
  btn2.innerHTML = "<input class='card-button' type='button' value='checkout projects'>";
  btn2.classList.remove("loading");


  
  



}


