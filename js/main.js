//?[start] the functions in navigation and menu bar
    // navigation bar
let nav = document.querySelector("nav"),
    // menu bar
    menu = document.querySelector("nav .menu"),
    // hamburger menu
    hamburger = document.querySelector(".hamburger"),
    // btn for close menu
    Close = document.querySelector(".close");
// when click on hamburger
hamburger.addEventListener("click", ()=> {
    // show menu
    menu.style.visibility = "visible";
    // make opacity 1
    menu.style.opacity = "1";
    // download the nav from top 0 => 15%
    menu.style.top = "15%";
    // hide hamburger menu
    hamburger.style.display = "none"
    // show close btn
    Close.style.display = "block"
    // Solve the problem of the menu when it appears
    // if menu is appears
    if (menu.style.visibility) {
        // remove the scroll event on window
        window.removeEventListener("scroll", scroll)
        // make navigation fixed
        nav.style.position = "fixed";
    }
})
// When click on Close btn,
// reverse what the hamburger menu does
Close.addEventListener("click", ()=> {
    menu.style.visibility = "hidden";
    menu.style.opacity = "0";
    menu.style.top = "0";
    hamburger.style.display = "block"
    Close.style.display = "none"
    window.addEventListener("scroll", scroll)
})
// when scrolling..
window.addEventListener("scroll", scroll);

function scroll() {
    // get window scroll number
    let y = window.scrollY;
    // if window scroll number bigger than 200
    if (y > 200) {
        // make navigation fixed
        nav.style.position = "fixed"
        // shadow on navigation
        nav.style.boxShadow = "0 4px 10px rgba(170, 170, 170, 0.5)"
    } else {
        // else that make navigation absolute and remove the shadow
        nav.style.position = "absolute"
        nav.style.boxShadow = "none"
    }
}
//?[end] the functions in navigation and menu bar

