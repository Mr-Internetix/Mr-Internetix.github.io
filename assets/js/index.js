// hamburger code 
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click',()=>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen=true;
    }
    else{
        menuBtn.classList.remove('open');
        menuOpen=false; 
    }
});


// skeleton loader script //
let img = document.querySelector('.img');
img.innerHTML ="<img src ='./assets/images/logo.png'/>"
img.style.animation="none";


