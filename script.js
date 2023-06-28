 hamburger=document.querySelector('.hamburger');
 second=document.querySelector('.second');
 first=document.querySelector('.first');
 nav=document.querySelector('.nav');
 background=document.querySelector('.background');
hamburger.addEventListener("click",()=>{
    first.classList.toggle("flex");
    second.classList.toggle("none");
    hamburger.classList.toggle("ham");
    nav.classList.toggle("flexstart");
    background.classList.toggle("opacity");
    // console.log('click');
})