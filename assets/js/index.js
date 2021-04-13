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
}, 3000);

function getData() {
  let img = document.querySelector(".img");
  img.innerHTML = "<img id='logo'src ='./assets/images/logo.png'/>";
  img.classList.remove("loading");
  img.style.background = "none";
  img.style.overflow = "visible";

  let logo = document.getElementById("logo");
  // console.log(logo);
  logo.style.borderRadius = "50%";

  let name = document.querySelector(".name");
  name.innerHTML = "  Ajit Yadav";
  name.classList.remove("loading");
  name.style.background = "none";

  let about = document.querySelector(".about");
  about.innerHTML = "COMPUTER SCIENCE STUDENT";
  about.classList.remove("loading");
  about.style.background = "none";

  let line1 = document.querySelector(".line-1");
  line1.innerHTML = " Tech Nerd";
  line1.classList.remove("loading");
  line1.style.background = "none";

  let line2 = document.querySelector(".line-2");
  line2.innerHTML = " looking forward to work with innovative";
  line2.classList.remove("loading");
  line2.style.background = "none";

  let line3 = document.querySelector(".line-3");
  line3.innerHTML = " and hardworking people.";
  line3.classList.remove("loading");
  line3.style.background = "none";

  let btn1 = document.querySelector(".btn-1");
  btn1.innerHTML =
    "<a class='card-button' href='https://github.com/Mr-Internetix'>Checkout Projects</a>";
  btn1.classList.remove("loading");
  btn1.style.background = "none";


  let card = document.querySelector(".card");
  card.style.border="none";
  // btn1.classList.add("card-button");

  // let btn2 = document.querySelector(".btn-2");
  // btn2.innerHTML = "<a class='card-button' href='https://github.com/Mr-Internetix'>checkout github </a>";
  // btn2.classList.remove("loading");
  // btn2.style.background = "none";

  // let projects = document.querySelector(".card-button");
  // projects.addEventListener("mouseover",function(event){
  //   // event.target.classList.add("loading")
  // });

}
