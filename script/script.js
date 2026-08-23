const menuBtn = document.getElementById("menu-btn");
const exitBtn = document.getElementById("exitBtn"); 
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove("hidingMenu"); 
});

exitBtn.addEventListener('click', () => {
    mobileMenu.classList.add("hidingMenu"); 
});
