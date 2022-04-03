/*const menuBtn = document.querySelector('.menu-btn')
const navlinks = document.querySelector('.nav-links')

menuBtn.addEventListener('click', ()=>{
    navlinks.classList.toggle('.mobile-menu')
}*/

document.querySelector('.menu-btn').addEventListener('click', hide)
const navlinks = document.querySelector('.nav-links')

function hide(){
    navlinks.classList.toggle('mobile-menu')
}
