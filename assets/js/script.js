// SCROLL ANIMATION

let previousPos = window.scrollY
let navbar = document.getElementsByClassName("navbar")[0]
// USED IN ANOTHER PIECES OF CODE TO STOP SCROLL ANIMATION
let scroll_lock = false

window.onscroll = function () {
    if (scroll_lock == false) {
        let currentPos = window.scrollY
        if (currentPos > previousPos) {
            navbar.style.animation = "hide-navbar 0.5s forwards"

        } else if (currentPos < 100) {
            navbar.style.animation = "show-navbar 0.5s forwards"
        }
        previousPos = window.scrollY
    }
}

// LANG MENU OPEN

let langs_img = document.getElementById("langs_img")
let languages = document.getElementsByClassName("languages")[0]
let lang_menu = "closed"

langs_img.addEventListener("click", function () {
    let langs_content = document.getElementsByClassName("langs_content")[0]
    langs_content.style.display = "inline-block"
    langs_content.style.animation = "show-menu 0.5s forwards"
    setTimeout(() => {
        lang_menu = "open"
    }, 500)

})

// OPEN LATERAL MENU (mobile only)

let lateral_menu_button = document.getElementById("lateral_menu_button")
let lateral_menu = document.getElementsByClassName("lateral_menu")[0]
let lateral_menu_open = false

lateral_menu_button.addEventListener("click", () => {
    lateral_menu.style.display = "inline-block"
    lateral_menu.style.animation = "show-menu 0.5s forwards"
    // wait a bit so when closing the menu, it doesnt register that it's open when it's actually closed and in process of opening
    setTimeout(() => {
        lateral_menu_open = true
    }, 10)

    scroll_lock = true

})

// CLOSE MENU WHEN CLICKED OUTSIDE
// REMEMBER; SET TIMOUT TIMERS HAVE TO BE THE >= THE ANIMATION TIMER

window.addEventListener("click", (event) => {
    // Si el click es en el pare de la img i el menú està obert...
    if (event.target.parentElement.matches("#langs_img") && lang_menu == "open") {
        langs_content = document.getElementsByClassName("langs_content")[0]
        langs_content.style.animation = "hide-menu 0.5s forwards"
        setTimeout(() => {
            langs_content.style.display = "none"
            lang_menu = "closed"
        }, 500)
    }
    // Si el element pare del click no es langs_content, ni tampoc es langs_img...
    if (!event.target.parentElement.matches(".langs_content") && !event.target.parentElement.matches("#langs_img")) {
        langs_content = document.getElementsByClassName("langs_content")[0]
        langs_content.style.animation = "hide-menu 0.5s forwards"
        setTimeout(() => {
            langs_content.style.display = "none"
            lang_menu = "closed"
        }, 500)
    }

    // Lateral menu closing events

    if (!event.target.matches(".lateral_menu") && lateral_menu_open == true) {
        if (event.target.parentElement.matches("#lateral_menu_button")) {
            // When you click the menu button while it's open...
            lateral_menu.style.animation = "hide-menu 0.5s forwards"
            setTimeout(() => {
                lateral_menu.style.display = "none"
                lateral_menu_open = false
                scroll_lock = false
            }, 500)
            return
        }
        // When you click outside of the lateral menu and it's opened...
        lateral_menu.style.animation = "hide-menu 0.5s forwards"
        setTimeout(() => {
            lateral_menu.style.display = "none"
            lateral_menu_open = false
            scroll_lock = false
        }, 500)
    }

})

