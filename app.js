const navBtn = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-line");

console.log(nav.classList)
navBtn.addEventListener("click", toggleNav)

function toggleNav() {
    if(!navBtn.classList.contains("open")){
        nav.classList.add("active")
        navBtn.classList.add("open")
    } else {
        nav.classList.remove("active");
        navBtn.classList.remove("open")
    }
}