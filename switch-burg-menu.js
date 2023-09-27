
const burgMenuIcon = document.querySelector(".burger-menu-icon");
const burgNavMenu = document.querySelector(".burger-nav-menu");

burgMenuIcon.addEventListener("click",openMobileScreen)

function openMobileScreen(){
    burgMenuIcon.classList.toggle("active");
    burgNavMenu.classList.toggle("active");
}


const aLink = document.querySelectorAll(".burger-a-link");

aLink.forEach((n) => n.addEventListener("click", closeMobileScreen));

function closeMobileScreen(){
    burgMenuIcon.classList.remove("active");
    burgNavMenu.classList.remove("active");
}

