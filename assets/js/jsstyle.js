let previousPos = window.scrollY

window.onscroll = function(){
    let currentPos = window.scrollY
    if (currentPos>previousPos) {
        document.getElementsByClassName("navbar")[0].style.animation = "hide-navbar 0.5s forwards"

    } else if (currentPos<100) {
        document.getElementsByClassName("navbar")[0].style.animation = "show-navbar 0.5s forwards"
    }
    previousPos = window.scrollY
}