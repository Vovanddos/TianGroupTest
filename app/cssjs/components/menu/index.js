const overflow = document.querySelector('body')
const buttonMenu = document.querySelector('.btn--menu')
const menu = document.querySelector('.menu')

buttonMenu.addEventListener('click',()=>{
    menu.classList.toggle("show")
    overflow.classList.toggle("overflow")
})