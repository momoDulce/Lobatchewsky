const navBars = document.querySelector(".bars")
const navMenu = document.querySelector(".nav-menu")
navBars.addEventListener("click" , () => {
    navMenu.classList.toggle("nav-menu_visible");
})